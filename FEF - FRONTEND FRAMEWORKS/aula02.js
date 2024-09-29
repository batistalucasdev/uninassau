// Lucas Soares Batista - 01678004

//Slide 22 - Exercício 01

function media() {
    let nota01 = parseFloat(document.getElementById("input-nota01").value);
    let nota02 = parseFloat(document.getElementById("input-nota02").value);
    let nota03 = parseFloat(document.getElementById("input-nota03").value);

    let media = (nota01 + nota02 + nota03)/3;

    let resultado01 = document.getElementById("resultado01");
    resultado01.innerHTML = `A média desses elementos é: ${media.toFixed(1)}`;
}

//Slide 22 - Exercício 02
function somar(){
    let num01 = parseFloat(document.getElementById("input-num01").value);
    let num02 = parseFloat(document.getElementById("input-num02").value);
    let num03 = parseFloat(document.getElementById("input-num03").value);

    let soma = num01 + num02 + num03;

    let resultado02 = document.getElementById("resultado02");
    resultado02.innerHTML = `A soma desses elementos é: ${soma.toFixed(1)}`;
}

//Slide 22 - Exercício 03
function informacoes(){
    let nome = document.getElementById("input-nome").value;
    let idade = parseInt(document.getElementById("input-idade").value);

    let resultado03 = document.getElementById("resultado03");
    resultado03.innerHTML = `Seu nome é ${nome} e sua idade é ${idade}`;
}
//Slide 23 - Exercício 01
informacoes_pessoais(){
    let nome = document.getElementById("input-nome").value;
    let rg = document.getElementById("input-rg").value;
    let cpf = document.getElementById("input-cpf").value;
    let idade = parseInt(document.getElementById("input-idade").value);
    
    let resultado04 = document.getElementById("resultado04");
    resultado04.innerHTML = `Seu nome é ${nome}, seu RG é ${rg}, seu CPF é ${cpf} e sua idade é ${idade}`;
}