---
title: "11. Comentarios"
parent: "Java"
---

Comentarios en Java
===================

A medida que los proyectos de software crecen en tamaño y complejidad, mantener la calidad y la legibilidad del código se vuelve esencial. Aquí es donde entran en juego los comentarios, una herramienta poderosa para facilitar la comprensión y el mantenimiento del código.

En este artículo, exploraremos en profundidad los diferentes tipos de **comentarios en Java**, cómo utilizarlos correctamente y las mejores prácticas para escribir comentarios que realmente aporten valor a tu código.

Al final de esta guía, estarás equipado con las herramientas y conocimientos necesarios para documentar de manera efectiva tus proyectos en Java, lo que facilitará su mantenimiento y colaboración. ¡Comencemos!

**Tabla de contenidos**
- [Comentarios en Java](#comentarios-en-java)
  - [¿Qué son los comentarios en Java?](#qué-son-los-comentarios-en-java)
  - [Tipos de comentarios en Java](#tipos-de-comentarios-en-java)
    - [Comentarios de una línea](#comentarios-de-una-línea)
      - [Casos de uso y buenas prácticas:](#casos-de-uso-y-buenas-prácticas)
    - [Comentarios de varias líneas](#comentarios-de-varias-líneas)
      - [Casos de uso y buenas prácticas:](#casos-de-uso-y-buenas-prácticas-1)
    - [Comentarios de documentación (Javadoc)](#comentarios-de-documentación-javadoc)
      - [Etiquetas comunes de Javadoc:](#etiquetas-comunes-de-javadoc)
      - [Generación de documentación HTML:](#generación-de-documentación-html)
  - [Buenas prácticas al escribir comentarios en Java](#buenas-prácticas-al-escribir-comentarios-en-java)
    - [1) Ser conciso y claro](#1-ser-conciso-y-claro)
    - [2) Mantener los comentarios actualizados](#2-mantener-los-comentarios-actualizados)
    - [3) Evitar comentarios redundantes](#3-evitar-comentarios-redundantes)
    - [4) Utilizar el tipo de comentario adecuado](#4-utilizar-el-tipo-de-comentario-adecuado)
    - [5) Utilizar el formato adecuado](#5-utilizar-el-formato-adecuado)
  - [Referencias](#referencias)

¿Qué son los comentarios en Java?
---------------------------------

Los comentarios son fragmentos de texto que se pueden incluir en el código fuente de un programa para proporcionar información adicional sobre cómo funciona el código, su propósito o cualquier otra aclaración que sea relevante.

**En Java, los comentarios son ignorados por el compilador**, lo que significa que no afectan la ejecución del programa y están presentes únicamente para ayudar a los desarrolladores a entender y mantener el código.

El uso efectivo de comentarios en Java es fundamental para mantener un código claro y legible, especialmente en proyectos grandes o cuando se trabaja en equipo. **Los comentarios pueden ser utilizados para explicar el propósito de una función**, detallar los pasos de un algoritmo, aclarar el uso de variables o para indicar las mejoras o correcciones pendientes.

Tipos de comentarios en Java
----------------------------

En Java, existen tres tipos de comentarios:

*   Comentarios de una línea
*   Comentarios de varias líneas
*   Comentarios de documentación (Javadoc)

### Comentarios de una línea

Los comentarios de una línea, también conocidos como single-line comments, son una forma sencilla de añadir comentarios breves y concisos en el código Java. Estos comentarios comienzan con dos barras inclinadas (`//`) y se extienden hasta el final de la línea.

El compilador de Java los ignora por completo, por lo que no tienen ningún impacto en la ejecución del programa.

A continuación, se muestra un ejemplo de cómo utilizar comentarios de una línea en un programa Java:

```java
public class EjemploSingleLineComments {     
    public static void main(String[] args) {        
        // Declaración de variables        
        int num1 = 10;        
        int num2 = 20;         
        // Cálculo de la suma        
        int suma = num1 + num2;         
        // Impresión del resultado en la consola        
        System.out.println("La suma de " + num1 + " y " + num2 + " es: " + suma);    
    }
}
```

En este ejemplo, los comentarios de una línea se utilizan para describir brevemente los pasos del programa, facilitando la comprensión del código.

#### Casos de uso y buenas prácticas:

1.  **Explicar el propósito de una variable**: Es útil agregar un comentario de una línea para aclarar el propósito de una variable, especialmente si su nombre no es lo suficientemente descriptivo.

```java
int maxConexiones = 10; // Límite máximo de conexiones simultáneas permitidas
```

1.  **Aclarar una línea de código compleja**: Si una línea de código es particularmente difícil de entender, agregar un comentario de una línea puede ayudar a explicar lo que hace.

```java
double resultado = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)); // Calcula la distancia entre dos puntos
```

1.  **Comentar temporalmente una línea de código**: A veces, es necesario desactivar temporalmente una línea de código durante la depuración o el desarrollo. Los comentarios de una línea son útiles en este caso, pero es importante recordar descomentar el código cuando sea necesario.

```java
// System.out.println("Esta línea está comentada y no se ejecutará");
```

Al utilizar comentarios de una línea, es importante ser conciso y claro en las descripciones. Evita agregar comentarios redundantes o innecesarios que no aporten valor al código.

### Comentarios de varias líneas

Los comentarios de varias líneas, también conocidos como multi-line comments o block comments, permiten agregar comentarios que abarcan más de una línea. Este tipo de comentarios es útil para explicar segmentos de código más extensos o para incluir descripciones más detalladas que no cabrían en una sola línea.

Los comentarios de varias líneas comienzan con un delimitador de apertura (/*) y terminan con un delimitador de cierre (\*/).

A continuación, se presenta un ejemplo de cómo utilizar comentarios de varias líneas en un programa Java:

```java
public class EjemploMultiLineComments {     
    public static void main(String[] args) {        
        int[] numeros = {1, 2, 3, 4, 5};         
        /*
        * Este bloque de código calcula la suma de todos los elementos 
        * en el arreglo 'numeros' y almacena el resultado en la variable 'suma'.   
        */        
        int suma = 0;        
        for (int numero : numeros) {            
            suma += numero;        
        }         
        // Impresión del resultado en la consola        
        System.out.println("La suma de los elementos del arreglo es: " + suma);    
    } 
}
```

En este ejemplo, se utiliza un comentario de varias líneas para describir el propósito del bucle for y el cálculo de la suma.

#### Casos de uso y buenas prácticas:

1.  **Explicar bloques de código más extensos**: Los comentarios de varias líneas son útiles para describir bloques de código más largos o secciones de código que realizan tareas complejas.

```java
/*  
* Este método realiza una búsqueda binaria en un arreglo ordenado. 
* Devuelve el índice del elemento buscado o -1 si no se encuentra. 
*/ 
public static int busquedaBinaria(int[] arreglo, int elemento) {     
    // ... 
}
```

2.  **Incluir descripciones detalladas**: Si es necesario proporcionar una explicación detallada o incluir información adicional, como referencias a documentación externa o algoritmos, los comentarios de varias líneas son la mejor opción.

```java
/*  
* La siguiente función implementa el algoritmo de Euclides para 
* calcular el máximo común divisor (MCD) de dos números enteros. 
* Para más información, consultar: 
* https://es.wikipedia.org/wiki/Algoritmo_de_Euclides 
*/ 
public static int mcd(int a, int b) {     
    // ... 
}
```

3.  **Comentar temporalmente bloques de código**: A veces, es necesario desactivar temporalmente bloques de código durante la depuración o el desarrollo. Los comentarios de varias líneas son útiles en este caso, pero es importante recordar descomentar el código cuando sea necesario.

```java
/* 
System.out.println("Estas líneas están comentadas"); 
System.out.println("y no se ejecutarán"); 
*/
```

Al utilizar comentarios de varias líneas, es crucial ser claro y preciso en las descripciones. Evita agregar comentarios redundantes o innecesarios y asegúrate de que los comentarios estén actualizados con el código que describen.

### Comentarios de documentación (Javadoc)

Los comentarios de documentación, también conocidos como Javadoc, son un tipo especial de comentario en Java que permite generar automáticamente documentación en formato HTML para clases, interfaces, métodos y variables. Estos comentarios comienzan con /\*\* y terminan con \*/.

Javadoc utiliza etiquetas especiales, también conocidas como tags, para proporcionar información estructurada sobre el código.

A continuación, se muestra un ejemplo de cómo utilizar comentarios Javadoc en una clase Java:

```java
/** 
 * Clase Calculadora que implementa operaciones aritméticas básicas. 
 * <p> 
 * Esta clase permite sumar, restar, multiplicar y dividir dos números. 
 * También incluye una función para calcular el módulo. 
 * </p> 
 */ 
public class Calculadora {     
    /**     
     * Suma dos números.     
     * @param a el primer número a sumar     
     * @param b el segundo número a sumar     
     * @return la suma de a y b     
     */    
    public int sumar(int a, int b) {       
         return a + b;    
    }     
    /**     
     * Resta dos números.     
     * @param a el primer número     
     * @param b el número a restar de a     
     * @return la diferencia entre a y b     
     */    
    public int restar(int a, int b) {        
    return a - b;      
    
    }
    // ... (más métodos) 
}
```
En este ejemplo, se utilizan comentarios Javadoc para describir la clase Calculadora y sus métodos. Se incluyen etiquetas como @param y @return para describir los parámetros y el valor de retorno de los métodos.

#### Etiquetas comunes de Javadoc:

*   `@author`: Indica el autor del código.
*   `@version`: Especifica la versión del código.
*   `@param`: Describe un parámetro de un método.
*   `@return`: Describe el valor de retorno de un método.
*   `@throws` o `@exception`: Indica las excepciones que puede lanzar un método.
*   `@see`: Proporciona una referencia a otra clase, método o campo relacionado.
*   `@since`: Indica la versión en la que se introdujo el elemento.
*   `@deprecated`: Marca el elemento como obsoleto y sugiere una alternativa.

#### Generación de documentación HTML:

Para generar la documentación HTML utilizando Javadoc, se debe ejecutar el siguiente comando en la línea de comandos, reemplazando `ruta_del_codigo` por la ruta donde se encuentran los archivos de código fuente:

```bash
javadoc -d docs ruta_del_codigo`
```

Este comando generará la documentación en la carpeta `docs`. Luego, se puede abrir el archivo `index.html` en un navegador para visualizar la documentación generada.

**Al utilizar comentarios Javadoc**, asegúrate de que las descripciones sean claras y precisas. Utiliza las etiquetas apropiadas para proporcionar información estructurada y útil. Mantén los comentarios actualizados con el código que describen, y evita redundancias o información innecesaria.

Buenas prácticas al escribir comentarios en Java
------------------------------------------------

Al escribir comentarios en Java, es esencial seguir algunas buenas prácticas para asegurar que el código sea fácil de leer, comprender y mantener.

Aquí hay algunas pautas que te ayudarán a escribir comentarios efectivos:

### 1) Ser conciso y claro

Los comentarios deben ser breves, directos y claros. Explica el propósito del código, pero evita largas descripciones o detalles innecesarios. Los comentarios deben complementar el código, no reemplazarlo.

```java
// Correcto: Comentario claro y conciso 
int velocidad = 60; // Velocidad en kilómetros por hora 
// Incorrecto: Comentario demasiado largo y redundante 
int velocidad = 60; // La velocidad actual del vehículo, medida en kilómetros por hora, en este momento
```

### 2) Mantener los comentarios actualizados

Si el código cambia, asegúrate de que los comentarios también se actualicen para reflejar las modificaciones. Un comentario desactualizado puede generar confusión y errores en el código.

```java
// Actualiza el comentario si el valor de la variable cambia 
int velocidadMaxima = 120; // Velocidad máxima permitida en autopista
```

### 3) Evitar comentarios redundantes

No utilices comentarios para explicar cosas obvias o redundantes. El código debe ser autoexplicativo en la medida de lo posible, y los comentarios deben centrarse en aclarar aspectos no evidentes o complejos.

```java
// Correcto: Comentario útil que explica el propósito de la variable 
double impuesto = 0.21; // Tasa de impuesto al valor agregado (IVA) 
// Incorrecto: Comentario redundante 
int x = 10; // Asigna 10 a x
```

### 4) Utilizar el tipo de comentario adecuado

Escoge el tipo de comentario que mejor se adapte a la situación. Utiliza comentarios de una línea para descripciones breves, comentarios de varias líneas para explicaciones más extensas y Javadoc para documentar clases, métodos y variables.

```java
// Comentario de una línea para descripción breve 
int area = largo * ancho; 
/*  
* Comentario de varias líneas para explicación más extensa 
* sobre cómo se calcula el área de un triángulo 
*/ 
double areaTriangulo = (base * altura) / 2.0; 
/**  
 * Comentario Javadoc para documentar un método 
 * @param radio el radio del círculo 
 * @return el área del círculo 
 */ 
public double calcularAreaCirculo(double radio) {     
    // ... 
}
```


### 5) Utilizar el formato adecuado

Mantén un formato consistente en todos los comentarios para facilitar la lectura. Asegúrate de que los comentarios estén correctamente alineados y utilicen la misma estructura y estilo en todo el código.

**Siguiendo estas buenas prácticas**, podrás escribir comentarios efectivos que mejoren la legibilidad y comprensión de tu código, facilitando el mantenimiento y la colaboración en proyectos de Java.

Referencias
-----------

Aquí tienes algunas referencias útiles para ampliar tus conocimientos sobre comentarios en Java y buenas prácticas de programación:

1.  [Oracle](https://www.oracle.com/java/technologies/javase/codeconventions-comments.html) – The Java™ Tutorials: Commenting Your Code.
2.  Oracle – [Javadoc Tool](https://www.oracle.com/technical-resources/articles/java/javadoc-tool.html).
3.  [GeeksforGeeks](https://www.geeksforgeeks.org/comments-in-java/) – Comments in Java.

Estas referencias cubren los conceptos y prácticas discutidos en este artículo, incluyendo los diferentes tipos de comentarios en Java, cómo utilizar Javadoc y buenas prácticas al escribir comentarios.