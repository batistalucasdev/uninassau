// Lucas Soares Batista - 01678004
// Aula 01

//Slide 22 - Exercício 01

function media() {
    let nota01 = parseFloat(document.getElementById("input-nota01").value);
    let nota02 = parseFloat(document.getElementById("input-nota02").value);
    let nota03 = parseFloat(document.getElementById("input-nota03").value);

    let media = (nota01 + nota02 + nota03)/3;

    let resultado01 = document.getElementById("resultado01");
    resultado01.innerHTML = `A média desses elementos é: ${media.toFixed(1)}`;
}