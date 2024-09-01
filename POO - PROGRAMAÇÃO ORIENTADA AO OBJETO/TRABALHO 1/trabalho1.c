#include <stdio.h>

int main() {
    int i = 0;

    // while loop
    while (i < 5) {
        printf("While loop: %d\n", i);
        i++;
    }

    // do-while loop
    do {
        printf("Do-While loop: %d\n", i);
        i--;
    } while (i > 0);

    // for loop
    for (int j = 0; j < 5; j++) {
        printf("For loop: %d\n", j);
    }

    // if statement
    int x = 10;
    if (x > 5) {
        printf("x is greater than 5\n");
    } else {
        printf("x is not greater than 5\n");
    }

    // switch-case
    int y = 2;
    switch (y) {
        case 1:
            printf("y is 1\n");
            break;
        case 2:
            printf("y is 2\n");
            break;
        default:
            printf("y is not 1 or 2\n");
    }

    return 0;
}
