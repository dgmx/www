---
title: 20. Entrada de datos
parent: Java
---

Entrada de datos en Java
========================

En Java, se pueden utilizar varias formas para ingresar datos por teclado. Una forma común es usar la clase Scanner, clase BufferedReader y clase Console.

Tabla de contenidos

- [Entrada de datos en Java](#entrada-de-datos-en-java)
  - [Clase Scanner en Java](#clase-scanner-en-java)
    - [Métodos de la clase Scanner](#métodos-de-la-clase-scanner)
  - [Clase BufferedReader en Java](#clase-bufferedreader-en-java)


Clase Scanner en Java
---------------------

La **clase Scanner** en Java es una clase proporcionada por el paquete java.util, que permite leer datos de diferentes orígenes de entrada, como la consola, archivos, redes, etc. La **clase Scanner** proporciona varios métodos para leer diferentes tipos de datos, como números, cadenas, booleanos, entre otros.

Para utilizar la clase Scanner, primero debes importarla:

 `import java.util.Scanner;`

Luego, puedes crear una instancia de la clase Scanner proporcionando una fuente de entrada, como por ejemplo, la consola:
 
`Scanner scanner = new Scanner(System.in);`

Una vez creado el objeto Scanner, puedes utilizar sus métodos para leer diferentes tipos de datos.

### Métodos de la clase Scanner

Algunos de los métodos más comunes son:

*   **next():** Lee una palabra (una secuencia de caracteres delimitada por espacios en blanco) desde la fuente de entrada y devuelve una cadena.

*   **nextLine():** Lee una línea completa (una secuencia de caracteres delimitada por un salto de línea) desde la fuente de entrada y devuelve una cadena.

*   **nextInt():** Lee un entero desde la fuente de entrada y devuelve un valor `int`.

*   **nextDouble():** Lee un número de punto flotante desde la fuente de entrada y devuelve un valor `double`.

*   **nextFloat():** Lee un número de punto flotante desde la fuente de entrada y devuelve un valor `float`.

*   **nextBoolean():** Lee un valor booleano desde la fuente de entrada y devuelve un valor `boolean`.

*   **nextByte():** Lee un valor byte desde la fuente de entrada y devuelve un valor `byte`.

*   **nextShort():** Lee un valor short desde la fuente de entrada y devuelve un valor `short`.

*   **nextLong():** Lee un valor long desde la fuente de entrada y devuelve un valor `long`.

*   **nextBigInteger():** Lee un valor BigInteger desde la fuente de entrada y devuelve un objeto `BigInteger`.

*   **nextBigDecimal():** Lee un valor BigDecimal desde la fuente de entrada y devuelve un objeto `BigDecimal`.

*   **close():** Cierra la fuente de entrada asociada con el objeto Scanner y libera cualquier recurso asociado. Es recomendable cerrar un objeto Scanner una vez que ya no sea necesario para evitar fugas de memoria.

A continuación te muestro un ejemplo de cómo usar la **clase Scanner** para leer un número entero, una cadena de texto y un valor booleano:
```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Ingresa un número entero: ");
        int num = scanner.nextInt();
        System.out.print("Ingresa una cadena de texto: ");
        String str = scanner.nextLine();
        System.out.print("Ingresa un valor booleano: ");
        boolean b = scanner.nextBoolean();
        System.out.println("El número ingresado es: " + num);
        System.out.println("La cadena de texto ingresada es: " + str);
        System.out.println("El valor booleano ingresado es: " + b);
    }
}
```
Es importante mencionar que al utilizar el método `nextInt()` se consume el caracter de salto de línea, por lo cual es recomendable utilizar el método `nextLine()` inmediatamente después para consumirlo y evitar problemas con la lectura de la cadena de texto y el valor booleano.

**Además de los métodos mencionados anteriormente, la clase Scanner también proporciona algunas otras funcionalidades útiles, como:**

*   **useDelimiter():** permite establecer un delimitador personalizado para separar los datos leídos. Por defecto, el delimitador es el espacio en blanco.
*   **next():** permite leer el siguiente token de la fuente de entrada.
*   **hasNext(pattern):** permite verificar si hay un siguiente token que coincida con el patrón especificado.
*   **findInLine():** permite buscar un patrón en la línea actual.
*   **findWithinHorizon():** permite buscar un patrón en un horizonte de lectura específico.

Clase BufferedReader en Java
----------------------------

La **clase BufferedReader** es una clase que proporciona una forma eficiente de leer caracteres, líneas y arreglos de caracteres desde una fuente de caracteres de subyacente, como un archivo o una conexión de red.

La **clase BufferedReader** utiliza un buffer interno para almacenar los caracteres leídos, lo que aumenta el rendimiento al reducir el número de operaciones de lectura realizadas en la fuente de caracteres subyacente.

Aquí hay un ejemplo de cómo utilizar la clase BufferedReader para leer una línea desde el teclado:
```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class LecturaTeclado {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        System.out.print("Introduce una cadena: ");
        String cadena = br.readLine();
        
        System.out.println("Has introducido la cadena: " + cadena);
        
        br.close();
    }
}
``` 
En este ejemplo, se crea un objeto **BufferedReader** que utiliza un objeto **InputStreamReade**r para leer desde el teclado (System.in). Luego se utiliza el método `readLine()` para leer una línea desde el teclado y se almacena en una variable cadena. Finalmente, se imprime en pantalla el valor leído y se cierra el **BufferedReader**.

Es importante tener en cuenta que el BufferedReader debe ser cerrado después de su uso para liberar los recursos utilizados.

