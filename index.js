const fs = require('fs');
const path = require('path');

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

const intervalSeconds = 600;

async function runTasks() {
    const tasksFolder = path.join(__dirname, 'airdrop_tasks');
    const tasks = fs.readdirSync(tasksFolder).filter(file => file.endsWith('.js'));

    for (const task of tasks) {
        console.log(`[TASK] Виконуємо: ${task}`);
        require(path.join(tasksFolder, task));
    }
}

async function runBot() {
    console.log('Airdrop Agent запущено!');
    while (true) {
        await runTasks();
        console.log(`[WAIT] Чекаємо ${intervalSeconds} секунд до наступної перевірки...\n`);
        await new Promise(resolve => setTimeout(resolve, intervalSeconds * 1000));
    }
}

runBot();