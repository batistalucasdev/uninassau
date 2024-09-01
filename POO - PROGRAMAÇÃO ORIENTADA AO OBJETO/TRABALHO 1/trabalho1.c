#include <stdio.h>

int main() {
    int i = 0;

    // while loop
    while (i < 5) {
        printf("Laço While: %d\n", i);
        i++;
    }

    // do-while loop
    do {
        printf("Laço Do-While: %d\n", i);
        i--;
    } while (i > 0);

    // for loop
    for (int j = 0; j < 5; j++) {
        printf("Laço For: %d\n", j);
    }

    // condicional if
    int x = 10;
    if (x > 5) {
        printf("x é maior que 5\n");
    } else {
        printf("x é menor que 5\n");
    }

    // switch-case
    int y = 2;
    switch (y) {
        case 1:
            printf("y é 1\n");
            break;
        case 2:
            printf("y é 2\n");
            break;
        default:
            printf("y não é 1 ou 2\n");
    }

    return 0;
}
