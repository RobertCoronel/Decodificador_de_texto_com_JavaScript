
window.oninput = function(){
    document.querySelector('#show').value = document.querySelector('#escreva').value;
};


document.getElementById("copiar").addEventListener("click",function(){
    document.getElementById("show").select();
    document.execCommand('copy');
});


function escondeDiv() {
    if(document.getElementById('escreva').value.length <= 0) {
        document.getElementById('escrita').style.display = "none"; 
        document.getElementById('solucao').style.display = "block";
    } else {
        document.getElementById('solucao').style.display = "none";
        document.getElementById('escrita').style.display = "block"; 
    }
};


var letras = [
    ["e", "1247+sfd466e4fw84658ef#"],
    ["i", "adssf6ed456ef6effqwes"],
    ["o", "sfdwef6414fe6"],
    ["a", "94s8wef3154fae5df"],
    ["u", "w64wef45wef4e"],
];


function encripta(texto) {
letras.forEach((element) => {
    var textoSearch = element[0];
    var textoReplace = element[1];
    texto = texto.replaceAll(textoSearch, textoReplace);
});
return texto;
}


function desencripta(texto) {
 letras.forEach((element) => {
    var textoSearch = element[1];
    var textoReplace = element[0];
    texto = texto.replaceAll(textoSearch, textoReplace);
 });
 return texto;
}


document.getElementById("buton_descriptografia").addEventListener("click", function() {
    var textoNormal = document.getElementById("escreva").value;
        if(!entradaValida(textoNormal)){
            return;
        }
    var textoDecodificado = desencripta(textoNormal);
    document.getElementById("show").value = textoDecodificado;
});


document.getElementById("buton_criptografia").addEventListener("click", function() {
    var textoCodificado = document.getElementById("escreva").value;
        if(!entradaValida(textoCodificado)) {
            return;
        }
    var textoDecodificado = encripta(textoCodificado);
    document.getElementById("show").value = textoDecodificado;
});


function entradaValida(texto){
    if(texto === ""){
        alert("Digite alguma coisa!!");
        return false;
    }
        if(texto.toLowerCase() != texto){
            alert("Só pode usar letras minusculas!");
            return false;
        }
    const carecteresAcentudados = "ÁÉÍÓÚáéíóúâêîôûàèìòùÇç";
    var carecteresAcentos = carecteresAcentudados.split("");

        carecteresAcentos.forEach(function (carectere){
            if(texto.includes(carectere)) {
                alert("Não pode usar acentos!");
                return false;
            }
        });
        return true;
}