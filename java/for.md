---
title: "14. Bucle For"
parent: "Java"
---

For en Java
===========

**Tabla de contenidos**

- [For en Java](#for-en-java)
  - [¿Qué es for en Java?](#qué-es-for-en-java)
  - [Más ejemplos](#más-ejemplos)

¿Qué es for en Java?
--------------------

La sentencia **`for`** en Java es una estructura de control de ciclo que se utiliza para ejecutar un bloque de código una cantidad determinada de veces.

La sintaxis básica de un ciclo for en Java es la siguiente:

```java
for (inicialización; condición; actualización) {     
    // bloque de código a ejecutar 
}
```

La inicialización es el código que se ejecuta al inicio del bucle, normalmente se usa para inicializar una variable **`contador`**. La condición es la condición que se evalúa antes de ejecutar el bloque de código.

Si se cumple, se ejecuta el bloque de código, de lo contrario, se sale del bucle. La actualización es el código que se ejecuta después de cada iteración del bucle, normalmente se utiliza para actualizar el valor de la variable contador.

Por ejemplo, el siguiente código imprimirá los números del 1 al 10:

```java
for (int i = 1; i <= 10; i++) {     
    System.out.println(i); 
}
```

En este ejemplo, la inicialización es **`int i = 1`**, la condición es **`i <= 10`** y la actualización es **`i++`**. El código dentro del bucle imprime el valor de la variable **`i`** en cada iteración.

Más ejemplos
------------

Aquí hay algunos ejemplos del **ciclo for** con código Java:

**Ejemplo 1:** Imprimir los números del 1 al 10

```java
for (int i = 1; i <= 10; i++) {     
    System.out.println(i); 
}
```

**Ejemplo 2:** Sumar los números del 1 al 100

```java
int sum = 0; 
for (int i = 1; i <= 100; i++) {     
    sum += i; 
} 
System.out.println("La suma es: " + sum);
```

**Ejemplo 3:** Imprimir solo los números pares del 2 al 20

```java
for (int i = 2; i <= 20; i += 2) {     
    System.out.println(i); 
}
```

En estos ejemplos, podemos ver cómo se utiliza la inicialización, la condición y la actualización en la estructura **for**.