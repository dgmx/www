---
title: 8. Funciones usando el Teclado
parent: "Processing"
---
# Funciones para Trabajar con el Teclado en Processing

Processing ofrece varias funciones para interactuar con el teclado, permitiendo detectar la pulsación de teclas, distinguir entre distintas teclas y manejar eventos de teclado. A continuación, se describen las principales funciones para trabajar con el teclado.

## 1. Funciones Principales

### 1.1 `keyPressed()`
Esta función se ejecuta cada vez que se presiona una tecla. Es ideal para detectar eventos individuales de presión de teclas.

```java
void keyPressed() {
  if (key == 'a') {
    println("La tecla 'a' fue presionada.");
  }
}
```

### 1.2 `keyReleased()`
Se ejecuta cada vez que se libera una tecla.

```java
void keyReleased() {
  println("Se ha soltado la tecla: " + key);
}
```

### 1.3 `keyTyped()`
Se ejecuta cuando se escribe un carácter en particular, lo cual puede incluir teclas modificadoras como Shift o Alt.

```java
void keyTyped() {
  println("Tecla escrita: " + key);
}
```

## 2. Variables Relacionadas con el Teclado

### 2.1 `key`
Esta variable contiene el valor de la tecla presionada como un carácter. Se puede usar para detectar teclas específicas.

```java
void draw() {
  if (keyPressed) {
    println("Tecla actual: " + key);
  }
}
```

### 2.2 `keyCode`
`keyCode` se utiliza para detectar teclas especiales como las teclas de flecha, Shift, Ctrl, etc.

```java
void keyPressed() {
  if (keyCode == UP) {
    println("Flecha hacia arriba presionada");
  }
}
```

## 3. Ejemplo Completo de Interacción con el Teclado

Este ejemplo muestra cómo usar `keyPressed` y `keyCode` para mover un círculo con las teclas de flecha.

```java
int x = 200;
int y = 200;

void setup() {
  size(400, 400);
}

void draw() {
  background(255);
  ellipse(x, y, 50, 50);
}

void keyPressed() {
  if (keyCode == UP) {
    y -= 5;
  } else if (keyCode == DOWN) {
    y += 5;
  } else if (keyCode == LEFT) {
    x -= 5;
  } else if (keyCode == RIGHT) {
    x += 5;
  }
}
```

## 4. Detección de Mayúsculas y Teclas Especiales

Puedes detectar teclas especiales como Shift y Ctrl usando `keyCode`, y saber si una tecla de mayúsculas fue presionada usando la variable `key`.

```java
void keyPressed() {
  if (key == 'A') {
    println("Mayúscula 'A' fue presionada");
  } else if (keyCode == SHIFT) {
    println("Tecla Shift presionada");
  }
}
```
Aqui tenemos un ejemplo usando `Python` donde paramos la ejecución de un programa usando `keyPressed` y lo reactivamos de la misma forma usando diferentes `keyCode` para conseguirlo.

```python
terminado = False
def setup():
    size(800,600)
    background(115)

def draw():
    if terminado == False:
        fill(random(255), random (255),random (255))
        rect(random(800), random(600),20,20)
        ellipse(random(800), random(600),20,20)
    print(terminado)
        
def keyPressed():
    if keyCode == UP:
        global terminado 
        terminado = True
    elif keyCode == DOWN:
        global terminado
        terminado = False
```

## Resumen

Estas funciones y variables permiten detectar y manejar eventos de teclado en Processing, ofreciendo una amplia flexibilidad para crear interactividad en tus sketches.
