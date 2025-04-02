---
title: 21. Salida de datos
parent: Java
---

Salida de datos en Java
=======================

La salida de datos en Java se realiza a través de la clase **System.out**. La clase **System.out** es un objeto de la clase **PrintStream** y tiene varios métodos para imprimir diferentes tipos de datos, como enteros, cadenas, caracteres, etc.

Los métodos más comunes de la clase **PrintStream** son:

*   **print(String s):** imprime una cadena de texto en la salida estándar.
*   **println(String s):** imprime una cadena de texto en la salida estándar y agrega un salto de línea al final.
*   **printf(String format, Object… args):** imprime una cadena de texto formateada en la salida estándar.

La clase **PrintWriter** es otra opción para manejar la salida de datos. Es similar al `PrintStream`, pero tiene algunas características adicionales como el manejo de errores.

Tabla de contenidos


- [Salida de datos en Java](#salida-de-datos-en-java)
  - [Método print en Java](#método-print-en-java)
    - [Ejemplos](#ejemplos)
  - [Método println en Java](#método-println-en-java)
    - [Ejemplos](#ejemplos-1)
  - [Método printf en Java](#método-printf-en-java)
    - [Ejemplos](#ejemplos-2)
    - [Caracteres especiales](#caracteres-especiales)
  - [Caracteres de escape en Java](#caracteres-de-escape-en-java)

Método print en Java
--------------------

El método **print()** es uno de los métodos principales de la clase **PrintStream** (o PrintWriter) en Java, que se utiliza para imprimir una cadena de texto en la salida estándar (generalmente en la consola). Este método no agrega un salto de línea al final de la cadena de texto impresa, por lo que si se llama varias veces seguidas, todas las cadenas de texto se imprimirán en la misma línea.

Una de las ventajas de usar el método **print()** es que se pueden concatenar varias cadenas en una sola línea. También se pueden imprimir otros tipos de datos, como números o caracteres, utilizando los métodos **print()** correspondientes, como `print(int)`, `print(double)`, `print(char)`, etc.

Además de imprimir en consola, el método **print()** también puede imprimir en un archivo o en una red.

Este método es muy útil cuando se quiere imprimir información de depuración, mostrar resultados intermedios, o para mostrar mensajes al usuario. Sin embargo, si desea mostrar una cadena de texto en varias líneas, se recomienda utilizar el método `println()` en lugar de `print()`.

### Ejemplos

Aquí te dejo algunos ejemplos completos de cómo utilizar el método **print()** en Java:

1. Ejemplo básico:

```java
public class EjemploPrint {
    public static void main(String[] args) {
        System.out.print("Hola mundo!");
    }
}
```
Este ejemplo simplemente imprime **“Hola mundo!”** en la consola.

2. Imprimir varias variables en una sola línea:
```java
public class EjemploPrint {
    public static void main(String[] args) {
        String nombre = "Juan";
        int edad = 30;
        double peso = 75.5;
        
        System.out.print("Mi nombre es " + nombre + ", tengo " + edad + " años y peso " + peso + " kg.");
    }
}
```
Este ejemplo crea tres variables, `nombre`, `edad` y `peso`, y las usa para imprimir una cadena de texto en la consola. El resultado sería **“Mi nombre es Juan, tengo 30 años y peso 75.5 kg.”**

3. Imprimir una lista de números:
```java
public class EjemploPrint {
    public static void main(String[] args) {
        int[] numeros = {1, 2, 3, 4, 5};
        for (int num : numeros) {
            System.out.print(num + " ");
        }
    }
}
```
Este ejemplo crea una lista de números y los imprime en una sola línea utilizando un ciclo `for` y el método **print()**. El resultado sería **“1 2 3 4 5”**.

Espero que estos ejemplos te ayuden a entender mejor cómo utilizar el método **print()** en Java.

Método println en Java
----------------------

El método **println()** en Java es muy similar al método **print()**, con la diferencia de que agrega automáticamente un salto de línea al final de lo que se está imprimiendo.

Esto significa que cada vez que se utiliza el método **println()**, el cursor se moverá a la siguiente línea después de imprimir el contenido especificado.

### Ejemplos

Aquí te dejo algunos ejemplos de cómo utilizar el método **println()** en Java:

1.  Ejemplo básico:
```java
public class EjemploPrintln {
    public static void main(String[] args) {
        System.out.println("Hola mundo!");
    }
}
```
Este ejemplo simplemente imprime **“Hola mundo!”** en la consola, y después mueve el cursor a la siguiente línea.

2.  Imprimir varias variables en diferentes líneas:
```java
public class EjemploPrintln {
    public static void main(String[] args) {
        String nombre = "Juan";
        int edad = 30;
        double peso = 75.5;
        
        System.out.println("Mi nombre es " + nombre);
        System.out.println("Tengo " + edad + " años");
        System.out.println("Peso " + peso + " kg.");
    }
}
```

Este ejemplo crea tres variables, `nombre`, `edad` y `peso`, y las utiliza para imprimir una cadena de texto en la consola en diferentes líneas.

3.  Imprimir una lista de números:
```java
public class EjemploPrintln {
    public static void main(String[] args) {
        int[] numeros = {1, 2, 3, 4, 5};
        for (int num : numeros) {
            System.out.println(num);
        }
    }
}

```
Este ejemplo crea una lista de números y los imprime en diferentes líneas utilizando un ciclo `for` y el método **println()**.

Método printf en Java
---------------------

El método **printf()** en Java es una versión mejorada del método **print()** y **println()** que permite un mayor control sobre el formato de la salida.

El método **printf()** en Java es un método estático de la clase `PrintStream` (y también de la clase `PrintWriter`) que permite imprimir una cadena de texto formateada.

Este método toma una cadena de formato como primer argumento, seguida de los valores que se van a insertar en la cadena de formato en los lugares especificados por los marcadores de posición.

Los marcadores de posición son especificados usando el símbolo **“%”** seguido de un carácter que indica el tipo de formato.

La sintaxis del método **printf()** es la siguiente:

`System.out.printf(formato, argumentos);`



Donde `formato` es una cadena de texto que contiene una serie de especificadores de formato que indican cómo se deben imprimir los `argumentos`.

### Ejemplos

Aquí te dejo algunos ejemplos de cómo utilizar el método **printf()** en Java:

1.  Ejemplo básico:
```java
public class EjemploPrintf {
    public static void main(String[] args) {
        System.out.printf("Hola %s", "Mundo!");
    }
}
```
Este ejemplo imprime **“Hola Mundo!”** en la consola. El especificador de formato `%s` indica que el siguiente argumento debe ser una cadena de texto.

2.  Imprimir un número con decimales:
```java
public class EjemploPrintf {
    public static void main(String[] args) {
        double num = 3.14159265;
        System.out.printf("El número pi es aproximadamente %.2f", num);
    }
}
```
Este ejemplo imprime **“El número pi es aproximadamente 3.14”** en la consola. El especificador de formato `%.2f` indica que el siguiente argumento debe ser un número con dos decimales.

3.  Imprimir una tabla:
```java
public class EjemploPrintf {
    public static void main(String[] args) {
        String[][] tabla = {
            {"Juan", "25", "1.78"},
            {"Maria", "28", "1.65"},
            {"Pedro", "32", "1.93"}
        };
        System.out.printf("%-10s %-10s %-10s\n", "Nombre", "Edad", "Altura");
        for (String[] fila : tabla) {
            System.out.printf("%-10s %-10s %-10s\n", fila[0], fila[1], fila[2]);
        }
    }
}
```
Este ejemplo imprime una tabla en la consola con los datos de tres personas. El especificador de formato `%-10s` indica que el siguiente argumento debe ser una cadena de texto alineada a la izquierda en un espacio de 10 caracteres.

### Caracteres especiales

Los caracteres especiales son aquellos que tienen un significado especial en una cadena de formato para el método **printf()**. Algunos de los caracteres especiales más comunes son:

*   **%s:** Especificador de formato para una cadena de texto.
*   **%d:** Especificador de formato para un número entero.
*   **%f:** Especificador de formato para un número de punto flotante.
*   **%n:** Inserta un salto de línea.
*   **%%:** Imprime un carácter de porcentaje literal.
*   **%c:** Especificador de formato para un carácter.

Caracteres de escape en Java
----------------------------

Los caracteres de escape en Java son caracteres especiales que tienen un significado especial en una cadena de caracteres. Estos caracteres se representan con una barra invertida **\\** seguida de otro carácter.

Algunos ejemplos de caracteres de escape comunes en Java incluyen:

*   **\\n:** Salto de línea. Se utiliza para insertar un salto de línea en una cadena de caracteres.

```java
System.out.println("Hola\nMundo");
```

*   **\\t:** Tabulador. Se usa para insertar un tabulador en una cadena de caracteres.

```java
System.out.println("Hola\tMundo");
```


*   **\\”:** Comillas dobles. Se utiliza para incluir comillas dobles dentro de una cadena de caracteres delimitada por comillas dobles.

```java
System.out.println("Me gusta decir \"Hola mundo\"");
```

*   **\\**‘**:** Comilla simple. Se utiliza para incluir comilla simple dentro de una cadena de caracteres delimitada por comillas simples.
```java
System.out.println("Me gusta decir 'Hola mundo'");
```

*   **\\\\:** Barra invertida. Se utiliza para incluir una barra invertida dentro de una cadena de caracteres.

```java
System.out.println("La ruta es C:\\Windows\\System32");
```

En resumen, los caracteres de escape en Java son caracteres especiales que tienen un significado especial y se representan con una barra invertida **\\** seguida de otro carácter.