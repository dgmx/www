---
title: 18. Break y continue
parent: Java
---

Break y continue en Java
========================

La sentencia `break` en Java se utiliza para romper un ciclo (while, do-while, for) o para salir de un switch. Cuando se ejecuta una sentencia `break`, el control del programa se transfiere fuera del ciclo o switch.

La sentencia `continue` en Java se utiliza para saltar una iteración de un ciclo (while, do-while, for) y continuar con la siguiente iteración. Cuando se ejecuta una sentencia `continue`, el control del programa se transfiere a la condición de control del ciclo o al inicio de la siguiente iteración.

Tabla de contenidos

- [Break y continue en Java](#break-y-continue-en-java)
  - [Break en Java](#break-en-java)
    - [Ejemplos](#ejemplos)
  - [Continue en Java](#continue-en-java)
    - [Ejemplos](#ejemplos-1)

Break en Java
-------------

La sentencia `break` en Java permite salir de un ciclo o de un bloque de código, interrumpiendo su ejecución. Es utilizada para detener la ejecución de un ciclo iterativo (como `while`, `do-while`, o `for`) o de un bloque `switch`.

Cuando se ejecuta una `sentencia break` dentro de un ciclo, el control se transfiere inmediatamente fuera del ciclo. Es importante tener en cuenta que si un ciclo está anidado dentro de otro, la `sentencia break` solo detendrá la ejecución del ciclo inmediatamente interior.

Si se desea detener la ejecución de un ciclo exterior, debe utilizar la `sentencia break` junto con una etiqueta.

### Ejemplos

A continuación se presentan algunos ejemplos de su uso de la sentencia break:

1.  **En un ciclo for:**
```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    System.out.println(i);
}
// Salida: 0 1 2 3 4
```

En este ejemplo, el ciclo for imprimirá los números del 0 al 4, ya que cuando i es igual a 5, la sentencia break se activa y el ciclo se detiene.

2.  **En un ciclo while:**
```java
int i = 0;
while (true) {
    if (i == 5) {
        break;
    }
    System.out.println(i);
    i++;
}
// Salida: 0 1 2 3 4
```

En este ejemplo, el ciclo while imprimirá los números del 0 al 4, ya que cuando i es igual a 5, la sentencia break se activa y el ciclo se detiene.

3.  **En una sentencia switch:**
```java
int numero = 2;
switch (numero) {
    case 1:
        System.out.println(Uno);
        break;
    case 2:
        System.out.println(Dos);
        break;
    case 3:
        System.out.println(Tres);
        break;
    default:
        System.out.println(Otro número);
}
// Salida: Dos
```

En este ejemplo, `la sentencia switch` evaluará el valor de `numero` y ejecutará el código correspondiente al caso 2, imprimiendo `Dos`. Luego de ejecutar ese código, la sentencia break se activa y la ejecución del código dentro del switch se detiene.

Continue en Java
----------------

La sentencia `continue` en Java es utilizada dentro de un ciclo (como `for`, `while` o `do-while`) para saltar a la siguiente iteración del ciclo y continuar su ejecución desde allí.

Cuando se encuentra una instrucción `continue` dentro de un ciclo, el resto de las instrucciones en esa iteración son ignoradas y el control es transferido a la siguiente iteración. **Es importante tener en cuenta que continue solo afecta a la iteración actual y no a las siguientes**.

Un ejemplo de su uso podría ser el siguiente:

```java
for (int i = 0; i < 10; i++) {
   if (i % 2 == 0) {
       continue;
   }
   System.out.println(i);
}
```


En este ejemplo, el ciclo for se ejecuta 10 veces. Sin embargo, en cada iteración en la que `i` es un número par, el código dentro del ciclo no se ejecuta debido a la instrucción `continue`, lo cual hace que solo se impriman los números impares del 1 al 9 en la consola.

### Ejemplos

Aquí te presento algunos ejemplos de cómo utilizar la sentencia `continue` en cada uno de los ciclos de control de flujo en Java:

1.  **Ejemplo con while:**
```java
int i = 0;
while (i < 10) {
    i++;
    if (i % 2 == 0) {
        continue;
    }
    System.out.println(i);
}
// Output: 1, 3, 5, 7, 9
```

En este ejemplo, la variable `i` se inicializa en 0, y se ejecuta el ciclo mientras `i` sea menor a 10. Dentro del ciclo, sí `i` es divisible entre 2 (es decir, si es un número par), se salta la iteración actual del ciclo con la sentencia `continue` y no se imprime ese valor.

2.  **Ejemplo con do-while:**

```java
int j = 0;
do {
    j++;
    if (j % 2 != 0) {
        continue;
    }
    System.out.println(j);
} while (j < 10);
// Output: 2, 4, 6, 8, 10
```

En este ejemplo, la variable `j` se inicializa en 0, y se ejecuta el ciclo do-while mientras `j` sea menor a 10. Dentro del ciclo, sí `j` no es divisible entre 2 (es decir, si es un número impar), se salta la iteración actual del ciclo con la sentencia `continue` y no se imprime ese valor.

3.  **Ejemplo con for:**
```java
for (int k = 0; k < 10; k++) {
    if (k == 5) {
        continue;
    }
    System.out.println(k);
}
// Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
```

En este ejemplo, se utiliza un ciclo for para iterar desde 0 hasta 9. Dentro del ciclo, sí `k` es igual a 5, se salta la iteración actual del ciclo con la sentencia `continue` y no se imprime ese valor.