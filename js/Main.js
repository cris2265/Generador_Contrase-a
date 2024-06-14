let lowerChars = 'abcdefghijklmnopqrstuvwxyz';
let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numberChars = '0123456789';
let symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
let ambiguousChars = '0O1l';

function getRandomChar(charSet) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet[randomIndex];
}

function generatePassword(length, options) {
    let charSet = '';
    if (options.includeLower) charSet += lowerChars;
    if (options.includeUpper) charSet += upperChars;
    if (options.includeNumbers) charSet += numberChars;
    if (options.includeSymbols) charSet += symbolChars;

    if (options.excludeAmbiguous) {
        charSet = charSet.split('').filter(char => !ambiguousChars.includes(char)).join('');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += getRandomChar(charSet);
    }
    return password;
}

function generatePasswords() {
    let length = document.getElementById('length').value;
    let count = document.getElementById('count').value;
    let includeLower = document.getElementById('include-lower').checked;
    let includeUpper = document.getElementById('include-upper').checked;
    let includeNumbers = document.getElementById('include-numbers').checked;
    let includeSymbols = document.getElementById('include-symbols').checked;
    let excludeAmbiguous = document.getElementById('exclude-ambiguous').checked;

    let options = {
        includeLower,
        includeUpper,
        includeNumbers,
        includeSymbols,
        excludeAmbiguous,
    };

    let passwordsContainer = document.getElementById('passwords');
    passwordsContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
        let password = generatePassword(length, options);
        let passwordElement = document.createElement('div');
        passwordElement.className = 'password';
        passwordElement.textContent = password;
        passwordsContainer.appendChild(passwordElement);
    }
}
