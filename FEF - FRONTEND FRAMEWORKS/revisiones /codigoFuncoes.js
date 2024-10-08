// Array
let a = [10,20,30];
let b = ["João", "Maria", "Pedro","Ana"];

document.writeln("Array a = "+ a +"<br>");
document.writeln("O Tamanho do Array a é: " + a.length+"<br>");
document.writeln("Array b = "+ b +"<br>");
for (let j = 0; j < b.length; j++){
    document.writeln("b["+j+"] = "+ b[j] +"<br>");    
}


function quadrado(n){
    return n*n;
}

let aux;

for (i = 0; i < a.length; i++){  
    aux = quadrado(a[i]);
    document.writeln(a[i]+",  a["+i+"]^2 = "+ aux +"<br>");
}

let a2 = a.map((n) => n*n);
document.writeln("Array a2 = "+ a2 +"<br>");

let c = [1,2,3,4,5];
let novoC = c.map(function(x){ x*x});//map recebe uma função
//como parâmetro, aplica a função a cada elemento do array
//e retorna um novo array
document.writeln(novoC); //[1,4,9,16,25]