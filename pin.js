// generate four digit pin
function generatePin() {
    const randomPin = Math.random() * 10000;
    const pin = (randomPin + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        console.log('shorter pin', pin);
        return generatePin();
    }
}