let nota1 = 8;
//document.write("Nota 1 = "+ nota1 +"<br>");
let nota2 = 6;
//document.write("Nota 2 = "+ nota2 +"<br>");
let nota3 = 6;
//document.write("Nota 3 = "+ nota3 +"<br>");

let media = (nota1+nota2+nota3)/3;

if (media >= 6){
    document.write("O aluno está aprovado! Média = "+ media);
}else{
    if (media < 5){
        document.write("O aluno está reprovado! Média = "+ media);
    }else {
        document.write("O aluno está recuperação! Média = "+ media);
    }
}