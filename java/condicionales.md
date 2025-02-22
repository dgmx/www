---
title: "12. Condicionales"
parent: "Java"
---


If y else en Java
=================

En Java, las condiciones se utilizan para controlar el flujo de un programa. Se pueden utilizar las estructuras de control de flujo como `if` `else` y **[switch](switch.md)** para crear condiciones en el código. El uso de estas estructuras permite ejecutar cierto código solo si se cumple una determinada condición.

Una estructura básica de una condición en Java es la siguiente:

```java
if (condición) {     
    // código a ejecutar si la condición es verdadera } 
}
else {     
    // código a ejecutar si la condición es falsa 
}
```

También se pueden utilizar operadores lógicos para crear condiciones más complejas:

```java
if ((x > 5) && (y < 10)) {     
    // código a ejecutar si x es mayor que 5 y y es menor que 10 
}
```

Además de las estructuras **if** y **else**, Java también ofrece la estructura **[switch](switch.md)** para controlar el flujo en función de varios valores posibles de una variable.

Tabla de contenidos

- [If y else en Java](#if-y-else-en-java)
  - [Sentencia if en Java](#sentencia-if-en-java)
  - [Sentencia else en Java](#sentencia-else-en-java)
  - [Sentencia else-if en Java](#sentencia-else-if-en-java)
    - [Más ejemplos](#más-ejemplos)

Sentencia if en Java
--------------------

La sentencia `if` en Java se utiliza para evaluar una condición y ejecutar cierto código solo si la condición se cumple. La estructura básica de una sentencia `if` en Java es la siguiente:

```java
if (condición) {     
    // código a ejecutar si la condición es verdadera 
}
```

La condición puede ser cualquier expresión que devuelva un valor booleano (verdadero o falso). Por ejemplo:

```java
if (x > 5) {     
    System.out.println("x es mayor que 5"); 
}
```

En resumen, `la sentencia if en Java` se utiliza para evaluar una condición y ejecutar cierto código solo si la condición se cumple.

Sentencia else en Java
----------------------

La sentencia `else` en Java se usa junto con la sentencia **if** para especificar un bloque de código que se ejecutará si la condición especificada en la sentencia **if** es falsa. La estructura básica de una sentencia `if-else` en Java es la siguiente:

```java
if (condición) {     
    // código a ejecutar si la condición es verdadera 
} 
else {     // código a ejecutar si la condición es falsa 
}
```

Por ejemplo, si queremos comprobar si un número es mayor que 10, podemos escribir:

```java
int num = 7; 
if (num > 10) {     
    System.out.println(num + " es mayor que 10"); 
} 
else {     
    System.out.println(num + " es menor o igual a 10"); 
}
```

Sentencia else-if en Java
-------------------------

La sentencia `else if` en Java es una extensión de la sentencia **if-else** que permite especificar múltiples condiciones de control de flujo en un solo bloque de código. Es similar a la sentencia **if-else**, pero permite especificar varias condiciones adicionales antes de llegar a la sentencia **else** final.

La sintaxis para usar la sentencia `else if` es la siguiente:

```java
if (condición1) {     
    // código a ejecutar si condición1 es verdadera } 
else if (condición2) {     
    // código a ejecutar si condición1 es falsa y condición2 es verdadera 
} 
else if (condición3) {     
    // código a ejecutar si condición1 y condición2 son falsas y condición3 es verdadera 
    } 
... 
else {     
        // código a ejecutar si todas las condiciones anteriores son falsas 
}
```

El código dentro de cada bloque **if** o **else if** se ejecutará solo si la condición correspondiente es verdadera. Si ninguna de las condiciones es verdadera, se ejecutará el bloque **else** final. Por ejemplo, si queremos comprobar si un número es negativo, cero o positivo, podemos escribir:

```java
int num = -5; 
if (num > 0) {     
    System.out.println(num + " es positivo"); 
} 
else if(num == 0) {     
    System.out.println(num + " es cero"); 
}
else {     
    System.out.println(num + " es negativo"); 
}
```


En este caso, el código se ejecutará en el primer bloque **if** si num es mayor que 0, en el segundo bloque si num es igual a 0 y en el bloque **else** si num es menor a 0.

### Más ejemplos

Un ejemplo adicional de uso de la sentencia **else if** en Java podría ser para determinar el nivel de acceso a un sistema basado en el rol del usuario.

```java
String rol = "admin"; 
if (rol.equals("admin")) {     
    System.out.println("Acceso total"); 
} 
else if (rol.equals("editor")) {     
    System.out.println("Acceso de edición"); 
} 
else if (rol.equals("usuario")) {     
    System.out.println("Acceso limitado"); 
} 
else {     
    System.out.println("Acceso denegado"); 
}
```

En este caso, si la variable **“rol”** es igual a **“admin”**, el código imprimirá **“Acceso total”**, si es igual a **“editor”** imprimirá **“Acceso de edición”**, si es igual a **“usuario”** imprimirá **“Acceso limitado”** y si es cualquier otro valor imprimirá **“Acceso denegado”**.