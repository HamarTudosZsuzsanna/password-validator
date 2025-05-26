let visibleEye = document.querySelector(".visible-eye");
let passwordInput = document.querySelector("#pwd");
let rulesElement = document.querySelector(".rules");
let darkMode = document.querySelector("#dark-mode");
let bodyElement = document.querySelector("body");
let formInput = document.querySelector("form");
let pwdButton = document.querySelector("#pwd-generator");

visibleEye.addEventListener("click", function(){
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        visibleEye.src = "https://img.icons8.com/pulsar-color/48/closed-eye.png";

    } else {
        passwordInput.type = "password";
        visibleEye.src = "https://img.icons8.com/pulsar-color/48/visible.png";
    }
});

let numRegex = /[0-9]+/;
let upperCaseRegex = /[A-ZÖÜÓŐÚÉÁŰÍ]+/;
let specRegex = /[@!%_*//]/

passwordInput.addEventListener("input", (ev) => {
    if (passwordInput.value.length >= 1) {
        rulesElement.style.display = "block";

        if(numRegex.test(passwordInput.value)){
            document.querySelector("#num").src = "https://img.icons8.com/pulsar-color/48/checked.png";
        } else {
            document.querySelector("#num").src = "https://img.icons8.com/pulsar-color/48/x-coordinate.png";
        }

        if(upperCaseRegex.test(passwordInput.value)){
            document.querySelector("#uppercase").src = "https://img.icons8.com/pulsar-color/48/checked.png";
        } else {
            document.querySelector("#uppercase").src = "https://img.icons8.com/pulsar-color/48/x-coordinate.png";
        }

        if(specRegex.test(passwordInput.value)){
            document.querySelector("#spec").src = "https://img.icons8.com/pulsar-color/48/checked.png";
        } else {
            document.querySelector("#spec").src = "https://img.icons8.com/pulsar-color/48/x-coordinate.png";
        }

        if(passwordInput.value.length >= 8){
            document.querySelector("#character").src = "https://img.icons8.com/pulsar-color/48/checked.png";
        } else {
            document.querySelector("#character").src = "https://img.icons8.com/pulsar-color/48/x-coordinate.png";
        }
    } else {
        rulesElement.style.display = "none";
    }
});

darkMode.addEventListener("click", () => {

    bodyElement.classList.toggle("dark");

    if(bodyElement.classList == "dark") {
        bodyElement.style.backgroundColor = "#121212";
        bodyElement.style.color = "white";
        formInput.style.backgroundColor = "#363636";
        formInput.style.borderColor = "white";
        darkMode.src = "icons8-light-on-48.png"

    } else {
        bodyElement.style.color = "black";
        bodyElement.style.backgroundColor = "white";
        formInput.style.backgroundColor = "white";
        formInput.style.borderColor = "black";
        darkMode.src = "https://img.icons8.com/pulsar-color/48/moon-symbol.png"
    }
})

function randomFromString(chars) {
    return chars[Math.floor(Math.random() * chars.length)];
}

function generatePw(length = 10) {
    const lowercase = "abcdefghijklmnopqrstuvwxyzöüóőúéáűí";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZÖÜÓŐÚÉÁŰÍ";
    const numbers = "0123456789";
    const specialChars = "@!%_*/";
    const allChars = lowercase + uppercase + numbers + specialChars;
    
    let password = [
        randomFromString(lowercase),
        randomFromString(uppercase),
        randomFromString(numbers),
        randomFromString(specialChars)
    ];

    while (password.length < length) {
        password.push(randomFromString(allChars));
    }

    return password.sort(() => Math.random() - 0.5).join('');
}
//console.log(generatePw());

pwdButton.addEventListener("click", function() {
    passwordInput.value = generatePw();
    if (passwordInput.value.length >= 1) {
        rulesElement.style.display = "block";

        if(numRegex.test(passwordInput.value)){
            document.querySelector("#num").src = "https://img.icons8.com/pulsar-color/48/checked.png";
        } else {
            document.querySelector("#num").src = "https://img.icons8.com/pulsar-color/48/x-coordinate.png";
        }

        if(upperCaseRegex.test(passwordInput.value)){
            document.querySelector("#uppercase").src = "https://img.icons8.com/pulsar-color/48/checked.png";
        } else {
            document.querySelector("#uppercase").src = "https://img.icons8.com/pulsar-color/48/x-coordinate.png";
        }

        if(specRegex.test(passwordInput.value)){
            document.querySelector("#spec").src = "https://img.icons8.com/pulsar-color/48/checked.png";
        } else {
            document.querySelector("#spec").src = "https://img.icons8.com/pulsar-color/48/x-coordinate.png";
        }

        if(passwordInput.value.length >= 8){
            document.querySelector("#character").src = "https://img.icons8.com/pulsar-color/48/checked.png";
        } else {
            document.querySelector("#character").src = "https://img.icons8.com/pulsar-color/48/x-coordinate.png";
        }
    } else {
        rulesElement.style.display = "none";
    }

    passwordInput.type = "text";
    visibleEye.src = "https://img.icons8.com/pulsar-color/48/closed-eye.png";
})