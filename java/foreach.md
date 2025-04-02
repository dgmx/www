---
title: "15. Bucle For-Each"
parent: "Java"
---

# For-each en Java

**Tabla de contenidos**

- [For-each en Java](#for-each-en-java)
  - [¿Qué es for-each en Java?](#qué-es-for-each-en-java)
  - [For-each en ArrayList](#for-each-en-arraylist)
  - [Ventajas y desventajas de for-each](#ventajas-y-desventajas-de-for-each)
  - [Más ejemplos](#más-ejemplos)

## ¿Qué es for-each en Java?

El bucle **`for-each`** en Java es una forma simplificada de recorrer un arreglo o una colección. Se utiliza para iterar a través de cada elemento en una colección sin tener que administrar el índice de iteración. Es similar al bucle **`for`** tradicional, pero se simplifica la sintaxis.

La sintaxis básica es:

```java
for (tipo variable : coleccion) {     
    // instrucciones 
}
```

Ejemplo de uso
```java
int[] numeros = {1, 2, 3, 4, 5}; 
for (int num : numeros) {     
    System.out.println(num); 
}
```

En este ejemplo, el bucle **`for-each`** itera a través de cada elemento en el arreglo **`numeros`** y asigna cada valor a la variable **`num`**. El cuerpo del bucle imprime cada número en la consola.

## For-each en ArrayList

También se puede utilizar en una colección como ArrayList

```java
ArrayList<String> nombres = new ArrayList<String>();
nombres.add("Juan");
nombres.add("Pedro");
nombres.add("Maria");
for (String nombre : nombres) {
    System.out.println(nombre);
}
```

Es importante mencionar que el `for-each` solo es de lectura, no se puede modificar la colección durante la iteración, si deseas modificar la colección, debes usar el `Iterator`.

En cambio, también existe una alternativa llamada `forEach()` que es un método en las colecciones de Java 8 y posteriores, que permite aplicar una función a cada elemento de la colección, eso permite realizar operaciones de lectura y escritura en los elementos.
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.forEach(num -> num = num * 2);
```

En este ejemplo, se utiliza el **`método forEach`** para multiplicar por 2 cada elemento de la lista.

## Ventajas y desventajas de for-each

Además de ser una forma más legible y fácil de escribir, el bucle `for-each` también tiene algunas ventajas en comparación con el bucle `for` tradicional.

*   El bucle `for-each` es más seguro, ya que no se pueden cometer errores como acceder a un índice fuera de los límites del arreglo o de la colección.
*   Es más eficiente en términos de rendimiento, porque no se requiere el uso de un índice para iterar.
*   El bucle `for-each` es más fácil de leer y entender, porque se ve más claro el propósito de la iteración y se ahorra la declaración de una variable de índice.

Sin embargo, existen algunas limitaciones en el uso del bucle `for-each`:

*   Como ya se mencionó, el bucle `for-each` solo es de lectura, por lo que no se pueden modificar los elementos de la colección durante la iteración.
*   No se puede conocer la posición actual del elemento en la colección durante la iteración, si es necesario conocer la posición debe usar el bucle `for` tradicional.
*   El bucle `for-each` no soporta la iteración en sentido inverso, si es necesario iterar en sentido inverso debe usar el bucle `for` tradicional.

En general, el bucle `for-each` es una excelente opción para iterar a través de un arreglo o una colección en la mayoría de los casos. Sin embargo, es importante tener en cuenta las limitaciones mencionadas anteriormente y elegir la opción adecuada según las necesidades del código.

## Más ejemplos

Aquí hay algunos ejemplos de cómo se utiliza el bucle `for-each` en Java:

1.  Iterando a través de un arreglo:
```java
int[] numeros = {1, 2, 3, 4, 5};
for (int numero : numeros) {
    System.out.println(numero);
}
```
2.  Iterando a través de una lista:
```java
List<String> nombres = new ArrayList<>();
nombres.add("Juan");
nombres.add("Pablo");
nombres.add("Maria");
for (String nombre : nombres) {
    System.out.println(nombre);
}
```
3.  Iterando a través de un conjunto:
```java
Set<Integer> edades = new HashSet<>();
edades.add(25);
edades.add(30);
edades.add(35);
for (Integer edad : edades) {
    System.out.println(edad);
}
```
4.  Iterando a través de un mapa:
```java
Map<String, Integer> estudiantes = new HashMap<>();
estudiantes.put("Juan", 25);
estudiantes.put("Pablo", 30);
estudiantes.put("Maria", 35);
for (Map.Entry<String, Integer> estudiante : estudiantes.entrySet()) {
    System.out.println(estudiante.getKey() + " tiene " + estudiante.getValue() + " años");
}
```
En estos ejemplos, se puede ver cómo el bucle **`for-each`** se utiliza para iterar a través de diferentes tipos de colecciones, como arreglos, listas, conjuntos y mapas.

Cabe mencionar que el bucle **`for-each`** solo funciona con colecciones que implementen la interfaz **`Iterable`** de Java.