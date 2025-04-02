---
title: 20. Clase StringBuilder
parent: Java
---


Clase StringBuilder y StringBuffer en Java
===========================

La clase `StringBuilder` es una de las clases más utilizadas en Java cuando se trata de manipulación de cadenas de caracteres de manera eficiente. A diferencia de la clase `String`, que es inmutable, `StringBuilder` permite modificar el contenido de una cadena sin crear nuevos objetos, lo que la convierte en una opción más eficiente cuando se realizan múltiples modificaciones en una cadena.

Tabla de contenidos


- [Clase StringBuilder y StringBuffer en Java](#clase-stringbuilder-y-stringbuffer-en-java)
  - [¿Qué es la clase StringBuilder?](#qué-es-la-clase-stringbuilder)
    - [Características de StringBuilder](#características-de-stringbuilder)
    - [Constructor de StringBuilder](#constructor-de-stringbuilder)
    - [Métodos Principales de StringBuilder](#métodos-principales-de-stringbuilder)
      - [1. append()](#1-append)
      - [2. insert()](#2-insert)
      - [3. replace()](#3-replace)
      - [4. delete()](#4-delete)
      - [5. reverse()](#5-reverse)
      - [6. capacity()](#6-capacity)
    - [Ejemplo práctico: Construcción eficiente de cadenas](#ejemplo-práctico-construcción-eficiente-de-cadenas)
    - [Diferencia entre String, StringBuilder y StringBuffer](#diferencia-entre-string-stringbuilder-y-stringbuffer)
  - [Conclusión](#conclusión)

¿Qué es la clase StringBuilder?
-------------------------------

La clase `StringBuilder` en Java forma parte del paquete `java.lang` y es una clase mutable que se utiliza para crear y manipular cadenas de caracteres de una manera más eficiente que `String`, especialmente cuando se requieren varias modificaciones a la misma cadena.

La principal ventaja de `StringBuilder` es que no crea un nuevo objeto en memoria cada vez que se modifica el contenido de la cadena, lo que mejora el rendimiento.

### Características de StringBuilder

*   **Mutable:** El contenido de un objeto `StringBuilder` puede cambiar sin crear nuevos objetos.
*   **No es seguro para hilos:** A diferencia de `StringBuffer`, `StringBuilder` no es seguro para entornos multihilo.
*   **Eficiente:** Ofrece mejor rendimiento en operaciones repetidas de concatenación o modificación de cadenas.
*   **Similar a StringBuffer:** La clase `StringBuilder` es casi idéntica a `StringBuffer`, pero sin la sincronización, lo que la hace más rápida cuando no es necesario el control de hilos.

### Constructor de StringBuilder

Existen varios constructores para crear un objeto `StringBuilder`:
```java
// Crea un StringBuilder vacío con una capacidad inicial de 16 caracteres.
StringBuilder sb1 = new StringBuilder();

// Crea un StringBuilder con un contenido inicial.
StringBuilder sb2 = new StringBuilder("Hola");

// Crea un StringBuilder con una capacidad inicial específica.
StringBuilder sb3 = new StringBuilder(50);
```
### Métodos Principales de StringBuilder

La clase `StringBuilder` ofrece una serie de métodos que facilitan la manipulación de cadenas. A continuación se presentan los más utilizados:

#### 1\. append()

El método `append()` se utiliza para agregar datos al final del `StringBuilder`. Acepta varios tipos de datos (cadenas, enteros, caracteres, booleanos, etc.).

```java
StringBuilder sb = new StringBuilder("Hola"); 
sb.append(" Mundo"); 
System.out.println(sb);  // Imprime: Hola Mundo`

```

#### 2\. insert()

El método `insert()` permite insertar una cadena en una posición específica dentro de un `StringBuilder`.

```java
StringBuilder sb = new StringBuilder("Hola Mundo"); 
sb.insert(5, "Java "); 
System.out.println(sb);  // Imprime: Hola Java Mundo`

```

#### 3\. replace()

El método `replace()` reemplaza una porción de la cadena por un nuevo valor.

```java
StringBuilder sb = new StringBuilder("Hola Mundo"); 
sb.replace(5, 10, "Java"); 
System.out.println(sb);  // Imprime: Hola Java`

```

#### 4\. delete()

El método `delete()` elimina una porción de caracteres dentro de un `StringBuilder`.

```java
StringBuilder sb = new StringBuilder("Hola Java Mundo"); 
sb.delete(5, 9); 
System.out.println(sb);  // Imprime: Hola Mundo`

```

#### 5\. reverse()

El método `reverse()` invierte el contenido del `StringBuilder`.

```java
StringBuilder sb = new StringBuilder("Hola"); 
sb.reverse(); 
System.out.println(sb);  // Imprime: aloH`

```

#### 6\. capacity()

El método `capacity()` devuelve la capacidad actual del `StringBuilder`, que es la cantidad de espacio disponible antes de que sea necesario redimensionar.

```java
StringBuilder sb = new StringBuilder(); 
System.out.println(sb.capacity());  // Imprime: 16`

```

### Ejemplo práctico: Construcción eficiente de cadenas

En situaciones donde se necesita concatenar varias cadenas de texto, `StringBuilder` es mucho más eficiente que `String`. A continuación se muestra un ejemplo de cómo usar `StringBuilder` para construir una cadena en un bucle.
```java
public class Main {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            sb.append(i).append(" ");
        }
        System.out.println(sb.toString());  // Imprime: 0 1 2 3 4 5 6 7 8 9 
    }
}
```
### Diferencia entre String, StringBuilder y StringBuffer

Es importante conocer las diferencias entre las tres clases principales que manipulan cadenas en Java:

*   **String**: Es inmutable. Cada vez que se modifica una cadena, se crea un nuevo objeto.
*   **StringBuilder**: Es mutable y no es seguro para hilos. Se utiliza cuando se realizan varias modificaciones en una cadena en un solo hilo.
*   **StringBuffer**: Es similar a `StringBuilder`, pero es seguro para hilos, lo que lo hace más lento cuando no se necesita sincronización.

Conclusión
----------

La clase `StringBuilder` es una herramienta poderosa en Java cuando se trata de manipular cadenas de caracteres de manera eficiente, especialmente en situaciones donde se realizan múltiples modificaciones a una cadena. Su uso puede mejorar significativamente el rendimiento de las aplicaciones que manejan grandes volúmenes de concatenaciones o modificaciones de texto.

Recuerda siempre considerar el contexto de tu aplicación al elegir entre `String`, `StringBuilder` y `StringBuffer`. Si trabajas en un entorno de un solo hilo y necesitas manipular cadenas de forma intensiva, `StringBuilder` es la mejor opción.

La clase `StringBuffer` es una herramienta fundamental cuando se necesita manipular cadenas de texto de manera eficiente y segura en entornos multi-hilo. Su capacidad para modificar cadenas sin crear nuevos objetos la convierte en una opción más eficiente que String, y su sincronización asegura que sea segura para su uso en aplicaciones concurrentes.

