// Lucas Soares Batista - 01678004
// Aula 01

//Slide 35 - Exercício 03
function inserirNome() {
    let nome = prompt("Digite seu nome: "); // Solicita ao usuário que digite seu nome

    let resultado03 = document.getElementById("resultado03"); // Seleciona o elemento onde o resultado será exibido
    resultado03.innerHTML = `Seu nome é ${nome}`; // Exibe o nome no elemento
}