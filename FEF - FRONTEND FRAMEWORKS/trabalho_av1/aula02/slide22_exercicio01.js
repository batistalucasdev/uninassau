// Lucas Soares Batista - 01678004
// Aula 02

//Slide 22 - Exercício 01
function media() { // Função 'media' sem parâmetros
    let nota01 = parseFloat(document.getElementById("input-nota01").value); // Lê a primeira nota
    let nota02 = parseFloat(document.getElementById("input-nota02").value); // Lê a segunda nota
    let nota03 = parseFloat(document.getElementById("input-nota03").value); // Lê a terceira nota

    let media = (nota01 + nota02 + nota03) / 3; // Calcula a média das três notas

    let resultado01 = document.getElementById("resultado01"); // Pega o elemento HTML com id 'resultado01'
    resultado01.innerHTML = `A média desses elementos é: ${media.toFixed(1)}`; // Exibe a média formatada com 1 casa decimal
}

//Slide 22 - Exercício 02
function somar() { // Função 'somar' sem parâmetros
    let num01 = parseFloat(document.getElementById("input-num01").value); // Lê o primeiro número
    let num02 = parseFloat(document.getElementById("input-num02").value); // Lê o segundo número
    let num03 = parseFloat(document.getElementById("input-num03").value); // Lê o terceiro número

    let soma = num01 + num02 + num03; // Calcula a soma dos três números

    let resultado02 = document.getElementById("resultado02"); // Pega o elemento HTML com id 'resultado02'
    resultado02.innerHTML = `A soma desses elementos é: ${soma.toFixed(1)}`; // Exibe a soma formatada com 1 casa decimal
}

//Slide 22 - Exercício 03
function informacoes() { // Função 'informacoes' sem parâmetros
    let nome = document.getElementById("input-nome").value; // Lê o nome do usuário
    let idade = parseInt(document.getElementById("input-idade").value); // Lê e converte a idade para um número inteiro

    let resultado03 = document.getElementById("resultado03"); // Pega o elemento HTML com id 'resultado03'
    resultado03.innerHTML = `Seu nome é ${nome} e sua idade é ${idade}`; // Exibe o nome e a idade do usuário
}

//Slide 23 - Exercício 01
function informacoes_pessoais() { // Função 'informacoes_pessoais' sem parâmetros
    let nome = document.getElementById("input-nome-info").value; // Lê o nome do usuário
    let rg = document.getElementById("input-rg").value; // Lê o RG do usuário
    let cpf = document.getElementById("input-cpf").value; // Lê o CPF do usuário
    let idade = parseInt(document.getElementById("input-idade-info").value); // Lê e converte a idade para um número inteiro
    
    let resultado04 = document.getElementById("resultado04"); // Pega o elemento HTML com id 'resultado04'
    resultado04.innerHTML = `Seu nome é ${nome}, seu RG é ${rg}, seu CPF é ${cpf} e sua idade é ${idade}`; // Exibe as informações pessoais do usuário
}

//Slide 23 - Exercício 02
function temperatura() { // Função 'temperatura' sem parâmetros
    let fahrenheit = parseFloat(document.getElementById("input-fahrenheit").value); // Lê a temperatura em Fahrenheit e converte para número decimal

    let celsius = (fahrenheit - 32) * (5/9); // Converte a temperatura de Fahrenheit para Celsius

    let resultado05 = document.getElementById("resultado05"); // Pega o elemento HTML com id 'resultado05'
    resultado05.innerHTML = `Essa temperatura convertida corresponde a ${celsius.toFixed(2)} graus Celsius.`; // Exibe a temperatura convertida com duas casas decimais
}

//Slide 23 - Exercício 03
function quadrado() { // Função 'quadrado' sem parâmetros
    let numero = parseInt(document.getElementById("input-inteiro").value); // Lê um número inteiro do input e converte para um número inteiro

    let quadrado = numero * numero; // Calcula o quadrado do número

    let resultado06 = document.getElementById("resultado06"); // Pega o elemento HTML com id 'resultado06'
    resultado06.innerHTML = `O quadrado desse número é ${quadrado}`; // Exibe o resultado do quadrado no HTML
}

//Slide 23 - Exercício 04
function calcularSalario() { // Função 'calcularSalario' sem parâmetros
    let salarioFixo = parseFloat(document.getElementById("input-salario-fixo").value); // Lê o salário fixo do input e converte para número
    let vendas = parseFloat(document.getElementById("input-vendas").value); // Lê o total de vendas do input e converte para número
    let percentualComissao = parseFloat(document.getElementById("input-percentual-comissao").value); // Lê o percentual de comissão do input e converte para número

    let valorComissao = vendas * percentualComissao / 100; // Calcula o valor da comissão com base nas vendas
    let salarioTotal = salarioFixo + valorComissao; // Calcula o salário total somando o salário fixo e a comissão

    let resultado07 = document.getElementById("resultado07"); // Pega o elemento HTML com id 'resultado07'
    resultado07.innerHTML = `O valor da comissão do vendedor é ${valorComissao.toFixed(2)} e seu salário total é ${salarioTotal.toFixed(2)}`; // Exibe o valor da comissão e o salário total no HTML formatado com 2 casas decimais
}