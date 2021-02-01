// generate four digit pin
function getPin() {
    const randomPin = Math.random() * 10000;
    const pin = (randomPin + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        console.log('shorter pin', pin);
        return getPin();
    }
}

// display generate pin
function generatePin() {
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();
}
