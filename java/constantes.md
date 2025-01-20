---
title: "08. Constantes"
parent: "Java"
---

Constantes en Java
==================

En Java, una constante es un valor que se asigna a una variable y no cambia durante la ejecución del programa. El valor de una constante se establece en el momento en que se declara y no puede cambiarse posteriormente.

Las constantes son útiles para almacenar valores que se utilizan repetidamente en el código y que no deben ser modificados.

Tabla de contenidos

- [Constantes en Java](#constantes-en-java)
  - [Cómo declarar constantes en Java](#cómo-declarar-constantes-en-java)
  - [Más ejemplos](#más-ejemplos)
    - [Ejemplo 1](#ejemplo-1)
    - [Ejemplo 2](#ejemplo-2)

Cómo declarar constantes en Java
--------------------------------

En Java, se pueden declarar constantes utilizando la palabra clave **final**. Al declarar una variable como **final**, estamos indicando que su valor no cambiará a lo largo del programa.

A continuación, te muestro un ejemplo de cómo declarar y utilizar una constante en Java:

```java
public class EjemploConstante {     
    public static void main(String[] args) {         
        final double PI = 3.14159265358979323846;         
        // Calculamos el área de un círculo con radio 5        
        int radio = 5;        
        double area = PI * radio * radio;         
        // Imprimimos el área del círculo en la consola        
        System.out.println("El área del círculo es: " + area);     
    } 
}
```

En este ejemplo, declaramos una constante llamada **PI** y le asignamos el valor de `3.14159265358979323846`.

Utilizamos la palabra clave **final** para indicar que su valor no cambiará a lo largo del programa. Luego, utilizamos esta constante para calcular el área de un círculo con radio 5 y almacenamos el resultado en la variable `area`. Finalmente, imprimimos el área del círculo en la consola.

**La salida del programa sería:**

```bash
El área del círculo es: 78.53981633974483
```

Como puedes ver, las constantes en Java son útiles para almacenar valores que se utilizan repetidamente en el código y que no deben ser modificados.

Al declarar una variable como **final**, podemos asegurarnos de que su valor no cambiará a lo largo del programa.

Más ejemplos
------------

Aquí te muestro dos ejemplos de constantes en Java con código bien documentado:

### Ejemplo 1

Constante para representar el número de días en una semana

```java
public class EjemploConstantes {     
    public static void main(String[] args) {     
         // Declaramos una constante para representar el numero de dias que tiene una semana         
        final int DIAS_EN_SEMANA = 7;     
        // Imprimimos la constante en la consola     
        System.out.println("El número de días en una semana es: " + DIAS_EN_SEMANA);     
    }
}
```

En este ejemplo, declaramos una constante llamada `DIAS_EN_SEMANA` y le asignamos el valor de `7`, que representa el número de días en una semana.

Utilizamos la palabra clave **final** para indicar que su valor no cambiará a lo largo del programa. Luego, imprimimos el valor de la constante en la consola.

### Ejemplo 2

Constante para representar el nombre de una empresa

```java
public class EjemploConstantes {     
    public static void main(String[] args) {         
        // Declaramos una constante para representar el nombre de una empresa        
        final String NOMBRE_EMPRESA = "Mi Empresa S.A.";         
        // Imprimimos la constante en la consola        
        System.out.println("El nombre de la empresa es: " + NOMBRE_EMPRESA);     
    } 
}
```
En este ejemplo, declaramos una constante llamada `NOMBRE_EMPRESA` y le asignamos el valor de **“Mi Empresa S.A.”**, que representa el nombre de una empresa.

Utilizamos la palabra clave **final** para indicar que su valor no cambiará a lo largo del programa. Luego, imprimimos el valor de la constante en la consola.