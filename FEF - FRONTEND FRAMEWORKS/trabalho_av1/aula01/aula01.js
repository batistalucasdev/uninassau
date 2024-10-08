// Lucas Soares Batista - 01678004
// Aula 01

//Slide 35 - Exercício 01
function criarAlert() {
    alert("Olá, bem-vindo"); // Exibe um alerta com a mensagem "Olá, bem-vindo"
}

//Slide 35 - Exercício 02
function permanecerPagina() {
    confirm("Deseja permanecer na página?"); // Exibe uma caixa de confirmação
}

//Slide 35 - Exercício 03
function inserirNome() {
    let nome = prompt("Digite seu nome: "); // Solicita ao usuário que digite seu nome

    let resultado03 = document.getElementById("resultado03"); // Seleciona o elemento onde o resultado será exibido
    resultado03.innerHTML = `Seu nome é ${nome}`; // Exibe o nome no elemento
}