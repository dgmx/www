---
title: 7. Interactividad
parent: "Processing"
---


# Interactividad en Processing

La interactividad es una parte fundamental de muchos sketches de Processing. Este manual cubre las principales formas de interacción utilizando el ratón y el teclado.

## Índice
1. [Interacción con el Ratón](#interacción-con-el-ratón)
2. [Interacción con el Teclado](#interacción-con-el-teclado)
3. [Ejemplo Combinado](#ejemplo-combinado)

## Interacción con el Ratón

Processing proporciona varias variables y funciones para trabajar con el ratón.

### Variables del Ratón

- `mouseX`: La coordenada X actual del cursor del ratón.
- `mouseY`: La coordenada Y actual del cursor del ratón.
- `pmouseX`: La coordenada X del cursor del ratón en el frame anterior.
- `pmouseY`: La coordenada Y del cursor del ratón en el frame anterior.
- `mousePressed`: Booleano que es `true` si algún botón del ratón está presionado.
- `mouseButton`: Indica qué botón del ratón se presionó (LEFT, RIGHT, o CENTER).

### Funciones del Ratón

- `mousePressed()`: Se llama una vez cuando se presiona un botón del ratón.
- `mouseReleased()`: Se llama una vez cuando se suelta un botón del ratón.
- `mouseMoved()`: Se llama cuando el ratón se mueve y ningún botón está presionado.
- `mouseDragged()`: Se llama cuando el ratón se mueve y un botón está presionado.
- `mouseClicked()`: Se llama después de un ciclo completo de presionar y soltar.
- `mouseWheel()`: Se llama cuando se mueve la rueda del ratón.

### Ejemplo: Dibujar con el Ratón

```java
void setup() {
  size(400, 400);
  background(220);
}

void draw() {
  if (mousePressed) {
    stroke(0);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
```

Este sketch permite al usuario dibujar en la ventana manteniendo presionado el botón del ratón.

## Interacción con el Teclado

Processing también ofrece variables y funciones para interactuar con el teclado.

### Variables del Teclado

- `key`: Contiene el valor de la última tecla presionada.
- `keyCode`: Para teclas que no son caracteres (como las flechas), almacena un código numérico.
- `keyPressed`: Booleano que es `true` si alguna tecla está presionada.

### Funciones del Teclado

- `keyPressed()`: Se llama una vez cuando se presiona una tecla.
- `keyReleased()`: Se llama una vez cuando se suelta una tecla.
- `keyTyped()`: Se llama una vez cuando se presiona y suelta una tecla que produce un carácter.

### Ejemplo: Cambiar Color con Teclas

```java
color bgColor = color(220);

void setup() {
  size(400, 400);
}

void draw() {
  background(bgColor);
}

void keyPressed() {
  if (key == 'r' || key == 'R') {
    bgColor = color(255, 0, 0);  // Rojo
  } else if (key == 'g' || key == 'G') {
    bgColor = color(0, 255, 0);  // Verde
  } else if (key == 'b' || key == 'B') {
    bgColor = color(0, 0, 255);  // Azul
  }
}
```

Este sketch cambia el color de fondo cuando se presionan las teclas 'r', 'g' o 'b'.

## Ejemplo Combinado

Aquí tienes un ejemplo que combina interacciones de ratón y teclado:

```java
float circleX, circleY;
float circleSize = 50;
color circleColor;

void setup() {
  size(400, 400);
  circleX = width / 2;
  circleY = height / 2;
  circleColor = color(255, 0, 0);
}

void draw() {
  background(220);
  
  // Dibuja el círculo
  fill(circleColor);
  ellipse(circleX, circleY, circleSize, circleSize);
  
  // Mueve el círculo con las teclas de flecha
  if (keyPressed) {
    if (keyCode == UP) circleY -= 5;
    if (keyCode == DOWN) circleY += 5;
    if (keyCode == LEFT) circleX -= 5;
    if (keyCode == RIGHT) circleX += 5;
  }
}

void mousePressed() {
  // Cambia el tamaño del círculo con los botones del ratón
  if (mouseButton == LEFT) {
    circleSize += 10;
  } else if (mouseButton == RIGHT) {
    circleSize -= 10;
  }
  circleSize = constrain(circleSize, 10, 200);
}

void keyTyped() {
  // Cambia el color del círculo con las teclas r, g, b
  if (key == 'r' || key == 'R') {
    circleColor = color(255, 0, 0);  // Rojo
  } else if (key == 'g' || key == 'G') {
    circleColor = color(0, 255, 0);  // Verde
  } else if (key == 'b' || key == 'B') {
    circleColor = color(0, 0, 255);  // Azul
  }
}
```

Este sketch crea un círculo interactivo que:
- Se mueve con las teclas de flecha
- Cambia de tamaño con los clics del ratón
- Cambia de color con las teclas 'r', 'g' y 'b'

Recuerda que la interactividad puede hacer tus sketches más dinámicos y atractivos. Experimenta combinando diferentes tipos de interacciones para crear experiencias únicas.
