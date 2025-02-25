---
title: 19. Clase String
parent: Java
---

Clase String en Java
====================

Tabla de contenidos


- [Clase String en Java](#clase-string-en-java)
  - [¿Qué es la clase String en Java?](#qué-es-la-clase-string-en-java)
  - [Método length() en Java](#método-length-en-java)
  - [Método charAt() en Java](#método-charat-en-java)
  - [Método concat() en Java](#método-concat-en-java)
  - [Método equals() en Java](#método-equals-en-java)
  - [Método indexOf() en Java](#método-indexof-en-java)
  - [Método substring() en Java](#método-substring-en-java)
  - [Método toUpperCase() en Java](#método-touppercase-en-java)
  - [Método toLowerCase() en Java](#método-tolowercase-en-java)
  - [Método trim() en Java](#método-trim-en-java)

¿Qué es la clase String en Java?
--------------------------------

La clase **String** en Java es una de las clases más utilizadas en el lenguaje, y se utiliza para representar y manipular cadenas de caracteres.

Es una clase final, lo que significa que no puede ser subclasificada, y sus objetos son inmutables, lo que significa que una vez que se crea un objeto **String**, no se puede modificar su contenido.

Los objetos **String** se crean utilizando el operador **new** o mediante la creación de una cadena literal, que es un conjunto de caracteres rodeados por comillas dobles.

Por ejemplo, las siguientes líneas de código crean objetos **String**:

```java
String miCadena = new String("Hola mundo"); 
String otraCadena = "Esto es otra cadena";`
```

La clase **String** proporciona muchos métodos para manipular y trabajar con cadenas, incluyendo:

*   **length():** devuelve la longitud de la cadena.

*   **charAt(int index):** devuelve el carácter en el índice especificado.

*   **concat(String str):** concatena la cadena especificada al final de la cadena actual.

*   **equals(Object obj):** compara la cadena actual con el objeto especificado para determinar si son iguales.

*   **indexOf(String str):** devuelve la posición del primer carácter de la subcadena especificada dentro de la cadena actual.

*   **substring(int beginIndex, int endIndex):** devuelve una subcadena de la cadena actual que comienza en el índice especificado y termina en el índice especificado (el carácter en el índice `endIndex` no está incluido en la subcadena).

*   **toUpperCase():** devuelve una copia de la cadena actual en mayúsculas.

*   **toLowerCase():** devuelve una copia de la cadena actual en minúsculas.

*   **trim():** devuelve una copia de la cadena actual sin espacios en blanco al inicio y al final.

La clase **String** es ampliamente utilizada en Java para la manipulación de texto, y su capacidad para manipular cadenas de caracteres de forma eficiente y sencilla la hace una de las clases más importantes y útiles del lenguaje.

Método length() en Java
-----------------------

El método **length()** en Java es un método de la clase **String** que devuelve la longitud de la cadena, es decir, el número de caracteres que contiene la cadena. El valor devuelto por **length()** es un entero que representa la cantidad de caracteres en la cadena.

El método **length()** es muy útil cuando necesitas conocer la cantidad de caracteres en una cadena para realizar alguna operación o cálculo, o para determinar si una cadena está vacía.

A continuación, te muestro un ejemplo de cómo utilizar el método **length()** en Java:

```java

public class EjemploLength {

    public static void main(String[] args) {

        String miCadena = "Hola, ¿cómo estás?";

        // Usamos el método length() para obtener la longitud de la cadena
        int longitudCadena = miCadena.length();

        // Imprimimos la longitud de la cadena en la consola
        System.out.println("La longitud de la cadena es: " + longitudCadena);

    }

}
```



En este ejemplo, creamos una cadena llamada `miCadena` que contiene el texto **“Hola, ¿cómo estás?”**. Luego, usamos el método **length()** para obtener la longitud de la cadena y almacenamos el resultado en la variable `longitudCadena`. Finalmente, imprimimos el valor de `longitudCadena` en la consola.

La salida del programa sería:

```
La longitud de la cadena es: 18
```


Como puedes ver, el valor de `longitudCadena` es 18, que es la cantidad de caracteres en la cadena **“Hola, ¿cómo estás?”**.

Método charAt() en Java
-----------------------

El método **charAt()** en Java es un método de la clase **String** que devuelve el carácter en la posición especificada dentro de la cadena. El índice se especifica como un valor entero y comienza en cero para el primer carácter de la cadena.

El método **charAt()** es muy útil cuando necesitas obtener un carácter específico de una cadena, por ejemplo, cuando necesitas procesar la cadena carácter por carácter.

A continuación, te muestro un ejemplo de cómo utilizar el método **charAt()** en Java:

```java
public class EjemploCharAt {

    public static void main(String[] args) {

        String miCadena = "Hola, ¿cómo estás?";

        // Usamos el método charAt() para obtener el carácter en la posición 0
        char primerCaracter = miCadena.charAt(0);

        // Usamos el método charAt() para obtener el carácter en la posición 5
        char sextoCaracter = miCadena.charAt(5);

        // Imprimimos los caracteres obtenidos en la consola
        System.out.println("El primer carácter de la cadena es: " + primerCaracter);
        System.out.println("El sexto carácter de la cadena es: " + sextoCaracter);

    }

}
```

En este ejemplo, creamos una cadena llamada `miCadena` que contiene el texto **“Hola, ¿cómo estás?”**. Luego, usamos el método **charAt()** para obtener el primer carácter de la cadena, que tiene un índice de 0, y almacenamos el resultado en la variable `primerCaracter`.

También usamos el método **charAt()** para obtener el sexto carácter de la cadena, que tiene un índice de 5, y almacenamos el resultado en la variable `sextoCaracter`. Finalmente, imprimimos los valores de las variables `primerCaracter` y `sextoCaracter` en la consola.

**La salida del programa sería:**

```
El primer carácter de la cadena es: H El sexto carácter de la cadena es: 
```



Como puedes ver, el valor de `primerCaracter` es **“H”**, que es el primer carácter de la cadena **“Hola, ¿cómo estás?”**, y el valor de `sextoCaracter` es **“,”**, que es el sexto carácter de la cadena.

Método concat() en Java
-----------------------

El método **concat()** en Java es un método de la clase **String** que concatena una cadena con otra cadena y devuelve una nueva cadena que es la concatenación de ambas.

El método **concat()** es similar al operador de concatenación **+**, pero es útil cuando necesitas concatenar cadenas de forma dinámica.

A continuación, te muestro un ejemplo de cómo utilizar el método **concat()** en Java:

```java
public class EjemploConcat {

    public static void main(String[] args) {

        String nombre = "Juan";
        String apellido = "Pérez";

        // Usamos el método concat() para concatenar el nombre y el apellido
        String nombreCompleto = nombre.concat(" ").concat(apellido);

        // Imprimimos el nombre completo en la consola
        System.out.println("El nombre completo es: " + nombreCompleto);

    }

}
```
En este ejemplo, creamos dos cadenas: `nombre` y `apellido`. Luego, usamos el método **concat()** para concatenar el nombre y el apellido, y almacenamos el resultado en la variable `nombreCompleto`. El método **concat()** nos permite concatenar las cadenas **“Juan”** y **“Pérez”** con un espacio en blanco entre ellas.

Finalmente, imprimimos el valor de la variable `nombreCompleto` en la consola.

**La salida del programa sería:**

```
El nombre completo es: Juan Pérez`
```


Como puedes ver, el valor de la variable `nombreCompleto` es **“Juan Pérez”**, que es la concatenación de las cadenas **“Juan”** y **“Pérez”** con un espacio en blanco entre ellas.

Método equals() en Java
-----------------------

El método **equals()** en Java es un método de la clase **String** que compara dos cadenas para determinar si son iguales. Devuelve `true` si las dos cadenas son iguales y `false` en caso contrario.

El método **equals()** compara las cadenas carácter por carácter, teniendo en cuenta el orden y la cantidad de caracteres en cada cadena.

A continuación, te muestro un ejemplo de cómo utilizar el método **equals()** en Java:

```java
public class EjemploEquals {

    public static void main(String[] args) {

        String cadena1 = "Hola";
        String cadena2 = "Hola";
        String cadena3 = "Hola Mundo";

        // Comparamos si cadena1 es igual a cadena2 usando el método equals()
        if (cadena1.equals(cadena2)) {
            System.out.println("cadena1 es igual a cadena2");
        } else {
            System.out.println("cadena1 es diferente a cadena2");
        }

        // Comparamos si cadena1 es igual a cadena3 usando el método equals()
        if (cadena1.equals(cadena3)) {
            System.out.println("cadena1 es igual a cadena3");
        } else {
            System.out.println("cadena1 es diferente a cadena3");
        }

    }

}
```
En este ejemplo, creamos tres cadenas: `cadena1`, `cadena2` y `cadena3`. Las dos primeras cadenas son iguales, mientras que la tercera cadena es diferente. Luego, usamos el método **equals()** para comparar la igualdad de las cadenas.

En la primera comparación, usamos el método **equals()** para comparar `cadena1` con `cadena2`. Como ambas cadenas son iguales, el resultado de la comparación es `true` y el mensaje **“cadena1 es igual a cadena2”** se imprime en la consola.

En la segunda comparación, usamos el método **equals()** para comparar `cadena1` con `cadena3`. Como ambas cadenas son diferentes, el resultado de la comparación es `false` y el mensaje **“cadena1 es diferente a cadena3”** se imprime en la consola.

**La salida del programa sería:**

```
cadena1 es igual a cadena2 cadena1 es diferente a cadena3
```

Como puedes ver, el método **equals()** es muy útil para comparar la igualdad de dos cadenas en Java.

Es importante tener en cuenta que el método **equals()** distingue entre mayúsculas y minúsculas, es decir, dos cadenas con los mismos caracteres, pero en diferentes casos no serán iguales si se comparan con **equals()**.

Método indexOf() en Java
------------------------

El método **indexOf()** en Java es un método de la clase **String** que devuelve la posición de la primera ocurrencia de una subcadena dentro de una cadena. Si la subcadena no se encuentra dentro de la cadena, el método devuelve -1.

A continuación, te muestro un ejemplo de cómo utilizar el método **indexOf()** en Java:

```java
public class EjemploIndexOf {

    public static void main(String[] args) {

        String cadena = "Hola mundo";

        // Buscamos la posición de la letra 'm' en la cadena
        int posicion = cadena.indexOf('m');

        // Imprimimos la posición de la letra 'm' en la consola
        System.out.println("La letra 'm' se encuentra en la posición " + posicion + " de la cadena.");

        // Buscamos la posición de la subcadena "mun" en la cadena
        int posicionSubcadena = cadena.indexOf("mun");

        // Imprimimos la posición de la subcadena "mun" en la consola
        System.out.println("La subcadena 'mun' se encuentra en la posición " + posicionSubcadena + " de la cadena.");

    }

}
```

En este ejemplo, creamos una cadena llamada `cadena` que contiene la frase **“Hola mundo”**. Luego, usamos el método **indexOf()** para buscar la posición de la letra **‘m’** dentro de la cadena.

El método `**indexOf()**` devuelve la posición de la primera ocurrencia de la letra **‘m’**, que en este caso es 5, por lo que el mensaje **“La letra ‘m’ se encuentra en la posición 5 de la cadena”** se imprime en la consola.

Después, usamos el método **indexOf()** para buscar la posición de la subcadena **“mun”** dentro de la cadena.

El método **indexOf()** devuelve la posición de la primera ocurrencia de la subcadena **“mun”**, que en este caso es 8, por lo que el mensaje **“La subcadena ‘mun’ se encuentra en la posición 8 de la cadena”** se imprime en la consola.

Si la subcadena no se encuentra dentro de la cadena, el método **indexOf()** devuelve -1. Por ejemplo, si buscamos la posición de la subcadena **“adiós”** dentro de la cadena, el método **indexOf()** devuelve -1, lo que indica que la subcadena no se encuentra dentro de la cadena.

**La salida del programa sería:**

```
La letra 'm' se encuentra en la posición 5 de la cadena. La subcadena 'mun' se encuentra en la posición 8 de la cadena.
````

Como puedes ver, el método **indexOf()** es muy útil para buscar la posición de una subcadena dentro de una cadena en Java.

Método substring() en Java
--------------------------

El método **substring()** en Java es un método de la clase **String** que devuelve una subcadena de una cadena existente.

La subcadena comienza en el índice especificado y se extiende hasta el final de la cadena, o hasta el índice especificado, según se especifique en los argumentos.

A continuación, te muestro un ejemplo de cómo utilizar el método **substring()** en Java:

```java
public class EjemploSubstring {

    public static void main(String[] args) {

        String cadena = "Hola mundo";

        // Obtenemos la subcadena que comienza en el índice 3
        String subcadena1 = cadena.substring(3);

        // Imprimimos la subcadena en la consola
        System.out.println("La subcadena que comienza en el índice 3 es: " + subcadena1);

        // Obtenemos la subcadena que comienza en el índice 3 y termina en el índice 7
        String subcadena2 = cadena.substring(3, 8);

        // Imprimimos la subcadena en la consola
        System.out.println("La subcadena que comienza en el índice 3 y termina en el índice 7 es: " + subcadena2);

    }

}
```
En este ejemplo, creamos una cadena llamada `cadena` que contiene la frase **“Hola mundo”**. Luego, usamos el método **substring()** para obtener una subcadena de la cadena original.

En el primer ejemplo, utilizamos el método **substring()** con un solo argumento para obtener la subcadena que comienza en el índice 3 de la cadena original y se extiende hasta el final de la cadena.

El método **substring()** devuelve una nueva cadena que contiene la subcadena, que se almacena en la variable `subcadena1`. Luego, imprimimos esta subcadena en la consola.

En el segundo ejemplo, utilizamos el método **substring()** con dos argumentos para obtener la subcadena que comienza en el índice 3 de la cadena original y termina en el índice 7.

El método **substring()** devuelve una nueva cadena que contiene la subcadena, que se almacena en la variable `subcadena2`. Luego, imprimimos esta subcadena en la consola.

**La salida del programa sería:**

```
La subcadena que comienza en el índice 3 es: a mundo La subcadena que comienza en el índice 3 y termina en el índice 7 es: a mun
```

Como puedes ver, el método **substring()** es muy útil para obtener subcadenas de una cadena existente en Java.

Método toUpperCase() en Java
----------------------------

El método **toUpperCase()** en Java es un método de la clase **String** que se utiliza para convertir todos los caracteres de una cadena a mayúsculas. Este método devuelve una nueva cadena con todos los caracteres en mayúscula.

A continuación, te muestro un ejemplo de cómo utilizar el método **toUpperCase()** en Java:

```java
public class EjemploUpperCase {

    public static void main(String[] args) {

        String cadena = "Hola mundo";

        // Convertimos la cadena a mayúsculas
        String mayusculas = cadena.toUpperCase();

        // Imprimimos la cadena en mayúsculas en la consola
        System.out.println("La cadena en mayúsculas es: " + mayusculas);

    }

}
```
En este ejemplo, creamos una cadena llamada `cadena` que contiene la frase **“Hola mundo”**. Luego, usamos el método **toUpperCase()** para convertir todos los caracteres de la cadena a mayúsculas.

El método **toUpperCase()** devuelve una nueva cadena que contiene la cadena original en mayúsculas, que se almacena en la variable `mayusculas`. Luego, imprimimos esta nueva cadena en la consola.

**La salida del programa sería:**

```
La cadena en mayúsculas es: HOLA MUNDO
```


Como puedes ver, el método **toUpperCase()** es muy útil para convertir todas las letras de una cadena a mayúsculas en Java.

Método toLowerCase() en Java
----------------------------

El método **toLowerCase()** en Java es un método de la clase **String** que se utiliza para convertir todos los caracteres de una cadena a minúsculas. Este método devuelve una nueva cadena con todos los caracteres en minúscula.

A continuación, te muestro un ejemplo de cómo utilizar el método **toLowerCase()** en Java:
```java
public class EjemploLowerCase {

    public static void main(String[] args) {

        String cadena = "Hola mundo";

        // Convertimos la cadena a minúsculas
        String minusculas = cadena.toLowerCase();

        // Imprimimos la cadena en minúsculas en la consola
        System.out.println("La cadena en minúsculas es: " + minusculas);

    }

}
```

En este ejemplo, creamos una cadena llamada `cadena` que contiene la frase **“Hola mundo”**. Luego, usamos el método **toLowerCase()** para convertir todos los caracteres de la cadena a minúsculas.

El método **toLowerCase()** devuelve una nueva cadena que contiene la cadena original en minúsculas, que se almacena en la variable `minusculas`. Luego, imprimimos esta nueva cadena en la consola.

**La salida del programa sería:**

```
La cadena en minúsculas es: hola mundo
```

Como puedes ver, el método **toLowerCase()** es muy útil para convertir todas las letras de una cadena a minúsculas en Java.

Método trim() en Java
---------------------

El método **trim()** en Java es un método de la clase **String** que se utiliza para eliminar los espacios en blanco que se encuentran al principio y al final de una cadena.

Este método devuelve una nueva cadena que es una copia de la cadena original, pero sin los espacios en blanco al principio y al final.

A continuación, te muestro un ejemplo de cómo utilizar el método **trim()** en Java:

```java
public class EjemploTrim {

    public static void main(String[] args) {

        String cadena = "    Hola mundo    ";

        // Eliminamos los espacios en blanco al principio y al final de la cadena
        String cadenaLimpia = cadena.trim();

        // Imprimimos la cadena limpia en la consola
        System.out.println("La cadena limpia es: " + cadenaLimpia);

    }

}
```
En este ejemplo, creamos una cadena llamada `cadena` que contiene la frase **“ Hola mundo ”**. Luego, usamos el método **trim()** para eliminar los espacios en blanco al principio y al final de la cadena.

El método **trim()** devuelve una nueva cadena que contiene la cadena original sin los espacios en blanco al principio y al final, que se almacena en la variable `cadenaLimpia`. Luego, imprimimos esta nueva cadena en la consola.

**La salida del programa sería:**

```
La cadena limpia es: Hola mundo
```

Como puedes ver, el método **trim()** es muy útil para eliminar los espacios en blanco al principio y al final de una cadena en Java.