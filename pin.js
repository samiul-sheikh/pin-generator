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
    const pinInput = document.getElementById('pin');
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
        // console.log('handle non digit');
        if (digit === 'C') {
            const typedInput = document.getElementById('typed-pin');
            typedInput.value = ' ';
        }
    }
    else {
        // console.log(digit);
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

// verify pin
function verifyPin() {
    const actualPin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (actualPin === typedPin) {
        const correct = document.getElementById('correct-pin');
        correct.style.display = 'block';
    }
    else {
        const correct = document.getElementById('incorrect-pin');
        correct.style.display = 'block';
    }
}