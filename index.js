const fs = require('fs');
const path = require('path');

// Параметри
const wallets = [
    "0xd9d1ecc1971a14108502596dc4f04ff919b3d02f"
];

const chains = [
    "ethereum",
    "arbitrum",
    "zksync",
    "starknet",
    "blast",
    "linea",
    "optimism",
    "base",
    "mode",
    "zetachain",
    "polygon",
    "bnbchain"
];

const intervalSeconds = 600; // 10 хвилин

// Функція для логування відсутніх гаманців
function logWarning(message) {
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    const logMessage = `[${timestamp}] ${message}\n`;

    // Виводимо в консоль
    console.warn(logMessage);

    // Записуємо у файл
    const logPath = path.join(__dirname, 'missing_wallets.txt');
    fs.appendFileSync(logPath, logMessage, 'utf8');
}

// Імітація перевірки мереж (в майбутньому тут будуть реальні аірдропи)
async function checkNetworks() {
    const availableNetworks = [
        "ethereum",
        "arbitrum",
        "zksync",
        "starknet",
        "blast",
        "linea",
        "optimism",
        "base",
        "mode",
        "zetachain",
        "polygon",
        "bnbchain",
        "aptos",    // приклад мережі, якої у нас немає
        "solana"    // ще одна мережа без гаманця
    ];

    for (let network of availableNetworks) {
        if (!chains.includes(network)) {
            logWarning(`Немає гаманця для мережі ${network}. Рекомендовано створити!`);
        } else {
            console.log(`[INFO] Перевірка мережі ${network}: гаманець підтримується.`);
        }
    }
}

// Основний цикл роботи бота
async function runBot() {
    console.log("Airdrop Agent запущено! Готуємось фармити аірдропи...");
    while (true) {
        await checkNetworks();
        console.log(`[WAIT] Чекаємо ${intervalSeconds} секунд до наступної перевірки...\n`);
        await new Promise(resolve => setTimeout(resolve, intervalSeconds * 1000));
    }
}

// Старт
runBot();
