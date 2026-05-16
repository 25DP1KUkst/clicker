let coins = 0;
let clickPower = 1;

let clickUpgradeCost = 50;

let autoClickCost = 100;
let autoClickActive = false;

let autoClickRate = 1000;
let autoClickLevel = 0;
let autoInterval = null;

const score = document.getElementById("score");
const power = document.getElementById("power");
const cookie = document.getElementById("cookie");
const message = document.getElementById("message");

const upgradeClick = document.getElementById("upgradeClick");
const buyAuto = document.getElementById("buyAuto");
const upgradeAuto = document.getElementById("upgradeAuto");

const costClick = document.getElementById("costClick");
const costAuto = document.getElementById("costAuto");
const autoInfo = document.getElementById("autoInfo");

cookie.addEventListener("click", () => {

    let earned = clickPower;

    if (Math.random() < 0.10) {
        earned *= 5;
        message.textContent = "LUCKY x5!";
    } else {
        message.textContent = "";
    }

    coins += earned;
    updateUI();
});

upgradeClick.addEventListener("click", () => {

    if (coins >= clickUpgradeCost) {

        coins -= clickUpgradeCost;
        clickPower += 1;

        clickUpgradeCost = Math.floor(clickUpgradeCost * 1.8);

        updateUI();
    }
});

buyAuto.addEventListener("click", () => {

    if (autoClickActive) return;

    if (coins >= autoClickCost) {

        coins -= autoClickCost;
        autoClickActive = true;

        startAutoClick();

        updateUI();
    }
});

upgradeAuto.addEventListener("click", () => {

    let cost = 200 + autoClickLevel * 150;

    if (coins >= cost && autoClickActive) {

        coins -= cost;

        autoClickLevel++;

        autoClickRate *= 0.7;

        startAutoClick();

        updateUI();
    }
});

function startAutoClick() {

    if (autoInterval) clearInterval(autoInterval);

    autoInterval = setInterval(() => {

        coins += 1;
        updateUI();

    }, autoClickRate);
}

function updateUI() {

    score.textContent = coins + " Coins";
    power.textContent = "tap: x" + clickPower;

    costClick.textContent = "Click cena: " + clickUpgradeCost;
    costAuto.textContent = "Auto cena: " + autoClickCost;

    autoInfo.textContent =
        "Auto level: " + autoClickLevel +
        " | ik " + (autoClickRate / 1000).toFixed(1) + "s";
}