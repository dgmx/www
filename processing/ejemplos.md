---
title: "Ejemplos"
parent: "Processing"
---


# Ejercicios Básicos de Processing (Java y Python)

## 1. ¿Qué es un Sketch?
### Ejercicio
Crea un sketch que dibuje un círculo en el centro de la pantalla y cambie de color cuando se hace clic con el ratón.

#### Java (Processing):
```java
void setup() {
  size(400, 400); // Configura el tamaño de la ventana
  background(200); // Establece el color de fondo
}

void draw() {
  ellipse(width/2, height/2, 100, 100); // Dibuja un círculo en el centro
}

void mousePressed() {
  fill(random(255), random(255), random(255)); // Cambia el color de relleno al hacer clic
}
```

#### Python (Processing.py):
```python
def setup():
    size(400, 400)  # Configura el tamaño de la ventana
    background(200)  # Establece el color de fondo

def draw():
    ellipse(width / 2, height / 2, 100, 100)  # Dibuja un círculo en el centro

def mousePressed():
    fill(random(255), random(255), random(255))  # Cambia el color de relleno al hacer clic
```

## 2. Sistema de Coordenadas
### Ejercicio
Dibuja una cuadrícula de puntos en la pantalla utilizando el sistema de coordenadas de Processing.

#### Java (Processing):
```java
void setup() {
  size(400, 400);
  background(255);
  for (int x = 0; x < width; x += 20) {
    for (int y = 0; y < height; y += 20) {
      point(x, y); // Dibuja un punto en cada intersección de la cuadrícula
    }
  }
}
```

#### Python (Processing.py):
```python
def setup():
    size(400, 400)
    background(255)
    for x in range(0, width, 20):
        for y in range(0, height, 20):
            point(x, y)  # Dibuja un punto en cada intersección de la cuadrícula
```

## 3. Formas Básicas
### Ejercicio
Dibuja un rectángulo y un círculo que cambien de tamaño al mover el ratón.

#### Java (Processing):
```java
void setup() {
  size(400, 400);
  background(255);
}

void draw() {
  background(255); // Limpia la pantalla
  rect(50, 50, mouseX, mouseY); // Cambia el tamaño del rectángulo
  ellipse(300, 300, mouseX / 2, mouseY / 2); // Cambia el tamaño del círculo
}
```

#### Python (Processing.py):
```python
def setup():
    size(400, 400)
    background(255)

def draw():
    background(255)  # Limpia la pantalla
    rect(50, 50, mouseX, mouseY)  # Cambia el tamaño del rectángulo
    ellipse(300, 300, mouseX / 2, mouseY / 2)  # Cambia el tamaño del círculo
```

## 4. Interactividad
### Ejercicio
Crea un sketch donde un círculo siga al ratón y cambie de color cuando se presiona una tecla.

#### Java (Processing):
```java
void setup() {
  size(400, 400);
  background(255);
}

void draw() {
  fill(150, 0, 255); // Color por defecto
  ellipse(mouseX, mouseY, 50, 50); // El círculo sigue al ratón
}

void keyPressed() {
  fill(random(255), random(255), random(255)); // Cambia de color cuando se presiona una tecla
}
```

#### Python (Processing.py):
```python
def setup():
    size(400, 400)
    background(255)

def draw():
    fill(150, 0, 255)  # Color por defecto
    ellipse(mouseX, mouseY, 50, 50)  # El círculo sigue al ratón

def keyPressed():
    fill(random(255), random(255), random(255))  # Cambia de color cuando se presiona una tecla
```

## 5. Colores
### Ejercicio
Crea un rectángulo con un degradado de colores cambiando de rojo a azul de arriba hacia abajo.

#### Java (Processing):
```java
void setup() {
  size(400, 400);
  for (int i = 0; i < height; i++) {
    stroke(255 - i, 0, i); // Gradiente de rojo a azul
    line(0, i, width, i); // Dibuja una línea horizontal
  }
}
```

#### Python (Processing.py):
```python
def setup():
    size(400, 400)
    for i in range(height):
        stroke(255 - i, 0, i)  # Gradiente de rojo a azul
        line(0, i, width, i)  # Dibuja una línea horizontal
```
