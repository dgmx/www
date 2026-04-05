

# 🌐 Manual de Introducción al HTML

## 1. ¿Qué es HTML?

**HTML** (HyperText Markup Language) es el lenguaje estándar que se usa para crear páginas web. No es un lenguaje de programación, sino un **lenguaje de marcado**: sirve para dar estructura y significado al contenido.

Piensa en HTML como los cimientos de una casa: define qué hay y dónde va. Luego, CSS se encarga de la decoración y JavaScript del comportamiento.

### ¿Cómo funciona?

Un navegador (Chrome, Firefox, Safari…) lee el archivo HTML y lo convierte en la página visual que ves. El proceso es:

1. Escribes el código HTML en un archivo de texto con extensión `.html`
2. Abres ese archivo con el navegador
3. El navegador interpreta las etiquetas y muestra el resultado

### Las etiquetas HTML

HTML trabaja con **etiquetas** (tags). La mayoría tienen una apertura y un cierre:

```html
<etiqueta>  contenido  </etiqueta>

<!-- Ejemplos reales: -->
<p>Hola, soy un párrafo.</p>
<h1>Soy un título grande</h1>
```

> 💡 **¡Recuerda!** Los comentarios en HTML se escriben así: `<!-- Texto que no se muestra -->` y sirven para dejar notas en el código sin que aparezcan en la página.

### ¿Qué necesito para empezar?

- **Editor de texto:** Visual Studio Code (gratis), Notepad++, Sublime Text…
- **Navegador:** Chrome, Firefox, Edge — cualquiera funciona
- **¡Nada más!** No necesitas instalar nada especial ni conexión a internet para tus primeras pruebas.

> 🚀 **Consejo PRO:** En Visual Studio Code, instala la extensión **"Live Server"** para ver los cambios en tiempo real sin recargar el navegador manualmente.

---

## 2. Estructura Básica de un Documento HTML

Todo archivo HTML válido debe tener esta estructura mínima. Es como el esqueleto que sustenta todo lo demás:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de mi página</title>
  </head>
  <body>
    <!-- Aquí va el contenido visible -->
    <h1>¡Hola Mundo!</h1>
    <p>Mi primera página web.</p>
  </body>
</html>
```

### ¿Qué significa cada parte?

| Etiqueta / Atributo | ¿Para qué sirve? |
|---|---|
| `<!DOCTYPE html>` | Indica al navegador que usamos HTML5 (la versión actual) |
| `<html lang="es">` | Elemento raíz. `lang="es"` indica que está en español |
| `<head>` | Zona de configuración (no visible en la página) |
| `<meta charset="UTF-8">` | Permite usar tildes, ñ y caracteres especiales |
| `<meta name="viewport">` | Hace que la web se vea bien en móviles |
| `<title>` | Texto que aparece en la pestaña del navegador |
| `<body>` | Todo el contenido visible va aquí |

> 💡 **¡Pruébalo ahora!** Crea un archivo llamado `index.html`, escribe la estructura de arriba y ábrela con tu navegador. ¡Verás tu primera web funcionando!

---

## 3. Textos en HTML

HTML ofrece muchas etiquetas para dar formato y jerarquía al texto. Las más importantes son los títulos y los elementos de énfasis.

### 3.1 Títulos (Headings)

Hay 6 niveles de título, del más importante (`h1`) al menos importante (`h6`). Un buen uso de los títulos ayuda tanto a los usuarios como a los buscadores:

```html
<h1>Título principal — Solo uno por página</h1>
<h2>Título de sección</h2>
<h3>Subtítulo</h3>
<h4>Sub-subtítulo</h4>
<h5>Nivel 5</h5>
<h6>Nivel 6 — el más pequeño</h6>
```

> 🔍 **SEO:** Los buscadores como Google valoran mucho el `<h1>`. Úsalo para el tema principal y los `<h2>` para las secciones. ¡Un buen uso de títulos mejora tu posición en Google!

### 3.2 Párrafos y saltos de línea

```html
<!-- Párrafo normal -->
<p>Este es un párrafo. El navegador añade espacio automáticamente.</p>

<!-- Salto de línea dentro de un párrafo -->
<p>Primera línea<br>Segunda línea (sin espacio extra)</p>

<!-- Línea separadora horizontal -->
<hr>
```

### 3.3 Énfasis y resaltado

```html
<!-- Negrita (importancia semántica) -->
<strong>Texto muy importante</strong>

<!-- Cursiva (énfasis) -->
<em>Texto con énfasis</em>

<!-- Solo visual, sin significado semántico -->
<b>Negrita visual</b>
<i>Cursiva visual</i>

<!-- Subrayado -->
<u>Texto subrayado</u>

<!-- Tachado -->
<s>Precio antiguo: 20€</s>  Precio nuevo: 15€

<!-- Texto marcado (resaltado) -->
<mark>¡Esto es importante!</mark>

<!-- Superíndice y subíndice -->
<p>H<sub>2</sub>O   |   x<sup>2</sup></p>
```

### 3.4 Ejemplo completo de formateo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi receta favorita</title>
</head>
<body>
  <h1>Recetas de cocina</h1>
  <h2>Tortilla española</h2>
  <p>La tortilla española es uno de los platos más
     <strong>populares y deliciosos</strong> de España.</p>
  <p>Tiempo de preparación: <em>30 minutos</em></p>
  <p><mark>⭐ Plato favorito de los estudiantes</mark></p>
  <hr>
  <h3>Ingredientes para 4 personas:</h3>
</body>
</html>
```

En HTML, la importancia semántica significa que la etiqueta no solo cambia cómo se ve el texto, sino que también transmite un significado al navegador, a los buscadores y a las herramientas de accesibilidad.

Ejemplo con negrita:

- `<b>`texto`</b>` → simplemente pone el texto en negrita visualmente. No dice nada más.  
- `<strong>`texto`</strong>` → pone el texto en negrita y además le dice al navegador "este contenido es importante".   
Un lector de pantalla para personas ciegas, por ejemplo, puede leer ese texto con más énfasis de voz.

Lo mismo pasa con la cursiva:

- `<i>`texto`</i>` → solo es cursiva visual.
- `<em>`texto`</em>` → cursiva con énfasis semántico, indica que esa palabra merece énfasis en la lectura.

En la práctica, para un principiante el resultado visual es idéntico. Pero la buena costumbre es usar `<strong>` y `<em>` porque hacen que tu código sea más correcto, accesible y mejor valorado por Google.

Otras etiquetas especializadas:

| Etiqueta | Para qué sirve | Ejemplo |
|---|---|---|
| `<dfn>` | Define un término por primera vez | `<dfn>HTML</dfn> es un lenguaje de marcado` |
| `<blockquote>` | Cita larga de otra fuente (indentada) | `<blockquote cite="url">Texto citado</blockquote>` |
| `<pre>` | Texto preformateado (respeta espacios y saltos) | `<pre>  hola\n  mundo</pre>` |
| `<cite>` | Título de una obra (libro, película, canción…) | `Mi libro favorito es <cite>El Quijote</cite>` |
| `<del>` | Texto eliminado/tachado (semántico) | `Precio: <del>20€</del> 15€` |
| `<ins>` | Texto insertado/añadido (suele aparecer subrayado) | `<ins>Nuevo: abierto los domingos</ins>` |
| `<sup>` | Superíndice (exponentes, notas al pie) | `x<sup>2</sup> + y<sup>2</sup>` |
| `<sub>` | Subíndice (fórmulas químicas) | `H<sub>2</sub>O` |
| `<code>` | Fragmento de código inline | `Usa la etiqueta <code>&lt;p&gt;</code>` |
| `<kbd>` | Tecla o combinación de teclado | `Pulsa <kbd>Ctrl</kbd> + <kbd>C</kbd>` |

## Ejemplo combinado

```html
<p>
  <!-- Definición de término -->
  <dfn>CSS</dfn> significa Cascading Style Sheets.
</p>

<!-- Cita larga -->
<blockquote cite="https://developer.mozilla.org">
  CSS describe cómo deben mostrarse los elementos HTML en pantalla.
</blockquote>
<p>Fuente: <cite>MDN Web Docs</cite></p>

<!-- Código preformateado -->
<pre>
h1 {
  color: red;
  font-size: 24px;
}
</pre>

<!-- Cambios en un documento -->
<p>Horario: <del>9:00 - 14:00</del> <ins>8:00 - 15:00</ins></p>

<!-- Matemáticas y química -->
<p>Área del círculo: π·r<sup>2</sup></p>
<p>Agua: H<sub>2</sub>O &nbsp;|&nbsp; Sal: NaCl</p>

<!-- Código e instrucciones de teclado -->
<p>Para comentar en CSS usa <code>/* comentario */</code>.</p>
<p>Para guardar pulsa <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>
```

> **Diferencias clave:** `<del>` e `<ins>` tienen significado semántico de cambio en un documento (como control de versiones), mientras que `<s>` es simplemente visual. Lo mismo con `<code>` vs `<kbd>`: `<code>` es para código fuente y `<kbd>` específicamente para lo que el usuario escribe o teclea.

## 4. Listas

Las listas son esenciales para organizar información. HTML ofrece tres tipos principales:

### 4.1 Lista no ordenada (con viñetas)

Se usa cuando el **orden no importa**. Se crea con `<ul>` (unordered list) y cada elemento con `<li>`:

```html
<ul>
  <li>Manzana</li>
  <li>Pera</li>
  <li>Naranja</li>
</ul>
```

**Resultado en el navegador:**
- Manzana
- Pera
- Naranja

### 4.2 Lista ordenada (numerada)

Se usa cuando el **orden sí importa** (pasos, clasificaciones…). Se crea con `<ol>`:

```html
<ol>
  <li>Precalentar el horno a 180°C</li>
  <li>Mezclar los ingredientes</li>
  <li>Hornear durante 30 minutos</li>
</ol>
```

**Resultado en el navegador:**
1. Precalentar el horno a 180°C
2. Mezclar los ingredientes
3. Hornear durante 30 minutos

### 4.3 Lista de definición

Para glosarios o pares término-descripción. Se usa `<dl>`, `<dt>` (término) y `<dd>` (descripción):

```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje para estructurar páginas web</dd>

  <dt>CSS</dt>
  <dd>Lenguaje para dar estilo y diseño a las páginas</dd>

  <dt>JavaScript</dt>
  <dd>Lenguaje para añadir interactividad</dd>
</dl>
```

### 4.4 Listas anidadas

Puedes crear sublistas poniendo una lista dentro de un elemento de otra:

```html
<ul>
  <li>Frutas
    <ul>
      <li>Manzana</li>
      <li>Pera</li>
    </ul>
  </li>
  <li>Verduras
    <ul>
      <li>Zanahoria</li>
      <li>Brócoli</li>
    </ul>
  </li>
</ul>
```

> 🎯 **¡Actividad práctica!** Crea una lista con tus 5 asignaturas favoritas (ordenada) y dentro de cada una, una sublista con los temas que más te gustan.

---

## 5. Imágenes

La etiqueta `<img>` inserta imágenes en tu página. Es una etiqueta **auto-cerrada** (no tiene cierre separado):

```html
<!-- Sintaxis básica -->
<img src="ruta/imagen.jpg" alt="Descripción de la imagen">

<!-- Con ancho y alto definidos -->
<img src="foto.png" alt="Mi foto" width="300" height="200">

<!-- Imagen de internet (URL absoluta) -->
<img src="https://www.ejemplo.com/logo.png" alt="Logo">
```

### 5.1 Atributos de la etiqueta img

| Atributo | Descripción |
|---|---|
| `src` | Ruta o URL de la imagen **(obligatorio)** |
| `alt` | Texto alternativo si la imagen no carga **(obligatorio por accesibilidad)** |
| `width` | Ancho en píxeles o porcentaje |
| `height` | Alto en píxeles |
| `title` | Tooltip que aparece al pasar el ratón por encima |
| `loading="lazy"` | Carga la imagen solo cuando el usuario llega a ella (mejora velocidad) |

### 5.2 Formatos de imagen recomendados

| Formato | Cuándo usarlo |
|---|---|
| `.jpg` / `.jpeg` | Fotografías con muchos colores |
| `.png` | Imágenes con fondo transparente o con texto |
| `.gif` | Animaciones simples |
| `.svg` | Iconos y logos (escalan sin perder calidad) |
| `.webp` | Formato moderno: buena calidad y tamaño reducido |

### 5.3 Imágenes con enlace

Puedes convertir una imagen en un enlace envolviéndola con la etiqueta `<a>`:

```html
<!-- Imagen que al hacer clic lleva a otra página -->
<a href="https://www.google.com">
  <img src="logo-google.png" alt="Ir a Google">
</a>
```

### 5.4 Figura con pie de foto

La etiqueta `<figure>` con `<figcaption>` es la forma semántica correcta de añadir un pie de foto:

```html
<figure>
  <img src="playa.jpg" alt="Atardecer en la playa" width="500">
  <figcaption>Atardecer en la playa de la Barceloneta, Barcelona</figcaption>
</figure>
```

> ♿ **Accesibilidad:** El atributo `alt` es fundamental: los lectores de pantalla para personas con discapacidad visual lo usan para describir la imagen. ¡**Nunca lo omitas!**

---

## 6. Estructura de Carpetas y Enlaces

### 6.1 Cómo organizar los archivos de tu web

Una web está formada por muchos archivos. Organizarlos bien desde el principio es clave para no perderse:

```
mi-web/
│
├── index.html          ← Página de inicio (nombre obligatorio)
├── sobre-mi.html
├── contacto.html
│
├── css/
│   └── estilos.css
│
├── js/
│   └── script.js
│
└── img/
    ├── logo.png
    ├── foto-portada.jpg
    └── iconos/
        └── icono-menu.svg
```

> 💡 **Convención importante:** El archivo `index.html` es especial: los servidores web lo abren automáticamente cuando alguien visita tu carpeta. ¡Siempre llama así a tu página principal!

### 6.2 La etiqueta `<a>` — Crear enlaces

La etiqueta `<a>` (anchor = ancla) crea hipervínculos. Es una de las etiquetas más importantes de HTML:

```html
<!-- Sintaxis básica -->
<a href="URL_o_ruta">Texto del enlace</a>

<!-- Ejemplos -->
<a href="https://www.google.com">Ir a Google</a>
<a href="contacto.html">Página de contacto</a>
<a href="#seccion-preguntas">Ver preguntas frecuentes</a>
```

### 6.3 Rutas relativas vs absolutas

Esta es una de las partes más importantes y confusas para los principiantes. ¡Presta atención!

#### Rutas absolutas

**Incluyen la dirección completa** desde el inicio (protocolo + dominio + ruta). Se usan para recursos externos:

```html
<!-- Siempre funcionan desde cualquier parte -->
<a href="https://www.wikipedia.org">Wikipedia</a>
<img src="https://cdn.ejemplo.com/logo.png" alt="Logo">
```

#### Rutas relativas

**Se calculan desde la ubicación del archivo actual**. Son las que usamos para nuestros propios archivos:

```html
<!-- Si estamos en: mi-web/index.html -->

<!-- Mismo nivel -->
<a href="contacto.html">Contacto</a>

<!-- Entrar en una carpeta -->
<img src="img/foto.jpg" alt="Foto">
<a href="pages/servicios.html">Servicios</a>

<!-- Subir un nivel con ../ -->
<!-- Si estamos en: mi-web/pages/servicios.html -->
<a href="../index.html">Volver al inicio</a>
<img src="../img/logo.png" alt="Logo">

<!-- Subir dos niveles -->
<a href="../../otra-carpeta/archivo.html">Enlace</a>
```

> 🏢 **Truco para entender `../`:** Imagina que `../` es como subir un piso en un edificio. Si estás en el 3er piso (`pages/`), con `../` subes al 2º (`mi-web/`) y desde ahí puedes ir a cualquier habitación.

### 6.4 Atributos del enlace `<a>`

| Atributo | Descripción y ejemplo |
|---|---|
| `href` | Destino del enlace (obligatorio) |
| `target="_blank"` | Abre en una pestaña nueva |
| `target="_self"` | Abre en la misma pestaña (por defecto) |
| `title` | Tooltip al pasar el ratón |
| `href="mailto:"` | Abre el cliente de email: `<a href="mailto:info@web.com">` |
| `href="tel:"` | Llama en móvil: `<a href="tel:+34600000000">` |
| `href="#id"` | Salta a un elemento de la misma página (ancla interna) |

### 6.5 Anclas internas (ir a secciones de la misma página)

```html
<!-- 1. Dar un id al elemento destino -->
<h2 id="contacto">Formulario de contacto</h2>

<!-- 2. Enlazar con # + el id -->
<a href="#contacto">Ir al formulario</a>

<!-- Volver arriba -->
<a href="#">↑ Volver al inicio</a>
```

---

## 7. Tablas

Las tablas sirven para mostrar datos organizados en filas y columnas. Son perfectas para horarios, comparativas, precios, etc.

> ⚠️ **¡Atención!** Las tablas **NO deben usarse** para maquetar (diseñar el layout) una página. Para eso existe CSS. Úsalas solo para datos tabulares.

### 7.1 Estructura básica de una tabla

| Etiqueta | Significado |
|---|---|
| `<table>` | Contenedor principal de la tabla |
| `<thead>` | Cabecera de la tabla (opcional pero recomendado) |
| `<tbody>` | Cuerpo de la tabla con los datos |
| `<tfoot>` | Pie de tabla (totales, resumen…) |
| `<tr>` | Table Row — una fila |
| `<th>` | Table Header — celda de cabecera (negrita y centrada) |
| `<td>` | Table Data — celda de datos normal |

### 7.2 Ejemplo: Horario de clases

```html
<table border="1">
  <thead>
    <tr>
      <th>Hora</th>
      <th>Lunes</th>
      <th>Martes</th>
      <th>Miércoles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>8:00 - 9:00</td>
      <td>Matemáticas</td>
      <td>Historia</td>
      <td>Inglés</td>
    </tr>
    <tr>
      <td>9:00 - 10:00</td>
      <td>Lengua</td>
      <td>Física</td>
      <td>Arte</td>
    </tr>
    <tr>
      <td>10:00 - 10:30</td>
      <td colspan="3">🍎 RECREO</td>
    </tr>
  </tbody>
</table>
```

### 7.3 Fusionar celdas (colspan y rowspan)

Puedes hacer que una celda ocupe varias columnas o varias filas:

```html
<!-- colspan: ocupa varias columnas -->
<td colspan="3">Esta celda ocupa 3 columnas</td>

<!-- rowspan: ocupa varias filas -->
<td rowspan="2">Esta celda ocupa 2 filas</td>

<!-- Ejemplo práctico: tabla de precios -->
<table border="1">
  <tr>
    <th colspan="2">Plan Premium</th>
  </tr>
  <tr>
    <td>Mensual</td><td>9,99 €</td>
  </tr>
  <tr>
    <td>Anual</td><td>89,99 €</td>
  </tr>
</table>
```

### 7.4 Caption (título de la tabla)

```html
<table>
  <caption>Resultados del examen de Matemáticas</caption>
  <thead>
    <tr><th>Alumno</th><th>Nota</th><th>Calificación</th></tr>
  </thead>
  <tbody>
    <tr><td>Ana García</td><td>9.5</td><td>Sobresaliente</td></tr>
    <tr><td>Luis Pérez</td><td>7.2</td><td>Notable</td></tr>
    <tr><td>María López</td><td>5.8</td><td>Aprobado</td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="3">Media de la clase: 7.5</td></tr>
  </tfoot>
</table>
```

---

## 8. Formularios

Los formularios permiten a los usuarios enviar información al servidor: iniciar sesión, registrarse, buscar, hacer pedidos… Son fundamentales en cualquier web interactiva.

### 8.1 Estructura básica

```html
<form action="/enviar.php" method="POST">
  <!-- Los campos van aquí -->
  <button type="submit">Enviar</button>
</form>
```

| Atributo de `<form>` | Descripción |
|---|---|
| `action` | URL donde se envían los datos (puede ser vacío para pruebas) |
| `method="GET"` | Envía los datos en la URL (visible). Para búsquedas |
| `method="POST"` | Envía los datos ocultos en el cuerpo. Para formularios privados |

### 8.2 La etiqueta `<input>` y sus tipos

La etiqueta `<input>` es la más versátil. Su comportamiento cambia según el atributo `type`:

```html
<!-- Texto simple -->
<input type="text" name="nombre" placeholder="Tu nombre">

<!-- Contraseña (oculta los caracteres) -->
<input type="password" name="clave" placeholder="Contraseña">

<!-- Correo electrónico (valida el formato) -->
<input type="email" name="correo" placeholder="correo@ejemplo.com">

<!-- Número -->
<input type="number" name="edad" min="14" max="99">

<!-- Fecha -->
<input type="date" name="nacimiento">

<!-- Teléfono -->
<input type="tel" name="telefono" placeholder="600 000 000">

<!-- Color (abre selector de color) -->
<input type="color" name="favorito" value="#E8500A">

<!-- Rango / slider -->
<input type="range" name="volumen" min="0" max="100" value="50">

<!-- Casilla de verificación -->
<input type="checkbox" name="acepto" id="acepto">

<!-- Botón de radio (solo se puede elegir uno del grupo) -->
<input type="radio" name="genero" value="m"> Masculino
<input type="radio" name="genero" value="f"> Femenino

<!-- Archivo -->
<input type="file" name="foto" accept="image/*">
```

### 8.3 Etiquetas de formulario esenciales

```html
<!-- <label>: etiqueta para accesibilidad (vincula con el input) -->
<label for="nombre">Nombre completo:</label>
<input type="text" id="nombre" name="nombre">

<!-- <textarea>: área de texto multilínea -->
<textarea name="mensaje" rows="5" cols="40"
          placeholder="Escribe tu mensaje..."></textarea>

<!-- <select>: menú desplegable -->
<select name="curso">
  <option value="">-- Selecciona tu curso --</option>
  <option value="1bto">1º Bachillerato</option>
  <option value="2bto" selected>2º Bachillerato</option>
</select>

<!-- <fieldset> y <legend>: agrupar campos relacionados -->
<fieldset>
  <legend>Datos personales</legend>
  <label for="nom">Nombre:</label>
  <input type="text" id="nom" name="nom">
</fieldset>
```

### 8.4 Atributos importantes de los inputs

| Atributo | Qué hace |
|---|---|
| `required` | El campo es obligatorio (no se puede enviar vacío) |
| `placeholder` | Texto de ayuda que desaparece al escribir |
| `value` | Valor por defecto que ya aparece escrito |
| `disabled` | Desactiva el campo (no se puede editar ni enviar) |
| `readonly` | Se puede ver pero no modificar |
| `min` / `max` | Valor mínimo y máximo para números y fechas |
| `maxlength` | Número máximo de caracteres permitidos |
| `pattern` | Expresión regular para validar el formato |
| `autofocus` | El cursor aparece en este campo al cargar la página |

### 8.5 Formulario de contacto completo

```html
<form action="#" method="POST">
  <fieldset>
    <legend>📬 Formulario de Contacto</legend>

    <label for="nombre">Nombre completo: *</label><br>
    <input type="text" id="nombre" name="nombre"
           placeholder="Ana García" required><br><br>

    <label for="email">Correo electrónico: *</label><br>
    <input type="email" id="email" name="email"
           placeholder="ana@ejemplo.com" required><br><br>

    <label for="curso">Curso:</label><br>
    <select id="curso" name="curso">
      <option value="1bto">1º Bachillerato</option>
      <option value="2bto">2º Bachillerato</option>
    </select><br><br>

    <label for="asunto">Asunto: *</label><br>
    <input type="text" id="asunto" name="asunto" required><br><br>

    <label for="mensaje">Mensaje: *</label><br>
    <textarea id="mensaje" name="mensaje" rows="5"
              placeholder="Escribe tu consulta..."
              required></textarea><br><br>

    <input type="checkbox" id="acepto" name="acepto" required>
    <label for="acepto">Acepto la política de privacidad</label><br><br>

    <button type="submit">✉️ Enviar mensaje</button>
    <button type="reset">🗑️ Borrar</button>
  </fieldset>
</form>
```

---

## 9. Proyecto Final Integrador

¡Ha llegado el momento de poner en práctica todo lo aprendido! Vas a crear una **web personal completa** con varias páginas enlazadas.

### 9.1 Descripción del proyecto

Crea una web personal con la siguiente estructura de archivos:

```
mi-web-personal/
├── index.html          ← Página de inicio
├── sobre-mi.html       ← Quién soy
├── hobbies.html        ← Mis aficiones
├── contacto.html       ← Formulario de contacto
├── img/
│   ├── foto-perfil.jpg
│   └── fondo.jpg
└── css/
    └── estilos.css
```

### 9.2 Requisitos mínimos

#### index.html (Inicio)
- Estructura HTML5 completa con `<!DOCTYPE html>`
- Menú de navegación con enlaces a todas las páginas
- Al menos un título `<h1>`, varios `<h2>` y `<h3>`
- Una imagen con atributo `alt` descriptivo
- Un párrafo de bienvenida con texto formateado

#### sobre-mi.html
- Tabla con tu información: nombre, curso, ciudad, aficiones
- Lista ordenada con tus 5 asignaturas favoritas
- Lista no ordenada con tus habilidades

#### hobbies.html
- Al menos 3 hobbies, cada uno con imagen y descripción
- Usa `<figure>` y `<figcaption>` para las imágenes
- Crea una tabla comparando tus hobbies

#### contacto.html
- Formulario con: nombre, email, asunto, mensaje y botón enviar
- Todos los campos con `<label>`
- Campos obligatorios con `required`

### 9.3 Plantilla de index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web de [Tu nombre]</title>
</head>
<body>

  <!-- CABECERA -->
  <header>
    <h1>Bienvenido a mi web personal</h1>
    <p>¡Hola! Soy [tu nombre] y esto es mi rincón en internet</p>
  </header>

  <!-- NAVEGACIÓN -->
  <nav>
    <a href="index.html">🏠 Inicio</a> |
    <a href="sobre-mi.html">👤 Sobre mí</a> |
    <a href="hobbies.html">⭐ Hobbies</a> |
    <a href="contacto.html">📬 Contacto</a>
  </nav>

  <!-- CONTENIDO PRINCIPAL -->
  <main>
    <h2>Sobre esta web</h2>
    <p>En esta web encontrarás información sobre mí,
       mis <strong>aficiones</strong> y cómo
       <em>contactarme</em>.</p>

    <img src="img/foto-perfil.jpg"
         alt="Mi foto de perfil"
         width="200">
  </main>

  <!-- PIE DE PÁGINA -->
  <footer>
    <p>&copy; 2025 [Tu nombre] — Creado con HTML</p>
  </footer>

</body>
</html>
```

### 9.4 Criterios de evaluación

| Criterio | Puntuación |
|---|---|
| Estructura HTML5 correcta en todos los archivos | 2 puntos |
| Formateo de textos variado y semántico | 1.5 puntos |
| Listas y tablas bien formadas | 1.5 puntos |
| Imágenes con alt, figure y figcaption | 1.5 puntos |
| Rutas relativas y navegación funcional | 1.5 puntos |
| Formulario completo con validación | 1.5 puntos |
| Creatividad y contenido personal | 1 punto |

---

> 🚀 **¡Mucho ánimo y a programar!**

---

*Manual de HTML — Diseño Web*

- [Chuleta HTML PDF](html.pdf)
- [Descarga este documento en PDF](Manual_HTML.pdf)