---
title: "Etiquetas HTML"
parent: "cheats"
nav_exclude: true
---

# 📝 Etiquetas HTML Esenciales

Este es un listado conciso de las **etiquetas HTML más utilizadas** para dar formato a una página web simple.

---

## 🏗️ Estructura Básica y Contenedores

| Etiqueta | Función | Ejemplo de Uso |
| :--- | :--- | :--- |
| **`<!DOCTYPE html>`** | **Declaración** del tipo de documento. Debe ser la primera línea. | N/A |
| **`<html lang="es">`** | **Contenedor** principal de todo el documento HTML. | `<html lang="es">...</html>` |
| **`<head>`** | Contiene **metadatos** (título, codificación, enlaces a CSS). | `<head><title>Mi Web</title></head>` |
| **`<body>`** | Contiene todo el **contenido visible** de la página. | `<body>Todo el contenido visible</body>` |
| **`<div>`** | **Contenedor** genérico de **bloque**, usado para agrupar y aplicar estilos (CSS). | `<div class="caja">Agrupación de contenido</div>` |
| **`<span>`** | **Contenedor** genérico **en línea**, usado para aplicar estilos a fragmentos de texto. | `<p>Texto normal y <span style="color: red">algo en rojo</span></p>` |

---

## 📜 Texto y Títulos

| Etiqueta | Función | Se ve como... |
| :--- | :--- | :--- |
| **`<h1>` a `<h6>`** | **Encabezados** o **títulos** (de mayor a menor importancia). | # Título 1 |
| **`<p>`** | Define un **párrafo** de texto. | Esto es un párrafo de texto. |
| **`<br>`** | **Salto de línea** (no necesita etiqueta de cierre). | Texto en una línea<br> y en la siguiente. |
| **`<hr>`** | **Línea horizontal** (separador temático). | Contenido superior---Contenido inferior. |
| **`<strong>`** | Aplica **énfasis importante** (se ve en **negrita** por defecto). | **¡Importante!** |
| **`<em>`** | Aplica **énfasis** (se ve en *cursiva* por defecto). | *algo a destacar* |

---

## 📑 Listas

| Etiqueta | Función | Ejemplo de Uso |
| :--- | :--- | :--- |
| **`<ul>`** | **Lista desordenada** (puntos o viñetas). | `<ul><li>Elemento 1</li></ul>` |
| **`<ol>`** | **Lista ordenada** (números o letras). | `<ol><li>Elemento A</li></ol>` |
| **`<li>`** | **Elemento** dentro de una lista (`<ul>` o `<ol>`). | `<li>Este es un elemento de lista.</li>` |

---

## 🔗 Enlaces e Imágenes

| Etiqueta | Atributos Clave | Función |
| :--- | :--- | :--- |
| **`<a href="...">`** | **`href`** (URL de destino) | **Hipervínculo** (enlace). |
| **`<img src="..." alt="...">`** | **`src`** (Ruta del archivo), **`alt`** (Texto alternativo) | **Imagen** (etiqueta autocerrada). |

---

### 🎨 Etiqueta de Enlace a CSS

* **Vincular CSS (en el `<head>`):** `<link rel="stylesheet" href="style.css">`


[Descargar en PDF](html.pdf).