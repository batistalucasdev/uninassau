// LAÇO FOR (EXEMPLO)
/*
let i;
let fim;

fim = parseInt(prompt("Digite o fim do laço de repetição for:"));

for (i=1; i <= fim; i++){
    console.log(i);
    document.writeln(i);
}
*/

// EXERCÍCIO SOBRE O "FOR"
//QUESTÃO 02
/*
let soma;
let media;
let i;
let n = parseInt(prompt("Digite a quantidade de números:"));
soma = 0;
for (i=1; i <= n; i++){
    soma = soma + i;
}
media = soma/n;
document.writeln(soma); //RESPOSTA DA QUESTÃO 01
document.writeln(media); // RESPOSTA DA QUESTÃO 02
*/

//QUESTÃO 04
/*
let soma;
let i;
soma = 0;
for (i = 1; i <= 4; i++){
    if (i%2===0){ //ex. 5/2 = 2 (resto = 1)
        soma = soma + i;
    }    
}
console.log(soma);
document.write(soma);
*/

//A MESMA QUESTÃO 04 USANDO "WHILE"
/*
let soma;
let i;
soma = 0;
i = 1; //parte 1 "INICIALIZAÇÃO DA VARIÁVEL CONTADOR"
while (i<=100){ //parte 2 "CONDIÇÃO DE PARADA"
    if (i%2===1){
        soma = soma + i;
    }
    i++; //parte 3 "INCREMENTO DA VARIÁVEL CONTADOR"
}
console.log(soma);
*/

//EXERCÍCIO "WHILE"
//QUESTÃO 01 (APENAS PARA UMA TABUADA)

let num;
let i;
num = parseInt(prompt("Digite número da tabuada:"));
i=1;
while(i<=10){
    console.log(i+"x"+num+"="+i*num); // ex.: 1x5=5
    i++;
}

