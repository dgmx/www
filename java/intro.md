---
title: "01. Hola Mundo en Java"
parent: "Java"
---

Hola Mundo en Java
==================

Es hora de escribir tu primer programa en Java. No hay mejor manera de comenzar que con el clásico “Hola Mundo”.

Este programa simple no solo te enseñará la estructura básica de un programa Java, sino que también te ayudará a entender cómo compilar y ejecutar tu código.

\[oregoom-shortcode-button-play-youtube id=”CW0fY-dsEQs”\]

Tabla de contenidos

[Toggle](#)

- [Hola Mundo en Java](#hola-mundo-en-java)
  - [¿Qué es “Hola Mundo” en Java?](#qué-es-hola-mundo-en-java)
  - [Estructura Básica de un Programa en Java](#estructura-básica-de-un-programa-en-java)
  - [Escribiendo el Programa “Hola Mundo”](#escribiendo-el-programa-hola-mundo)
    - [Explicación del Código](#explicación-del-código)
  - [Compilar y Ejecutar el Programa](#compilar-y-ejecutar-el-programa)
    - [Paso 1: Compilar el Programa](#paso-1-compilar-el-programa)
    - [Paso 2: Ejecutar el Programa](#paso-2-ejecutar-el-programa)
  - [Conclusión](#conclusión)

¿Qué es “Hola Mundo” en Java?
-----------------------------

“Hola Mundo” es un programa tradicional que imprime la frase “¡Hola, Mundo!” en la pantalla. Es el ejemplo más sencillo para demostrar la sintaxis básica de cualquier lenguaje de programación, incluido Java.

Estructura Básica de un Programa en Java
----------------------------------------

Antes de escribir el código, es importante entender los componentes básicos de un programa en Java:

1.  **Clase**: En Java, todo el código debe estar dentro de una clase. Una clase es una plantilla o molde a partir del cual se crean objetos.
2.  **Método `main`**: Este es el punto de entrada de cualquier aplicación Java. Cuando ejecutas un programa Java, el método `main` es lo primero que se ejecuta.
3.  **Sentencias**: Las sentencias son las instrucciones que el programa sigue para realizar tareas. En este caso, nuestra tarea será imprimir texto en la consola.

Escribiendo el Programa “Hola Mundo”
------------------------------------

A continuación, te muestro el código del programa “Hola Mundo” en Java, con comentarios detallados para que entiendas cada parte:
```java
// Definimos la clase principal llamada 'HolaMundo'
public class HolaMundo {

    // Este es el método principal, el punto de entrada del programa
    public static void main(String[] args) {
        // Esta línea imprime el mensaje "¡Hola, Mundo!" en la consola
        System.out.println("¡Hola, Mundo!");
    }
}
```
Lenguaje del código: Java (java)

### Explicación del Código

*   **`public class HolaMundo { ... }`**:

Aquí estamos definiendo una clase llamada `HolaMundo`. En Java, el nombre de la clase debe coincidir con el nombre del archivo, por lo que este código debería estar en un archivo llamado `HolaMundo.java`.

*   **`public static void main(String[] args) { ... }`**:

Este es el método `main`, el cual es obligatorio en cualquier programa Java que desees ejecutar. Las palabras clave `public`, `static`, y `void` tienen significados específicos:

*   `public`: Significa que el método es accesible desde cualquier otra parte del programa.
*   `static`: Significa que el método pertenece a la clase `HolaMundo` en lugar de a una instancia de la clase.
*   `void`: Indica que el método no devuelve ningún valor.

`String[] args`: Este es un parámetro que puede recibir argumentos de línea de comandos, aunque en este caso no lo estamos utilizando.

*   **`System.out.println("¡Hola, Mundo!");`**:

Esta es la línea que imprime “¡Hola, Mundo!” en la consola.

`System.out` es un objeto de salida estándar que apunta a la consola, y `println` es un método que imprime el texto seguido de un salto de línea.

Compilar y Ejecutar el Programa
-------------------------------

### Paso 1: Compilar el Programa

Una vez que hayas escrito tu código en un archivo llamado `HolaMundo.java`, debes compilarlo. La compilación convierte el código fuente en un formato que la máquina virtual Java (JVM) puede ejecutar.

1.  **Abre la terminal o línea de comandos**.
2.  **Navega hasta el directorio donde guardaste `HolaMundo.java`**.
3.  **Ejecuta el siguiente comando**:

   `javac HolaMundo.java`

Lenguaje del código: Bash (bash)

Si no hay errores en el código, este comando creará un archivo `HolaMundo.class`.

### Paso 2: Ejecutar el Programa

Después de compilar el código, puedes ejecutar el programa utilizando la JVM:

1.  **En la misma terminal, ejecuta el siguiente comando**:

   `java HolaMundo`

Lenguaje del código: Bash (bash)

Esto debería mostrar el siguiente resultado en la consola:

   `¡Hola, Mundo!`

Lenguaje del código: Bash (bash)

Conclusión
----------

¡Felicidades! Has escrito, compilado y ejecutado tu primer programa en Java. Aunque “Hola Mundo” es un ejemplo sencillo, marca el comienzo de tu viaje en el desarrollo con Java.

Ahora que has comprendido la estructura básica de un programa Java, estás listo para profundizar en los elementos que hacen que el código sea más legible y mantenible.