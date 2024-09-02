let i = 0;

// while loop
while (i < 5) {
    console.log("Laço While: " + i);
    i++;
}

// do-while loop
do {
    console.log("Laço Do-While: " + i);
    i--;
} while (i > 0);

// for loop
for (let j = 0; j < 5; j++) {
    console.log("Laço For: " + j);
}

// condicional if
let x = 10;
if (x > 5) {
    console.log("x é maior que 5");
} else {
    console.log("x é menor que 5");
}

// switch-case
let y = 2;
switch (y) {
    case 1:
        console.log("y é 1");
        break;
    case 2:
        console.log("y é 2");
        break;
    default:
        console.log("y não é 1 ou 2");
}
