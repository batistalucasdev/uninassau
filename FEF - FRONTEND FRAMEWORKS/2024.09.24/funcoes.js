function media(a, b) { // (a,b) ~> Passo 01
    let aux; // Passo 02
    aux = (a + b) / 2; // Passo 02
    return aux;
}

let m1 = media(7, 9);
let m2 = media(8, 10);
let m3 = media(10, 9);

document.writeln("O valor da primeira média é: " + m1 + "<br>");
document.writeln("O valor da segunda média é: " + m2 + "<br>");
document.writeln("O valor da terceira média é: " + m3 + "<br>");


//