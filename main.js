const btn = document.getElementById('btn');

var i = 0;

function validateName() {
    let inputName = document.getElementById('name');
    
    if (inputName.value != "Edgar") {
        inputName.setCustomValidity("Wrong! The name is Edgar.");
    } else {
        inputName.setCustomValidity("");
        i++;
    }
}

function validateSurname() {
    let inputSurname = document.getElementById('surname');
    
    if (inputSurname.value != "Barbosa") {
        inputSurname.setCustomValidity("Wrong! Last name is Barbosa.")
    } else {
        inputSurname.setCustomValidity("");
        i++;
    }
}

function validateLogin() {
    let inputLogin = document.getElementById('login');
    
    if (inputLogin.value != "edgarfbarbosa@outlook.com") {
        inputLogin.setCustomValidity("Wrong! The value is edgarfbarbosa@outlook.com");
    } else {
        inputLogin.setCustomValidity("");
        i++;
    }
}

function validatePassword() {
    let inputPassword = document.getElementById('password');

    if (inputPassword.value != "Password123") {
        inputPassword.setCustomValidity("Wrong! The password is Password123")
    } else {
        inputPassword.setCustomValidity("");
        i++;
    }
}

btn.addEventListener('click', () => {
    if (i >= 3) {
        window.location.href = 'login.html';
    }
})