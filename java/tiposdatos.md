---
title: "09. Tipos de datos"
parent: "Java"
---

Tipos de datos en Java
======================

Java es un lenguaje de programación de tipado estático, lo que significa que se especifica el tipo de datos de una variable en el momento de su declaración y no puede cambiar durante la ejecución del programa. Java tiene varios tipos de datos integrados, que se dividen en dos categorías principales: tipos de datos primitivos y tipos de datos de referencia.

*   **Tipos de datos primitivos:** Son los tipos de datos básicos que proporciona el lenguaje Java. Incluyen:
    *   **Enteros:** byte, short, int, long
    *   **Punto flotante:** float, double
    *   **Caracteres:** char
    *   **Booleanos:** boolean

Cada uno de estos tipos de datos tiene un rango de valores y un tamaño en bytes específico en la memoria.

*   **Tipos de datos de referencia**: Son los tipos de datos que se refieren a un objeto en lugar de almacenar el valor directamente. Incluyen:
    *   **String:** para almacenar cadenas de caracteres.
    *   **Arrays:** para almacenar un conjunto de elementos del mismo tipo.
    *   **Clases:** para representar un conjunto de atributos y métodos que definen una entidad.
    *   **Interfaces:** para especificar un conjunto de métodos que deben ser implementados por una clase.
    *   **Enums:** para representar un conjunto finito de valores.

Es importante tener en cuenta que los tipos de datos primitivos son pasados por valor y los tipos de datos de referencia son pasados por referencia, es decir, cuando se pasa un objeto a un método, se está pasando una referencia al objeto en lugar de una copia del objeto.

**Tabla de contenidos**

- [Tipos de datos en Java](#tipos-de-datos-en-java)
  - [Tipos de Datos Primitivos](#tipos-de-datos-primitivos)
    - [Tabla](#tabla)
  - [Ejemplos](#ejemplos)
  - [Tipos de datos de referencia](#tipos-de-datos-de-referencia)

Tipos de Datos Primitivos
-------------------------

Java tiene varios tipos de datos primitivos que se utilizan para almacenar valores básicos. A continuación, se describen los principales tipos de datos primitivos en Java:

*   **Enteros:**
    
    *   **byte:** es un tipo de datos de 8 bits que almacena valores enteros en el rango de -128 a 127.
    *   **short:** es un tipo de datos de 16 bits que almacena valores enteros en el rango de -32768 a 32767.
    
    *   **int:** es un tipo de datos de 32 bits que almacena valores enteros en el rango de -2147483648 a 2147483647.
    *   **long:** es un tipo de datos de 64 bits que almacena valores enteros en el rango de -9223372036854775808 a 9223372036854775807.

*   **Punto flotante:**
    *   **float:** es un tipo de datos de 32 bits que almacena valores de punto flotante con precisión simple.
    *   **double:** es un tipo de datos de 64 bits que almacena valores de punto flotante con precisión doble.

*   **Caracteres:**
    *   **char:** es un tipo de datos de 16 bits que almacena un carácter en el rango de 0 a 65535.

*   **Booleanos:**
    *   **boolean:** es un tipo de datos de 1 bit que almacena valores lógicos, es decir, true o false.

### Tabla

|   **Tipo de Dato**  |  **Tamaño**   |  **Descripción**    |
| ------------------- | ------------- | ------------------- |
| `byte`                | 1 byte        | Almacena números enteros de -128 a 127 |
| `short` | 2 bytes | Almacena números enteros de -32,768 a 32,767 |
| `int` | 4 bytes | Almacena números enteros de -2,147,483,648 a 2,147,483,647 |
| `long` | 8 bytes | Almacena números enteros de -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807 |
| `float` | 4 bytes | Almacena números decimales con suficiente para almacenar de 6 a 7 dígitos decimales |
| `double` | 8 bytes | Almacena números decimales con suficiente para almacenar 15 dígitos decimales |
| `char` | 2 bytes | Almacena un caracter o codigo ASCII |
| `boolean` | 1 bit | Almacena valores verdaderos o falsos (true y false) |


Ejemplos
--------

A continuación, se presentan algunos ejemplos de cómo utilizar los diferentes tipos de datos primitivos en Java:

*   Enteros:

```java
byte edad = 25; // Asigna el valor 25 a la variable edad de tipo byte. 
short numeroHabitaciones = 100; // Asigna el valor 100 a la variable numeroHabitaciones de tipo short. 
int numeroEmpleados = 1000; // Asigna el valor 1000 a la variable numeroEmpleados de tipo int. 
long numeroTelefono = 1234567890; // Asigna el valor 1234567890 a la variable numeroTelefono de tipo long.
```

*   Punto flotante:

```java
float precio = 19.99; // Asigna el valor 19.99 a la variable precio de tipo float. 
double distancia = 1234.5678; // Asigna el valor 1234.5678 a la variable distancia de tipo double.`
```

*   Caracteres:

```java
char letra = 'A'; // Asigna el carácter 'A' a la variable letra de tipo char.
```

*   Booleanos:

```java
boolean estaLloviendo = true; // Asigna el valor true a la variable estaLloviendo de tipo boolean. 
boolean esFinDeSemana = false; // Asigna el valor false a la variable esFinDeSemana de tipo boolean.
```

Tipos de datos de referencia
----------------------------

Java también tiene varios tipos de datos de referencia, que se utilizan para almacenar objetos y estructuras de datos más complejas. A continuación, se describen los principales tipos de datos de referencia en Java:

*   **String:** es una clase que se utiliza para almacenar y manipular cadenas de caracteres. _Por ejemplo:_

```java
String nombre = "Juan"; 
String apellido = new String("Perez");
```

*   **Arrays:** son estructuras de datos que se utilizan para almacenar un conjunto de elementos del mismo tipo. _Por ejemplo:_

```java
int[] numeros = {1, 2, 3, 4, 5}; 
int[] edades = new int[5];
```

*   **Clases:** son estructuras de datos que se utilizan para representar un conjunto de atributos y métodos que definen una entidad. _Por ejemplo:_

```java
class Persona {    
    String nombre;   
    int edad;   // metodos } Persona persona = new Persona();
}
```

*   **Interfaces:** son estructuras de datos que se utilizan para especificar un conjunto de métodos que deben ser implementados por una clase. _Por ejemplo:_

```java
interface Conducible {    
    void conducir(); 
} 

class Coche implements Conducible {    
    // codigo 
}
```

*   **Enums:** son estructuras de datos que se utilizan para representar un conjunto finito de valores. _Por ejemplo:_

```java
enum DiasSemana {LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO} 
DiasSemana dia = DiasSemana.LUNES;
```
