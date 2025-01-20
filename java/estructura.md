---
title: "02. Estructura de un Programa en Java"
parent: "Java"
---

Estructura de un Programa en Java
=================================

La **estructura básica de un programa en Java** es uno de los primeros conceptos que los programadores deben dominar para comprender cómo se organiza y ejecuta el código.

En este artículo, exploraremos cada uno de los componentes fundamentales de un programa en Java, su sintaxis y cómo se interrelacionan. Además, proporcionaremos ejemplos prácticos y detalladamente comentados para facilitar el aprendizaje.

Tabla de contenidos

[Toggle](#)

- [Estructura de un Programa en Java](#estructura-de-un-programa-en-java)
  - [¿Qué es la estructura de un programa en Java?](#qué-es-la-estructura-de-un-programa-en-java)
    - [1. **Paquete (`package`)**](#1-paquete-package)
    - [2. **Importaciones (`import`)**](#2-importaciones-import)
    - [3. **Clase Principal**](#3-clase-principal)
      - [**Detalles importantes de la clase principal:**](#detalles-importantes-de-la-clase-principal)
    - [4. **Declaración de Variables**](#4-declaración-de-variables)
    - [5. **Métodos**](#5-métodos)
    - [6. **Comentarios**](#6-comentarios)
      - [**Comentarios de una línea**:](#comentarios-de-una-línea)
      - [**Comentarios de múltiples líneas**:](#comentarios-de-múltiples-líneas)
      - [**Comentarios de documentación**:](#comentarios-de-documentación)
    - [7. **Ejecución del Programa**](#7-ejecución-del-programa)
  - [Ejemplos prácticos de la estructura de un programa Java](#ejemplos-prácticos-de-la-estructura-de-un-programa-java)
    - [Ejemplo 1: Programa básico con impresión en consola](#ejemplo-1-programa-básico-con-impresión-en-consola)
    - [Ejemplo 2: Programa con variables y entrada de usuario](#ejemplo-2-programa-con-variables-y-entrada-de-usuario)
    - [Ejemplo 3: Programa con método adicional](#ejemplo-3-programa-con-método-adicional)
  - [Conclusión](#conclusión)

¿Qué es la estructura de un programa en Java?
---------------------------------------------

Un programa en Java está compuesto por varias partes que se deben estructurar de manera lógica y ordenada. A continuación, desglosaremos los principales elementos que forman parte de cualquier programa Java:

### 1\. **Paquete (`package`)**

Cada programa Java puede, opcionalmente, comenzar con una declaración de paquete. Los paquetes agrupan clases relacionadas y ayudan a organizar el código.
```java
package com.miapp; // Nombre del paquete`
```

**Explicación**: El uso de paquetes ayuda a evitar conflictos de nombres entre clases y facilita la reutilización de código.

### 2\. **Importaciones (`import`)**

Después de la declaración de paquete, se pueden incluir importaciones. Estas permiten utilizar clases de otros paquetes.
```java
import java.util.Scanner; // Importa la clase Scanner del paquete java.util
```

**Explicación**: Las importaciones simplifican el acceso a clases y métodos de bibliotecas externas sin necesidad de escribir el nombre completo del paquete.

### 3\. **Clase Principal**

Todo programa Java necesita al menos una clase. La clase principal es el punto de entrada del programa, y debe contener el método `main`.
```java
public class MiPrograma {     
    public static void main(String[] args) {        
        System.out.println("¡Hola, Mundo!");    
    } 
}
```

#### **Detalles importantes de la clase principal:**

*   **Declaración de la clase**: Se utiliza la palabra clave `class` para definir una clase. El nombre de la clase debe coincidir con el nombre del archivo.
*   **Modificador de acceso**: El modificador `public` indica que esta clase es accesible desde cualquier otro código.
*   **Método `main`**: El método `main` es el punto de inicio de ejecución del programa. Su firma es:

```java
public static void main(String[] args)`
```

*   **public**: Significa que puede ser accedido desde fuera de la clase.
*   **static**: Permite que el método se ejecute sin necesidad de crear una instancia de la clase.
*   **void**: No devuelve ningún valor.
*   **String\[\] args**: Es un arreglo que almacena argumentos pasados desde la línea de comandos.

### 4\. **Declaración de Variables**

Dentro del método `main` (o cualquier otro método), se pueden declarar variables. Java es un lenguaje de tipo estático, lo que significa que todas las variables deben declararse con un tipo específico.
```java
int numero = 5; // Declaración y asignación de una variable entera`
```

**Explicación**: Las variables en Java deben ser inicializadas antes de ser usadas, y su tipo debe ser declarado explícitamente.

### 5\. **Métodos**

Además del método `main`, una clase puede contener otros métodos que realicen tareas específicas.

```java
public static void saludar() {     
    System.out.println("¡Hola desde un método!"); 
}
```


**Explicación**: Los métodos permiten modularizar el código, facilitando su lectura y mantenimiento. Los métodos pueden aceptar parámetros y devolver valores.

### 6\. **Comentarios**

Java soporta varios tipos de comentarios que permiten documentar el código sin afectar su ejecución.

#### **Comentarios de una línea**:

`// Esto es un comentario de una línea`

Lenguaje del código: Java (java)

#### **Comentarios de múltiples líneas**:

`/*   Esto es un comentario  de múltiples líneas */`

Lenguaje del código: Java (java)

#### **Comentarios de documentación**:

`/**  * Este es un comentario para documentar * una clase o un método. */`

Lenguaje del código: Java (java)

**Explicación**: Los comentarios son cruciales para hacer el código más legible y comprensible para otros desarrolladores.

### 7\. **Ejecución del Programa**

Cuando un programa Java se compila y ejecuta, el flujo comienza en el método `main`. Este método puede llamar a otros métodos dentro de la clase para realizar tareas adicionales.
```java
public class MiPrograma {     
    public static void main(String[] args) {        
        saludar(); // Llama al método saludar    }     public static void saludar() {        System.out.println("¡Hola desde un método!");    
    } 
}
```

**Explicación**: En este ejemplo, el programa ejecuta primero el método `main`, que a su vez llama al método `saludar`.

Ejemplos prácticos de la estructura de un programa Java
-------------------------------------------------------

### Ejemplo 1: Programa básico con impresión en consola

```java
public class HolaMundo {     
    public static void main(String[] args) {        
        System.out.println("¡Hola, Mundo!"); // Imprime un mensaje en la consola    
    } 
}
```

### Ejemplo 2: Programa con variables y entrada de usuario
```java
import java.util.Scanner; 
public class SaludoPersonalizado {     
    public static void main(String[] args) {        
        Scanner scanner = new Scanner(System.in);        
        System.out.print("Escribe tu nombre: ");        
        String nombre = scanner.nextLine();        
        System.out.println("¡Hola, " + nombre + "!");    
    } 
}
```
### Ejemplo 3: Programa con método adicional

```java
public class Calculadora {     
    public static void main(String[] args) {        
        int resultado = sumar(5, 3);        
        System.out.println("La suma es: " + resultado);    
    }     
    public static int sumar(int a, int b) {        
        return a + b;    
    }
}

```

Conclusión
----------

La estructura de un programa en Java es clara y está diseñada para ser modular y escalable. Entender los componentes clave como paquetes, importaciones, clases, métodos y el flujo de ejecución es fundamental para cualquier programador que desee trabajar con este lenguaje.