// Lucas Soares Batista - 01678004
// Aula 01

//Slide 35 - Exercício 01

function criarAlert() {
    alert("Olá, bem vindo");
}

//Slide 35 - Exercício 02
function permanecerPagina(){
    confirm("Deseja permanecer na página?");
}

//Slide 35 - Exercício 03
function inserirNome(){
    let nome = prompt("Digite seu nome: ");

    let resultado03 = document.getElementById("resultado03");
    resultado03.innerHTML = `Seu nome é ${nome}`;
}