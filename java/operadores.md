---
title: "10. Operadores"
parent: "Java"
---

Operadores en Java
==================

Java tiene varios tipos de operadores que se utilizan para realizar operaciones matemáticas, lógicas y de comparación en expresiones.

Algunos de los operadores más comunes en Java incluyen:

*   Aritméticos
*   Asignación
*   Comparación
*   Lógicos

Cada uno de estos operadores tiene una función específica y se utilizan en diferentes contextos. Por ejemplo, los operadores aritméticos se utilizan para realizar operaciones matemáticas básicas, mientras que los operadores de comparación se utilizan para comparar valores.

Es importante tener en cuenta el orden de precedencia de los operadores, ya que esto determina en qué orden se evalúan las expresiones. Por ejemplo, la multiplicación se evalúa antes que la adición en una expresión aritmética.

Tabla de contenidos

- [Operadores en Java](#operadores-en-java)
  - [Operadores aritméticos en Java](#operadores-aritméticos-en-java)
    - [Ejemplos](#ejemplos)
  - [Operadores de asignación en Java](#operadores-de-asignación-en-java)
    - [Ejemplos](#ejemplos-1)
  - [Operadores de comparación en Java](#operadores-de-comparación-en-java)
    - [Ejemplos](#ejemplos-2)
  - [Operadores lógicos en Java](#operadores-lógicos-en-java)
    - [Ejemplos](#ejemplos-3)
  - [Operadores de incremento y decremento en Java](#operadores-de-incremento-y-decremento-en-java)
  - [Operadores de concatenación en Java](#operadores-de-concatenación-en-java)
  - [Operadores de bits en Java](#operadores-de-bits-en-java)

Operadores aritméticos en Java
------------------------------

Los operadores aritméticos en Java se utilizan para realizar operaciones matemáticas básicas como suma, resta, multiplicación, división y módulo. A continuación los operadores aritméticos más comunes en Java:

| Operador | Descripción | Ejemplo |
| --- | --- | --- |
| +   | Sumar | `a + b -> 12` |
| –   | Restar | `a - b -> 8` |
| \*  | Multiplicar | `a * b -> 20` |
| /   | Dividir | `a / b -> 5` |
| %   | Resto de una División | `a % b -> 0` |

**NOTA:** Es importante tener en cuenta que cuando se usan operaciones con números con punto decimal, el resultado puede ser un número con punto decimal, eso dependerá de si se utiliza un tipo de dato double o float.

### Ejemplos

Aquí te muestro algunos ejemplos de operadores aritméticos en código Java:

*   **Suma (+):** Se utiliza para sumar dos números. Por ejemplo: `int a = 2 + 3;`

```java
int a = 2; 
int b = 3; 
int sum = a + b; 
System.out.println("La suma de " + a + " y " + b + " es: " + sum);
```

*   **Resta (-):** Se utiliza para restar dos números. Por ejemplo: `int a = 5 - 2;`

```java
int x = 5; 
int y = 2; 
int diff = x - y; 
System.out.println("La diferencia entre " + x + " y " + y + " es: " + diff);
```

*   **Multiplicación (\*):** Se utiliza para multiplicar dos números. Por ejemplo: `int a = 4 * 3;`

```java
int p = 4; int q = 3; 
int product = p * q; 
System.out.println("El producto entre " + p + " y " + q + " es: " + product);
```

*   **División (/):** Se utiliza para dividir dos números. Por ejemplo: `int a = 6 / 2;`

```java
int m = 6; int n = 2; int quotient = m / n; System.out.println("El cociente entre " + m + " y " + n + " es: " + quotient);
```

*   **Módulo (%):** Se utiliza para obtener el resto de una división. Por ejemplo: `int a = 7 % 2;`

```java
int x = 7; 
int y = 2; 
int remainder = x % y; 
System.out.println("El resto de la división entre " + x + " y " + y + " es: " + remainder);
```
Cada uno de estos ejemplos utilizan operadores aritméticos básicos para realizar operaciones matemáticas y almacenar el resultado en una variable.

Además, el uso de la función `System.out.println();` para imprimir el resultado en la consola.

Operadores de asignación en Java
--------------------------------

Los operadores de asignación en Java se usan para asignar un valor a una variable. A continuación los operadores de asignación más comunes en Java:

| Operador | Descripción | Ejemplo |
| --- | --- | --- |
| \=  | Asignar un valor | `int a;   a = 10` |
| +=  | Suma en asignación | `a = a + 2   a += 2 -> 12` |
| \-= | Resta en asignación | `a = a - 2   a -= 2 -> 8` |
| \*= | Multiplicación en asignación | `a = a * 2   a *= 2 -> 20` |
| /=  | División en asignación | `a = a / 2   a /= 2 -> 5` |
| %=  | Módulo en asignación | `a = a % 2   a %= 2 -> 0` |

**NOTA:** Los operadores de asignación pueden ser utilizados con diferentes tipos de datos como `int`, `float`, `double`, etc.

### Ejemplos

Aquí te muestro algunos ejemplos de operadores de asignación en código Java:

*   **Asignación (=):** Se utiliza para asignar un valor a una variable. Por ejemplo: `int a = 5;`

```java
int a = 5; 
System.out.println("El valor de a es: " + a);
```
*   **Asignación por suma (+=):** Se utiliza para sumar un valor a una variable y asignar el resultado a la misma variable. Por ejemplo: `int a = 5; a += 2;`

```java
int x = 5; 
x += 2; 
System.out.println("El valor de x es: " + x);
```

*   **Asignación por resta (-=):** Se utiliza para restar un valor a una variable y asignar el resultado a la misma variable. Por ejemplo: `int a = 5; a -= 2;`

```java
int y = 10; 
y -= 5; 
System.out.println("El valor de y es: " + y);
```

*   **Asignación por multiplicación (\*=):** Se utiliza para multiplicar un valor a una variable y asignar el resultado a la misma variable. Por ejemplo: `int a = 5; a *= 2;`

```java
int p = 4; 
p *= 2; 
System.out.println("El valor de p es: " + p);
```

*   **Asignación por división (/=):** Se utiliza para dividir un valor a una variable y asignar el resultado a la misma variable. Por ejemplo: `int a = 5; a /= 2;`

```java
int m = 12; 
m /= 4; 
System.out.println("El valor de m es: " + m);
```

*   **Asignación por módulo (%=):** Se utiliza para obtener el resto de una división y asignar el resultado a la misma variable. Por ejemplo: `int a = 5; a %= 2;`

```java
int n = 7; 
n %= 2; 
System.out.println("El valor de n es: " + n);
```

En cada uno de estos ejemplos se utilizan operadores de asignación para modificar el valor de una variable y asignar un nuevo valor.

Además, el uso de la función `System.out.println();` para imprimir el resultado en la consola.

Operadores de comparación en Java
---------------------------------

Los operadores de comparación en Java se utilizan para comparar dos valores y determinar si son iguales o diferentes. A continuación los operadores de comparación más comunes en Java:

| Nombre | Operadores | Ejemplo*|
| --- | --- | --- |
| Igualdad | \== | `a == b => false` |
| Distintos | !=  | `a != b => true` |
| Mayor que | \>  | `a > b => false` |
| Menor que | <   | `a < b => true` |
| Mayor o Igual que | \>= | `a >= b => false` |
| Menor o Igual que | <=  | `a <= b => true` |

**NOTA:** Es importante mencionar que estos operadores devuelven un valor booleano (`true` o `false`), y son utilizados en conjunto con estructuras de control como `if`, `while`, `for` para tomar decisiones en el flujo de ejecución del programa.

### Ejemplos

Aquí te muestro algunos ejemplos de operadores de comparación o relacionales en código Java:

*   **Igualdad (==):** Se utiliza para comparar si dos valores son iguales. Por ejemplo: `int a = 5, b = 3; if(a == b) { /* código */ }`

```java
int x = 5; 
int y = 3; 
if(x == y) {     
    System.out.println("x es igual a y"); 
    } 
else {     
    System.out.println("x es diferente a y"); ç
}
```

*   **Desigualdad (!=):** Se utiliza para comparar si dos valores son diferentes. Por ejemplo: `int a = 5, b = 3; if(a != b) { /* código */ }`

```java
int a = 5; 
int b = 3; 
if(a != b) {     
    System.out.println("a es diferente a b"); 
    } 
else {     
    System.out.println("a es igual a b"); 
}
```

*   **Mayor que (>):** Se utiliza para comparar si un valor es mayor que otro. Por ejemplo: `int a = 5, b = 3; if(a > b) { /* código */ }`

```java
int p = 5; 
int q = 3; 
if(p > q) {     
    System.out.println("p es mayor que q"); 
    } 
else {     
    System.out.println("p no es mayor que q"); 
}
```

*   **Menor que (<):** Se utiliza para comparar si un valor es menor que otro. Por ejemplo: `int a = 5, b = 3; if(a < b) { /* código */ }`

```java
int m = 5; 
int n = 3; 
if(m < n) {     
    System.out.println("m es menor que n"); 
    } 
else {     
    System.out.println("m no es menor que n"); 
}
```
*   **Mayor o igual que (>=):** Se utiliza para comparar si un valor es mayor o igual que otro. Por ejemplo: `int a = 5, b = 3; if(a >= b) { /* código */ }`

```java
int i = 5; 
int j = 3; 
if(i >= j) {     
    System.out.println("i es mayor o igual que j"); 
    } 
else {     
    System.out.println("i no es mayor o igual que j"); 
}

```

*   **Menor o igual que (<=):** Se utiliza para comparar si un valor es menor o igual que otro. Por ejemplo: `int a = 5, b = 3; if(a <= b) { /* código */ }`

```java
int k = 5; 
int l = 3; 
if(k <= l) {     
    System.out.println("k es menor o igual que l"); 
    } 
else {     
    System.out.println("k no es menor o igual que l");
}
```

En cada uno de estos ejemplos se utilizan operadores de comparación para comparar dos valores y determinar si son iguales o diferentes.

Además, el uso de la función `System.out.println();` para imprimir el resultado en la consola.

Operadores lógicos en Java
--------------------------

Los operadores lógicos en Java se utilizan para combinar expresiones booleanas (verdaderas o falsas) y producir un resultado final booleano. Los operadores lógicos comunes en Java son:

| **Nombre** | **Operadores** | Ejemplo |
| --- | --- | --- |
| Not | **!** | `!true = false` |
| And | **&&** | `true && true = true`   <br>`true && false = false`  <br>`false && true = false`   <br>`false && false = false` |
| Or  | **\|** | `true **\|** true = true`   <br>`true **\|** false = true`  <br>`false **\|** true = true`   <br>`false **\|** false = false` |

### Ejemplos

Aquí te muestro algunos ejemplos de operadores lógicos en código Java:

1.  **Operador AND (&&):** Este operador se utiliza para combinar dos expresiones booleanas y producir un resultado verdadero solo si ambas expresiones son verdaderas. Por ejemplo:

```java
int x = 5; 
int y = 3; 
if(x > 0 && y > 0) {     
    System.out.println("x e y son mayores que cero"); } 
else {     
    System.out.println("x o y no son mayores que cero"); 
}
```

2.  **Operador OR (\|\|):** Este operador se utiliza para combinar dos expresiones booleanas y producir un resultado verdadero si al menos una de las expresiones es verdadera. Por ejemplo:

```java
int a = 5; 
int b = -3; 
if(a > 0 || b > 0) {     
    System.out.println("a o b son mayores que cero"); 
    } 
else {     
    System.out.println("a y b no son mayores que cero"); 
}
```

3.  **Operador NOT (!):** Este operador se usa para negar una expresión booleana. Si la expresión original es verdadera, el resultado de la negación será falso, y viceversa. Por ejemplo:

```java
boolean x = true; 
boolean y = !x; // y es false
```

Estos son solo algunos ejemplos simples de cómo se utilizan los operadores lógicos en Java. En la programación real, estos operadores se utilizan en combinación con otras instrucciones y estructuras de control para lograr un propósito específico.

Es importante mencionar que estos operadores son cortocircuitos, esto quiere decir que si el primero es falso en un AND o verdadero en un OR, el resultado ya está determinado, y no se evalúa el segundo valor.

Operadores de incremento y decremento en Java
---------------------------------------------

Los operadores de incremento y decremento en Java se utilizan para aumentar o disminuir el valor de una variable en una unidad. Los operadores de incremento y decremento comunes en Java son:

1. **Operador de incremento (++):** Este operador se utiliza para aumentar el valor de una variable en 1. Puede colocarse antes o después del nombre de la variable, dependiendo del uso que se le quiera dar.

**Por ejemplo:**

```java
int x = 5; 
x++; // x ahora tiene el valor 6 
int y = 5; 
++y; // y ahora tiene el valor 6
```

2.  **Operador de decremento (–):** Este operador se utiliza para disminuir el valor de una variable en 1. Puede colocarse antes o después del nombre de la variable, dependiendo del uso que se le quiera dar.

**Por ejemplo:**

```java
int a = 5; 
a--; // a ahora tiene el valor 4 
int b = 5; 
--b; // b ahora tiene el valor 4
```

En ambos casos, si el operador se coloca antes del nombre de la variable, se realiza la operación antes de usar el valor en la expresión. Si el operador se coloca después del nombre de la variable, se realiza la operación después de usar el valor en la expresión.

**Ejemplo:**

```java
int x = 5; 
System.out.println(x++); // imprime 5, x ahora tiene el valor 6 
int y = 5; 
System.out.println(++y); // imprime 6, y sigue siendo 6
```

Es importante mencionar que estos operadores son muy utilizados en bucles e iteraciones, ya que permiten modificar un contador o una variable de control.

Operadores de concatenación en Java
-----------------------------------

Los operadores de concatenación en Java se utilizan para unir o concatenar dos o más valores de cadena. El operador de concatenación común en Java es el símbolo **“+”**.

**Por ejemplo:**

```java
String nombre = "Juan"; 
String apellido = "Pérez"; 
String nombreCompleto = nombre + " " + apellido; 
System.out.println(nombreCompleto); // imprime "Juan Pérez"
````

También se puede utilizar el método `concat()` de la clase String para concatenar cadenas:

```java
String nombre = "Juan"; 
String apellido = "Pérez"; 
String nombreCompleto = nombre.concat(" ").concat(apellido); 
System.out.println(nombreCompleto); // imprime "Juan Pérez"
```

Es importante mencionar que el operador **“+”** no solo se utiliza para concatenar cadenas, sino también para sumar números y para concatenar números y cadenas.

```java
int numero = 5; 
String cadena = "El valor es: "; 
System.out.println(cadena + numero); //imprime "El valor es: 5"
```

Es importante mencionar que en algunos casos es mejor utilizar `StringBuilder` o `StringBuffer` para concatenar cadenas, ya que son más eficientes en términos de rendimiento, especialmente si se está concatenando muchas cadenas en un bucle o iteración.

Operadores de bits en Java
--------------------------

Los operadores de bits en Java son operadores especiales que permiten realizar operaciones en los bits individuales de un número. Estos operadores incluyen:

*   **Operador & (AND bit-a-bit):** Este operador realiza una operación `AND` bit-a-bit en dos números. El resultado es 1 solo si ambos bits son 1.

**Ejemplo:**

```java
int x = 5; 
int y = 3; 
int result = x & y; 
System.out.println(result); // imprimirá 1
```

*   **Operador \| (OR bit-a-bit):** Este operador realiza una operación `OR` bit-a-bit en dos números. El resultado es 1 si al menos uno de los bits es 1.

**Ejemplo:**

```java
int x = 5; 
int y = 3; 
int result = x | y; 
System.out.println(result); // imprimirá 7
```

*   **Operador ^ (XOR bit-a-bit):** Este operador realiza una operación `XOR` bit-a-bit en dos números. El resultado es 1 solo si los bits son diferentes.

**Ejemplo:**

```java
int x = 5; 
int y = 3; 
int result = x ^ y; 
System.out.println(result); // imprimirá 6
```

*   **Operador ~ (complemento a uno):** Este operador invierte todos los bits de un número.

**Ejemplo:**

```java
int x = 5; 
int result = ~x; 
System.out.println(result); // imprimirá -6
```

*   **Operador << (desplazamiento a la izquierda):** Este operador se utiliza para desplazar los bits de un número a la izquierda un número específico de posiciones. El operador se utiliza de la siguiente manera:

**Ejemplo:**

```java
int num = 8; 
int desplazamiento = 2; 
int resultado = num << desplazamiento;
```

En este ejemplo, se está asignando el valor de 8 a la variable `num`, el valor 2 a la variable `desplazamiento` y se está utilizando el operador `<<`para desplazar los bits de `num` 2 posiciones a la izquierda. El valor resultante se almacena en la variable `resultado`.

En este caso el valor de resultado sería 32.

También se puede utilizar el operador << en expresiones más complejas, por ejemplo:

```java
int a = 5;
int b = 3; 
int c = a << b;
```

En este caso, el valor de c sería 40, ya que 5 en binario es 101 y al desplazarlo 3 posiciones a la izquierda sería 101000 que es 40.

*   **Operador >> (desplazamiento a la derecha):** Este operador se utiliza para desplazar los bits de un número a la derecha un número específico de posiciones. El operador se utiliza de la siguiente manera:

```java
int num = 32; 
int desplazamiento = 2; 
int resultado = num >> desplazamiento;
```

En este ejemplo, se está asignando el valor de 32 a la variable **“num”**, el valor 2 a la variable **“desplazamiento”** y se está utilizando el operador >> para desplazar los bits de **“num”** 2 posiciones a la derecha. El valor resultante se almacena en la variable **“resultado”**.

En este caso el valor de resultado sería 8.

También se puede utilizar el operador >> en expresiones más complejas, por ejemplo:

```java
int a = 40; 
int b = 3; 
int c = a >> b;
```

En este caso, el valor de c sería 5, ya que 40 en binario es 101000 y al desplazarlo 3 posiciones a la derecha sería 101 que es 5.

*   **Operador >>> (desplazamiento a la derecha sin signo):** Este operador es similar al operador >> (desplazamiento a la derecha), pero siempre agrega un 0 a la izquierda en lugar del bit de signo. Esto significa que, independientemente del signo del número, se realiza el desplazamiento de bits a la derecha. El operador se utiliza de la siguiente manera:

```java
int num = -32; 
int desplazamiento = 2; 
int resultado = num >>> desplazamiento;
```

En este ejemplo, se está asignando el valor de -32 a la variable **“num”**, el valor 2 a la variable **“desplazamiento”** y se está utilizando el operador >>> para desplazar los bits de **“num”** 2 posiciones a la derecha sin signo. El valor resultante se almacena en la variable **“resultado”**.

En este caso el valor de resultado sería 1073741820.

También se puede utilizar el operador >>> en expresiones más complejas, por ejemplo:

```java
int a = -40; 
int b = 3; 
int c = a >>> b;
```

En este caso, el valor de c sería 536870911, ya que -40 en binario es 11111111111111111111111110101000 y al desplazarlo 3 posiciones a la derecha sin signo sería 11111111111111111111111110101 que es 536870911.

Es importante tener en cuenta que el operador >>> es útil en situaciones en las que se desea realizar un desplazamiento de bits sin tener en cuenta el signo del número, mientras que el operador >> realiza un desplazamiento de bits teniendo en cuenta el signo del número.