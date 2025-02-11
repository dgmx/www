---
title: "22. Ejercicios POO"
parent: "Java"
---

# Programación Orientada a Objetos

La programación orientada a objetos (POO) es un paradigma de programación que utiliza “objetos” para modelar datos y métodos asociados. Java es un lenguaje de programación que soporta POO de manera robusta. A continuación, se presentan una serie de ejercicios que te ayudarán a mejorar tus habilidades en POO utilizando Java.

Ejercicio 1: Clase `Persona`
----------------------------

Crea una clase `Persona` con atributos `nombre`, `edad` y `dni`. Incluye métodos para establecer y obtener los valores de estos atributos, así como un método que muestre la información de la persona.
```java
    class Persona {
        private String nombre;
        private int edad;
        private String dni;
    
        public Persona(String nombre, int edad, String dni) {
            this.nombre = nombre;
            this.edad = edad;
            this.dni = dni;
        }
    
        public String getNombre() {
            return nombre;
        }
    
        public void setNombre(String nombre) {
            this.nombre = nombre;
        }
    
        public int getEdad() {
            return edad;
        }
    
        public void setEdad(int edad) {
            this.edad = edad;
        }
    
        public String getDni() {
            return dni;
        }
    
        public void setDni(String dni) {
            this.dni = dni;
        }
    
        public void mostrarInformacion() {
            System.out.println("Nombre: " + nombre);
            System.out.println("Edad: " + edad);
            System.out.println("DNI: " + dni);
        }
    }
    
    public class TestPersona {
        public static void main(String[] args) {
            Persona persona = new Persona("Juan Perez", 30, "12345678A");
            persona.mostrarInformacion();
            persona.setEdad(31);
            System.out.println("Edad actualizada: " + persona.getEdad());
        }
    }
```

Ejercicio 2: Clase `CuentaBancaria`
-----------------------------------

Crea una clase `CuentaBancaria` con atributos `numeroCuenta`, `saldo` y `titular`. Incluye métodos para depositar y retirar dinero, así como un método que muestre el saldo actual.
```java
    class CuentaBancaria {
        private String numeroCuenta;
        private double saldo;
        private String titular;
    
        public CuentaBancaria(String numeroCuenta, String titular) {
            this.numeroCuenta = numeroCuenta;
            this.titular = titular;
            this.saldo = 0.0;
        }
    
        public String getNumeroCuenta() {
            return numeroCuenta;
        }
    
        public double getSaldo() {
            return saldo;
        }
    
        public String getTitular() {
            return titular;
        }
    
        public void depositar(double cantidad) {
            if (cantidad > 0) {
                saldo += cantidad;
            }
        }
    
        public boolean retirar(double cantidad) {
            if (cantidad > 0 && cantidad <= saldo) {
                saldo -= cantidad;
                return true;
            }
            return false;
        }
    
        public void mostrarSaldo() {
            System.out.println("Saldo actual: " + saldo);
        }
    }
    
    public class TestCuentaBancaria {
        public static void main(String[] args) {
            CuentaBancaria cuenta = new CuentaBancaria("1234567890", "Ana Gomez");
            cuenta.depositar(500);
            cuenta.mostrarSaldo();
            cuenta.retirar(200);
            cuenta.mostrarSaldo();
            boolean exito = cuenta.retirar(400);
            System.out.println("Retiro exitoso: " + exito);
            cuenta.mostrarSaldo();
        }
    }
```

Ejercicio 3: Clase `Círculo` y Herencia
---------------------------------------

Crea una clase `Figura` con un método `calcularArea`. Luego, crea una clase `Círculo` que herede de `Figura` y sobrescriba el método `calcularArea` para calcular el área de un círculo.
```java
    abstract class Figura {
        public abstract double calcularArea();
    }
    
    class Circulo extends Figura {
        private double radio;
    
        public Circulo(double radio) {
            this.radio = radio;
        }
    
        public double getRadio() {
            return radio;
        }
    
        public void setRadio(double radio) {
            this.radio = radio;
        }
    
        @Override
        public double calcularArea() {
            return Math.PI * radio * radio;
        }
    }
    
    public class TestFigura {
        public static void main(String[] args) {
            Circulo circulo = new Circulo(5);
            System.out.println("Área del círculo: " + circulo.calcularArea());
        }
    }
```

Ejercicio 4: Clase `Empleado` y Polimorfismo
--------------------------------------------

Crea una clase `Empleado` con atributos `nombre` y `salario`, y un método `calcularSalario`. Luego, crea una clase `EmpleadoPorHora` que herede de `Empleado` y sobrescriba el método `calcularSalario` para calcular el salario en función de las horas trabajadas y la tarifa por hora.
```java
    class Empleado {
        protected String nombre;
        protected double salario;
    
        public Empleado(String nombre) {
            this.nombre = nombre;
            this.salario = 0.0;
        }
    
        public String getNombre() {
            return nombre;
        }
    
        public double getSalario() {
            return salario;
        }
    
        public void setSalario(double salario) {
            this.salario = salario;
        }
    
        public double calcularSalario() {
            return salario;
        }
    }
    
    class EmpleadoPorHora extends Empleado {
        private int horasTrabajadas;
        private double tarifaPorHora;
    
        public EmpleadoPorHora(String nombre, int horasTrabajadas, double tarifaPorHora) {
            super(nombre);
            this.horasTrabajadas = horasTrabajadas;
            this.tarifaPorHora = tarifaPorHora;
        }
    
        @Override
        public double calcularSalario() {
            return horasTrabajadas * tarifaPorHora;
        }
    }
    
    public class TestEmpleado {
        public static void main(String[] args) {
            Empleado empleadoFijo = new Empleado("Carlos Martinez");
            empleadoFijo.setSalario(3000);
            System.out.println("Salario del empleado fijo: " + empleadoFijo.calcularSalario());
    
            EmpleadoPorHora empleadoPorHora = new EmpleadoPorHora("Laura Jimenez", 120, 15.5);
            System.out.println("Salario del empleado por hora: " + empleadoPorHora.calcularSalario());
        }
    }
```

Ejercicio 5: Clase `Rectángulo` con Interfaces
----------------------------------------------

Crea una interfaz `Dibujable` con un método `dibujar`. Luego, crea una clase `Rectangulo` que implemente esta interfaz y defina el método `dibujar`.
```java
    interface Dibujable {
        void dibujar();
    }
    
    class Rectangulo implements Dibujable {
        private double largo;
        private double ancho;
    
        public Rectangulo(double largo, double ancho) {
            this.largo = largo;
            this.ancho = ancho;
        }
    
        public double getLargo() {
            return largo;
        }
    
        public void setLargo(double largo) {
            this.largo = largo;
        }
    
        public double getAncho() {
            return ancho;
        }
    
        public void setAncho(double ancho) {
            this.ancho = ancho;
        }
    
        @Override
        public void dibujar() {
            System.out.println("Dibujando un rectángulo de " + largo + " x " + ancho);
        }
    }
    
    public class TestDibujable {
        public static void main(String[] args) {
            Rectangulo rectangulo = new Rectangulo(10, 5);
            rectangulo.dibujar();
        }
    }
```

Ejercicio 6: Clase `Libro` 
----------------------------------------------
Realiza una clase que represente a un libro. Un libro se define por:
- ISBN
- titulo
- numero de paginas
- autor
- prestado

Debe tener un constructor vacio y otro por defecto. Encapsula todos sus atributos. Un libro puede realizar lo siguiente:
- prestar: comprueba si esta o no prestado y pone el atributo prestado a true.
- devolver: comprueba si esta o no prestado y pone el atributo prestado a false.
- imprimir: dado un coste, calcularemos el coste de imprimir todas las paginas del libro.

Muestra la información de la siguiente manera:
- Cuando este prestado:
  - El libro `ISBN` con titulo `titulo` y autor `autor` tiene `numero paginas` y esta `prestado`
- Cuando no este prestado:
  - El libro `ISBN` con titulo `titulo` y autor `autor` tiene `numero paginas` y `no esta prestado``

Un libro es igual a otro cuando sus ISBN son iguales.

**Metodo main:**
```java
package com.mycompany.libro;

/**
 * Realiza una clase que represente a un libro.
 * Un libro se define por:
 * - ISBN
 * - titulo
 * - numero de paginas
 * - autor
 * - prestado
 * 
 * Debe tener un constructor vacio y otro por defecto.
 * Encapsula todos sus atributos.
 * 
 * Un libro puede realizar lo siguiente:
 *
 * - prestar: comprueba si esta o no prestado y pone el atributo prestado a
 * true.
 * - devolver: comprueba si esta o no prestado y pone el atributo prestado a
 * false.
 * - imprimir: dado un coste, calcularemos el coste de imprimir todas las
 * paginas del libro.
 *
 * Muestra la información de la siguiente manera:
 * Cuando este prestado:
 * El libro (<ISBN>) con titulo <titulo> y autor <autor> tiene <numero paginas>
 * paginas y esta prestado
 * Cuando no este prestado:
 * El libro (<ISBN>) con titulo <titulo> y autor <autor> tiene <numero paginas>
 * paginas y no esta prestado
 *
 * Un libro es igual a otro cuando sus ISBN son iguales
 *
 */
public class App {

    public static void main(String[] args) {

        // Creo una instancia de Libro
        Libro libro1 = new Libro("123456789", "Cien años de soledad", 500, "Gabriel Garcia Marquez", false);

        System.out.println(libro1);

        // Presto el libro
        libro1.prestar();

        // Muestro la informacion del libro
        System.out.println(libro1);

        // Devolvemos el libro
        libro1.devolver();

        // Devolvemos el libro de nuevo, no nos deja
        libro1.devolver();

        // Muestro la informacion del libro
        System.out.println(libro1);

        // Obtengo el coste de la impresión
        double costeImpresion = libro1.imprimir(0.05);

        System.out.println("El coste ha sido de " + costeImpresion + "€");

        // Creo una instancia de Libro
        Libro libro2 = new Libro("12345678", "Cinco años de soledad", 500, "Gabriel Garcia Marquez", false);

        // Indico si los libros son iguales
        if (libro1.equals(libro2)) {
            System.out.println("Los libros son iguales");
        } else {
            System.out.println("Los libros no son iguales");
        }

    }
}
```
**Clase Libro**
```java
package com.mycompany.libro;

import java.util.Objects;

public class Libro {

    // Atributos
    private String ISBN;
    private String titulo;
    private int numeroPaginas;
    private String autor;
    private boolean prestado;

    // Constructores
    public Libro() {
        this("", "", 0, "", false);
    }

    public Libro(String ISBN, String titulo, int numeroPaginas, String autor, boolean prestado) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.numeroPaginas = numeroPaginas;
        this.autor = autor;
        this.prestado = prestado;
    }

    // Getters y setters
    public String getISBN() {
        return ISBN;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public int getNumeroPaginas() {
        return numeroPaginas;
    }

    public void setNumeroPaginas(int numeroPaginas) {
        this.numeroPaginas = numeroPaginas;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public boolean isPrestado() {
        return prestado;
    }

    public void setPrestado(boolean prestado) {
        this.prestado = prestado;
    }

    // Métodos
    public void prestar() {
        // Compruebo si esta prestado o no
        if (this.prestado) {
            System.out.println("Este libro ya esta prestado");
        } else {
            // Indico que el libro esta prestado
            this.prestado = true;
            System.out.println("El libro se ha prestado");
        }

    }

    public void devolver() {
        if (!this.prestado) {
            System.out.println("Este libro no esta prestado");
        } else {
            // Indico que el libro no esta prestado
            this.prestado = false;
            System.out.println("El libro se ha devuelto");
        }
    }

    public double imprimir(double coste) {
        return coste * this.numeroPaginas;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 89 * hash + Objects.hashCode(this.ISBN);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Libro other = (Libro) obj;
        return Objects.equals(this.ISBN, other.ISBN);
    }

    @Override
    public String toString() {

        // Mensaje base
        String mensaje = "El libro " + this.ISBN + " con titulo " + this.titulo + " y autor " + this.autor + " tiene " + this.numeroPaginas + " paginas y ";

        // Sino esta prestado, añadimos un "no"
        if (!this.prestado) {
            mensaje += " no ";
        }

        mensaje += "esta prestado";

        return mensaje;
    }

}
```

Ejercicio 7: Clase `Ordenador` 
----------------------------------------------
Crea una clase que represente a un ordenador. Un ordenador se define por:
- Marca
- Modelo
- GB de RAM (Por defecto, 4GB)
- Capacidad disco Duro en GB (Por defecto, 50GB)
- Espacio utilizado en el disco duro
- Estar o no encendido (por defecto esta apagado)

La RAM debe ser potencia de 2, de lo contrario lanzaremos una excepcion. Encapsula todos los atributos. Tendra los siguientes constructores:
- Vacio
- Solo pidiendo la RAM
- Solo pidiendo la RAM y la capacidad del disco duro
- Pidiendo todos los atributos excepto el espacio utilizado y encendido
    
Las operaciones que podra realizar son:
- encender: Enciende el ordenador, haciendo que el atributo encendido este a true
- apagar: Enciende el ordenador, haciendo que el atributo encendido este a false
- transferir archivos: dado un numero de GB, se aumenta el espacio utilizado. Si no cabe, se debera indicar. 

Solo se podra hacer si el ordenador esta encendido.
- eliminar archivos: dado un numero de GB, se elimina el espacio indicado, si supera al espacio utilizado se quedara en 0. Solo se podra hacer si el ordenador esta encendido.

Un ordenador es igual a otro cuando tienen la misma marca y modelo.

Muestra la informacion con toString

**Metodo Main**

```java
package com.mycompany.ordenador;

/**
 *
 * Crea una clase que represente a un ordenador.
 *
 * Un ordenador se define por:
 *
 * - Marca
 * - Modelo
 * - GB de RAM (Por defecto, 4GB)
 * - Capacidad disco Duro en GB (Por defecto, 50GB)
 * - Espacio utilizado en el disco duro
 * - Estar o no encendido (por defecto esta apagado)
 *
 * La RAM debe ser potencia de 2, de lo contrario lanzaremos una excepcion
 *
 * Encapsula todos los atributos
 *
 * Tendra los siguientes constructores:
 * - Vacio
 * - Solo pidiendo la RAM
 * - Solo pidiendo la RAM y la capacidad del disco duro
 * - Pidiendo todos los atributos excepto el espacio utilizado y encendido
 *
 * Las operaciones que podra realizar son:
 * - encender: Enciende el ordenador, haciendo que el atributo encendido este a true
 * - apagar: Enciende el ordenador, haciendo que el atributo encendido este a false
 * - transferir archivos: dado un numero de GB, se aumenta el espacio utilizado.
 * Si no cabe, se debera indicar. Solo se podra hacer si el ordenador esta
 * encendido.
 *
 * - eliminar archivos: dado un numero de GB, se elimina el espacio indicado, si
 * supera al espacio utilizado se quedara en 0. Solo se podra hacer si el
 * ordenador esta encendido.
 *
 * Un ordenador es igual a otro cuando tienen la misma marca y modelo.
 *
 * Muestra la informacion con toString
 *
 */

public class App {

    public static void main(String[] args) {

        // Creo una instancia de Ordenador
        Ordenador ordenador1 = new Ordenador("DELL", "XPS", 6, 50);

        // Muestro la informacion del ordenador
        System.out.println(ordenador1);

        // Encendemos el ordenador
        ordenador1.encender();

        // Encendemos el ordenador de nuevo, no nos deja
        ordenador1.encender();

        // Muestro la informacion del ordenador
        System.out.println(ordenador1);

        // Apagamos el ordenador
        ordenador1.apagar();

        // Encendemos el ordenador
        ordenador1.encender();

        // Muestro la informacion del ordenador
        System.out.println(ordenador1);

        // Transferimos 30GB
        ordenador1.transferirArchivos(30);

        // Transferimos 30GB, no nos deja, seguimos teniendo 30GB
        ordenador1.transferirArchivos(30);

        // eliminamos 20GB
        ordenador1.eliminarArchivos(20);

        // eliminamos 20GB, se queda en 0
        ordenador1.eliminarArchivos(20);

        // Creo una instancia de Ordenador
        Ordenador ordenador2 = new Ordenador("DELL", "XPSV2", 64, 50);

        // Indico si los ordenadores son iguales
        if (ordenador1.equals(ordenador2)) {
            System.out.println("Los ordenadores son iguales");
        } else {
            System.out.println("Los ordenadores no son iguales");
        }

    }
}
```
**Clase Ordenador**

```java
package com.mycompany.ordenador;

import java.util.Objects;

public class Ordenador {

    // Atributos
    private String marca;
    private String modelo;
    private int gbRam;
    private int capacidadDiscoDuro;
    private int espacioUtilizado;
    private boolean encendido;

    // Constructores
    public Ordenador() {
        this("", "", 4, 50);
    }

    public Ordenador(int gbRam) {
        this("", "", gbRam, 50);
    }

    public Ordenador(int gbRam, int capacidadDiscoDuro) {
        this("", "", gbRam, capacidadDiscoDuro);
    }

    public Ordenador(String marca, String modelo, int gbRam, int capacidadDiscoDuro) {

        // Valido si los GB son potencia de 2
        if (!esPotenciaDe2(gbRam)) {
            throw new IllegalArgumentException("La RAM no es potencia de 2");
        }

        this.marca = marca;
        this.modelo = modelo;
        this.gbRam = gbRam;
        this.capacidadDiscoDuro = capacidadDiscoDuro;
    }

    // Getters y setters
    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getGbRam() {
        return gbRam;
    }

    public void setGbRam(int gbRam) {
        // Valido si los GB son potencia de 2
        if (!esPotenciaDe2(gbRam)) {
            throw new IllegalArgumentException("La RAM no es potencia de 2");
        }
        this.gbRam = gbRam;
    }

    public int getCapacidadDiscoDuro() {
        return capacidadDiscoDuro;
    }

    public void setCapacidadDiscoDuro(int capacidadDiscoDuro) {
        this.capacidadDiscoDuro = capacidadDiscoDuro;
    }

    public int getEspacioUtilizado() {
        return espacioUtilizado;
    }

    public void setEspacioUtilizado(int espacioUtilizado) {
        this.espacioUtilizado = espacioUtilizado;
    }

    public boolean isEncendido() {
        return encendido;
    }

    public void setEncendido(boolean encendido) {
        this.encendido = encendido;
    }

    // Metodos
    public void encender() {
        // Compruebo si esta encendido
        if (this.encendido) {
            System.out.println("El ordenador ya esta encendido");
        } else {
            // Enciendo el ordenador
            this.encendido = true;
            System.out.println("El ordenador se ha encendido");
        }
    }

    public void apagar() {
        // Compruebo si esta apagado
        if (!this.encendido) {
            System.out.println("El ordenador ya esta apagado");
        } else {
            // Apago el ordenador
            this.encendido = false;
            System.out.println("El ordenador se ha apagado");
        }
    }

    public void transferirArchivos(int gb) {
        // Compruebo si esta apagado
        if (this.encendido) {

            // Compruebo si hay espacio
            if (this.espacioUtilizado + gb <= this.capacidadDiscoDuro) {
                // Aumentamos el espacio
                this.espacioUtilizado += gb;
                System.out.println("Transferidos " + gb + " GB. Espacio actual: " + this.espacioUtilizado);
            } else {
                System.out.println("No hay espacio suficiente");
            }

        } else {
            System.out.println("El ordenador esta apagado");
        }
    }

    public void eliminarArchivos(int gb) {
        // Compruebo si esta apagado
        if (this.encendido) {

            // Compruebo si el espacio resultante es negativo para dejarlo a 0
            if (this.espacioUtilizado - gb < 0) {
                this.espacioUtilizado = 0;
            } else {
                // Disminuimos el espacio
                this.espacioUtilizado -= gb;
            }
            System.out.println("Eliminados " + gb + " GB. Espacio actual: " + this.espacioUtilizado);

        } else {
            System.out.println("El ordenador esta apagado");
        }
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 29 * hash + Objects.hashCode(this.marca);
        hash = 29 * hash + Objects.hashCode(this.modelo);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Ordenador other = (Ordenador) obj;
        if (!Objects.equals(this.marca, other.marca)) {
            return false;
        }
        return Objects.equals(this.modelo, other.modelo);
    }

    @Override
    public String toString() {

        // Convirtiendo el estado del atributo encendido
        String estadoEncendido = "no";

        if (this.encendido) {
            estadoEncendido = "si";
        }

        return "Ordenador{" + "marca=" + marca + ", modelo=" + modelo + ", gbRam=" + gbRam + ", capacidadDiscoDuro=" + capacidadDiscoDuro + ", espacioUtilizado=" + espacioUtilizado + ", encendido=" + estadoEncendido + '}';
    }

    // Privado, solo se puede llamar desde dentro de la clase
    private boolean esPotenciaDe2(int numero) {
        // Si es negativo, no es potencias de 2
        if (numero <= 0) {
            return false;
        }

        // Obtenemos el logaritmo del numero y lo dividimos entre el logaritmo de 2
        // Si es logaritmo de 2 no debe tener decimales
        double logBase2 = Math.log(numero) / Math.log(2);
        return logBase2 == (int) logBase2;

    }

}
```

Conclusión
----------

Estos ejercicios te proporcionarán una base sólida para trabajar con programación orientada a objetos en Java. Practicar estos conceptos es esencial para desarrollar tus habilidades de programación y te permitirá abordar problemas más complejos en el futuro. ¡Sigue practicando y explorando más sobre Java para convertirte en un programador más competente!