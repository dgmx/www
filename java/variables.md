---
title: "04. Variables"
parent: "Java"
---

Variables en Java
=================

Las variables en Java son contenedores que almacenan datos durante la ejecución de un programa. Cada variable tiene un **tipo de dato** que define qué tipo de información puede contener, como números, caracteres o cadenas de texto. Además, se le asigna un **nombre** que se utiliza para referenciarla en el código.

\[oregoom-shortcode-button-play-youtube id=”qEVeLRJ\_ee8″\]

Tabla de contenidos


- [Variables en Java](#variables-en-java)
  - [Partes de una variable:](#partes-de-una-variable)
    - [Ejemplo:](#ejemplo)
  - [Declaración de variables:](#declaración-de-variables)
    - [Ejemplo:](#ejemplo-1)
  - [Asignación de valores:](#asignación-de-valores)
    - [Ejemplo:](#ejemplo-2)
  - [Nombres de variables en Java](#nombres-de-variables-en-java)
  - [Cómo usar variables en Java](#cómo-usar-variables-en-java)

Partes de una variable:
-----------------------

*   **Tipo de dato:** Define qué tipo de información puede almacenar la variable como `int` (enteros), `double` (números decimales), `boolean` (valores booleanos), `char` (caracteres) y `String` (cadenas de caracteres).
*   **Nombre:** Es el identificador que se utiliza para referirnos a la variable en el código. Debe ser un nombre único y significativo que describa el contenido de la variable.
*   **Valor:** La información que se guarda en la variable.

### Ejemplo:

```java
int numero; // Variable de tipo entero con nombre "numero" 
String nombre = "Juan Pérez"; // Variable de tipo String con nombre "nombre"
boolean esEstudiante = true; // Variable de tipo boolean con nombre "esEstudiante"`
```

Declaración de variables:
-------------------------

Para declarar una variable en Java, se utiliza la siguiente sintaxis:

`tipoDeDato nombreVariable;`

Lenguaje del código: Java (java)

### Ejemplo:

```java 
int edad; // Declaración de una variable de tipo entero con el nombre "edad" 
String ciudad; // Declaración de una variable de tipo String con el nombre "ciudad"`
```

Asignación de valores:
----------------------

Para asignar un valor a una variable, se utiliza el operador de asignación `=`.

### Ejemplo:

```java
edad = 25; // Asignación del valor 25 a la variable "edad" 
ciudad = "Lima"; // Asignación del valor "Lima" a la variable "ciudad"`
````


Nombres de variables en Java
----------------------------

En Java, los nombres de las variables deben cumplir ciertas reglas para ser válidos:

1.  Deben comenzar con una letra o un guion bajo (\_).
2.  Pueden contener letras, dígitos o guiones bajos (\_).
3.  No pueden ser palabras reservadas de Java, como **“int”** o **“class”**.
4.  No deben comenzar con un número.
5.  Los nombres de variables deben ser significativos y representativos del valor o el objeto que almacenan.
6.  No deben contener espacios en blanco.

Algunos ejemplos de nombres de variables válidos en Java son:

```java
int age; String name; double salary; boolean isEmployee;`
```

Algunos ejemplos de nombres de variables inválidos en Java son:

```java
int 1age; String name with spaces; double @salary; boolean if;`
```

Cómo usar variables en Java
---------------------------

En Java, las variables son utilizadas para almacenar y manipular información en un programa. Una vez que se han definido las variables, se pueden utilizar de varias maneras, a continuación se describen algunas de las formas más comunes:

*   **Asignar valores:** Una vez definida una variable, se puede asignar un valor a ella usando el signo igual (=). _Por ejemplo:_

```java
int edad = 25;
```

*   **Utilizar valores:** Una vez asignado un valor a una variable, se puede usar ese valor en una expresión o en una sentencia. _Por ejemplo:_

```java
int edad = 25; System.out.println("Mi edad es " + edad);
```

*   **Modificar valores:** Una vez asignado un valor a una variable, se puede modificar ese valor en cualquier momento, utilizando operadores aritméticos o asignando un nuevo valor. _Por ejemplo:_

```java
int edad = 25; edad = edad + 1;
```