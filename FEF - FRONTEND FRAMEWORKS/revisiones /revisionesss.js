function square(numero){
    return numero * numero;
}

function map(f,a){
    let result = [];
    let i;
    for (i = 0; i!=a.length; i++) result[i] = f(a[i]);
    return result;
}

let igao = map (
    function (x){
        return x * x * x;
    },
    [0,1,2,5,10],
);

document.write(igao);