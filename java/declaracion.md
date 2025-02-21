---
title: "06. Declaración de variables"
parent: "Java"
---

Declarar varias variables en Java
=================================

Para declarar varias variables en Java, puedes seguir varias opciones dependiendo de la situación y el contexto. Esto proporciona flexibilidad y claridad en tu código.

Aquí te presento algunas de las formas más comunes de hacerlo:

**Tabla de contenidos**


- [Declarar varias variables en Java](#declarar-varias-variables-en-java)
  - [1. Declaración individual](#1-declaración-individual)
  - [2. Declaración en una sola línea](#2-declaración-en-una-sola-línea)
  - [3. Un valor para múltiples variables](#3-un-valor-para-múltiples-variables)

1\. Declaración individual
--------------------------

```java
int numero1 = 10; 
int numero2 = 20; 
String nombre = "Ana";
```

En este caso, se declaran tres variables diferentes: `numero1`, `numero2` y `nombre`, cada una con su propio tipo de dato y valor inicial.

2\. Declaración en una sola línea
---------------------------------

```java
int numero1 = 10, numero2 = 20, numero3 = 30; 
String nombre = "Ana", apellido = "Pérez";
```
Esta forma permite declarar varias variables del mismo tipo de dato en una sola línea, separando los nombres de las variables por comas.

**NOTA:** También es posible declarar variables de diferentes tipos de dato en la misma línea, separando las declaraciones por punto y coma.

3\. Un valor para múltiples variables
-------------------------------------

También puedes asignar el **mismo valor** a varias variables en una línea:

```java
int x, y, z; x = y = z = 80; 
System.out.println(x + y + z);
```

Esta forma permite asignar el mismo valor a varias variables del mismo tipo de dato en una sola línea.