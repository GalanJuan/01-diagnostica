import java.util.Scanner;

    public class Ejercicio2 {
        public static void main(String[] args) {
              Scanner teclado = new Scanner(System.in);
           double  num1 = teclado.nextDouble();
            double num2 = teclado.nextDouble();

              System.out.println(num1 + num2);
                System.out.println(num1 - num2);
             System.out.println(num1 * num2);
              System.out.println(num1 / num2);
        
        teclado.close();
    }
}