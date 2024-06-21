// script.js
function generate_password(length, iLc, iUc, iN, iS) {
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbols = "&é'(-è_çà)=/*-+.!:;,ù*$^<>²#~{[|`^@]";
    let random = "";
    let final_password = "";
    
    if (iLc) random += lowercasechars;
    if (iUc) random += uppercasechars;
    if (iN) random += numberChars;
    if (iS) random += symbols;
    
    for (let i = 0; i < length; i++) {
        const rI = Math.floor(Math.random() * random.length);
        final_password += random[rI];
    }
    return final_password;
}

// Event listener for the generate password button
document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', function() {
        const length = parseInt(document.getElementById('lengthInput').value);
        const includeLowercase = document.getElementById('includeLowercase').checked;
        const includeUppercase = document.getElementById('includeUppercase').checked;
        const includeNumbers = document.getElementById('includeNumbers').checked;
        const includeSymbols = document.getElementById('includeSymbols').checked;

        const password = generate_password(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
        document.getElementById('passwordDisplay').innerText = `Generated Password: ${password}`;
    });
});
