// generate four digit pin
function getPin() {
    const randomPin = Math.random() * 10000;
    const pin = (randomPin + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        // console.log('shorter pin', pin);
        return getPin();
    }
}

// display generate pin
function generatePin() {
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();
}

// handle pin button event
// use event bubble to create pin
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    // console.log(event.target.innerText);
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        // handle backspace
        // handle clear
        console.log('handle non digit');
    }
    else {
        // console.log(digit);
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

// verify pin
function verify() {
    const actualPin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (actualPin === typedPin) {

    }
    else {

    }
}