<?php
// Файл: proxy.php - Безопасный прокси для запросов к API

// 1. Устанавливаем заголовок, что ответ будет в формате JSON
header('Content-Type: application/json');

// 2. ВАШ СЕКРЕТНЫЙ КЛЮЧ
$apiKey = "4665f3284a6247ad4cadef870e4bcbe07ab4eee8fb5c27861a4a2f457e7ee269";  

// Адрес внешнего API
$apiUrl = "https://api.oilpriceapi.com/v1/prices/latest";

// 3. Инициализация cURL для серверного запроса
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Возвращаем ответ как строку
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    "Authorization: Token " . $apiKey,
    "Content-Type: application/json"
));
// На сервере такой запрос будет выполнен успешно (без 403 ошибки).

// 4. Выполнение запроса
$response = curl_exec($ch);

// 5. Проверка на ошибки cURL (например, если нет интернета или ошибка DNS)
if(curl_errno($ch)){
    // Отправляем ошибку в формате JSON обратно в JavaScript
    echo json_encode(['error' => 'Proxy Server Error: ' . curl_error($ch)]);
} else {
    // 6. Отдаем чистый ответ от API обратно в JavaScript
    echo $response; 
}

curl_close($ch);
?>