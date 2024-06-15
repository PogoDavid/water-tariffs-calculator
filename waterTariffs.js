document.getElementById("submit-button").addEventListener('click', function() {
    let numberOfConsumedWater = Number(document.getElementById("user-input").value);
    const displayTheMoneyToPay = document.getElementById("result-zone");
    let moneyToPay = 0;

    if (numberOfConsumedWater <= 6000) {
        moneyToPay = (numberOfConsumedWater / 1000) * 15.73;
    } else if (numberOfConsumedWater > 6000 && numberOfConsumedWater <= 10500) {
        moneyToPay = ((numberOfConsumedWater - 6000) / 1000 * 22.38) + 6 * 15.73;
    } else if (numberOfConsumedWater > 10500 && numberOfConsumedWater <= 35000) {
        moneyToPay = ((numberOfConsumedWater - 10500) / 1000 * 31.77) + 195.09;
    } else if (numberOfConsumedWater > 35000) {
        moneyToPay = ((numberOfConsumedWater - 35000) / 1000 * 69.76) + 973,555;
    } else {
        moneyToPay = 0;
    }
    
    if(moneyToPay != 0) {
        displayTheMoneyToPay.textContent = `You are required to pay ${moneyToPay}`;
    } else {
        displayTheMoneyToPay.textContent = `Please enter a valid number..`
    }
})