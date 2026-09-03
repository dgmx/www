
Nueva Web: Maquetación completa con CSS
==========================================

Introducción
-----------------------------------------------------

En este curso práctico veremos cómo crear una **página web completa HTML5** desde cero, utilizando CSS para maquetar todos los elementos típicos de una web profesional: menú de navegación, logotipo, barra lateral, contenido principal y pie de página.

El resultado final será una página con esta estructura:

```text
┌──────────────────────────────────────────────────────┐
│  LOGO    |  Título de la Web                         │
├──────────────────────────────────────────────────────┤
│  Inicio | Servicios | Nosotros | Contacto            │
├────────────────────────┬─────────────────────────────┤
│                        │                             │
│   CONTENIDO            │   SIDEBAR                   │
│   PRINCIPAL            │   (barra lateral)           │
│                        │                             │
│                        │                             │
├────────────────────────┴─────────────────────────────┤
│              FOOTER (pie de página)                   │
└──────────────────────────────────────────────────────┘
```

Paso 1: Estructura HTML5
-----------------------------------------------------

Creamos el archivo `index.html` con la estructura semántica de HTML5:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Nueva Web</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <!-- CABECERA: Logo + Título -->
    <header id="cabecera">
        <img src="logo.png" alt="Logo de la empresa" id="logo">
        <h1>Mi Nueva Web</h1>
    </header>

    <!-- MENÚ DE NAVEGACIÓN -->
    <nav id="menu">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>

    <!-- CONTENIDO PRINCIPAL + SIDEBAR -->
    <div id="contenedor">
        <section id="contenido">
            <h2>Bienvenidos a nuestra web</h2>
            <p>
                Este es el contenido principal de la página.
                Aquí iría la información más importante de nuestro
                sitio web, como artículos, noticias o descripción
                de servicios.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris.
            </p>
            <img src="imagen.jpg" alt="Imagen de ejemplo" id="imagen-contenido">
            <p>
                Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
            </p>
        </section>

        <aside id="sidebar">
            <h3>Enlaces de interés</h3>
            <ul>
                <li><a href="#">Enlace 1</a></li>
                <li><a href="#">Enlace 2</a></li>
                <li><a href="#">Enlace 3</a></li>
            </ul>

            <h3>Últimas noticias</h3>
            <p>Noticia 1: lorem ipsum dolor sit amet...</p>
            <p>Noticia 2: consectetur adipiscing elit...</p>

            <h3>Contacto</h3>
            <p>Email: info@miweb.com</p>
            <p>Tel: 900 123 456</p>
        </aside>
    </div>

    <!-- PIE DE PÁGINA -->
    <footer id="pie">
        <p>&copy; 2024 Mi Nueva Web. Todos los derechos reservados.</p>
    </footer>

</body>
</html>
```

### Etiquetas semánticas HTML5 utilizadas

| Etiqueta | Función |
|----------|---------|
| `<header>` | Cabecera de la página o sección |
| `<nav>` | Bloque de navegación (menús) |
| `<section>` | Sección de contenido |
| `<aside>` | Contenido complementario (sidebar) |
| `<footer>` | Pie de página |
| `<ul>` / `<li>` | Listas de enlaces del menú |
| `<a>` | Enlaces de navegación |

Paso 2: CSS base — Reset y estilos generales
-----------------------------------------------------

Creamos el archivo `estilos.css` y comenzamos con un reset básico para eliminar los estilos por defecto del navegador:

```css
/* ===========================
   RESET Y ESTILOS GENERALES
   =========================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}
```

::: warning
La propiedad `box-sizing: border-box` es fundamental. Hace que el `width` incluya el padding y el borde, evitando que las cajas se desborden cuando añadimos bordes o relleno.
:::

Paso 3: Cabecera con logo y título
-----------------------------------------------------

Estilizamos la parte superior con el logotipo y el título de la web:

```css
/* ===========================
   CABECERA (Logo + Título)
   =========================== */

#cabecera {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    display: flex;
    align-items: center;
}

#logo {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border-radius: 50%;         /* Logo circular */
    border: 3px solid white;
}

#cabecera h1 {
    font-size: 2em;
    letter-spacing: 2px;
}
```

### ¿Qué hace `display: flex`?

Al poner `display: flex` en la cabecera, los elementos hijos (logo y título) se colocan **en una misma fila** automáticamente. Las propiedades `align-items: center` alinea verticalmente los elementos al centro.

Paso 4: Menú de navegación
-----------------------------------------------------

Creamos una barra de menú horizontal con enlaces:

```css
/* ===========================
   MENÚ DE NAVEGACIÓN
   =========================== */

#menu {
    background-color: #34495e;
}

#menu ul {
    list-style: none;           /* Quita los puntos de la lista */
    display: flex;              /* Coloca los elementos en fila */
}

#menu ul li a {
    display: block;
    color: white;
    text-decoration: none;      /* Quita el subrayado */
    padding: 15px 25px;
    transition: background-color 0.3s ease;
}

#menu ul li a:hover {
    background-color: #1abc9c;  /* Color al pasar el ratón */
}
```

### Explicación detallada

* `list-style: none` elimina las viñetas de las listas `<ul>`
* `display: flex` convierte la lista en una fila horizontal
* `text-decoration: none` quita el subrayado azul por defecto de los enlaces
* `transition` crea una transición suave de 0.3 segundos cuando pasamos el ratón por encima

Paso 5: Contenido principal y sidebar
-----------------------------------------------------

Utilizamos **flexbox** para crear un layout de dos columnas:

```css
/* ===========================
   CONTENEDOR PRINCIPAL
   =========================== */

#contenedor {
    display: flex;
    margin: 20px auto;
    max-width: 1200px;
    gap: 20px;                  /* Espacio entre columnas */
    padding: 0 20px;
}

/* ===========================
   CONTENIDO PRINCIPAL
   =========================== */

#contenido {
    flex: 3;                    /* Ocupa 3 partes del espacio */
    background-color: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

#contenido h2 {
    color: #2c3e50;
    margin-bottom: 15px;
    border-bottom: 2px solid #1abc9c;
    padding-bottom: 10px;
}

#contenido p {
    margin-bottom: 15px;
    text-align: justify;
}

#imagen-contenido {
    width: 100%;
    border-radius: 5px;
    margin: 15px 0;
}

/* ===========================
   SIDEBAR (Barra lateral)
   =========================== */

#sidebar {
    flex: 1;                    /* Ocupa 1 parte del espacio */
    background-color: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

#sidebar h3 {
    color: #2c3e50;
    margin-bottom: 10px;
    margin-top: 20px;
    font-size: 1.1em;
}

#sidebar h3:first-child {
    margin-top: 0;
}

#sidebar ul {
    list-style: none;
}

#sidebar ul li {
    padding: 8px 0;
    border-bottom: 1px dotted #ccc;
}

#sidebar ul li a {
    color: #34495e;
    text-decoration: none;
}

#sidebar ul li a:hover {
    color: #1abc9c;
}
```

### Proporciones con `flex`

La propiedad `flex: 3` en el contenido y `flex: 1` en el sidebar significan que el contenido ocupa **3 partes** y el sidebar **1 parte**. Esto equivale a un 75% y un 25% aproximadamente.

Paso 6: Pie de página (footer)
-----------------------------------------------------

```css
/* ===========================
   FOOTER (Pie de página)
   =========================== */

#pie {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
}

#pie p {
    font-size: 0.9em;
}
```

Paso 7: Versión responsive (adaptada a móviles)
-----------------------------------------------------

Añadimos una **media query** para que la página se adapte a pantallas pequeñas. En dispositivos móviles, las dos columnas se apilarán verticalmente y el menú se mostrará en columna:

```css
/* ===========================
   RESPONSIVE (Móviles)
   =========================== */

@media (max-width: 768px) {

    #contenedor {
        flex-direction: column;     /* Las columnas se apilan */
        padding: 0 10px;
    }

    #menu ul {
        flex-direction: column;     /* Menú en columna */
    }

    #menu ul li a {
        text-align: center;
        padding: 12px;
        border-bottom: 1px solid #2c3e50;
    }

    #cabecera {
        flex-direction: column;
        text-align: center;
        padding: 15px;
    }

    #logo {
        margin-right: 0;
        margin-bottom: 10px;
    }

    #cabecera h1 {
        font-size: 1.5em;
    }
}
```

### ¿Qué es una media query?

Una `@media` query permite aplicar estilos **solo cuando se cumple una condición**. En este caso, cuando la pantalla tiene 768px o menos (tablets y móviles), los estilos dentro del bloque se aplican y reemplazan los anteriores.

Código completo
-----------------------------------------------------

A continuación se muestra el HTML y el CSS completo para copiar y pegar directamente.

### HTML completo (`index.html`)

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Nueva Web</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>

    <header id="cabecera">
        <img src="logo.png" alt="Logo" id="logo">
        <h1>Mi Nueva Web</h1>
    </header>

    <nav id="menu">
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </nav>

    <div id="contenedor">
        <section id="contenido">
            <h2>Bienvenidos a nuestra web</h2>
            <p>
                Este es el contenido principal de la página.
                Aquí iría la información más importante de nuestro
                sitio web.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris.
            </p>
            <img src="imagen.jpg" alt="Imagen" id="imagen-contenido">
            <p>
                Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
            </p>
        </section>

        <aside id="sidebar">
            <h3>Enlaces de interés</h3>
            <ul>
                <li><a href="#">Enlace 1</a></li>
                <li><a href="#">Enlace 2</a></li>
                <li><a href="#">Enlace 3</a></li>
            </ul>
            <h3>Últimas noticias</h3>
            <p>Noticia 1: lorem ipsum dolor sit amet...</p>
            <p>Noticia 2: consectetur adipiscing elit...</p>
            <h3>Contacto</h3>
            <p>Email: info@miweb.com</p>
            <p>Tel: 900 123 456</p>
        </aside>
    </div>

    <footer id="pie">
        <p>&copy; 2024 Mi Nueva Web. Todos los derechos reservados.</p>
    </footer>

</body>
</html>
```

### CSS completo (`estilos.css`)

```css
/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
}

/* CABECERA */
#cabecera {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    display: flex;
    align-items: center;
}

#logo {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border-radius: 50%;
    border: 3px solid white;
}

#cabecera h1 {
    font-size: 2em;
    letter-spacing: 2px;
}

/* MENÚ */
#menu {
    background-color: #34495e;
}

#menu ul {
    list-style: none;
    display: flex;
}

#menu ul li a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 15px 25px;
    transition: background-color 0.3s ease;
}

#menu ul li a:hover {
    background-color: #1abc9c;
}

/* CONTENEDOR */
#contenedor {
    display: flex;
    margin: 20px auto;
    max-width: 1200px;
    gap: 20px;
    padding: 0 20px;
}

/* CONTENIDO */
#contenido {
    flex: 3;
    background-color: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

#contenido h2 {
    color: #2c3e50;
    margin-bottom: 15px;
    border-bottom: 2px solid #1abc9c;
    padding-bottom: 10px;
}

#contenido p {
    margin-bottom: 15px;
    text-align: justify;
}

#imagen-contenido {
    width: 100%;
    border-radius: 5px;
    margin: 15px 0;
}

/* SIDEBAR */
#sidebar {
    flex: 1;
    background-color: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

#sidebar h3 {
    color: #2c3e50;
    margin-bottom: 10px;
    margin-top: 20px;
    font-size: 1.1em;
}

#sidebar h3:first-child {
    margin-top: 0;
}

#sidebar ul {
    list-style: none;
}

#sidebar ul li {
    padding: 8px 0;
    border-bottom: 1px dotted #ccc;
}

#sidebar ul li a {
    color: #34495e;
    text-decoration: none;
}

#sidebar ul li a:hover {
    color: #1abc9c;
}

/* FOOTER */
#pie {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 20px;
}

#pie p {
    font-size: 0.9em;
}

/* RESPONSIVE */
@media (max-width: 768px) {

    #contenedor {
        flex-direction: column;
        padding: 0 10px;
    }

    #menu ul {
        flex-direction: column;
    }

    #menu ul li a {
        text-align: center;
        padding: 12px;
        border-bottom: 1px solid #2c3e50;
    }

    #cabecera {
        flex-direction: column;
        text-align: center;
        padding: 15px;
    }

    #logo {
        margin-right: 0;
        margin-bottom: 10px;
    }

    #cabecera h1 {
        font-size: 1.5em;
    }
}
```

Resumen de conceptos CSS utilizados
-----------------------------------------------------

| Concepto | Propiedad CSS | Uso en la página |
|----------|---------------|------------------|
| **Flexbox** | `display: flex` | Cabecera, menú, contenedor de columnas |
| **Proporciones** | `flex: 3`, `flex: 1` | Contenido 75% / Sidebar 25% |
| **Reset** | `* { margin: 0; padding: 0 }` | Eliminar estilos por defecto |
| **Box model** | `box-sizing: border-box` | Incluir padding y borde en el width |
| **Transiciones** | `transition` | Efecto suave al pasar el ratón |
| **Sombras** | `box-shadow` | Efecto de elevación en cajas |
| **Bordes redondeados** | `border-radius` | Esquinas suaves en cajas e imágenes |
| **Media queries** | `@media (max-width: 768px)` | Adaptar a móviles |
| **Posicionamiento** | `margin: auto` | Centrar el contenedor principal |

Propiedades CSS adicionales para mejorar
-----------------------------------------------------

### Sombras de texto

```css
#cabecera h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
```

### Degradados de fondo

```css
#cabecera {
    background: linear-gradient(135deg, #2c3e50, #3498db);
}
```

### Fuentes personalizadas (Google Fonts)

Añadir en el `<head>` del HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

Y en el CSS:

```css
body {
    font-family: 'Roboto', sans-serif;
}
```

Ejercicios propuestos
-----------------------------------------------------

### Ejercicio 1

Añadir un **submenu desplegable** al menú de navegación que aparezca al pasar el ratón sobre "Servicios". El submenú debe contener los enlaces: "Diseño Web", "Desarrollo" y "SEO".

### Ejercicio 2

Convertir el layout de dos columnas en **tres columnas**: contenido principal (50%), sidebar derecha (25%) y una columna de publicidad a la izquierda (25%).

### Ejercicio 3

Añadir un **banner grande** (hero image) entre el menú y el contenedor principal que ocupe el 100% del ancho y tenga un texto superpuesto con un botón de llamada a la acción.

### Ejercicio 4

Crear una **versión oscura** (dark mode) de la página usando la media query:

```css
@media (prefers-color-scheme: dark) {
    body {
        background-color: #1a1a1a;
        color: #f0f0f0;
    }

    #contenido, #sidebar {
        background-color: #2d2d2d;
    }
}
```
