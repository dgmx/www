---
title: "13. Switch"
parent: "Java"
---

Switch en Java
==============

Tabla de contenidos

- [Switch en Java](#switch-en-java)
  - [Introducción](#introducción)
  - [¿Qué es switch en Java?](#qué-es-switch-en-java)
  - [Sintaxis básica de la declaración switch](#sintaxis-básica-de-la-declaración-switch)
  - [Tipos de datos admitidos por switch](#tipos-de-datos-admitidos-por-switch)
    - [“int” y tipos enteros más pequeños (`byte`, `short`, `char`)](#int-y-tipos-enteros-más-pequeños-byte-short-char)
    - [String](#string)
    - [enum](#enum)
  - [Uso del switch con Java 12 y la introducción de la expresión switch](#uso-del-switch-con-java-12-y-la-introducción-de-la-expresión-switch)
  - [Consejos y buenas prácticas para utilizar switch](#consejos-y-buenas-prácticas-para-utilizar-switch)
    - [Evitar “fallthrough”:](#evitar-fallthrough)
    - [Preferir la expresión switch:](#preferir-la-expresión-switch)
    - [Usar “default” para manejar casos no especificados:](#usar-default-para-manejar-casos-no-especificados)
    - [Evitar el anidamiento excesivo de declaraciones switch:](#evitar-el-anidamiento-excesivo-de-declaraciones-switch)
    - [Utilizar “enum” para valores fijos:](#utilizar-enum-para-valores-fijos)
  - [Casos de uso y ejemplos prácticos](#casos-de-uso-y-ejemplos-prácticos)
  - [Conclusión](#conclusión)

Introducción
------------

Una de las características más importantes de cualquier lenguaje de programación es la capacidad de controlar el flujo de ejecución del código. En Java, esto se logra mediante diversas estructuras de control de flujo como [if](condicionales.md), [if-else](condicionales.md), [for](for.md), [while](while.md) y **switch**.

En este artículo, nos centraremos en el uso y la implementación del **switch en Java**, una herramienta poderosa y flexible para gestionar decisiones múltiples basadas en una única variable o expresión.

El objetivo de este artículo es proporcionar una descripción completa y detallada del **switch en Java**, incluyendo su sintaxis, ejemplos de uso y buenas prácticas.

Además, exploraremos las novedades introducidas en las versiones más recientes de Java en relación con el **switc**h, como las **switch expressions**.

Al final del artículo, tendrás una comprensión sólida de cómo utilizar el **switch** en tus proyectos y cómo sacar el máximo provecho de esta útil estructura de control de flujo.

¿Qué es switch en Java?
-----------------------

La declaración **switch** es una estructura de control de flujo condicional que permite evaluar una expresión o variable contra varios valores posibles y ejecutar un bloque de código específico para cada caso.

A diferencia de las declaraciones [if-else](condicionales.md), que pueden volverse engorrosas y difíciles de leer cuando se evalúan múltiples condiciones, la declaración **switch** ofrece una forma más organizada y legible de manejar estas situaciones.

Veamos un ejemplo de una declaración [if-else](condicionales.md) y su equivalente utilizando **switch**:

**Ejemplo 1:** Uso de [if-else](condicionales.md) para determinar la estación del año según el mes
```java
int mes = 3; // Marzo
String estacion;

if (mes == 12 || mes == 1 || mes == 2) {
    estacion = "Invierno";
} else if (mes >= 3 && mes <= 5) {
    estacion = "Primavera";
} else if (mes >= 6 && mes <= 8) {
    estacion = "Verano";
} else {
    estacion = "Otoño";
}

System.out.println("La estación del año es: " + estacion);
```

**Ejemplo 2:** Uso de **switch** para determinar la estación del año según el mes

```java
int mes = 3; // Marzo 
String estacion; 
switch (mes) {     
    case 12:    
    case 1:    
    case 2:        
        estacion = "Invierno";        
        break;    
    case 3:    
    case 4:    
    case 5:        
        estacion = "Primavera";        
        break;    
    case 6:    
    case 7:    
    case 8:        
        estacion = "Verano";        
    break;    
    default:        
        estacion = "Otoño"; 
} 
System.out.println("La estación del año es: " + estacion);
```

Como se puede observar en los ejemplos anteriores, el uso de **switch** permite una representación más clara y estructurada de las condiciones que se evalúan.

En lugar de anidar varias declaraciones [if-else](condicionales.md), **switch** permite agrupar casos relacionados y simplifica la lectura del código.

Sintaxis básica de la declaración switch
----------------------------------------

La estructura básica de una declaración **switch en Java** incluye los siguientes componentes: **switch**, **case**, **break** y **default**.

A continuación, se presenta un ejemplo de la estructura básica y una descripción de cada componente:

```java
switch (expresion) {     
    case 
        valor1:        
        // Bloque de código a ejecutar si la expresión es igual a valor1        
        break;    
    case 
        valor2:        
        // Bloque de código a ejecutar si la expresión es igual a valor2        
        break;    
    // ... más casos si es necesario    
    default:        
    // Bloque de código a ejecutar si la expresión no coincide con ninguno de los valores anteriores 
}
```

*   **switch**: Es la palabra clave que inicia la declaración, seguida de una expresión o variable entre paréntesis. La expresión o variable será evaluada y comparada con los valores especificados en cada `case`.
*   **case**: Indica un valor posible para la expresión evaluada. Si la expresión coincide con el valor especificado, se ejecutará el bloque de código asociado a ese `case`. Puedes agregar tantos `case` como necesites para cubrir todos los valores posibles.
*   **break**: Se utiliza para salir de la declaración **switch** después de ejecutar el bloque de código asociado a un `case` coincidente. Si no se incluye el `break`, la ejecución continuará con el siguiente `case`, lo que puede llevar a un comportamiento no deseado, conocido como “fallthrough”.
*   **default**: Es opcional y se utiliza para especificar un bloque de código que se ejecutará cuando la expresión no coincida con ninguno de los valores especificados en los `case`. Funciona como una declaración `else` en una estructura `if-else`.

**Ejemplo:** Determinar el día de la semana según un número del 1 al 7

```java
int dia = 5; 
String diaDeLaSemana; 
switch (dia) {     
    case 1:        
        diaDeLaSemana = "Lunes";        
        break;    
    case 2:        
        diaDeLaSemana = "Martes";        
        break;    
    case 3:        
        diaDeLaSemana = "Miércoles";        
        break;    
    case 4:        
        diaDeLaSemana = "Jueves";        
        break;    
    case 5:        
        diaDeLaSemana = "Viernes";        
        break;    
    case 6:        
        diaDeLaSemana = "Sábado";        
        break;    
    case 7:        
        diaDeLaSemana = "Domingo";        
        break;    
    default:        
        diaDeLaSemana = "Número inválido"; 
} 
System.out.println("El día de la semana es: " + diaDeLaSemana);
```

En este ejemplo, la variable `dia` se evalúa en la declaración **switch**. Si el valor de `dia` coincide con alguno de los valores en los `case`, se asigna el día de la semana correspondiente a la variable `diaDeLaSemana` y se ejecuta la instrucción `break` para salir de la declaración **switch**.

Si `dia` no coincide con ninguno de los valores especificados, se ejecuta el bloque de código bajo `default`, asignando **“Número inválido”** a la variable `diaDeLaSemana`.

Tipos de datos admitidos por switch
-----------------------------------

En Java, la declaración **switch** admite varios tipos de datos para la expresión que se evalúa. A continuación, se enumeran los tipos de datos compatibles y se proporcionan ejemplos de uso para cada uno:

### “int” y tipos enteros más pequeños (`byte`, `short`, `char`)

La declaración **switch** puede evaluar expresiones enteras y sus tipos derivados.

**Aquí hay un ejemplo usando el tipo** `int`:

```java
int numero = 3; 
switch (numero) {     
    case 1:        
        System.out.println("Uno");       
        break;    
    case 2:        
        System.out.println("Dos");        
        break;    
    case 3:        ç
        System.out.println("Tres");        
        break;    
    default:        
        System.out.println("Número no reconocido"); 
}
```

### String

Desde Java 7, las declaraciones **switch** también admiten expresiones de tipo `String`.

A continuación, se muestra un ejemplo de cómo usar una declaración **switch** con una cadena:
```java
String calificacion = "B";

switch (calificacion) {
    case "A":
        System.out.println("Excelente");
        break;
    case "B":
        System.out.println("Bueno");
        break;
    case "C":
        System.out.println("Regular");
        break;
    case "D":
        System.out.println("Insuficiente");
        break;
    case "F":
        System.out.println("Reprobado");
        break;
    default:
        System.out.println("Calificación no válida");
}
```

### enum

Las enumeraciones (enum) son compatibles con las declaraciones **switch**. Esto permite comparar fácilmente los valores de una enumeración en una declaración **switch**.

A continuación, se presenta un ejemplo utilizando una enumeración para representar colores:
```java
enum Color {
    ROJO, VERDE, AZUL, AMARILLO
}

Color colorSeleccionado = Color.VERDE;

switch (colorSeleccionado) {
    case ROJO:
        System.out.println("El color es rojo");
        break;
    case VERDE:
        System.out.println("El color es verde");
        break;
    case AZUL:
        System.out.println("El color es azul");
        break;
    case AMARILLO:
        System.out.println("El color es amarillo");
        break;
    default:
        System.out.println("Color desconocido");
}
```
Cabe mencionar que la declaración **switch** no admite expresiones de tipo `float`, `double`, `long`, ni objetos que no sean de tipo `String` o `enum`.

Uso del switch con Java 12 y la introducción de la expresión switch
-------------------------------------------------------------------

Java 12 introdujo una mejora importante en la declaración **switch**, conocida como **“expresión switch”**.

La expresión switch es una forma más simplificada y concisa de la declaración **switch**, que devuelve un valor directamente y permite el uso del patrón de la flecha (`->`) en lugar de los dos puntos (`:`) en los `case`. Además, elimina la necesidad de usar `break`.

A continuación, se muestra la sintaxis de la **expresión switch** y un ejemplo práctico:
```java
tipoDeDato variable = switch (expresion) {
    case valor1 -> valorDevuelto1;
    case valor2 -> valorDevuelto2;
    // ... más casos si es necesario
    default -> valorDevueltoPorDefecto;
};
```

**Ejemplo:** Determinar el día de la semana según un número del 1 al 7 usando la **expresión switch**
```java
int dia = 5;
String diaDeLaSemana = switch (dia) {
    case 1 -> "Lunes";
    case 2 -> "Martes";
    case 3 -> "Miércoles";
    case 4 -> "Jueves";
    case 5 -> "Viernes";
    case 6 -> "Sábado";
    case 7 -> "Domingo";
    default -> "Número inválido";
};

System.out.println("El día de la semana es: " + diaDeLaSemana);
```

En este ejemplo, la **expresión switch** evalúa la variable `dia` y asigna el resultado directamente a la variable `diaDeLaSemana`. La expresión switch es más concisa que la declaración switch y elimina la necesidad de usar `break`.

También es posible usar bloques de código en lugar de expresiones simples en los `case`. En ese caso, se debe usar la palabra clave `yield` para devolver un valor:
```java
int mes = 3;
int dias = switch (mes) {
    case 4, 6, 9, 11 -> 30;
    case 2 -> {
        int anio = 2023;
        boolean esBisiesto = (anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0;
        yield esBisiesto ? 29 : 28;
    }
    default -> 31;
};

System.out.println("El mes tiene " + dias + " días");
```

En este ejemplo, se utiliza un bloque de código para calcular si el mes de febrero es bisiesto y, por lo tanto, tiene 29 días en lugar de 28. En el bloque de código del `case`, se usa `yield` para devolver el valor correspondiente.

**La expresión switch** es una mejora significativa en términos de legibilidad y concisión. Es recomendable usarla siempre que sea posible en lugar de la declaración switch tradicional.

Consejos y buenas prácticas para utilizar switch
------------------------------------------------

A continuación, se enumeran algunos consejos y buenas prácticas para utilizar la **declaración switch** y la **expresión switch** de manera efectiva en Java:

### Evitar “fallthrough”:

Asegúrate de usar la instrucción `break` en cada `case` de una **declaración switch** tradicional para evitar que la ejecución continúe con el siguiente `case`. Si deseas que varios `case` compartan el mismo bloque de código, puedes agruparlos intencionalmente sin usar `break`.

**Ejemplo de agrupar casos intencionalmente:**
```java
switch (mes) {
    case 12:
    case 1:
    case 2:
        estacion = "Invierno";
        break;
    // ... otros casos
}
```
### Preferir la expresión switch:

Siempre que sea posible, **utiliza la expresión switch en lugar de la declaración switch tradicional**, ya que ofrece una sintaxis más concisa y legible y elimina la necesidad de usar `break`.

### Usar “default” para manejar casos no especificados:

Siempre incluye un `default` en tus **declaraciones o expresiones switch** para manejar casos que no hayas especificado explícitamente. Esto garantiza que siempre haya un bloque de código ejecutado y que tu programa no tenga comportamientos inesperados.

### Evitar el anidamiento excesivo de declaraciones switch:

Anidar declaraciones **switch** puede hacer que el código sea difícil de leer y mantener. Si encuentras que estás anidando varias declaraciones **switch**, considera refactorizar tu código utilizando métodos o clases adicionales.

### Utilizar “enum” para valores fijos:

Si trabajas con un conjunto fijo de valores posibles, como días de la semana o colores, considera usar una enumeración (`enum`) en lugar de constantes enteras o cadenas.

Las enumeraciones mejoran la legibilidad del código y garantizan que solo se utilicen valores válidos en tus declaraciones switch.

**Ejemplo de uso de `enum`:**
```java
enum DiaDeLaSemana {
    LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO
}

DiaDeLaSemana dia = DiaDeLaSemana.MARTES;

switch (dia) {
    case LUNES -> System.out.println("Inicio de semana");
    case MARTES, MIERCOLES, JUEVES -> System.out.println("Días de trabajo");
    case VIERNES -> System.out.println("Casi fin de semana");
    case SABADO, DOMINGO -> System.out.println("Fin de semana");
}
```
Siguiendo estos consejos y buenas prácticas, podrás utilizar las **declaraciones y expresiones switch** de manera efectiva y mantener tu código legible y fácil de mantener.

Casos de uso y ejemplos prácticos
---------------------------------

Aquí hay algunos ejemplos prácticos de cómo usar la **declaración switch** y la **expresión switch** en diferentes situaciones:

1.  Calculadora simple:
```java
char operacion = '+';
int num1 = 10;
int num2 = 5;
int resultado;

switch (operacion) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
    case '/':
        resultado = num1 / num2;
        break;
    default:
        System.out.println("Operación no válida");
        resultado = 0;
}

System.out.println("El resultado es: " + resultado);
```

2.  Estaciones del año según el mes (usando expresión **switch**):
```java
int mes = 4;
String estacion = switch (mes) {
    case 12, 1, 2 -> "Invierno";
    case 3, 4, 5 -> "Primavera";
    case 6, 7, 8 -> "Verano";
    case 9, 10, 11 -> "Otoño";
    default -> "Mes no válido";
};
```
System.out.println("La estación del año es: " + estacion);

3.  Procesar comandos en una aplicación de línea de comandos:

```java
String comando = "list";

switch (comando) {
    case "list":
        listarArchivos();
        break;
    case "create":
        crearArchivo();
        break;
    case "delete":
        eliminarArchivo();
        break;
    case "help":
        mostrarAyuda();
        break;
    default:
        System.out.println("Comando no reconocido");
}
```
4.  Interpretar las notas en una escala de calificaciones:

```java
int nota = 85;
String calificacion = switch (nota / 10) {
    case 10, 9 -> "A";
    case 8 -> "B";
    case 7 -> "C";
    case 6 -> "D";
    default -> "F";
};
```

5.  Gestionar estados en un juego o aplicación:

```java
enum EstadoJuego {
    INICIO, JUGANDO, PAUSA, FINALIZADO
}

EstadoJuego estado = EstadoJuego.PAUSA;

switch (estado) {
    case INICIO:
        iniciarJuego();
        break;
    case JUGANDO:
        actualizarJuego();
        break;
    case PAUSA:
        pausarJuego();
        break;
    case FINALIZADO:
        terminarJuego();
        break;
}
```

Estos ejemplos muestran cómo la **declaración switch** y la **expresión switch** pueden ser útiles en diferentes situaciones, desde la toma de decisiones simples hasta la gestión de estados y flujos de control en aplicaciones y juegos.

Conclusión
----------

**La declaración switch y la expresión switch en Java son herramientas poderosas y versátiles** para controlar el flujo de un programa en función de los valores de una variable.

Desde Java 12, la **expresión switch** mejora la legibilidad y simplicidad del código al eliminar la necesidad de usar la instrucción `break` y al introducir la sintaxis de flecha.

Al utilizar la **declaración switch** y la **expresión switch** de manera efectiva y siguiendo las buenas prácticas, podrás mantener tu código legible, fácil de mantener y adaptar tu programa a una variedad de situaciones.

Es importante elegir la estructura de control adecuada para cada situación y siempre considerar la legibilidad y mantenibilidad del código al tomar decisiones de diseño.
