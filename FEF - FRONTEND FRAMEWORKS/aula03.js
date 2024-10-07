// Lucas Soares Batista - 01678004
// Aula 03

//Slide 06 - Exercício 01
function imprimir(tag, texto) { // Função 'imprimir' que recebe 'tag' e 'texto'
    let resultado = document.getElementById(tag); // Busca o elemento HTML pelo id fornecido em 'tag'
    resultado.innerHTML = texto; // Define o conteúdo HTML interno como o valor de 'texto'
}

//Slide 06 - Exercício 01
function verificar_senha() { // Função 'verificar_senha' sem parâmetros
    const usuarioSistema = "Lucas"; // Define a constante 'usuarioSistema' com o valor "Lucas"
    const senhaSistema = "teste"; // Define a constante 'senhaSistema' com o valor "teste"
    let usuario = document.getElementById("input-usuario").value; // Pega o valor do campo de entrada com id 'input-usuario'
    let senha = document.getElementById("input-senha").value; // Pega o valor do campo de entrada com id 'input-senha'

    console.log(senha); // Exibe a senha no console para depuração
    if (senha == senhaSistema && usuario == usuarioSistema) { // Verifica se a senha e o usuário correspondem aos valores do sistema
        imprimir("resultado01", `Senha válida`); // Chama a função 'imprimir' para mostrar "Senha válida" na tela
    }
    else { // Caso contrário
        imprimir("resultado01", `Senha inválida`); // Chama a função 'imprimir' para mostrar "Senha inválida" na tela
    }
}

//Slide 06 - Exercício 02
function palavra_chave() { // Função 'palavra_chave' sem parâmetros
    const palavra_chave_01 = "senhazinha"; // Define a constante 'palavra_chave_01' com o valor "senhazinha"
    const palavra_chave_02 = "senhazona"; // Define a constante 'palavra_chave_02' com o valor "senhazona"
    let chave01 = document.getElementById("input-palavra-chave-01").value; // Pega o valor do campo de entrada com id 'input-palavra-chave-01'
    let chave02 = document.getElementById("input-palavra-chave-02").value; // Pega o valor do campo de entrada com id 'input-palavra-chave-02'

    if (chave01 == palavra_chave_01 || chave02 == palavra_chave_02) { // Verifica se uma das chaves corresponde aos valores do sistema
        imprimir("resultado02", `Chave válida`); // Chama a função 'imprimir' para mostrar "Chave válida" na tela
    }
    else { // Caso contrário
        imprimir("resultado02", `Chave inválida`); // Chama a função 'imprimir' para mostrar "Chave inválida" na tela
    }
}

//Slide 06 - Exercício 03
function ordem_crescente() { // Função 'ordem_crescente' sem parâmetros
    let num1 = parseFloat(document.getElementById("input-numero-01").value); // Pega e converte o valor do campo 'input-numero-01' para número
    let num2 = parseFloat(document.getElementById("input-numero-02").value); // Pega e converte o valor do campo 'input-numero-02' para número
    let num3 = parseFloat(document.getElementById("input-numero-03").value); // Pega e converte o valor do campo 'input-numero-03' para número

    let resultado03 = ''; // Variável para armazenar a ordem crescente dos números

    // Ordenação usando operadores lógicos
    if (num1 <= num2 && num1 <= num3) { // Se 'num1' for o menor ou igual aos outros
        resultado03 += num1 + ' '; // Adiciona 'num1' ao resultado
        if (num2 <= num3) {
            resultado03 += num2 + ' ' + num3; // num1 < num2 < num3
        } else {
            resultado03 += num3 + ' ' + num2; // num1 < num3 < num2
        }
    } else if (num2 <= num1 && num2 <= num3) { // Se 'num2' for o menor ou igual aos outros
        resultado03 += num2 + ' '; // Adiciona 'num2' ao resultado
        if (num1 <= num3) {
            resultado03 += num1 + ' ' + num3; // num2 < num1 < num3
        } else {
            resultado03 += num3 + ' ' + num1; // num2 < num3 < num1
        }
    } else { // Caso contrário, 'num3' é o menor
        resultado03 += num3 + ' '; // Adiciona 'num3' ao resultado
        if (num1 <= num2) {
            resultado03 += num1 + ' ' + num2; // num3 < num1 < num2
        } else {
            resultado03 += num2 + ' ' + num1; // num3 < num2 < num1
        }
    }
    document.getElementById("resultado03").innerHTML = `Números em ordem crescente: ${resultado03}`; // Exibe o resultado ordenado na tela
}

//Slide 06 - Exercício 04
function calcular_consumo() { // Função 'calcular_consumo' sem parâmetros
    let distancia = parseFloat(document.getElementById("input-distancia").value); // Pega e converte o valor do campo 'input-distancia' para número
    let combustivel = parseFloat(document.getElementById("input-combustivel").value); // Pega e converte o valor do campo 'input-combustivel' para número

    if (distancia > 0 && combustivel > 0) { // Verifica se os valores de 'distancia' e 'combustivel' são maiores que 0
        let consumoMedio = distancia / combustivel; // Calcula o consumo médio dividindo a 'distancia' pelo 'combustivel'
        document.getElementById("resultado04").innerHTML = `O consumo médio é de ${consumoMedio.toFixed(2)} km/l.`; // Exibe o consumo médio com 2 casas decimais
    } else { // Caso algum valor seja inválido
        document.getElementById("resultado04").innerHTML = "Por favor, insira valores válidos para distância e combustível."; // Exibe mensagem de erro
    }
}

//Slide 13 - Exercício 01
function calcular_media() { // Função 'calcular_media' sem parâmetros
    let num01 = parseFloat(document.getElementById("input-num-01").value); // Pega e converte o valor do campo 'input-num-01' para número
    let num02 = parseFloat(document.getElementById("input-num-02").value); // Pega e converte o valor do campo 'input-num-02' para número
    let num03 = parseFloat(document.getElementById("input-num-03").value); // Pega e converte o valor do campo 'input-num-03' para número

    let media = (num01 + num02 + num03) / 3; // Calcula a média dos três números

    let resultado05 = document.getElementById("resultado05"); // Pega o elemento HTML com id 'resultado05'
    resultado05.innerHTML = `A média desses números é ${media.toFixed(2)}`; // Exibe a média com 2 casas decimais

    if (media > 6) { // Verifica se a média é maior que 6
        imprimir("resultado05", `O aluno está aprovado.`); // Chama a função 'imprimir' para exibir "O aluno está aprovado."
    }
}

//Slide 13 - Exercício 02
function eh_par() { // Função 'eh_par' sem parâmetros
    let numero = parseInt(document.getElementById("input-numero").value); // Pega e converte o valor do campo 'input-numero' para um número inteiro

    let resultado06 = document.getElementById("resultado06"); // Pega o elemento HTML com id 'resultado06'
    resultado06.innerHTML = `${numero}`; // Exibe o número no elemento 'resultado06'

    if (numero % 2 == 0) { // Verifica se o número é par (divisível por 2)
        imprimir("resultado06", `O número é par.`); // Chama a função 'imprimir' para exibir "O número é par."
    } else { // Se o número não for par
        imprimir("resultado06", `O número é ímpar.`); // Chama a função 'imprimir' para exibir "O número é ímpar."
    }
}

//Slide 14 - Exercício 01
function custo_carro() { // Função 'custo_carro' sem parâmetros
    let percentualDistribuidor = 0.28; // Define o percentual do distribuidor como 28%
    let percentualImpostos = 0.45; // Define o percentual dos impostos como 45%
    let custoFabrica = parseFloat(document.getElementById("input-custo-carro").value); // Pega e converte o valor do campo 'input-custo-carro' para número

    let valorDistribuidor = custoFabrica * percentualDistribuidor; // Calcula o valor do distribuidor
    let valorImpostos = custoFabrica * percentualImpostos; // Calcula o valor dos impostos

    let custoFinal = custoFabrica + valorDistribuidor + valorImpostos; // Calcula o custo final somando os valores

    let resultado07 = document.getElementById("resultado07"); // Pega o elemento HTML com id 'resultado07'
    resultado07.innerHTML = `O custo final ao consumidor é: R$ ${custoFinal.toFixed(2)}`; // Exibe o custo final com 2 casas decimais
}

//Slide 14 - Exercício 02
function eh_positivo() { // Função 'eh_positivo' sem parâmetros
    let valor = parseFloat(document.getElementById("input-valor").value); // Pega e converte o valor do campo 'input-valor' para número

    let resultado08 = document.getElementById("resultado08"); // Pega o elemento HTML com id 'resultado08'
    resultado08.innerHTML = `${valor}`; // Exibe o valor no elemento 'resultado08'

    if (valor >= 0) { // Verifica se o valor é maior ou igual a 0
        imprimir("resultado08", `O valor é positivo.`); // Chama a função 'imprimir' para exibir "O valor é positivo."
    } else { // Caso o valor seja menor que 0
        imprimir("resultado08", `O valor é negativo.`); // Chama a função 'imprimir' para exibir "O valor é negativo."
    }
}

//Slide 14 - Exercício 03
function somaDoisMaiores() { // Função 'somaDoisMaiores' sem parâmetros
    let valor01 = parseFloat(document.getElementById("input-valor01").value); // Pega e converte o valor do campo 'input-valor01' para número
    let valor02 = parseFloat(document.getElementById("input-valor02").value); // Pega e converte o valor do campo 'input-valor02' para número
    let valor03 = parseFloat(document.getElementById("input-valor03").value); // Pega e converte o valor do campo 'input-valor03' para número

    let soma; // Declara a variável 'soma'

    // Encontrar a soma dos dois maiores valores
    if ((valor01 > valor02 && valor01 > valor03)) { // Verifica se 'valor01' é o maior
        soma = valor01 + Math.max(valor02, valor03); // Soma 'valor01' com o maior entre 'valor02' e 'valor03'
    } else if (valor02 > valor01 && valor02 > valor03) { // Verifica se 'valor02' é o maior
        soma = valor02 + Math.max(valor01, valor03); // Soma 'valor02' com o maior entre 'valor01' e 'valor03'
    } else { // Caso 'valor03' seja o maior
        soma = valor03 + Math.max(valor01, valor02); // Soma 'valor03' com o maior entre 'valor01' e 'valor02'
    }

    let resultado09 = document.getElementById("resultado09"); // Pega o elemento HTML com id 'resultado09'
    resultado09.innerHTML = `A soma dos dois maiores valores é: ${soma}`; // Exibe a soma dos dois maiores valores
}

//Slide 17 - Exercício 01
function fazer_operacao() { // Função 'fazer_operacao' sem parâmetros
    let numero01 = parseFloat(document.getElementById("input-numero01").value); // Pega e converte o valor do campo 'input-numero01' para número
    let numero02 = parseFloat(document.getElementById("input-numero02").value); // Pega e converte o valor do campo 'input-numero02' para número
    let operacao = document.getElementById("operacao").value; // Pega o valor da operação selecionada

    let resultadoOperacao; // Declara a variável 'resultadoOperacao'

    switch (operacao) { // Inicia o bloco switch para verificar a operação
        case "soma": // Caso a operação seja soma
            resultadoOperacao = numero01 + numero02; // Realiza a soma
            break; // Sai do switch

        case "subtracao": // Caso a operação seja subtração
            resultadoOperacao = numero01 - numero02; // Realiza a subtração
            break; // Sai do switch

        case "multiplicacao": // Caso a operação seja multiplicação
            resultadoOperacao = numero01 * numero02; // Realiza a multiplicação
            break; // Sai do switch

        case "divisao": // Caso a operação seja divisão
            if (numero02 !== 0) { // Verifica se o divisor não é zero
                resultadoOperacao = numero01 / numero02; // Realiza a divisão
            } else { // Se o divisor for zero
                resultadoOperacao = "Erro: Divisão por zero!"; // Define a mensagem de erro
            }
            break; // Sai do switch

        default: // Caso a operação não seja válida
            resultadoOperacao = "Operação inválida"; // Define a mensagem de operação inválida
    }

    let elementoResultado10 = document.getElementById("resultado10"); // Pega o elemento HTML com id 'resultado10'
    elementoResultado10.innerHTML = `O resultado da operação é: ${resultadoOperacao}`; // Exibe o resultado da operação
}

//Slide 17 - Exercício 02
function verificar_idade() { // Função 'verificar_idade' sem parâmetros
    let idade = parseInt(document.getElementById("input-idade").value); // Pega e converte o valor do campo 'input-idade' para número inteiro
    let classificacao; // Declara a variável 'classificacao'

    switch (true) { // Inicia o bloco switch para classificar a idade
        case (idade >= 0 && idade <= 12): // Verifica se a idade está entre 0 e 12 anos
            classificacao = "Criança"; // Define a classificação como "Criança"
            break; // Sai do switch
        case (idade >= 13 && idade <= 20): // Verifica se a idade está entre 13 e 20 anos
            classificacao = "Adolescente"; // Define a classificação como "Adolescente"
            break; // Sai do switch
        case (idade >= 21 && idade <= 50): // Verifica se a idade está entre 21 e 50 anos
            classificacao = "Adulto"; // Define a classificação como "Adulto"
            break; // Sai do switch
        case (idade > 50): // Verifica se a idade é maior que 50 anos
            classificacao = "Idoso"; // Define a classificação como "Idoso"
            break; // Sai do switch
        default: // Caso a idade não se encaixe nas condições anteriores
            classificacao = "Idade inválida"; // Define a classificação como "Idade inválida"
    }
    let resultado11 = document.getElementById("resultado11"); // Pega o elemento HTML com id 'resultado11'
    resultado11.innerHTML = `A pessoa é: ${classificacao}`; // Exibe a classificação da pessoa
}

//Slide 20 - Exercício 01
function calcularSomaFor() { // Função 'calcularSomaFor' sem parâmetros
    let soma = 0; // Inicializa a variável 'soma' com 0

    for (let i = 1; i <= 100; i++) { // Loop de 1 a 100
        soma += i; // Adiciona o valor de 'i' à 'soma'
    }

    let resultado12 = document.getElementById("resultado12"); // Pega o elemento HTML com id 'resultado12'
    resultado12.innerHTML = `A soma dos números entre 1 e 100 é: ${soma}`; // Exibe a soma dos números entre 1 e 100
}

//Slide 20 - Exercício 02
function calcularMediaFor() { // Função 'calcularMediaFor' sem parâmetros
    let soma = 0; // Inicializa a variável 'soma' com 0
    let quantidade = 100; // Define a quantidade de números a serem considerados

    for (let i = 1; i <= 100; i++) { // Loop de 1 a 100
        soma += i; // Adiciona o valor de 'i' à 'soma'
    }

    let media = soma / quantidade; // Calcula a média dividindo a soma pela quantidade

    let resultado13 = document.getElementById("resultado13"); // Pega o elemento HTML com id 'resultado13'
    resultado13.innerHTML = `A média dos números entre 1 e 100 é: ${media}`; // Exibe a média dos números entre 1 e 100
}

//Slide 20 - Exercício 03
function calcularSomaParesFor() { // Função 'calcularSomaParesFor' sem parâmetros
    let soma = 0; // Inicializa a variável 'soma' com 0

    for (let i = 1; i <= 100; i++) { // Loop de 1 a 100
        if (i % 2 === 0) { // Verifica se o número é par
            soma += i; // Adiciona o número par à soma
        }
    }

    let resultado14 = document.getElementById("resultado14"); // Pega o elemento HTML com id 'resultado14'
    resultado14.innerHTML = `A soma dos números pares entre 1 e 100 é: ${soma}`; // Exibe a soma dos números pares entre 1 e 100
}

//Slide 20 - Exercício 04
function calcularSomaImparesFor() { // Função 'calcularSomaImparesFor' sem parâmetros
    let soma = 0; // Inicializa a variável 'soma' com 0

    for (let i = 1; i <= 100; i++) { // Loop de 1 a 100
        if (i % 2 !== 0) { // Verifica se o número é ímpar
            soma += i; // Adiciona o número ímpar à soma
        }
    }

    let resultado15 = document.getElementById("resultado15"); // Pega o elemento HTML com id 'resultado15'
    resultado15.innerHTML = `A soma dos números ímpares entre 1 e 100 é: ${soma}`; // Exibe a soma dos números ímpares entre 1 e 100
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
function calcularMediaWhile() { // Função 'calcularMediaWhile' sem parâmetros
    let numAlunos = parseInt(prompt("Quantos alunos há na sala?")); // Pergunta ao usuário quantos alunos há na sala
    let somaNotas = 0; // Inicializa a soma das notas
    let contador = 0; // Contador para controlar o número de notas

    while (contador < numAlunos) { // Enquanto o contador for menor que o número de alunos
        let nota = parseFloat(prompt(`Digite a nota do aluno ${contador + 1}:`)); // Solicita a nota do aluno
        somaNotas += nota; // Adiciona a nota à soma
        contador++; // Incrementa o contador
    }

    let media = somaNotas / numAlunos; // Calcula a média
    let resultado17 = document.getElementById("resultado17"); // Pega o elemento HTML com id 'resultado17'
    resultado17.innerHTML = `A média da turma é: ${media.toFixed(2)}`; // Exibe a média formatada com 2 casas decimais
}

//Slide 23 - Exercício 03
function calcularSomaWhile() { // Função 'calcularSomaWhile' sem parâmetros
    let N = parseInt(document.getElementById("input-n").value); // Lê o valor de N
    let soma = 0; // Inicializa a soma

    // Valida se N é um número positivo
    if (N > 0) { 
        let contador = 1; // Inicializa o contador

        while (contador <= N) { // Laço para somar de 1 até N
            soma += contador; // Adiciona o contador à soma
            contador++; // Incrementa o contador
        }

        let resultado18 = document.getElementById("resultado18"); // Pega o elemento HTML com id 'resultado18'
        resultado18.innerHTML = `A soma de todos os números inteiros de 1 a ${N} é: ${soma}`; // Exibe o resultado
    } else {
        alert("Por favor, insira um número inteiro positivo."); // Mensagem de erro se N não for positivo
    }
}