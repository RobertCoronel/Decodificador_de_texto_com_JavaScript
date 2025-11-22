// ---- Seleção dos elementos ---- //
const btnCriptografar = document.querySelector(".btn-criptografar");
const txtCriptografar = document.querySelector(".criptografar");
const aviso = document.querySelector(".texto-aviso");
const resposta = document.querySelector(".avaliar");
const conteudo = document.querySelector(".cartao-conteiner");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDescriptografar = document.querySelector(".btn-decriptar");

// ---- Botão de criptografar ---- //
btnCriptografar.addEventListener('click', e => {
    e.preventDefault();
    let texto = txtCriptografar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == "") {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff"
        aviso.style.fontWeight = "800";
        aviso.textContent = "O campo de texto não deve estar vazio";

        setTimeout(() => {
            aviso.removeAttribute("style")
        },1500);
    }

    else if(texto !== txt) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff"
        aviso.style.fontWeight = "800";
        aviso.textContent = "Não deve ter acentos e caracteres especiais";

        setTimeout(() => {
            aviso.removeAttribute("style")
        },1500);
    }

    else if(texto !== texto.toLowerCase()) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff"
        aviso.style.fontWeight = "800";
        aviso.textContent = "O texto deve estar todo em minúsculas.";

        setTimeout(() => {
            aviso.removeAttribute("style")
        },1500);
    }

    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        resposta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        conteudo.remove();
    }
});


// ---- Botão de Descriptografia ---- //
btnDescriptografar.addEventListener('click', e => {
    e.preventDefault();
    let texto = txtCriptografar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
    
    if(texto == "") {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff"
        aviso.style.fontWeight = "800";
        aviso.textContent = "O campo de texto não deve estar vazio";

        setTimeout(() => {
            aviso.removeAttribute("style")
        },1500);
    }

    else if(texto !== txt) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff"
        aviso.style.fontWeight = "800";
        aviso.textContent = "Não deve ter acentos e caracteres especiais";

        setTimeout(() => {
            aviso.removeAttribute("style")
        },1500);
    }

    else if(texto !== texto.toLowerCase()) {
        aviso.style.background = "#0a3871";
        aviso.style.color = "#ffff"
        aviso.style.fontWeight = "800";
        aviso.textContent = "O texto deve estar todo em minúsculas.";

        setTimeout(() => {
            aviso.removeAttribute("style")
        },1500);
    }

    else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        resposta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        conteudo.remove();
    }
});

// ---- Botão de Copiar ---- //
btnCopiar.addEventListener('click', e => {
    e.preventDefault();
    let copiar = resposta;
    copiar.select();
    document.execCommand("copy");
});

/*
muito bom seu projeto de criptografia e leitura de dados
grande trabalho
*/