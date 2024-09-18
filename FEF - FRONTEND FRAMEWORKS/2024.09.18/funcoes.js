// Array
let a = [10, 20, 30, 40];
document.writeln("Array a = " + a + "<br>");
document.write("O tamanho do Array a é: " + a.length + "<br>");

function quadrado (n) {
    return n * n;
}

let aux;

for (i = 0; i < a.length; i++) {
    aux = quadrado(a[i])
    document.writeln(a[i] + ", a[i]^2 = " + aux + "<br>");
}
document.write("ALGUÉM VAI FICAR CHATEADO SE EU FIZER DESSE JEITO? 😭");

let novoA = map(function (n)) {
    return n*n;
}
document.writeln("Array novoA = " + novoA + "<br>");