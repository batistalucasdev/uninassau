// Lucas Soares Batista - 01678004
//Aula 03

//Slide 06 - Exercício 01
function imprimir(tag, texto) {
    let resultado = document.getElementById(tag);
    resultado.innerHTML = texto;
}

//Slide 06 - Exercício 01
function verificar_senha() {
    const usuarioSistema = "Lucas";
    const senhaSistema = "teste";
    let usuario = document.getElementById("input-usuario").value;
    let senha = document.getElementById("input-senha").value;

    console.log(senha);
    if (senha == senhaSistema && usuario == usuarioSistema) {
        imprimir("resultado01", `Senha válida`);
    }
    else {
        imprimir("resultado01", `Senha inválida`);
    }
}

//Slide 06 - Exercício 02
function palavra_chave() {
    const palavra_chave_01 = "senhazinha";
    const palavra_chave_02 = "senhazona";
    let chave01 = document.getElementById("input-palavra-chave-01").value;
    let chave02 = document.getElementById("input-palavra-chave-02").value;

    if (chave01 == palavra_chave_01 || chave02 == palavra_chave_02) {
        imprimir("resultado02", `Chave válida`);
    }
    else {
        imprimir("resultado02", `Chave inválida`);
    }

}

//Slide 06 - Exercício 03

//Slide 06 - Exercício 04

//Slide 13 - Exercício 01
function calcular_media() {
    let num01 = parseFloat(document.getElementById("input-num-01").value);
    let num02 = parseFloat(document.getElementById("input-num-02").value);
    let num03 = parseFloat(document.getElementById("input-num-03").value);

    let media = (num01 + num02 + num03) / 3;

    let resultado05 = document.getElementById("resultado05");
    resultado05.innerHTML = `A média desses números é ${media.toFixed(2)}`;

    if (media > 6) {

        imprimir("resultado05", `O aluno está aprovado.`);
    }
}

//Slide 13 - Exercício 02
function eh_par() {
    let numero = parseInt(document.getElementById("input-numero").value);

    let resultado06 = document.getElementById("resultado06");
    resultado06.innerHTML = `${numero}`;

    if (numero % 2 == 0) {
        imprimir("resultado06", `O número é par.`);
    }
    else {
        imprimir("resultado06", `O número é ímpar.`);
    }
}

//Slide 14 - Exercício 01
function custo_carro() {
    let percentualDistribuidor = 0.28;
    let percentualImpostos = 0.45;
    let custoFabrica = parseFloat(document.getElementById("input-custo-carro").value);

    let valorDistribuidor = custoFabrica * percentualDistribuidor;
    let valorImpostos = custoFabrica * percentualImpostos;

    let custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

    let resultado07 = document.getElementById("resultado07"); resultado07.innerHTML = `O custo final ao consumidor é: R$ ${custoFinal.toFixed(2)}`;
}

//Slide 14 - Exercício 02
function eh_positivo() {
    let valor = parseFloat(document.getElementById("input-valor").value);

    let resultado08 = document.getElementById("resultado08");
    resultado08.innerHTML = `${valor}`;

    if (valor >= 0) {
        imprimir("resultado08", `O valor é positivo.`);
    }
    else {
        imprimir("resultado08", `O valor é negativo.`);
    }
}

//Slide 14 - Exercício 03
function soma_maiores() {
    let valor01 = parseFloat(document.getElementById("input-valor01").value);
    let valor02 = parseFloat(document.getElementById("input-valor02").value);
    let valor03 = parseFloat(document.getElementById("input-valor03").value);

    let resultado09 = document.getElementById("resultado09");
    resultado09.innerHTML = `${somaMaiores}`;

}

//Slide 17 - Exercício 01
function fazer_operacao() {
    let numero01 = parseFloat(document.getElementById("input-numero01").value);
    let numero02 = parseFloat(document.getElementById("input-numero02").value);
    let operacao = document.getElementById("input-operacao").value.toLowerCase();

    let resultadoOperacao;

    switch (operacao) {
        case "soma":
            resultadoOperacao = numero01 + numero02;
            break;

        case "subtracao":
            resultadoOperacao = numero01 - numero02;
            break;

        case "multiplicacao":
            resultadoOperacao = numero01 * numero02;
            break;

        case "divisao":
            if (numero02 !== 0) {
                resultadoOperacao = numero01 / numero02;
            } else {
                resultadoOperacao = "Erro: Divisão por zero!";
            }
            break;

        default:
            resultadoOperacao = "Operação inválida";
    }

    let elementoResultado10 = document.getElementById("resultado10");
    elementoResultado10.innerHTML = `O resultado da operação é: ${resultadoOperacao}`;
}


//Slide 17 - Exercício 02
function verificar_idade() {
    let idade = parseInt(document.getElementById("input-idade").value);
    let classificacao;

    switch (true) {
        case (idade >= 0 && idade <= 12):
            classificacao = "Criança";
            break;
        case (idade >= 13 && idade <= 20):
            classificacao = "Adolescente";
            break;
        case (idade >= 21 && idade <= 50):
            classificacao = "Adulto";
            break;
        case (idade > 50):
            classificacao = "Idoso";
            break;
        default:
            classificacao = "Idade inválida";
    }

    let resultado11 = document.getElementById("resultado11");
    resultado11.innerHTML = `A pessoa é: ${classificacao}`;
}

//Slide 20 - Exercício 01
function calcularSomaFor() {
    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        soma += i;
    }

    let resultado12 = document.getElementById("resultado12");
    resultado12.innerHTML = `A soma dos números entre 1 e 100 é: ${soma}`;
}

//Slide 20 - Exercício 02
function calcularMediaFor() {
    let soma = 0;
    let quantidade = 100;

    for (let i = 1; i <= 100; i++) {
        soma += i;
    }

    let media = soma / quantidade;


    let resultado13 = document.getElementById("resultado13");
    resultado13.innerHTML = `A soma dos números entre 1 e 100 é: ${media}`;
}
//Slide 20 - Exercício 03
function calcularSomaParesFor() {
    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) { // Verifica se o número é par
            soma += i; // Adiciona o número par à soma
        }
    }

    let resultado14 = document.getElementById("resultado14");
    resultado14.innerHTML = `A soma dos números pares entre 1 e 100 é: ${soma}`;
}

//Slide 20 - Exercício 04
function calcularSomaImparesFor(){
    let soma = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) { // Verifica se o número é ímpar
            soma += i; // Adiciona o número ímpar à soma
        }
    }

    let resultado15 = document.getElementById("resultado15");
    resultado15.innerHTML = `A soma dos números pares entre 1 e 100 é: ${soma}`;
}

//Slide 23 - Exercício 01
function 
//Slide 23 - Exercício 02
//Slide 23 - Exercício 03