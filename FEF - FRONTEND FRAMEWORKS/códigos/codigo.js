/*  QUESTÃO 01  */
//alert("Olá, bem vindo!");
/*  QUESTÃO 02  */
//let opcao = confirm("Deseja permanecer na página?");
//alert("sua opção foi "+opcao);
/*  QUESTÃO 03  */
/*let nome = prompt("Digite seu nome:");
alert("Seu nome é "+nome);*/

/*  EXERCÍCIO 2 */
/*  QUESTÃO 01  */
/*
let nota1 = parseInt(prompt("Digite a nota 1:"));
let nota2 = parseInt(prompt("Digite a nota 2:"));
let nota3 = parseInt(prompt("Digite a nota 3:"));

let media = (nota1 + nota2 + nota3)/3;
alert("Média = " + media);

console.log(typeof media); */
/*
// ETAPA 1 - Declaração de variáveis
let nota1;
let nota2;
let nota3;
let media;
// ETAPA 2 - Entrada de dados
nota1 = prompt("Digite a nota 1:");// retorna uma STRING
nota2 = prompt("Digite a nota 2:");// retorna uma STRING
nota3 = prompt("Digite a nota 3:");// retorna uma STRING
//ETAPA 3 - Lógica do problema
media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3;
//ETAPA 4 - Sáida (Resultado)
alert("Média = " + media.toFixed(2)); */

/* EXEMPLO COM IF ELSE 
let numero = parseInt(prompt("Digite um número:"));

if (numero > 0){
    alert("positivo");
}else{
    if (numero === 0){
        alert("neutro");
    }else{
        alert("negativo");
    }
}  */

// QUESTÃO 1 - JS 3    
let usuario="joyce";
let senha="123";

let usuarioTeste = prompt("Digite seu usuário:");
let senhaTeste = prompt("Digite sua senha:");

if ((usuarioTeste === usuario) && (senhaTeste === senha)){
    alert("Senha válida!");
}else{
    alert("Senha inválida!");
}