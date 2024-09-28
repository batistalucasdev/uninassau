public class trabalho1 {
    public static void main(String[] args) {
        int i = 0;

        // while loop
        while (i < 5) {
            System.out.println("Laço While: " + i);
            i++;
        }

        // do-while loop
        do {
            System.out.println("Laço Do-While: " + i);
            i--;
        } while (i > 0);

        // for loop
        for (int j = 0; j < 5; j++) {
            System.out.println("Laço For: " + j);
        }

        // condicional if
        int x = 10;
        if (x > 5) {
            System.out.println("x é maior que 5");
        } else {
            System.out.println("x é menor que 5");
        }

        // switch-case
        int y = 2;
        switch (y) {
            case 1:
                System.out.println("y é 1");
                break;
            case 2:
                System.out.println("y é 2");
                break;
            default:
                System.out.println("y não é 1 ou 2");
        }
    }
}
