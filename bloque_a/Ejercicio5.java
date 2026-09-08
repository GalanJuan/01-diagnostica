public class Ejercicio5 {

    public static double calcularPromedio(double a, double b) {
        return (a+b)/2.0;
    }

    public static void main(String[] args) {
        System.out.println(calcularPromedio(8.0, 9.5));
        
        Estudiante alumno = new Estudiante("Juanjo", 16);
        alumno.mostrarFicha();
    }
}

class Estudiante {
    String nombre;
    int edad;

    public Estudiante(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public void mostrarFicha() {
        System.out.println(nombre);
        System.out.println(edad);
    }
}