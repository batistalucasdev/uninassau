<?php
$i = 0;

// while loop
while ($i < 5) {
    echo "Laço While: $i\n";
    $i++;
}

// do-while loop
do {
    echo "Laço Do-While: $i\n";
    $i--;
} while ($i > 0);

// for loop
for ($j = 0; $j < 5; $j++) {
    echo "Laço For: $j\n";
}

// condicional if
$x = 10;
if ($x > 5) {
    echo "x é maior que 5\n";
} else {
    echo "x é menor que 5\n";
}

// switch-case
$y = 2;
switch ($y) {
    case 1:
        echo "y é 1\n";
        break;
    case 2:
        echo "y é 2\n";
        break;
    default:
        echo "y não é 1 ou 2\n";
}
?>
