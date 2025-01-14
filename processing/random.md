---
title: "11. Numeros Aleatorios"
parent: "Processing"
---

## 11. Numeros Aleatorios

Processing es un lenguaje de programación flexible que permite a los artistas y diseñadores crear gráficos interactivos y visualizaciones. Una de las funciones más útiles en Processing es `random()`, que genera números aleatorios. Esta función puede ser utilizada de diversas maneras para enriquecer la creatividad en gráficos multicolores y multidimensionales. A continuación, exploraremos cómo emplear `random()` para crear efectos visuales únicos.

### 1\. Introducción a la Funcíón random()

La función `random()` en Processing se utiliza para generar un número aleatorio dentro de un rango especificado. Su sintaxis básica es:
```java
float n = random(high);
```
Esto devuelve un valor flotante entre 0 y `high`. También se puede especificar un rango más preciso:
```java
float n = random(low, high);
```
Esto devuelve un valor flotante entre `low` y `high`.

### 2\. Creación de Gráficos Multicolores

Para generar gráficos multicolores, `random()` puede ser usada para asignar valores aleatorios a los parámetros de color. Por ejemplo, se puede crear un patrón de círculos con colores aleatorios de la siguiente manera:
```java
void setup() {
    size(800, 800);
    noLoop();
}
    
void draw() {
    background(255);
    for (int i = 0; i < 100; i++) {
        float x = random(width);
        float y = random(height);
        float r = random(255);
        float g = random(255);
        float b = random(255);
        fill(r, g, b);
        ellipse(x, y, 50, 50);
    }
}
```
En este ejemplo, se generan 100 círculos con colores aleatorios, creando un efecto visual dinámico y colorido.

Ejemplo: Crea un programa que genere círculos de múltiples colores:
```java
    // todos los valores variables
float r;
float g;
float b;
float a;
float diam;
float x;
float y;
    
void setup() {
    size(800,600);
    background(255);
    smooth();
}
    
void draw() {
    r = random(255);
    g = random(255);
    b = random(255);
    a = random(255);
    diam = random(20);
    x = random(width);
    y = random(height);
    
    // dibuja la elipse con los valores aleatorios de diametro, posición y color
    noStroke();
    fill(r,g,b,a);
    ellipse(x,y,diam,diam);
}
```