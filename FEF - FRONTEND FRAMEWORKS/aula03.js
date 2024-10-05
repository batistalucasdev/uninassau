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

//Slide 14 - Exercício 01
//Slide 14 - Exercício 02
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