// const form = document.getElementById('form');
// const btn = document.getElementById('btn');

function validateName() {
    let inputName = document.getElementById('name');
    
    if (inputName.value != "Edgar") {
        inputName.setCustomValidity("Wrong! The name is Edgar.");
    } else {
        inputName.setCustomValidity("");
    }
}

function validateSurname() {
    let inputSurname = document.getElementById('surname');
    
    if (inputSurname.value != "Barbosa") {
        inputSurname.setCustomValidity("Wrong! Last name is Barbosa.")
    } else {
        inputSurname.setCustomValidity("");
    }
}

function validateLogin() {
    let inputLogin = document.getElementById('login');
    
    if (inputLogin.value != "edgarfbarbosa@outlook.com") {
        inputLogin.setCustomValidity("Wrong! The value is edgarfbarbosa@outlook.com");
    } else {
        inputLogin.setCustomValidity("");
    }
}

// btn.addEventListener('click', () => {
//     window.location.href = 'login.html';
// })