let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password")
let copiedElement = document.querySelector("#copied-container")

// Caracteres desejados na senha. 
let charset = "abcdefghijklmnopqrstuvxzABCDEFGHIJKLMNOPQRSTUVXZ123456789!@#$%¨&*()_+";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

//Tamanho dos caracteres.
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}


// Função para gerar a senha do usuário.
function generatePassword(){ 

    let pass = "";

    for(let i = 0, n= charset.length; i <sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
    copiedElement.classList.remove("hide2");
}

