---
title: "03. Compilación"
parent: "Java"
---

Compilación y Ejecución de Programas en Java
============================================

Cuando trabajas con Java, entender el proceso de **compilación y ejecución de programas** es esencial. Java es un lenguaje compilado e interpretado, lo que significa que el código fuente primero se compila a bytecode, que luego es interpretado y ejecutado por la **Java Virtual Machine (JVM)**.

En este artículo, explicaremos cómo funciona este proceso y cómo puedes compilar y ejecutar tus programas en diferentes plataformas, utilizando ejemplos detallados para una mejor comprensión.

**Tabla de contenidos**

- [Compilación y Ejecución de Programas en Java](#compilación-y-ejecución-de-programas-en-java)
  - [Proceso de Compilación en Java](#proceso-de-compilación-en-java)
    - [Pasos para compilar un programa Java](#pasos-para-compilar-un-programa-java)
      - [a) Escribir el código fuente](#a-escribir-el-código-fuente)
      - [b) Compilar el programa](#b-compilar-el-programa)
      - [c) Verificación de la compilación](#c-verificación-de-la-compilación)
  - [Ejecución de un Programa Java](#ejecución-de-un-programa-java)
    - [Pasos para ejecutar un programa Java](#pasos-para-ejecutar-un-programa-java)
      - [a) Ejecutar el archivo compilado](#a-ejecutar-el-archivo-compilado)
      - [b) Verificación de la ejecución](#b-verificación-de-la-ejecución)
  - [Detalles Importantes del Proceso de Compilación y Ejecución](#detalles-importantes-del-proceso-de-compilación-y-ejecución)
    - [1) La Máquina Virtual de Java (JVM)](#1-la-máquina-virtual-de-java-jvm)
    - [2) El JDK y el JRE](#2-el-jdk-y-el-jre)
      - [Diferencias clave:](#diferencias-clave)
    - [3) Manejo de Errores de Compilación](#3-manejo-de-errores-de-compilación)
    - [4) Ejemplo de un error de compilación:](#4-ejemplo-de-un-error-de-compilación)
  - [Compilación y Ejecución en Diferentes Sistemas Operativos](#compilación-y-ejecución-en-diferentes-sistemas-operativos)
    - [a) En Windows](#a-en-windows)
    - [b) En Linux o macOS](#b-en-linux-o-macos)
  - [Compilación y Ejecución con Argumentos de Línea de Comandos](#compilación-y-ejecución-con-argumentos-de-línea-de-comandos)
    - [Ejemplo con argumentos:](#ejemplo-con-argumentos)
  - [Conclusión](#conclusión)

Proceso de Compilación en Java
------------------------------

La compilación en Java convierte el código fuente (archivos con extensión `.java`) en un formato que la JVM puede entender: el bytecode (archivos `.class`). Este bytecode es independiente de la plataforma, lo que hace que Java sea tan versátil.

### Pasos para compilar un programa Java

#### a) Escribir el código fuente

El primer paso es crear un archivo `.java` con el código fuente. Un ejemplo básico de un programa en Java es el siguiente:

```java
public class HolaMundo {     
    public static void main(String[] args) {        
        System.out.println("¡Hola, Mundo!");    
    } 
}
```

Guarda este archivo como `HolaMundo.java`.

#### b) Compilar el programa

Para compilar el código fuente, necesitas tener instalado el **JDK (Java Development Kit)**, que incluye el compilador `javac`. El siguiente comando se ejecuta en la terminal o consola para compilar el archivo:

```bash
javac HolaMundo.java`
```
Lenguaje del código: Bash (bash)

**Explicación**:

*   El comando `javac` toma el archivo `.java` y genera un archivo `.class` que contiene el bytecode.
*   Si no hay errores en el código fuente, el compilador crea un archivo llamado `HolaMundo.class`.

#### c) Verificación de la compilación

Una vez compilado, puedes verificar la existencia del archivo `.class` en tu sistema de archivos. Este bytecode es lo que la JVM ejecutará posteriormente.

Ejecución de un Programa Java
-----------------------------

Una vez que has compilado el archivo `.java`, el siguiente paso es ejecutarlo utilizando la **JVM**. Para ello, usas el comando `java` seguido del nombre de la clase que contiene el método `main`.

### Pasos para ejecutar un programa Java

#### a) Ejecutar el archivo compilado

El comando para ejecutar el programa es:

```bash
java HolaMundo
```

**Explicación**:

*   No se incluye la extensión `.class` al ejecutar el comando.
*   La JVM carga el archivo `HolaMundo.class` y empieza a ejecutar las instrucciones que contiene.

#### b) Verificación de la ejecución

Si todo está bien, el programa debería mostrar en la consola:

```bash
¡Hola, Mundo!
```

Lenguaje del código: Bash (bash)

Esto indica que el ciclo de compilación y ejecución ha sido exitoso.

Detalles Importantes del Proceso de Compilación y Ejecución
-----------------------------------------------------------

### 1) La Máquina Virtual de Java (JVM)

La **JVM** es una parte crucial en el ecosistema Java. Su función principal es interpretar y ejecutar el bytecode generado por el compilador.

Una de las mayores ventajas de la JVM es su capacidad de ejecutar programas en cualquier plataforma sin modificaciones, lo que significa que puedes escribir el código en un sistema operativo y ejecutarlo en otro.

### 2) El JDK y el JRE

Para compilar y ejecutar programas en Java, necesitas el **JDK (Java Development Kit)**. El **JRE (Java Runtime Environment)**, por otro lado, solo incluye lo necesario para ejecutar programas, pero no para compilarlos.

#### Diferencias clave:

*   **JDK**: Incluye el compilador (`javac`), la JVM y otras herramientas necesarias para desarrollar aplicaciones en Java.
*   **JRE**: Solo incluye la JVM y las bibliotecas necesarias para ejecutar aplicaciones Java, pero no el compilador.

### 3) Manejo de Errores de Compilación

Durante la compilación, si el código tiene errores (como errores de sintaxis), el compilador `javac` mostrará mensajes de error detallados. Es importante prestar atención a estos mensajes para corregir el código antes de intentar ejecutar el programa.

### 4) Ejemplo de un error de compilación:

Si olvidamos un punto y coma `;` en el siguiente código:

```java
public class HolaMundo {     
    public static void main(String[] args) {        
        System.out.println("¡Hola, Mundo!")   
    }
}
```

El compilador mostrará un error como:

```bash
HolaMundo.java:3: error: ';' expected         System.out.println("¡Hola, Mundo!")                                      ^ 1 error
```

Este error indica que falta un punto y coma al final de la línea.

Compilación y Ejecución en Diferentes Sistemas Operativos
---------------------------------------------------------

### a) En Windows

1.  Abre el **Símbolo del sistema**.
2.  Navega hasta el directorio donde se encuentra tu archivo `.java`.
3.  Ejecuta el comando `javac` para compilar y luego el comando `java` para ejecutar.

```bash
cd C:\MisProgramasJava javac HolaMundo.java java HolaMundo`
```

### b) En Linux o macOS

1.  Abre la **terminal**.
2.  Navega al directorio donde está tu archivo `.java`.
3.  Utiliza los mismos comandos `javac` y `java`.

```bash
cd /home/usuario/MisProgramasJava javac HolaMundo.java java HolaMundo`
```

En todos los casos, asegúrate de tener correctamente configuradas las variables de entorno para el JDK (especialmente `JAVA_HOME` y el `PATH`).

Compilación y Ejecución con Argumentos de Línea de Comandos
-----------------------------------------------------------

En algunos casos, puedes querer pasar argumentos a tu programa desde la línea de comandos. Esto es posible usando el arreglo `String[] args` que se pasa al método `main`. Veamos un ejemplo práctico.

### Ejemplo con argumentos:

```java 
public class Saludo {     
    public static void main(String[] args) {        
        if (args.length > 0) {            
            System.out.println("Hola, " + args[0]);        
            } 
        else {            
                System.out.println("Hola, Mundo");        
        }    
    } 
}
```
Para compilar:

```bash
javac Saludo.java
```

Para ejecutar y pasar un argumento:

```bash
java Saludo Diego
```

El resultado será:

```bash
Hola, Diego
```

Si no se pasan argumentos:

```bash
Hola, Mundo
```

Conclusión
----------

La **compilación y ejecución de programas en Java** es un proceso sencillo que sigue un flujo bien definido: escribir el código, compilarlo a bytecode y ejecutarlo usando la JVM.

Dominar estos pasos es crucial para cualquier desarrollador que trabaje con Java. Con las herramientas adecuadas, como el **JDK** y un entorno correctamente configurado, estarás listo para desarrollar, compilar y ejecutar programas Java sin problemas.