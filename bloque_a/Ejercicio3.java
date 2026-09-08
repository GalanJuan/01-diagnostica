import java.util.Scanner;

public class Ejercicio3 {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
            int edad = teclado.nextInt();

            if (edad >= 18) {
                System.out.println("Mayor de edad");
         } else {
             System.out.println("Menor de edad");
         }
        
        teclado.close();
    }
}