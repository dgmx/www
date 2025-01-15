---
title: "Funciones en Java"
parent: "Java"
---


Funciones en Java
=================

En el mundo de la programación, las funciones son fundamentales para desarrollar programas eficientes y bien estructurados. Java, como lenguaje de programación orientado a objetos, no es la excepción.

**Las funciones en Java**, también llamadas métodos, nos permiten dividir nuestro código en bloques modulares y reutilizables, facilitando la organización, el mantenimiento y la legibilidad de nuestros programas.

En este artículo, nos sumergiremos en el concepto de **funciones en Java** y aprenderemos cómo crear, utilizar y aplicar estos métodos en diferentes situaciones.

Además, discutiremos las ventajas de utilizar funciones y cómo pueden mejorar significativamente nuestra práctica de programación.

Tabla de contenidos


- [Funciones en Java](#funciones-en-java)
  - [¿Qué es una función en Java?](#qué-es-una-función-en-java)
  - [Estructura de una función en Java](#estructura-de-una-función-en-java)
    - [Modificadores de acceso (public, private, protected)](#modificadores-de-acceso-public-private-protected)
    - [Tipo de retorno](#tipo-de-retorno)
    - [Nombre de la función](#nombre-de-la-función)
    - [Parámetros y argumentos](#parámetros-y-argumentos)
    - [Cuerpo de la función](#cuerpo-de-la-función)
  - [Creación de una función en Java](#creación-de-una-función-en-java)
  - [Llamando a una función en Java](#llamando-a-una-función-en-java)
    - [Sintaxis para llamar a una función](#sintaxis-para-llamar-a-una-función)
    - [Pasar valores a una función](#pasar-valores-a-una-función)
    - [Llamando a un método de clase (estático)](#llamando-a-un-método-de-clase-estático)
  - [Tipos de retorno y declaración de retorno](#tipos-de-retorno-y-declaración-de-retorno)
    - [Tipos de retorno](#tipos-de-retorno)
    - [Declaración de retorno](#declaración-de-retorno)
  - [Sobrecarga de funciones en Java](#sobrecarga-de-funciones-en-java)
  - [Funciones recursivas en Java](#funciones-recursivas-en-java)
  - [Funciones anónimas y expresiones lambda](#funciones-anónimas-y-expresiones-lambda)
    - [Funciones anónimas](#funciones-anónimas)
    - [Expresiones lambda](#expresiones-lambda)
  - [Buenas prácticas al trabajar con funciones en Java](#buenas-prácticas-al-trabajar-con-funciones-en-java)
    - [Mantener funciones pequeñas y enfocadas](#mantener-funciones-pequeñas-y-enfocadas)
    - [Utilizar nombres descriptivos y claros](#utilizar-nombres-descriptivos-y-claros)
    - [Evitar el uso excesivo de argumentos](#evitar-el-uso-excesivo-de-argumentos)
    - [Utilizar el principio de “Least Astonishment”](#utilizar-el-principio-de-least-astonishment)

¿Qué es una función en Java?
----------------------------

Una función en Java, también conocida como método, es un bloque de código que realiza una tarea específica y se ejecuta cuando es llamado. Las funciones pueden recibir datos como entrada (parámetros), procesar estos datos y devolver un resultado (valor de retorno).

**El uso de funciones nos permite reutilizar y organizar nuestro código de manera más eficiente**, ya que podemos dividir un programa en partes más pequeñas y modulares.

En Java, las funciones se definen dentro de una clase y se utilizan para manipular el estado (atributos) y comportamiento (métodos) de los objetos de esa clase.

**Sintaxis de una función en Java**:

```java 
modificadorAcceso tipoRetorno nombreFuncion (tipoParametro1 nombreParametro1, tipoParametro2 nombreParametro2, ...) 
{     // Cuerpo de la función    // Procesamiento y cálculos    return valorRetorno; 
}
```

Lenguaje del código: Java (java)

*   `modificadorAcceso`: Controla la visibilidad de la función en relación con otras clases y objetos. Puede ser `public`, `private`, `protected` o sin modificador (por defecto).
*   `tipoRetorno`: Indica el tipo de dato que la función devolverá. Puede ser un tipo primitivo (int, float, etc.), una clase, una interfaz o `void` si la función no devuelve ningún valor.
*   `nombreFuncion`: Es el nombre único que identifica a la función y sigue las convenciones de camelCase.
*   `tipoParametro` y `nombreParametro`: Son los parámetros que recibe la función como entrada. Pueden ser de cualquier tipo de dato, y su cantidad puede variar. Si la función no recibe parámetros, se dejan los paréntesis vacíos.
*   `return valorRetorno;`: Es la instrucción para devolver un valor desde la función. Si la función tiene un tipo de retorno `void`, no se utiliza la declaración `return`.

**Ejemplo de una función en Java**:
```java
public class Calculadora {

    // Función que suma dos números enteros
    public int sumar(int numero1, int numero2) {
        int resultado = numero1 + numero2;
        return resultado;
    }
}
```

En este ejemplo, hemos definido una función llamada `sumar` dentro de la clase `Calculadora`. Esta función toma dos parámetros enteros y devuelve la suma de ambos números como resultado.

Estructura de una función en Java
---------------------------------

Como mencionamos anteriormente, una función en Java se compone de varios elementos. A continuación, analizaremos cada uno de ellos en detalle y proporcionaremos ejemplos.

### Modificadores de acceso (public, private, protected)

Los modificadores de acceso determinan la visibilidad de una función en relación con otras clases y objetos.

*   `public`: La función es accesible desde cualquier clase.
*   `private`: La función solo es accesible dentro de la misma clase en la que se define.
*   `protected`: La función es accesible dentro de la misma clase y sus subclases.
*   Sin modificador (por defecto): La función es accesible dentro del mismo paquete.

**Ejemplo:**
```java
public class EjemploModificadores { 
  public void funcionPublica() { 
    // Accesible desde cualquier clase 
  } 

  private void funcionPrivada() { 
    // Accesible solo dentro de la clase EjemploModificadores 
  } 

  protected void funcionProtegida() { 
    // Accesible dentro de la clase EjemploModificadores y sus subclases 
  } 

  void funcionPorDefecto() { 
    // Accesible dentro del mismo paquete 
  } 
}
```

### Tipo de retorno

El tipo de retorno indica el tipo de dato que la función devolverá. Puede ser un tipo primitivo (`int`, `float`, etc.), una clase, una interfaz o `void` si la función no devuelve ningún valor.

**Ejemplo**:

```java
public class EjemploTiposRetorno { 
  public int obtenerEntero() { 
    return 42; 
  } 

  public String obtenerCadena() { 
    return "Hola, mundo!"; 
  } 

  public List<String> obtenerListaCadenas() { 
    return Arrays.asList("uno", "dos", "tres"); 
  } 

  public void funcionSinRetorno() { 
    System.out.println("Esta función no devuelve ningún valor."); 
  } 
}
```


### Nombre de la función

El nombre de la función debe ser único y seguir las convenciones de camelCase. Por lo general, los nombres de las funciones comienzan con un verbo que indica qué hace la función, como `calcular`, `obtener` o `mostrar`.

**Ejemplo:**
```java
public class EjemploNombresFunciones { 
  public void calcularArea() { 
    // ... 
  } 

  public String obtenerNombreCompleto() { 
    // ... 
  } 

  public void mostrarInformacion() { 
    // ... 
  } 
}
```


### Parámetros y argumentos

Los parámetros son variables que reciben valores de entrada cuando se llama a una función. Se especifican entre paréntesis después del nombre de la función, y se indica su tipo y nombre. Si la función no recibe parámetros, se dejan los paréntesis vacíos.

**Ejemplo:**
```java
public class EjemploParametros { 
  public int sumar(int a, int b) { 
    return a + b; 
  } 

  public void saludar(String nombre) { 
    System.out.println("Hola, " + nombre + "!"); 
  } 

  public void mostrarCoordenadas(int x, int y, int z) { 
    System.out.println("Coordenadas: (" + x + ", " + y + ", " + z + ")"); 
  } 
}
```


### Cuerpo de la función

El cuerpo de la función es el bloque de código delimitado por llaves (`{}`) que contiene las instrucciones y procesamientos que se ejecutarán cuando la función sea llamada.

Dentro del cuerpo de la función, podemos realizar cálculos, manipular variables, llamar a otras funciones y controlar el flujo del programa mediante estructuras condicionales y bucles.

**Ejemplo:**
```java
public class EjemploCuerpoFunciones {
    public double calcularAreaCirculo(double radio) {
        double area = Math.PI * Math.pow(radio, 2);
        return area;
    }

    public void imprimirTablaMultiplicar(int numero) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(numero + " x " + i + " = " + (numero * i));
        }
    }

    public boolean esNumeroPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        for (int i = 2; i < numero; i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }
}
```


En este ejemplo, hemos creado tres funciones con diferentes propósitos:

1.  `calcularAreaCirculo`: Calcula y devuelve el área de un círculo dado su radio.
2.  `imprimirTablaMultiplicar`: Imprime la tabla de multiplicar de un número entero especificado.
3.  `esNumeroPrimo`: Determina si un número entero es primo y devuelve un valor booleano.

Cada función tiene un cuerpo que contiene las instrucciones necesarias para llevar a cabo la tarea específica para la que fue diseñada.

Creación de una función en Java
-------------------------------

Crear una función en Java implica definir sus elementos básicos, como el modificador de acceso, el tipo de retorno, el nombre de la función y sus parámetros.

A continuación, se proporciona un ejemplo práctico de cómo crear una función simple en Java.

**Ejemplo:** Creación de una función para calcular el IMC (Índice de Masa Corporal)
```java
public class CalculadoraIMC {
    // Función que calcula el IMC
    public double calcularIMC(double pesoKg, double alturaMetros) {
        double imc = pesoKg / Math.pow(alturaMetros, 2);
        return imc;
    }
}
```

En este ejemplo, hemos creado una clase llamada `CalculadoraIMC` que contiene una función llamada `calcularIMC`.

La función toma dos parámetros, `pesoKg` y `alturaMetros`, que representan el peso en kilogramos y la altura en metros de una persona, respectivamente.

Luego, calcula el IMC utilizando la fórmula: peso / (altura al cuadrado). Finalmente, devuelve el valor del IMC como resultado.

**Ahora**, supongamos que queremos crear otra función en la misma clase para interpretar el resultado del IMC y proporcionar una clasificación según el valor obtenido. Podemos crear una nueva función de la siguiente manera:
```java
public class CalculadoraIMC {
    // Función que calcula el IMC
    public double calcularIMC(double pesoKg, double alturaMetros) {
        double imc = pesoKg / Math.pow(alturaMetros, 2);
        return imc;
    }

    // Función que clasifica el IMC
    public String clasificarIMC(double imc) {
        if (imc < 18.5) {
            return "Bajo peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            return "Peso normal";
        } else if (imc >= 24.9 && imc < 29.9) {
            return "Sobrepeso";
        } else {
            return "Obesidad";
        }
    }
}
```

En este caso, hemos añadido una nueva función llamada `clasificarIMC` que toma como parámetro el valor del IMC y devuelve una clasificación basada en el rango en el que se encuentra el IMC.

Llamando a una función en Java
------------------------------

Una vez que hemos creado una función, podemos llamarla desde otras partes de nuestro código para ejecutarla y obtener el resultado que devuelve.

A continuación, se describe la sintaxis para llamar a una función y cómo pasar valores a la función.

### Sintaxis para llamar a una función

Para llamar a una función, primero necesitamos crear un objeto de la clase que contiene la función (a menos que la función sea estática) y luego utilizar la notación de punto (`.`) seguida del nombre de la función y los argumentos entre paréntesis.
```java
NombreClase objeto = new NombreClase(); objeto.nombreFuncion(argumentos);
```
Lenguaje del código: Java (java)

Si la función devuelve un valor, podemos almacenarlo en una variable o utilizarlo directamente en expresiones o instrucciones.

**Ejemplo:**
```java
public class Main { 
  public static void main(String[] args) { 
    CalculadoraIMC calculadora = new CalculadoraIMC(); 
    double imc = calculadora.calcularIMC(75, 1.80); 
    String clasificacion = calculadora.clasificarIMC(imc); 

    System.out.println("IMC: " + imc); 
    System.out.println("Clasificación: " + clasificacion); 
  } 
} 
```

En este ejemplo, hemos creado un objeto `calculadora` de la clase `CalculadoraIMC` y llamado a las funciones `calcularIMC` y `clasificarIMC` para obtener el IMC y la clasificación correspondiente. Luego, hemos mostrado los resultados en la consola.

### Pasar valores a una función

Cuando llamamos a una función que requiere parámetros, debemos pasar los valores de los argumentos en el mismo orden que se definen en la declaración de la función.

Los argumentos pueden ser constantes, variables o expresiones que se evalúan al tipo de dato correspondiente a cada parámetro.

**Ejemplo:**
```java
public class Main { 
  public static void main(String[] args) { 
    Calculadora calculadora = new Calculadora(); 

    int resultadoSuma = calculadora.sumar(3, 5); // Pasar valores constantes   
    System.out.println("Resultado de la suma: " + resultadoSuma); 

    int a = 10;
    int b = 20; 
    int resultadoResta = calculadora.restar(a, b); // Pasar variables 
    System.out.println("Resultado de la resta: " + resultadoResta);

    double resultadoDivision = calculadora.dividir(a * 2, b + 5); // Pasar expresiones 
    System.out.println("Resultado de la división: " + resultadoDivision); 
  } 
}
```
En este ejemplo, hemos llamado a varias funciones de la clase `Calculadora` pasando diferentes tipos de argumentos: constantes, variables y expresiones.

Los valores de los argumentos se asignan a los parámetros de la función y se utilizan dentro del cuerpo de la función para realizar las operaciones correspondientes.

### Llamando a un método de clase (estático)

Si la función es un método de clase (declarada con el modificador `static`), no es necesario crear un objeto para llamar a la función.

En su lugar, podemos llamar a la función utilizando la notación de punto (`.`) y el nombre de la clase.

**Ejemplo:**
```java
public class Matematicas {
    // Función estática que suma dos números
    public static int sumar(int a, int b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        // Llamar a la función estática sumar
        int suma = Matematicas.sumar(5, 7);
        System.out.println("La suma de 5 y 7 es: " + suma);
    }
}
```
En este ejemplo, la función `sumar` en la clase `Matematicas` es un método de clase (estático). Para llamar a esta función, usamos el nombre de la clase `Matematicas` seguido de la notación de punto (`.`) y el nombre de la función.

Tipos de retorno y declaración de retorno
-----------------------------------------

El tipo de retorno de una función indica qué tipo de valor devolverá la función al ser llamada. Cuando una función devuelve un valor, se utiliza la declaración `return` seguida del valor o expresión que se desea devolver.

A continuación, se detallan los aspectos clave de los tipos de retorno y las declaraciones de retorno en Java.

### Tipos de retorno

El tipo de retorno puede ser cualquier tipo de dato en Java, incluyendo tipos primitivos (`int`, `float`, `double`, `boolean`, etc.), clases, interfaces o arreglos.

Si la función no devuelve ningún valor, se utiliza el tipo de retorno `void`.

**Ejemplo:**
```java
public class EjemploRetornos { 
  public int obtenerEntero() { 
    return 42; 
  } 

  public String obtenerCadena() { 
    return "Hola, mundo!"; 
  } 

  public List<String> obtenerListaCadenas() { 
    return Arrays.asList("uno", "dos", "tres"); 
  } 

  public void funcionSinRetorno() { 
    System.out.println("Esta función no devuelve ningún valor."); 
  } 
}
```
En este ejemplo, hemos creado funciones que devuelven diferentes tipos de datos, como `int`, `String` y `List<String>`. También hay una función con un tipo de retorno `void`, lo que indica que no devuelve ningún valor.

### Declaración de retorno

La declaración `return` se utiliza para devolver un valor desde una función. El valor o expresión que se devuelve debe coincidir con el tipo de retorno especificado en la declaración de la función.

Si una función tiene un tipo de retorno `void`, no es necesario utilizar la declaración `return`, aunque se puede usar para salir de la función antes de tiempo.

**Ejemplo**
```java
public class EjemploDeclaracionesRetorno { 
  public int multiplicar(int a, int b) { 
    int resultado = a * b; 
    return resultado; // Devolver el valor de la variable resultado 
  } 

  public boolean esPar(int numero) { 
    return numero % 2 == 0; // Devolver el resultado de la expresión directamente 
  } 

  public void mostrarMensaje(String mensaje) { 
    if (mensaje == null || mensaje.isEmpty()) { 
      return; // Salir de la función antes de tiempo si el mensaje es nulo o vacío 
    } 
    System.out.println("Mensaje: " + mensaje); 
  } 
}
```
En este ejemplo, hemos utilizado la declaración `return` de diferentes maneras. En la función `multiplicar`, devolvemos el valor de una variable. En la función `esPar`, devolvemos el resultado de una expresión directamente.

Y en la función `mostrarMensaje`, utilizamos `return` para salir de la función antes de tiempo si se cumple una condición específica.

Sobrecarga de funciones en Java
-------------------------------

**La sobrecarga de funciones en Java** permite definir varias funciones con el mismo nombre pero con diferentes tipos y/o cantidad de parámetros.

Esto proporciona una forma de ofrecer múltiples versiones de una función con la misma funcionalidad básica, pero que pueden manejar diferentes tipos de datos o situaciones específicas.

**La sobrecarga de funciones es útil cuando queremos realizar la misma operación en diferentes tipos de datos** o cuando deseamos ofrecer opciones adicionales al usuario al utilizar la función.

El compilador de Java selecciona automáticamente la función adecuada en función de los argumentos que se pasan al llamar a la función.

**Ejemplo:**
```java
public class EjemploSobrecarga {
    // Sumar dos enteros
    public int sumar(int a, int b) {
        return a + b;
    }

    // Sumar tres enteros
    public int sumar(int a, int b, int c) {
        return a + b + c;
    }

    // Sumar dos números de coma flotante
    public double sumar(double a, double b) {
        return a + b;
    }

    // Sumar tres números de coma flotante
    public double sumar(double a, double b, double c) {
        return a + b + c;
    }
}
```
En este ejemplo, hemos creado cuatro versiones de la función `sumar`. Dos de ellas manejan enteros y las otras dos manejan números de coma flotante.

Además, hay versiones que aceptan dos y tres parámetros, respectivamente. Esto permite sumar números de diferentes tipos y cantidades utilizando el mismo nombre de función.

Para utilizar estas funciones sobrecargadas, simplemente llamamos a la función `sumar` con los argumentos apropiados, y Java seleccionará automáticamente la versión adecuada de la función en función de los tipos y cantidad de argumentos proporcionados.
```java
public class Main {
    public static void main(String[] args) {
        EjemploSobrecarga ejemplo = new EjemploSobrecarga();

        int sumaEnteros = ejemplo.sumar(3, 5);
        int sumaTresEnteros = ejemplo.sumar(1, 2, 3);
        double sumaFlotantes = ejemplo.sumar(1.5, 2.5);
        double sumaTresFlotantes = ejemplo.sumar(1.0, 2.0, 3.0);

        System.out.println("Suma de enteros: " + sumaEnteros);
        System.out.println("Suma de tres enteros: " + sumaTresEnteros);
        System.out.println("Suma de flotantes: " + sumaFlotantes);
        System.out.println("Suma de tres flotantes: " + sumaTresFlotantes);
    }
}
```
En este ejemplo, hemos llamado a las diferentes versiones de la función `sumar` y mostrado los resultados en la consola. Java selecciona automáticamente la versión correcta de la función en función de los argumentos proporcionados.

Funciones recursivas en Java
----------------------------

Una función recursiva es una función que se llama a sí misma durante su ejecución. **La recursión es una técnica poderosa en la programación que puede simplificar la solución de ciertos problemas**, como el cálculo de factoriales, la secuencia de Fibonacci y el recorrido de estructuras de datos jerárquicas.

Para evitar una recursión infinita, las funciones recursivas deben tener una condición de salida o base que detenga la recursión en un punto específico.

Es importante garantizar que la función alcance esta condición base, ya que, de lo contrario, la función se llamará a sí misma indefinidamente, lo que podría agotar los recursos del sistema y provocar un error en tiempo de ejecución.

**Ejemplo:** Calcular el factorial de un número utilizando recursión
```java
public class EjemploRecursion {
    public long factorial(long numero) {
        // Condición base: si el número es 0 o 1, el factorial es 1
        if (numero <= 1) {
            return 1;
        }
        // Llamada recursiva: multiplicar el número por el factorial de (número - 1)
        return numero * factorial(numero - 1);
    }
}
```
En este ejemplo, hemos creado una función recursiva llamada `factorial` que calcula el factorial de un número. La función contiene una condición base que devuelve 1 si el número es 0 o 1.

Si el número es mayor que 1, la función se llama a sí misma con el argumento `numero - 1`. La recursión continúa hasta que se alcanza la condición base, momento en el cual el resultado se calcula y se devuelve al llamante.
```java
public class Main {
    public static void main(String[] args) {
        EjemploRecursion ejemplo = new EjemploRecursion();

        long factorial5 = ejemplo.factorial(5); // 5! = 5 * 4 * 3 * 2 * 1 = 120
        System.out.println("Factorial de 5: " + factorial5);

        long factorial10 = ejemplo.factorial(10); // 10! = 3628800
        System.out.println("Factorial de 10: " + factorial10);
    }
}
```
En este ejemplo, hemos llamado a la función recursiva `factorial` para calcular el factorial de 5 y 10. La función utiliza la recursión para calcular el resultado y luego lo muestra en la consola.

**Al utilizar funciones recursivas, es importante tener en cuenta que el uso excesivo de la recursión puede provocar problemas de rendimiento y agotar la memoria del sistema**. En tales casos, puede ser más apropiado utilizar una solución iterativa en lugar de la recursión.

Funciones anónimas y expresiones lambda
---------------------------------------

Las funciones anónimas y las expresiones lambda son características de Java que permiten definir funciones sin necesidad de asignarles un nombre.

Son especialmente útiles cuando se necesita pasar una función como argumento a otra función o cuando se desea crear una función simple sin tener que declarar una clase o función completa.

### Funciones anónimas

En Java, las funciones anónimas son en realidad instancias de clases anónimas que implementan una interfaz con un único método. Estas funciones se pueden utilizar como argumentos para otras funciones que esperan una instancia de la interfaz correspondiente.

**Ejemplo:**
```java
public interface Saludo { 
  void saludar(String nombre); 
} 

public class EjemploFuncionAnonima { 
  public void ejecutarSaludo(Saludo saludo, String nombre) { 
    saludo.saludar(nombre); 
  } 
} 

public class Main { 
  public static void main(String[] args) { 
    EjemploFuncionAnonima ejemplo = new EjemploFuncionAnonima(); 
    
    ejemplo.ejecutarSaludo(new Saludo() { 
      @Override 
      public void saludar(String nombre) { 
        System.out.println("Hola, " + nombre + "!"); 
      } 
    }, "Juan"); 
  } 
}
```
En este ejemplo, hemos definido una interfaz `Saludo` con un único método llamado `saludar`. La clase `EjemploFuncionAnonima` contiene un método `ejecutarSaludo` que acepta un objeto `Saludo` y un nombre como argumentos.

En el método `main`, hemos creado una instancia de `EjemploFuncionAnonima` y llamado al método `ejecutarSaludo`, pasando una función anónima que implementa la interfaz `Saludo`.

### Expresiones lambda

Las expresiones lambda son una forma más concisa y moderna de definir funciones anónimas en Java. Se pueden utilizar en lugar de clases anónimas siempre que la interfaz tenga un único método (también conocidas como interfaces funcionales).

**Ejemplo:**
```java
public interface Saludo { 
  void saludar(String nombre); 
} 

public class EjemploExpresionLambda { 
  public void ejecutarSaludo(Saludo saludo, String nombre) { 
    saludo.saludar(nombre); 
  } 
} 

public class Main { 
  public static void main(String[] args) { 
    EjemploExpresionLambda ejemplo = new EjemploExpresionLambda(); 

    // Utilizar una expresión lambda en lugar de una función anónima 
    ejemplo.ejecutarSaludo((nombre) -> { 
      System.out.println("Hola, " + nombre + "!"); 
    }, "Juan"); 
  } 
}
```
En este ejemplo, hemos reemplazado la función anónima del ejemplo anterior con una expresión lambda. La expresión lambda `(nombre) -> { System.out.println("Hola, " + nombre + "!"); }` define la misma funcionalidad que la función anónima, pero de una forma más concisa y fácil de leer.

**Las funciones anónimas y las expresiones lambda son útiles cuando se necesita pasar una función como argumento** a otra función o cuando se desea definir una función simple sin tener que crear una clase o función completa.

Sin embargo, es importante tener en cuenta que pueden ser menos eficientes que las funciones regulares en términos de rendimiento, especialmente si se utilizan en bucles o funciones de alto rendimiento.

Buenas prácticas al trabajar con funciones en Java
--------------------------------------------------

Al trabajar con funciones en Java, es importante seguir algunas buenas prácticas para garantizar que el código sea fácil de leer, mantener y depurar. A continuación, se enumeran algunas de las buenas prácticas más importantes junto con ejemplos.

### Mantener funciones pequeñas y enfocadas

Las funciones deben ser pequeñas y tener una única responsabilidad. Esto facilita la comprensión del propósito de la función y su mantenimiento.

**Ejemplo:**
```java
// En lugar de una función que realice varias tareas 
public void procesarDatos(String[] datos) { 
  // Validar datos 
  // ... 

  // Ordenar datos 
  // ...  
 
  // Guardar datos 
  // ... 
} 

// Dividir la función en funciones más pequeñas y enfocadas 
public void validarDatos(String[] datos) { 
  // Validar datos 
  // ... 
} 

public void ordenarDatos(String[] datos) { 
  // Ordenar datos 
  // ...  
} 

public void guardarDatos(String[] datos) { 
  // Guardar datos 
  // ... 
}
```
### Utilizar nombres descriptivos y claros

Los nombres de las funciones deben ser descriptivos y reflejar claramente su propósito. Esto facilita la lectura y la comprensión del código sin tener que recurrir a los comentarios.

**Ejemplo**:
```java
// En lugar de un nombre de función ambiguo 
public void calcular() { 
  // ... 
} 

// Utilizar un nombre de función más descriptivo 
public void calcularAreaRectangulo() { 
  // ... 
}
```
### Evitar el uso excesivo de argumentos

Las funciones deben tener un número mínimo de argumentos. Si una función requiere muchos argumentos, puede ser una señal de que la función está haciendo demasiadas cosas o que los argumentos podrían agruparse en una estructura de datos más coherente.

**Ejemplo**:
```java
// En lugar de una función con muchos argumentos 
public void dibujarRectangulo(int x1, int y1, int x2, int y2, Color color, boolean relleno) { 
  // ... 
} 

// Utilizar una estructura de datos para agrupar argumentos relacionados 
public class Rectangulo { 
  int x1; 
  int y1; 
  int x2; 
  int y2; 
  Color color; 
  boolean relleno; 
} 

public void dibujarRectangulo(Rectangulo rectangulo) { 
  // ... 
}
```


### Utilizar el principio de “Least Astonishment”

Las funciones deben comportarse de la manera menos sorprendente posible. Esto significa que la función debe hacer lo que su nombre indica y no tener efectos secundarios ocultos.
s
**Ejemplo:**
```java
// En lugar de una función que modifica sus argumentos 
public void ordenarLista(List<Integer> lista) { 
  Collections.sort(lista); // Modifica la lista original 
} 

// Utilizar una función que no tenga efectos secundarios ocultos 
public List<Integer> obtenerListaOrdenada(List<Integer> lista) { 
  List<Integer> listaOrdenada = new ArrayList<>(lista); 
  Collections.sort(listaOrdenada); 
  return listaOrdenada; // Devuelve una nueva lista ordenada 
}

```

Siguiendo estas buenas prácticas al trabajar con funciones en Java, se garantiza que el código sea más fácil de leer, mantener y depurar.