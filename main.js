const form = document.getElementById('form');
// const inputName = document.getElementById('name');
const inputSurname = document.getElementById('surname');
const inputLogin = document.getElementById('login');
const btn = document.getElementById('btn');

function checkForm() {
    let error = 0;
    
    // if (inputName.value != "Edgar") {
    //     error++;
    //     inputName.setCustomValidity("Wrong! The name is Edgar.");
    // } else {
    //     inputName.setCustomValidity("");
    // }
    
    if (inputSurname.value != "Barbosa") {
        error++;
        inputSurname.setCustomValidity("Wrong! Last name is Barbosa");
    } else {
        inputSurname.setCustomValidity("");
    }
    
    if (inputLogin.value != "edgarfbarbosa@outlook.com") {
        error++;
        inputLogin.setCustomValidity("Wrong! The value is edgarfbarbosa@outlook.com");
    } else {
        inputLogin.setCustomValidity("");
    }
    
    // console.log(error);
    
    if (error === 0) {
        window.location.href = 'login.html';
    }
}

form.addEventListener('change', checkForm);
form.addEventListener('submit', checkForm);

// btn.addEventListener('click', () => {
//     window.location.href = 'login.html';
// })

function validateName() {
    let inputName = document.getElementById('name');
    
    if (inputName.value != "Edgar") {
        inputName.setCustomValidity("Wrong! The name is Edgar.");
    } else {
        inputName.setCustomValidity("");
    }
}

// inputName.addEventListener('change', validateName);