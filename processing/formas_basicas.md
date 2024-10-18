---
title: 6. Funciones Básicas
parent: "Processing"
---


# 6 Formas Básicas en Processing

Processing ofrece una variedad de funciones para dibujar formas básicas. Este documento explica las formas más comunes y cómo crearlas.

## 1. Punto (point)

Un punto es el elemento más básico en Processing.

### Sintaxis:
```java
point(x, y)
```

### Ejemplo:
```java
size(200, 200);
point(100, 100);
```

Este código dibuja un punto en el centro de una ventana de 200x200 píxeles.

## 2. Línea (line)

Una línea se dibuja entre dos puntos.

### Sintaxis:
```java
line(x1, y1, x2, y2)
```

### Ejemplo:
```java
size(200, 200);
line(50, 50, 150, 150);
```

Este código dibuja una línea diagonal desde (50,50) hasta (150,150).

## 3. Triángulo (triangle)

Un triángulo se define por tres puntos.

### Sintaxis:
```java
triangle(x1, y1, x2, y2, x3, y3)
```

### Ejemplo:
```java
size(200, 200);
triangle(100, 50, 50, 150, 150, 150);
```

Este código dibuja un triángulo con vértices en (100,50), (50,150) y (150,150).

## 4. Rectángulo (rect)

Un rectángulo se define por su esquina superior izquierda y sus dimensiones.

### Sintaxis:
```java
rect(x, y, width, height)
```

### Ejemplo:
```java
size(200, 200);
rect(50, 50, 100, 75);
```

Este código dibuja un rectángulo con esquina superior izquierda en (50,50), ancho de 100 y alto de 75.

## 5. Elipse (ellipse)

Una elipse se define por su centro y sus dimensiones. Un círculo es una elipse con ancho y alto iguales.

### Sintaxis:
```java
ellipse(x, y, width, height)
```

### Ejemplo:
```java
size(200, 200);
ellipse(100, 100, 80, 80);
```

Este código dibuja un círculo en el centro de la ventana con diámetro de 80.

## 6. Arco (arc)

Un arco es una porción de una elipse.

### Sintaxis:
```java
arc(x, y, width, height, start, stop)
```

### Ejemplo:
```java
size(200, 200);
arc(100, 100, 100, 100, 0, PI);
```

Este código dibuja un semicírculo en el centro de la ventana.

## 7. Cuadrilátero (quad)

Un cuadrilátero se define por cuatro puntos.

### Sintaxis:
```java
quad(x1, y1, x2, y2, x3, y3, x4, y4)
```

### Ejemplo:
```java
size(200, 200);
quad(50, 50, 150, 50, 170, 150, 30, 150);
```

Este código dibuja un cuadrilátero irregular.

## Ejemplo combinado

Aquí tienes un ejemplo que combina varias formas:

```java
void setup() {
  size(400, 400);
  background(220);
}

void draw() {
  // Punto
  stroke(0);
  point(50, 50);
  
  // Línea
  line(50, 100, 350, 100);
  
  // Triángulo
  fill(255, 0, 0);
  triangle(200, 150, 150, 250, 250, 250);
  
  // Rectángulo
  fill(0, 255, 0);
  rect(50, 300, 100, 50);
  
  // Elipse
  fill(0, 0, 255);
  ellipse(300, 325, 100, 100);
  
  // Arco
  noFill();
  arc(200, 200, 200, 200, 0, PI*1.5);
  
  // Cuadrilátero
  fill(255, 255, 0);
  quad(300, 50, 350, 75, 325, 125, 275, 100);
}
```

Este sketch dibuja todas las formas básicas en una sola ventana, demostrando cómo se pueden usar juntas.

Recuerda que puedes modificar el color del trazo con `stroke()`, el color de relleno con `fill()`, y el grosor del trazo con `strokeWeight()` para personalizar la apariencia de tus formas.
