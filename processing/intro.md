---
title: "01. Introducción"
parent: "Processing"
---



# 1. Introducción a Processing

## ¿Qué es Processing?
**Processing** es un lenguaje de programación y un entorno de desarrollo visual diseñado para artistas, diseñadores, estudiantes y cualquier persona interesada en explorar la programación a través de la creación de gráficos y animaciones. Fue desarrollado para facilitar el aprendizaje de conceptos de programación mediante la experimentación visual, lo que lo convierte en una excelente opción para principiantes que desean aprender a programar de una manera interactiva y atractiva.

## ¿Cómo se usa Processing?
Processing se utiliza a través de un entorno de desarrollo integrado (IDE) que se puede descargar e instalar fácilmente desde su página oficial. Este entorno es intuitivo y permite a los usuarios escribir, ejecutar y depurar código con facilidad.

El código que se escribe en Processing se organiza en lo que se llama "sketches" (bocetos). Cada sketch es un conjunto de instrucciones que describe cómo se dibujan y se comportan los gráficos en la pantalla. Una vez que escribes el código, puedes ejecutar el sketch para ver cómo se visualizan las formas y animaciones.

### Ejemplo de Código:
```java
void setup() {
  size(500, 500); // Configura el tamaño de la ventana
  background(255); // Establece el color de fondo a blanco
}

void draw() {
  ellipse(250, 250, 100, 100); // Dibuja un círculo en el centro de la ventana
}
```
Este ejemplo crea una ventana de 500 x 500 píxeles y dibuja un círculo en el centro. Como puedes ver, el código es sencillo y muestra resultados visuales de inmediato, lo cual es una de las grandes ventajas de Processing.

## Lenguajes que se pueden usar con Processing
Processing está basado en Java, pero también admite otros lenguajes a través de diferentes modos que amplían sus capacidades:

1. **Java (modo por defecto):** Es el lenguaje principal utilizado en Processing y se usa para crear gráficos, animaciones y proyectos interactivos.

2. **JavaScript (p5.js):** Esta biblioteca permite llevar el concepto de Processing al entorno web. Con p5.js, puedes crear gráficos y animaciones que se ejecutan directamente en un navegador, lo que es ideal para proyectos interactivos en línea.

3. **Python (Processing.py):** Utilizando el modo Python, puedes escribir código en Python dentro de Processing. Este modo es excelente para quienes prefieren la sintaxis sencilla de Python y desean crear gráficos y animaciones visuales.

## ¿Por qué usar Processing?
Processing es una plataforma ideal para comenzar a aprender programación de una manera visual y práctica. Ofrece numerosas ventajas para los estudiantes, como:

- **Visualización inmediata:** Puedes ver cómo se comporta tu código en tiempo real, lo que facilita la comprensión de los conceptos de programación.
- **Comunidad activa:** Hay muchos recursos, ejemplos y tutoriales disponibles en línea, lo que hace que el aprendizaje sea accesible para todos.
- **Creatividad y expresión:** Es perfecto para proyectos artísticos y creativos, como animaciones, gráficos interactivos, visualizaciones de datos y juegos simples.

Processing combina la creatividad visual con la lógica de la programación, convirtiéndose en una herramienta poderosa para estudiantes y creadores. ¡Anímate a explorar y crear tus propios proyectos con Processing!
