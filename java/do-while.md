---
title: "17. Bucle Do-While"
parent: "Java"
---

Do-while en Java
================

Tabla de contenidos


- [Do-while en Java](#do-while-en-java)
  - [¿Qué es do while en Java?](#qué-es-do-while-en-java)
  - [Más ejemplos](#más-ejemplos)

¿Qué es do while en Java?
-------------------------

La sentencia **do-while en Java** es una estructura de control de ciclo que ejecuta un bloque de código una o más veces mientras se cumple una condición específica.

La diferencia entre el **ciclo while** y el **ciclo do-while** es que en el **ciclo while**, la condición se evalúa antes de ejecutar el código, mientras que en el **ciclo do-while**, el código se ejecuta primero y luego se evalúa la condición. Si la condición se cumple, el ciclo se repite, de lo contrario, el ciclo se detiene.

El ciclo **do-while** en Java se utiliza cuando se desea garantizar que el código se ejecute al menos una vez, independientemente de si se cumple la condición.

**Ejemplo de código:**

```java
int i = 1; 
do {     
    System.out.println(i);   
    i++; 
} while (i <= 10);
```



En este ejemplo, el código dentro del ciclo se ejecutará al menos una vez, imprimiendo el valor de i y luego incrementando **i** en 1. Luego, se evalúa la **condición (i <= 10)** y si se cumple, el ciclo se repite y se vuelve a ejecutar el código dentro del ciclo. Esto continúa hasta que la condición ya no se cumple (i es mayor que 10) y el ciclo se detiene.

Más ejemplos
------------

**Ejemplo 1:** El código imprimirá los números del 1 al 10
```java
int i = 1;
do {
   System.out.println(i);
   i++;
} while (i <= 10);
```


**Ejemplo 2:** El código pedirá al usuario ingresar su contraseña hasta que sea correcta

```java
String password = "";
do {
   System.out.println("Ingrese su contraseña: ");
   password = scan.nextLine();
} while (!password.equals("secreto"));
```

**Ejemplo 3:** El código mostrará un menú de opciones hasta que el usuario elija la opción de salir (0)
```java
int opcion;
do {
   // Mostrar menú de opciones
   opcion = scan.nextInt();
   switch (opcion) {
      case 1:
         // Opción 1
         break;
      case 2:
         // Opción 2
         break;
      case 3:
         // Opción 3
         break;
      default:
         System.out.println("Opción inválida, intente de nuevo.");
   }
} while (opcion != 0);
```

En estos ejemplos se puede ver como la **sentencia do-while** se usa para asegurar que el bloque de código se ejecute al menos una vez antes de evaluar la condición de continuación.