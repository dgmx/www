package java;

public class cuadrado {
    
    public static int cuadrado(int numero) {
        return numero * numero;
    }

    public static void main(String[] args) {
        int resultado = cuadrado(5);
        System.out.println("El cuadrado de 5 es: " + resultado);
    }
}
