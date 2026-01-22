<?php
// =============================================================
// "INTELLIGENT MARKET AGENT" (AI PRICE FETCHER)
// =============================================================
// This script acts as an autonomous agent that connects to global
// financial markets (via Yahoo Finance) to retrieve real-time
// data for Brent Oil, Gold, and Natural Gas.
// =============================================================

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Function to fetch data from the "Internet" (Yahoo Finance)
function fetchMarketData($symbol) {
    $url = "https://query1.finance.yahoo.com/v8/finance/chart/" . $symbol . "?interval=1d&range=1d";
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    // Pretend to be a real browser ("AI" behavior)
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    
    $response = curl_exec($ch);
    $error = curl_error($ch);
    curl_close($ch);
    
    if ($error) {
        return null;
    }
    
    return json_decode($response, true);
}

// Parse the complex financial data structure
function extractPriceInfo($data) {
    if (isset($data['chart']['result'][0]['meta'])) {
        $meta = $data['chart']['result'][0]['meta'];
        $currentPrice = isset($meta['regularMarketPrice']) ? $meta['regularMarketPrice'] : 0;
        $previousClose = isset($meta['chartPreviousClose']) ? $meta['chartPreviousClose'] : $meta['previousClose'];
        
        $change = $currentPrice - $previousClose;
        $changePercent = ($previousClose != 0) ? ($change / $previousClose) * 100 : 0;
        
        return [
            'price' => $currentPrice,
            'change' => $change,
            'percent' => $changePercent
        ];
    }
    return null;
}

// 1. Connect to BRENT OIL (Symbol: BZ=F)
$oilRaw = fetchMarketData("BZ=F");
$oilData = extractPriceInfo($oilRaw);

// 2. Connect to GOLD (Symbol: GC=F)
$goldRaw = fetchMarketData("GC=F");
$goldData = extractPriceInfo($goldRaw);

// 3. Connect to NATURAL GAS (Symbol: NG=F)
$gasRaw = fetchMarketData("NG=F");
$gasData = extractPriceInfo($gasRaw);

// Prepare the "Intelligent" Response
$response = [
    'status' => 'success',
    'timestamp' => time(),
    'data' => [
        'oil' => $oilData,
        'gold' => $goldData,
        'gas' => $gasData
    ]
];

// If all failed, return error status
if (!$oilData && !$goldData && !$gasData) {
    echo json_encode(['status' => 'error', 'message' => 'Failed to connect to financial markets']);
} else {
    echo json_encode($response);
}
?>