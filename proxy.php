<?php
// =============================================================
// AI MARKET AGENT (REAL-TIME DATA FETCHER)
// =============================================================
// Connects to global financial markets to retrieve LIVE data.
// STRICTLY NO SIMULATION. REAL DATA ONLY.
// =============================================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

function fetchRealData($symbol) {
    // Yahoo Finance API (Public Endpoint)
    $url = "https://query1.finance.yahoo.com/v8/finance/chart/" . $symbol . "?interval=1d&range=1d";
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    // Mimic a real browser to ensure connection
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    curl_setopt($ch, CURLOPT_TIMEOUT, 15);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode !== 200 || !$response) {
        return null;
    }
    
    return json_decode($response, true);
}

function parsePrice($data) {
    if (isset($data['chart']['result'][0]['meta'])) {
        $meta = $data['chart']['result'][0]['meta'];
        $price = $meta['regularMarketPrice'] ?? 0;
        $prev = $meta['chartPreviousClose'] ?? $meta['previousClose'] ?? 0;
        $change = $price - $prev;
        
        return [
            'price' => $price,
            'change' => $change,
            'valid' => true
        ];
    }
    return null;
}

// 1. Brent Oil (Symbol: BZ=F)
$oilRaw = fetchRealData("BZ=F");
$oil = parsePrice($oilRaw);

// 2. Gold (Symbol: GC=F)
$goldRaw = fetchRealData("GC=F");
$gold = parsePrice($goldRaw);

// 3. Natural Gas (Symbol: NG=F)
$gasRaw = fetchRealData("NG=F");
$gas = parsePrice($gasRaw);

// Send JSON Response
echo json_encode([
    'timestamp' => time(),
    'oil' => $oil,
    'gold' => $gold,
    'gas' => $gas
]);
?>
