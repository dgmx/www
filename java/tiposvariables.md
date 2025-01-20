---
title: "07. Tipos de variables"
parent: "Java"
---


Tipos de variables en Java
==========================

En Java, las variables son herramientas fundamentales para almacenar y manipular información. Dominar sus diferentes tipos te permite escribir código más eficiente, flexible y escalable. En este artículo, exploraremos los tres tipos principales de variables en Java: locales, de instancia y estáticas.

Tabla de contenidos

- [Tipos de variables en Java](#tipos-de-variables-en-java)
  - [1. Variables locales](#1-variables-locales)
  - [2. Variables de instancia](#2-variables-de-instancia)
  - [3. Variables estáticas](#3-variables-estáticas)
  - [Resumen:](#resumen)

1\. Variables locales
---------------------

Las variables locales se declaran dentro de un método o bloque de código. Solo son accesibles dentro de ese ámbito y se eliminan al finalizar su ejecución.

Son ideales para almacenar datos temporales o específicos de una operación particular.

**Ejemplo:**

```java
public void calcularPromedio(int num1, int num2) {
       int suma = num1 + num2;  
       double promedio = suma / 2.0;  
       // Las variables `suma` y `promedio` solo son accesibles dentro de este método. 
}
```

2\. Variables de instancia
--------------------------

Las variables de instancia se declaran dentro de una clase, pero fuera de cualquier método. Se asocian a cada objeto creado a partir de la clase y se mantienen durante toda la vida útil del objeto.

Son útiles para almacenar datos que son específicos de cada instancia individual.

**Ejemplo:**

```java
public class Persona {   
    private String nombre;  private int edad;   
    public Persona(String nombre, int edad) {    
        this.nombre = nombre;    
        this.edad = edad;  
    }   
    // Las variables `nombre` y `edad` se asocian a cada objeto `Persona`. 
}
```


3\. Variables estáticas
-----------------------

Declaradas con la palabra clave `static`, son compartidas por todos los objetos de la clase.

*   **Uso:** Almacenan información constante o global que no cambia para ningún objeto.

**Ejemplo:**

```java
public class Contador {   
    private static int numeroLlamadas = 0;   
    
    public static void incrementarContador() {    
        numeroLlamadas++;  
    }   
    public static int getNumeroLlamadas() {    
        return numeroLlamadas;  
    }   
    // La variable `numeroLlamadas` es compartida por todas las instancias de la clase `Contador`. 
}
```
Resumen:
--------

*   **Variables locales:** Almacenamiento temporal dentro de un método o bloque.
*   **Variables de instancia:** Almacenamiento específico para cada objeto.
*   **Variables estáticas:** Almacenamiento compartido para toda la clase.

Elegir el tipo de variable adecuado para cada caso es crucial para optimizar el rendimiento y la legibilidad de tu código Java.