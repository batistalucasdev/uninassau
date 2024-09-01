<?php
$i = 0;

// while loop
while ($i < 5) {
    echo "Laço While: $i\n";
    $i++;
}

// do-while loop
do {
    echo "Do-While loop: $i\n";
    $i--;
} while ($i > 0);

// for loop
for ($j = 0; $j < 5; $j++) {
    echo "For loop: $j\n";
}

// if statement
$x = 10;
if ($x > 5) {
    echo "x is greater than 5\n";
} else {
    echo "x is not greater than 5\n";
}

// switch-case
$y = 2;
switch ($y) {
    case 1:
        echo "y is 1\n";
        break;
    case 2:
        echo "y is 2\n";
        break;
    default:
        echo "y is not 1 or 2\n";
}
?>
