function media(){
    let nota01 = parseFloat(document.getElementById("input-nota1").value);
    let nota02 = parseFloat(document.getElementById("input-nota2").value);
    let nota03 = parseFloat(document.getElementById("input-nota3").value);

    let media = (nota01 + nota02 + nota03)/3;

    let resultado = document.querySelector("h3");
    resultado.innerHTML = "A média desses números é: " + media.toFixed(2);

    console.log(media);
}