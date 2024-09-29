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
function informacoes_pessoais(){
    let nome = document.getElementById("input-nome-info").value;
    let rg = document.getElementById("input-rg").value;
    let cpf = document.getElementById("input-cpf").value;
    let idade = parseInt(document.getElementById("input-idade-info").value);
    
    let resultado04 = document.getElementById("resultado04");
    resultado04.innerHTML = `Seu nome é ${nome}, seu RG é ${rg}, seu CPF é ${cpf} e sua idade é ${idade}`;
}

//Slide 23 - Exercício 02
function temperatura(){
    let fahrenheit = parseFloat(document.getElementById("input-fahrenheit").value);

    let celsius = (fahrenheit - 32) * (5/9);

    let resultado05 = document.getElementById("resultado05");
    resultado05.innerHTML = `Essa temperatura convertida corresponde a ${celsius.toFixed(2)} graus Celsius.`;
}

//Slide 23 - Exercício 03
function quadrado(){
    let numero = parseInt(document.getElementById("input-inteiro").value);

    let quadrado = numero * numero;

    let resultado06 = document.getElementById("resultado06");
    resultado06.innerHTML = `O quadrado desse número é ${quadrado}`;
}

//Slide 23 - Exercício 04
function calcularSalario(){
    let salarioFixo = parseFloat(document.getElementById("input-salario-fixo").value);
    let vendas = parseFloat(document.getElementById("input-vendas").value);
    let percentualComissao = parseFloat(document.getElementById("input-percentual-comissao").value);

    let valorComissao = vendas * percentualComissao/100;
    let salarioTotal = salarioFixo + valorComissao;

    let resultado07 = document.getElementById("resultado07");
    resultado07.innerHTML = `O valor da comissão do vendedor é ${valorComissao} e seu salário total é ${salarioTotal}`;

}
//Calcular e apresentar o valor da comissão que ele vai receber e o salário total