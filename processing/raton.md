---
title: 09. Funciones usando el Raton
parent: "Processing"
---

# Funciones para Trabajar con el Ratón en Processing

Processing proporciona varias funciones y variables para interactuar con el ratón, permitiendo detectar eventos como la posición del cursor, clics y el desplazamiento. A continuación, se explican las principales funciones y variables para trabajar con el ratón.

## 1. Funciones Principales

### 1.1 `mousePressed()`
Esta función se ejecuta una vez cada vez que se presiona uno de los botones del ratón.

```java
void mousePressed() {
  println("Ratón presionado en posición: (" + mouseX + ", " + mouseY + ")");
}
```

### 1.2 `mouseReleased()`
Se ejecuta cuando se suelta el botón del ratón.

```java
void mouseReleased() {
  println("Ratón soltado en posición: (" + mouseX + ", " + mouseY + ")");
}
```

### 1.3 `mouseClicked()`
Esta función se ejecuta cada vez que se realiza un clic, es decir, cuando el botón del ratón se presiona y se suelta rápidamente.

```java
void mouseClicked() {
  println("Clic realizado en posición: (" + mouseX + ", " + mouseY + ")");
}
```

### 1.4 `mouseDragged()`
Se ejecuta cuando se mueve el ratón mientras se mantiene presionado uno de sus botones.

```java
void mouseDragged() {
  println("Ratón arrastrado en posición: (" + mouseX + ", " + mouseY + ")");
}
```

### 1.5 `mouseMoved()`
Esta función se activa cada vez que el ratón se mueve, sin que se presione ningún botón.

```java
void mouseMoved() {
  println("Ratón movido a posición: (" + mouseX + ", " + mouseY + ")");
}
```

## 2. Variables Relacionadas con el Ratón

### 2.1 `mouseX` y `mouseY`
Estas variables contienen las coordenadas X e Y actuales del ratón en la ventana del sketch.

```java
void draw() {
  println("Posición del ratón: (" + mouseX + ", " + mouseY + ")");
}
```

### 2.2 `pmouseX` y `pmouseY`
Contienen las coordenadas X e Y del ratón en el cuadro anterior, permitiendo calcular el movimiento del ratón.

```java
void draw() {
  line(pmouseX, pmouseY, mouseX, mouseY);  // Dibuja una línea que sigue el movimiento del ratón
}
```

### 2.3 `mouseButton`
Indica qué botón del ratón ha sido presionado. Puede ser `LEFT`, `RIGHT`, o `CENTER`.

```java
void mousePressed() {
  if (mouseButton == LEFT) {
    println("Botón izquierdo presionado");
  } else if (mouseButton == RIGHT) {
    println("Botón derecho presionado");
  } else if (mouseButton == CENTER) {
    println("Botón central presionado");
  }
}
```

## 3. Ejemplo Completo de Interacción con el Ratón

Este ejemplo muestra cómo cambiar el color de fondo haciendo clic con el ratón y dibujar una elipse en la posición del ratón cuando se arrastra.

```java
color bgColor = 255;

void setup() {
  size(400, 400);
}

void draw() {
  background(bgColor);
  if (mousePressed && mouseButton == LEFT) {
    fill(0, 102, 153);
    ellipse(mouseX, mouseY, 20, 20);
  }
}

void mouseClicked() {
  bgColor = color(random(255), random(255), random(255));
}
```

## Resumen

Estas funciones y variables permiten detectar y manejar eventos de ratón en Processing, proporcionando gran flexibilidad para crear interacciones en tus sketches.
