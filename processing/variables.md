---
title: "13. Variables"
parent: "Processing"
---


#  Variables en Processing

## 1. ¿Qué es una variable?

Una **variable** es un espacio en memoria donde se almacena un valor que
puede cambiar durante la ejecución del programa.

### Sintaxis general

``` java
tipo nombre = valor;
```

Ejemplos:

``` java
int edad = 20;
float velocidad = 2.5;
boolean activo = true;
color rojo = color(255, 0, 0);
```

### Tipos más usados

| Tipo    | Uso principal        | Ejemplo          |
|---------|----------------------|------------------|
| int     | Números enteros      | 10, -3, 500      |
| float   | Números decimales    | 3.14, 0.5        |
| boolean | Verdadero / Falso    | true, false      |
| char    | Un carácter          | 'A'              |
| String  | Texto                | "Hola"           |
| color   | Colores              | color(255, 0, 0) |

### Operadores

| Tipo de operador | Operador | Descripción                         | Ejemplo            |
|------------------|-----------|-------------------------------------|--------------------|
| Aritmético       | +         | Suma                                | a + b              |
| Aritmético       | -         | Resta                               | a - b              |
| Aritmético       | *         | Multiplicación                      | a * b              |
| Aritmético       | /         | División                            | a / b              |
| Aritmético       | %         | Módulo (resto)                      | a % b              |
| Asignación       | =         | Asigna un valor                     | x = 10;            |
| Asignación       | +=        | Suma y asigna                       | x += 2;            |
| Asignación       | -=        | Resta y asigna                      | x -= 1;            |
| Relacional       | ==        | Igual a                             | a == b             |
| Relacional       | !=        | Distinto de                         | a != b             |
| Relacional       | >         | Mayor que                           | a > b              |
| Relacional       | <         | Menor que                           | a < b              |
| Relacional       | >=        | Mayor o igual                       | a >= b             |
| Relacional       | <=        | Menor o igual                       | a <= b             |
| Lógico            | &&        | AND lógico                          | a > 0 && b > 0     |
| Lógico             | \|\|     | OR lógico                           | a < 0 \|\| b < 0   |
| Lógico            | !         | Negación                            | !activo            |
| Incremento        | ++        | Incrementa en 1                    | contador++;        |
| Decremento        | --        | Decrementa en 1                    | contador--;        |


## 2. Variables incorporadas importantes

### Pantalla

-   `width`.  Ancho de la ventana
-   `height`. Alto de la ventana  
-   `displayWidth`
-   `displayHeight`

**Ejemplo:**
```java
ellipse(width/2, height/2, 50, 50); // círculo centrado
``` 

### Mouse

-   `mouseX`
-   `mouseY`
-   `pmouseX`
-   `pmouseY`
-   `mousePressed`

### Teclado

-   `key`
-   `keyCode`
-   `keyPressed`

### Tiempo

-   `frameCount`
-   `millis()`

**Tabla de variables incorporadas por Processing**

| Categoría | Variable        | Descripción                                      | Ejemplo de uso                     |
|------------|-----------------|--------------------------------------------------|------------------------------------|
| Pantalla   | width           | Ancho de la ventana                              | ellipse(width/2, 100, 50, 50);      |
| Pantalla   | height          | Alto de la ventana                               | rect(50, height/2, 80, 40);         |
| Pantalla   | displayWidth    | Ancho total de la pantalla                      | size(displayWidth, 300);           |
| Pantalla   | displayHeight   | Alto total de la pantalla                       | size(300, displayHeight);          |
| Mouse      | mouseX          | Posición X actual del mouse                     | line(mouseX, 0, mouseX, height);   |
| Mouse      | mouseY          | Posición Y actual del mouse                     | ellipse(100, mouseY, 30, 30);       |
| Mouse      | pmouseX         | Posición X anterior del mouse                   | line(pmouseX, 0, mouseX, height);  |
| Mouse      | pmouseY         | Posición Y anterior del mouse                   | line(0, pmouseY, width, mouseY);   |
| Mouse      | mousePressed    | true si el botón está presionado                | if(mousePressed){ background(0); } |
| Teclado    | key             | Última tecla presionada                         | println(key);                      |
| Teclado    | keyPressed      | true si una tecla está presionada               | if(keyPressed){ fill(255,0,0); }    |
| Tiempo     | frameCount      | Número de frames dibujados                      | println(frameCount);               |
| Tiempo     | millis()        | Milisegundos desde que inició el programa       | println(millis());                 |

## 3. Ejemplo práctico 1: Movimiento

``` java
float x = 0;

void setup() {
  size(600, 200);
}

void draw() {
  background(240);
  ellipse(x, height/2, 40, 40);
  x = x + 2;

  if (x > width) {
    x = 0;
  }
}
```

## 4. Ejemplo práctico 2: Interacción con mouse

``` java
color c = color(0, 0, 255);

void setup() {
  size(500, 400);
}

void draw() {
  background(255);

  if (mousePressed) {
    c = color(255, 0, 0);
  } else {
    c = color(0, 0, 255);
  }

  fill(c);
  ellipse(mouseX, mouseY, 50, 50);
}
```

## 5. Buenas prácticas

-   Usa nombres claros.
-   Inicializa variables.
-   Evita números mágicos.
-   Documenta tu código.
