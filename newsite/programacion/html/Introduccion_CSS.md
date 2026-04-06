

# 🎨 Manual de Introducción al CSS

## Índice de Contenidos

1. [¿Qué es CSS?](#1-qué-es-css)
2. [Cómo enlazar CSS con HTML](#2-cómo-enlazar-css-con-html)
3. [Selectores](#3-selectores)
4. [Colores y fondos](#4-colores-y-fondos)
5. [Tipografía](#5-tipografía)
6. [El modelo de caja (Box Model)](#6-el-modelo-de-caja-box-model)
7. [Posicionamiento y Display](#7-posicionamiento-y-display)
8. [Flexbox](#8-flexbox)
9. [Diseño responsive y Media Queries](#9-diseño-responsive-y-media-queries)
10. [Proyecto final integrador](#10-proyecto-final-integrador)

---

## 1. ¿Qué es CSS?

**CSS** (Cascading Style Sheets, u Hojas de Estilo en Cascada) es el lenguaje que controla el **aspecto visual** de una página web. Si HTML es el esqueleto, CSS es la piel, la ropa y el maquillaje.

Con CSS puedes controlar:

- Colores, fuentes y tamaños de texto
- Márgenes, rellenos y bordes
- Posición y disposición de los elementos
- Animaciones y transiciones
- Cómo se adapta la web a distintos tamaños de pantalla

### ¿Cómo funciona la "cascada"?

El nombre "en cascada" hace referencia a cómo CSS resuelve los conflictos entre reglas: cuando varias reglas afectan al mismo elemento, gana la más **específica** o la que aparece **más abajo** en el archivo.

```css
/* Esta regla pone todos los párrafos en azul */
p {
  color: blue;
}

/* Esta regla es más específica y gana: el párrafo con id="especial" será rojo */
#especial {
  color: red;
}
```

### Sintaxis básica de CSS

Una regla CSS tiene dos partes: el **selector** (a quién afecta) y la **declaración** (qué hace):

```css
selector {
  propiedad: valor;
  propiedad: valor;
}

/* Ejemplo real */
h1 {
  color: navy;
  font-size: 32px;
  text-align: center;
}
```

> 💡 **¡Recuerda!** Los comentarios en CSS se escriben así: `/* Esto es un comentario */`

---

## 2. Cómo Enlazar CSS con HTML

Hay tres formas de añadir CSS a una página HTML:

### 2.1 Hoja de estilos externa (recomendada ✅)

Se crea un archivo `.css` separado y se enlaza desde el `<head>` del HTML:

```html
<!-- En el archivo index.html -->
<head>
  <link rel="stylesheet" href="css/estilos.css">
</head>
```

```css
/* En el archivo css/estilos.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}
```

**Ventaja:** Un solo archivo CSS puede dar estilo a todas las páginas del sitio.

### 2.2 Estilos en el `<head>` (estilo interno)

```html
<head>
  <style>
    h1 { color: darkblue; }
    p  { font-size: 16px; }
  </style>
</head>
```

### 2.3 Estilo en línea (inline) — evitar ❌

```html
<p style="color: red; font-size: 18px;">Este párrafo es rojo</p>
```

> 🚀 **Consejo PRO:** Usa siempre la hoja de estilos externa. Así, si quieres cambiar el color de todos los títulos, solo editas un archivo en vez de tocar cada página.

---

## 3. Selectores

Los selectores son la forma de **apuntar a los elementos HTML** que quieres estilizar.

### 3.1 Selector de etiqueta (tipo)

Afecta a **todos** los elementos de ese tipo:

```css
p  { color: #333; }
h2 { font-size: 24px; }
```

### 3.2 Selector de clase

Afecta a los elementos con ese atributo `class`. Se escribe con punto `.`:

```css
/* HTML: <p class="destacado">Texto</p> */
.destacado {
  background-color: yellow;
  font-weight: bold;
}
```

> 💡 Una clase puede usarse en **muchos elementos** y un elemento puede tener **varias clases**: `<p class="destacado grande">`.

### 3.3 Selector de ID

Afecta a un **único elemento** con ese `id`. Se escribe con `#`:

```css
/* HTML: <header id="cabecera-principal"> */
#cabecera-principal {
  background-color: navy;
  color: white;
}
```

> ⚠️ Los IDs deben ser únicos en la página. Para reutilizar estilos, usa clases.

### 3.4 Selector universal

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

### 3.5 Selectores combinados

```css
nav a          { color: white; }       /* <a> dentro de <nav> */
ul > li        { list-style: square; } /* <li> hijo directo de <ul> */
h1, h2, h3     { font-family: serif; } /* Varios a la vez */
p.intro        { font-size: 18px; }    /* <p> con clase "intro" */
```

### 3.6 Pseudoclases

Las pseudoclases seleccionan elementos en un **estado especial**:

```css
a:hover        { color: orange; }        /* Al pasar el ratón */
a:visited      { color: purple; }        /* Enlace visitado */
li:first-child { font-weight: bold; }    /* Primer hijo */
li:last-child  { border-bottom: none; }  /* Último hijo */
input:focus    { border-color: blue; }   /* Campo enfocado */
```

### 3.7 Tabla resumen de selectores

| Selector | Ejemplo | Selecciona |
|---|---|---|
| Etiqueta | `p` | Todos los `<p>` |
| Clase | `.menu` | Todos los elementos con `class="menu"` |
| ID | `#logo` | El elemento con `id="logo"` |
| Universal | `*` | Todos los elementos |
| Descendiente | `nav a` | Los `<a>` dentro de `<nav>` |
| Hijo directo | `ul > li` | Los `<li>` hijos directos de `<ul>` |
| Pseudoclase | `a:hover` | El `<a>` cuando el ratón está encima |

---

## 4. Colores y Fondos

### 4.1 Formas de escribir colores en CSS

```css
color: red;                    /* Nombre del color */
color: #FF5733;                /* Hexadecimal (la más usada) */
color: #333;                   /* Hex corto: equivale a #333333 */
color: rgb(255, 87, 51);       /* RGB */
color: rgba(255, 87, 51, 0.5); /* RGB con transparencia (0-1) */
color: hsl(11, 100%, 60%);     /* Tono, Saturación, Luminosidad */
```

### 4.2 Color de texto y fondo

```css
body {
  color: #333333;             /* Color del texto */
  background-color: #f9f9f9;  /* Color de fondo */
}

h1 {
  color: white;
  background-color: #2C3E50;
}
```

### 4.3 Imágenes de fondo

```css
body {
  background-image: url("img/fondo.jpg");
  background-size: cover;       /* Cubre todo el área */
  background-position: center;  /* Centrada */
  background-repeat: no-repeat; /* Sin repetición */
}

/* Gradiente lineal */
header {
  background: linear-gradient(135deg, #667eea, #764ba2);
}

/* Gradiente radial */
.hero {
  background: radial-gradient(circle, #f093fb, #f5576c);
}
```

### 4.4 Opacidad

```css
.foto-overlay {
  opacity: 0.7;  /* 0 = transparente, 1 = sólido */
}
```

> 🎨 **Herramienta útil:** Usa [coolors.co](https://coolors.co) para generar paletas de colores armoniosas.

---

## 5. Tipografía

### 5.1 Familia tipográfica

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  /* Si no hay Arial → usa Helvetica → si no, cualquier sans-serif */
}

code {
  font-family: "Courier New", Courier, monospace;
}
```

### 5.2 Google Fonts (fuentes gratuitas)

```html
<!-- En el <head> del HTML -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

```css
body { font-family: 'Roboto', sans-serif; }
```

### 5.3 Propiedades de texto principales

```css
p {
  font-size: 16px;           /* Tamaño */
  font-weight: bold;         /* Grosor: normal, bold, 100–900 */
  font-style: italic;        /* Estilo: normal, italic */
  line-height: 1.6;          /* Altura de línea */
  letter-spacing: 1px;       /* Espacio entre letras */
  text-align: center;        /* left, right, center, justify */
  text-decoration: none;     /* none, underline, line-through */
  text-transform: uppercase; /* uppercase, lowercase, capitalize */
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}
```

### 5.4 Unidades de medida en CSS

| Unidad | Tipo | Descripción |
|---|---|---|
| `px` | Absoluta | Píxeles fijos |
| `em` | Relativa | Relativa al `font-size` del padre |
| `rem` | Relativa | Relativa al `font-size` de `<html>` |
| `%` | Relativa | Porcentaje del contenedor |
| `vw` | Viewport | 1% del ancho de la ventana |
| `vh` | Viewport | 1% del alto de la ventana |

```css
html { font-size: 16px; }  /* 1rem = 16px */

h1 { font-size: 2rem; }    /* = 32px */
h2 { font-size: 1.5rem; }  /* = 24px */

.hero {
  height: 100vh;  /* Toda la altura de la pantalla */
}
```

> 💡 Usa `rem` para tamaños de fuente: respeta la configuración de accesibilidad del usuario.

---

## 6. El Modelo de Caja (Box Model)

El **Box Model** es el concepto más importante de CSS. **Todo elemento HTML es una caja rectangular** compuesta por cuatro capas:

```
┌─────────────────────────────────────┐
│              MARGIN                 │  ← Espacio exterior (transparente)
│  ┌───────────────────────────────┐  │
│  │           BORDER              │  │  ← Borde
│  │  ┌─────────────────────────┐  │  │
│  │  │        PADDING          │  │  │  ← Relleno interior
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │     CONTENT       │  │  │  │  ← Contenido real
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 6.1 Padding, Border y Margin

```css
.caja {
  /* PADDING — espacio entre contenido y borde */
  padding: 20px;               /* Los 4 lados iguales */
  padding: 10px 20px;          /* Arriba/abajo | Izq/der */
  padding: 10px 20px 15px 5px; /* Arriba | Derecha | Abajo | Izquierda */
  padding-top: 10px;           /* Solo arriba */

  /* BORDER — el borde de la caja */
  border: 2px solid #333;
  border-radius: 8px;          /* Esquinas redondeadas */
  border-top: 3px dashed red;

  /* MARGIN — espacio exterior entre cajas */
  margin: 20px;
  margin: 0 auto;              /* Centrar horizontalmente */
  margin-bottom: 30px;
}
```

### 6.2 Width y Height

```css
.contenedor {
  width: 800px;
  max-width: 1200px;  /* Ancho máximo (útil para responsive) */
  min-width: 300px;
  height: 400px;
  min-height: 100vh;
}
```

### 6.3 box-sizing: border-box (¡muy importante!)

Por defecto, `width` solo mide el contenido. Con `border-box` incluye padding y borde:

```css
/* Pon esto siempre al inicio de tu CSS */
* {
  box-sizing: border-box;
}

/* Ahora un elemento con width: 300px siempre mide 300px en total ✅ */
.caja {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
}
```

### 6.4 Overflow

```css
.caja {
  width: 200px;
  height: 100px;
  overflow: hidden;  /* Oculta lo que sobra */
  overflow: scroll;  /* Barra de desplazamiento siempre */
  overflow: auto;    /* Barra solo si hace falta (recomendado) */
}
```

---

## 7. Posicionamiento y Display

### 7.1 La propiedad display

```css
display: block;        /* Ocupa todo el ancho, genera salto de línea */
display: inline;       /* Solo ocupa lo necesario, sin salto */
display: inline-block; /* Como inline pero acepta width y height */
display: none;         /* Oculta el elemento (no ocupa espacio) */
display: flex;         /* Activa Flexbox (ver sección 8) */
```

### 7.2 La propiedad position

```css
/* static: posición normal en el flujo (por defecto) */
p { position: static; }

/* relative: se desplaza respecto a su posición normal */
.desplazado {
  position: relative;
  top: 10px;
  left: 20px;
}

/* absolute: se posiciona respecto al antepasado "posicionado" */
.etiqueta {
  position: absolute;
  top: 0;
  right: 0;
}

/* fixed: fijo en la pantalla aunque se haga scroll */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

/* sticky: se pega al hacer scroll */
.cabecera-tabla {
  position: sticky;
  top: 0;
}
```

### 7.3 z-index

```css
/* Mayor número = más arriba visualmente */
.fondo     { z-index: 1;   }
.contenido { z-index: 2;   }
.modal     { z-index: 100; }
```

---

## 8. Flexbox

**Flexbox** es el sistema de maquetación más útil para organizar elementos en una fila o columna.

### 8.1 Activar Flexbox

Se activa en el **contenedor padre**:

```css
.contenedor {
  display: flex;
}
```

Todos los hijos directos se colocan en fila automáticamente.

### 8.2 Dirección y ajuste

```css
.contenedor {
  flex-direction: row;         /* fila (por defecto) */
  flex-direction: column;      /* columna */
  flex-direction: row-reverse; /* fila al revés */
  flex-wrap: nowrap;           /* Todo en una línea (por defecto) */
  flex-wrap: wrap;             /* Salta si no cabe */
}
```

### 8.3 Alineación

```css
.contenedor {
  /* Eje principal (horizontal con flex-direction: row) */
  justify-content: flex-start;    /* Al inicio */
  justify-content: flex-end;      /* Al final */
  justify-content: center;        /* Centrados */
  justify-content: space-between; /* Espacio entre ellos */
  justify-content: space-around;  /* Espacio alrededor */
  justify-content: space-evenly;  /* Espacio igual */

  /* Eje secundario (vertical con flex-direction: row) */
  align-items: stretch;           /* Se estiran (por defecto) */
  align-items: flex-start;        /* Arriba */
  align-items: flex-end;          /* Abajo */
  align-items: center;            /* Centrados verticalmente */
}
```

### 8.4 El truco de centrado perfecto

```css
.centrar-todo {
  display: flex;
  justify-content: center; /* Centro horizontal */
  align-items: center;     /* Centro vertical */
  height: 100vh;
}
```

### 8.5 Propiedades de los hijos

```css
.hijo {
  flex: 1;            /* Ocupa el espacio disponible proporcionalmente */
  flex-grow: 2;       /* Crece el doble que sus hermanos */
  flex-shrink: 0;     /* No se encoge */
  flex-basis: 200px;  /* Tamaño base */
  align-self: center; /* Alineación individual */
  order: -1;          /* Cambia el orden visual */
}
```

### 8.6 Ejemplo práctico: Menú de navegación

```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2C3E50;
  padding: 0 20px;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 20px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  padding: 20px 10px;
  display: block;
}

nav ul li a:hover {
  background-color: #E74C3C;
}
```

> 💡 La propiedad `gap` en Flexbox añade espacio entre los hijos sin necesidad de márgenes.

---

## 9. Diseño Responsive y Media Queries

El **diseño responsive** hace que una web se vea bien en cualquier dispositivo.

### 9.1 El meta viewport (obligatorio)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Sin esta línea en el `<head>`, el responsive no funciona en móviles.

### 9.2 Qué son las Media Queries

Las Media Queries aplican estilos **solo cuando se cumplen ciertas condiciones**:

```css
@media (condición) {
  /* estilos que solo se aplican si se cumple la condición */
}
```

### 9.3 Breakpoints más comunes

```css
/* Móvil: hasta 768px */
@media (max-width: 768px) {
  .columnas {
    flex-direction: column;
  }
  nav ul {
    display: none;
  }
}

/* Tablet: entre 768px y 1024px */
@media (min-width: 768px) and (max-width: 1024px) {
  .tarjeta { flex: 1 1 calc(50% - 10px); }
}

/* Escritorio: más de 1024px */
@media (min-width: 1024px) {
  .contenedor {
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

### 9.4 Estrategia Mobile First

La mejor práctica: diseña **primero para móvil** y luego amplía:

```css
/* Base: móvil */
.tarjetas {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .tarjeta { flex: 1 1 calc(50% - 8px); }  /* 2 columnas */
}

/* Escritorio */
@media (min-width: 1024px) {
  .tarjeta { flex: 1 1 calc(33% - 11px); } /* 3 columnas */
}
```

### 9.5 Imágenes responsive

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

> 🎯 **Actividad práctica:** Redimensiona la ventana de tu navegador en una web que conozcas. Observa cómo el diseño cambia al hacerla más estrecha. ¡Eso es el diseño responsive en acción!

---

## 10. Proyecto Final Integrador

Llega el momento de estilizar la web personal que creaste con HTML. Vas a transformarla completamente con CSS.

### 10.1 Estructura de archivos

```
mi-web-personal/
├── index.html
├── sobre-mi.html
├── hobbies.html
├── contacto.html
├── css/
│   └── estilos.css      ← Todo tu CSS aquí
└── img/
    └── ...
```

### 10.2 Plantilla de estilos base

```css
/* ==========================================
   RESET Y BASE
   ========================================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  color: #E8500A;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* ==========================================
   CONTENEDOR PRINCIPAL
   ========================================== */
.contenedor {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ==========================================
   CABECERA
   ========================================== */
header {
  background: linear-gradient(135deg, #1A5276, #2E86C1);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

header h1 { font-size: 2.5rem; margin-bottom: 10px; }
header p  { font-size: 1.2rem; opacity: 0.85; }

/* ==========================================
   NAVEGACIÓN
   ========================================== */
nav {
  background-color: #2C3E50;
  position: sticky;
  top: 0;
  z-index: 100;
}

nav ul {
  display: flex;
  list-style: none;
  justify-content: center;
}

nav ul li a {
  display: block;
  color: white;
  padding: 16px 24px;
  transition: background-color 0.3s;
}

nav ul li a:hover {
  background-color: #E8500A;
  text-decoration: none;
}

/* ==========================================
   CONTENIDO
   ========================================== */
main {
  padding: 40px 20px;
  max-width: 1100px;
  margin: 0 auto;
}

h2 {
  font-size: 1.8rem;
  color: #1A5276;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 3px solid #E8500A;
}

/* ==========================================
   TARJETAS CON FLEXBOX
   ========================================== */
.tarjetas {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 24px;
}

.tarjeta {
  flex: 1 1 280px;
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.tarjeta:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

/* ==========================================
   FORMULARIO
   ========================================== */
form { max-width: 600px; }

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}

input[type="text"],
input[type="email"],
textarea,
select {
  width: 100%;
  padding: 10px 14px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 20px;
  transition: border-color 0.3s;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #2E86C1;
  outline: none;
}

button[type="submit"] {
  background-color: #E8500A;
  color: white;
  padding: 12px 32px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #C0392B;
}

/* ==========================================
   PIE DE PÁGINA
   ========================================== */
footer {
  background-color: #2C3E50;
  color: #aaa;
  text-align: center;
  padding: 24px;
  margin-top: 60px;
}

/* ==========================================
   RESPONSIVE
   ========================================== */
@media (max-width: 768px) {
  header h1 { font-size: 1.8rem; }

  nav ul { flex-direction: column; }

  nav ul li a {
    padding: 12px 20px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }

  .tarjetas { flex-direction: column; }
}
```

### 10.3 Requisitos del proyecto

#### Estilos generales
- Reset con `box-sizing: border-box`
- Tipografía coherente con `font-family` y tamaños con `rem`
- Paleta de colores definida y consistente en toda la web

#### Navegación
- Menú estilizado con Flexbox
- Efecto hover visible en los enlaces

#### Contenido
- Cabecera con fondo de color o gradiente
- Al menos una sección con tarjetas usando Flexbox
- Imágenes con `max-width: 100%`

#### Formulario
- Campos estilizados con foco visible (`:focus`)
- Botón con efecto hover

#### Responsive
- La web debe verse bien en móvil (pantalla < 768px)
- Al menos una Media Query que cambie el layout

### 10.4 Criterios de evaluación

| Criterio | Puntuación |
|---|---|
| Reset y estilos base correctos | 1 punto |
| Selectores variados (etiqueta, clase, ID, pseudoclase) | 2 puntos |
| Colores y tipografía coherentes | 1.5 puntos |
| Box model bien aplicado (padding, margin, border) | 1.5 puntos |
| Flexbox para maquetación | 2 puntos |
| Al menos una Media Query funcional | 1.5 puntos |
| Creatividad y acabado visual | 0.5 puntos |

---

> 🚀 **¡Enhorabuena! Ya tienes los conocimientos básicos de CSS.**
>
> El siguiente paso es aprender **CSS Grid** para layouts más complejos y **animaciones CSS** para añadir movimiento a tus páginas.

---

*Manual de CSS — Diseño Web*

- [Descargar manual en PDF](Manual_CSS.pdf)
