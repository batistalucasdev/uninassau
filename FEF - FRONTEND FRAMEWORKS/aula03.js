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
function ordem_crescente() {
    let num1 = parseFloat(document.getElementById("input-numero-01").value);
    let num2 = parseFloat(document.getElementById("input-numero-02").value);
    let num3 = parseFloat(document.getElementById("input-numero-03").value);

    let resultado03 = '';

    // Ordenação usando operadores lógicos
    if (num1 <= num2 && num1 <= num3) {
        resultado03 += num1 + ' ';
        if (num2 <= num3) {
            resultado03 += num2 + ' ' + num3; // num1 < num2 < num3
        } else {
            resultado03 += num3 + ' ' + num2; // num1 < num3 < num2
        }
    } else if (num2 <= num1 && num2 <= num3) {
        resultado03 += num2 + ' ';
        if (num1 <= num3) {
            resultado03 += num1 + ' ' + num3; // num2 < num1 < num3
        } else {
            resultado03 += num3 + ' ' + num1; // num2 < num3 < num1
        }
    } else {
        resultado03 += num3 + ' ';
        if (num1 <= num2) {
            resultado03 += num1 + ' ' + num2; // num3 < num1 < num2
        } else {
            resultado03 += num2 + ' ' + num1; // num3 < num2 < num1
        }
    }

    document.getElementById("resultado03").innerHTML = `Números em ordem crescente: ${resultado03}`;
}

//Slide 06 - Exercício 04
function calcular_consumo() {
    let distancia = parseFloat(document.getElementById("input-distancia").value);
    let combustivel = parseFloat(document.getElementById("input-combustivel").value);

    if (distancia > 0 && combustivel > 0) {
        let consumoMedio = distancia / combustivel;
        document.getElementById("resultado04").innerHTML = `O consumo médio é de ${consumoMedio.toFixed(2)} km/l.`;
    } else {
        document.getElementById("resultado04").innerHTML = "Por favor, insira valores válidos para distância e combustível.";
    }
}

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
function somaDoisMaiores() {
    let valor01 = parseFloat(document.getElementById("input-valor01").value);
    let valor02 = parseFloat(document.getElementById("input-valor02").value);
    let valor03 = parseFloat(document.getElementById("input-valor03").value);

    let soma;

    // Encontrar a soma dos dois maiores valores
    if ((valor01 > valor02 && valor01 > valor03)) {
        soma = valor01 + Math.max(valor02, valor03);
    } else if (valor02 > valor01 && valor02 > valor03) {
        soma = valor02 + Math.max(valor01, valor03);
    } else {
        soma = valor03 + Math.max(valor01, valor02);
    }

    let resultado09 = document.getElementById("resultado09");
    resultado09.innerHTML = `A soma dos dois maiores valores é: ${soma}`;
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
function calcularSomaImparesFor() {
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
function exibir_tabuada() {
    let resultado = '';
    let i = 1; // Inicializa o primeiro número da tabuada

    while (i <= 10) { // Laço para os números de 1 a 10
        let j = 1; // Inicializa o multiplicador

        while (j <= 10) { // Laço para multiplicar
            resultado += `${i} x ${j} = ${i * j}\n`; // Formata a linha da tabuada
            j++; // Incrementa o multiplicador
        }

        resultado += '\n'; // Adiciona uma linha em branco entre as tabuadas
        i++; // Incrementa o número da tabuada
    }

    document.getElementById("resultado16").innerText = resultado; // Exibe o resultado na tela
}

//Slide 23 - Exercício 02
//Slide 23 - Exercício 03
function calcularSomaWhile() {
    let N = parseInt(document.getElementById("input-n").value); // Lê o valor de N
    let soma = 0; // Inicializa a soma

    // Valida se N é um número positivo
    if (N > 0) {
        let contador = 1; // Inicializa o contador

        while (contador <= N) { // Laço para somar de 1 até N
            soma += contador; // Adiciona o contador à soma
            contador++; // Incrementa o contador
        }

        let resultado18 = document.getElementById("resultado18");
        resultado18.innerHTML = `A soma de todos os números inteiros de 1 a ${N} é: ${soma}`; // Exibe o resultado
    } else {
        alert("Por favor, insira um número inteiro positivo."); // Mensagem de erro se N não for positivo
    }
}
