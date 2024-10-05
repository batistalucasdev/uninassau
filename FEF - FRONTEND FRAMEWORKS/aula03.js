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
    resultado06.innerHTML = ` ${numero}`;

    if (numero % 2 == 0) {
        imprimir("resultado06", `O número é par.`);
    }
    else {
        imprimir("resultado06", `O número é ímpar.`);
    }
}

//Slide 14 - Exercício 01
function custo_carro(){
    let percentualDistribuidor = 0.28;
    let percentualImpostos = 0.45;
    let custoFabrica = parseFloat(document.getElementById("input-custo-carro").value);

    let valorDistribuidor = custoFabrica * percentualDistribuidor;
    let valorImpostos = custoFabrica * percentualImpostos;
    
    let custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

    let resultado07 = document.getElementById("resultado07");        resultado07.innerHTML = `O custo final ao consumidor é: R$ ${custoFinal.toFixed(2)}`;
}

//Slide 14 - Exercício 02
function eh_positivo(){
    let numero = parseInt(document.getElementById("input-numero").value);
    
    let resultado06 = document.getElementById("resultado06");
    resultado06.innerHTML = ` ${numero}`;

    if (numero % 2 == 0) {
        imprimir("resultado06", `O número é par.`);
    }
    else {
        imprimir("resultado06", `O número é ímpar.`);
    }

}

//Slide 14 - Exercício 03

//Slide 17 - Exercício 01
//Slide 17 - Exercício 02

//Slide 20 - Exercício 01
//Slide 20 - Exercício 02
//Slide 20 - Exercício 03
//Slide 20 - Exercício 04

//Slide 23 - Exercício 01
//Slide 23 - Exercício 02
//Slide 23 - Exercício 03