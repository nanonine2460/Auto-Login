console.log("Moodle script loaded");

document.getElementById("username").value = getUsername();
document.getElementById("password").value = getPassword();

var valueInput = document.getElementById("valuepkg3");
var textContent = valueInput.previousSibling.textContent.trim();

var match;

if (match = textContent.match(/add\s+(\d+)\s*\+\s*(\d+)\s+=/)) {
    var operation = 'add';
} else if (match = textContent.match(/subtract\s+(\d+)\s*\-\s*(\d+)\s+=/)) {
    var operation = 'subtract';
} else if (match = textContent.match(/enter\s+first\s+value\s+(\d+)\s*,\s*(\d+)\s+=/)) {
    var operation = 'first';
} else if (match = textContent.match(/enter\s+second\s+value\s+(\d+)\s*,\s*(\d+)\s+=/)) {
    var operation = 'second';
}

let firstNumber = parseInt(match[1]);
let secondNumber = parseInt(match[2]);

console.log("Operation:", operation);
console.log("First number:", firstNumber);
console.log("Second number:", secondNumber);

switch (operation) {
    case "add":
        valueInput.value = firstNumber + secondNumber;
        break;
    case "subtract":
        valueInput.value = firstNumber - secondNumber;
        break;
    case "first":
        valueInput.value = firstNumber ;
        break;
    case "second":
        valueInput.value = secondNumber;
        break;
}

var loginBtn = document.getElementById("loginbtn");

loginBtn.click();
