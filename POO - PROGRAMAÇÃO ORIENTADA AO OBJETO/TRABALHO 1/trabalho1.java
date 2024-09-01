public class Main {
    public static void main(String[] args) {
        int i = 0;

        // while loop
        while (i < 5) {
            System.out.println("While loop: " + i);
            i++;
        }

        // do-while loop
        do {
            System.out.println("Do-While loop: " + i);
            i--;
        } while (i > 0);

        // for loop
        for (int j = 0; j < 5; j++) {
            System.out.println("For loop: " + j);
        }

        // if statement
        int x = 10;
        if (x > 5) {
            System.out.println("x is greater than 5");
        } else {
            System.out.println("x is not greater than 5");
        }

        // switch-case
        int y = 2;
        switch (y) {
            case 1:
                System.out.println("y is 1");
                break;
            case 2:
                System.out.println("y is 2");
                break;
            default:
                System.out.println("y is not 1 or 2");
        }
    }
}
