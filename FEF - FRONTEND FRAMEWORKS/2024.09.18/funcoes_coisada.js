function quadrado (n) {
    return n * n;
}

let aux;

for (i = 0; i < a.length; i++) {
    aux = quadrado(a[i])
    document.writeln(a[i] + ", a[i]^2 = " + aux + "<br>");
}


let a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

let a2 = a.map(function(s) {
    return s.length;
});

let a3 = a.map((s) => s.length);