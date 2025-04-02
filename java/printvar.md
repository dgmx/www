---
title: "05. Imprimir variables"
parent: "Java"
---

Cómo imprimir variables en Java
===============================

La impresión de variables es una tarea fundamental en cualquier lenguaje de programación, y Java no es una excepción. En este artículo, te guiaremos a través de los diferentes métodos para imprimir variables en Java, desde los más básicos hasta los más avanzados.

Tabla de contenidos

- [Cómo imprimir variables en Java](#cómo-imprimir-variables-en-java)
  - [Imprimir variables con System.out.println()](#imprimir-variables-con-systemoutprintln)
  - [Imprimir variables con System.out.print()](#imprimir-variables-con-systemoutprint)
  - [Imprimir dos variables en Java](#imprimir-dos-variables-en-java)
  - [Imprimir varias variables en Java](#imprimir-varias-variables-en-java)

Imprimir variables con System.out.println()
-------------------------------------------

El método más sencillo para imprimir variables en Java es usar la clase `System` y su método `out.println()`.

**Ejemplo:**

```java
int numero = 10; String nombre = "Juan Pérez"; 
System.out.println("El número es: " + numero); 
System.out.println("El nombre es: " + nombre);
```

**Salida:**

```bash
El número es: 10   El nombre es: Juan Pérez
```

Imprimir variables con System.out.print()
-----------------------------------------

El método `System.out.print()` funciona de manera similar a `System.out.println()`, pero no agrega un salto de línea al final de la salida. Esto puede ser útil si desea imprimir varias variables en la misma línea.

**Ejemplo:**

```java
int numero1 = 10; 
int numero2 = 20; 
System.out.print("El primer número es: " + numero1); 
System.out.print(" y el segundo número es: " + numero2);
```

**Salida:**

```bash
El primer número es: 10 y el segundo número es: 20
```

Imprimir dos variables en Java
------------------------------

También puedes usar el operador `+` para agregar una variable a otra variable:

```java
String Nombre = "Juan "; 
String Apellidos = "Pérez Cruz"; 
String nombreCompleto = Nombre + Apellido; 
System.out.println(nombreCompleto);
```

**Salida:**

```bash
Juan Pérez Cruz
```

Para valores numéricos, el operador `+` funciona como un operador matemático:

```
int x = 8; 
int y = 5; 
System.out.println(x + y); // Imprimir el valor de x + y
```
Del ejemplo anterior, puedes esperar:

*   `x` almacena el valor 8
*   `y` almacena el valor 5
*   Luego usamos el método `println()` para mostrar el valor de `x + y`, que es **13**

Imprimir varias variables en Java
---------------------------------

Para imprimir variables junto con texto explicativo, podemos usar la concatenación de cadenas. El operador `+` permite unir dos cadenas de texto, incluyendo variables como si fueran cadenas.

**Ejemplo:**

```java 
int num1 = 10; int num2 = 20; 
System.out.println("La suma de " + num1 + " y " + num2 + " es: " + (num1 + num2));
```

**Salida:**

`La suma de 10 y 20 es: 30`