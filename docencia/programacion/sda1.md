# Situaciones de Aprendizaje

## Programación y Computación (2º Bachillerato)

**Enfoque LOMLOE**
+ Lenguaje: Python 
+ Hilo conductor: "FinanzApp", una aplicación de gestión financiera personal**

Este documento recoge **una situación de aprendizaje (SdA1)**, correspondiente a la primera unidad de la materia:

| SdA | Unidad | Saberes básicos | Duración | Producto final |
|-----|--------|-----------------|----------|----------------|
| **SdA 1 — "El motor de FinanzApp"** | Unidad 1 · A.1 Lenguajes de programación | A.1.1, A.1.2, A.1.3 | 12 h (12 sesiones) | Motor en Python (programación estructurada) que registra, clasifica y guarda movimientos financieros |



---

## Índice

1. Marco curricular común a las dos SdA
2. SdA 1 — El motor de FinanzApp (Unidad A.1)
3. Anexos: rúbricas, listas de cotejo y plantillas

---

# 1. Marco curricular común

## 1.1. Datos identificativos

- **Etapa:** Bachillerato
- **Curso:** 2º de Bachillerato
- **Materia:** Programación y Computación (PRYC)
- **Marco normativo:** RD 243/2022 (enseñanzas mínimas de Bachillerato) y concreción autonómica correspondiente
- **Carácter:** Materia de modalidad (Ciencias y Tecnología / opción afín)

## 1.2. Competencias específicas trabajadas

- **PRYC.2.1.** Desarrollar la capacidad de abstracción, producir programas informáticos funcionales e integrarse en un equipo de desarrollo de software que sea capaz de afrontar proyectos acordes al nivel de desarrollo del alumnado, fomentando sus habilidades sociales y aplicando la creatividad.
- **PRYC.2.2.** Recopilar y procesar datos que ayuden en la resolución de un problema, analizando cómo su almacenamiento, transmisión y presentación se benefician de la manipulación computacional.

> La SdA 1 incide especialmente en **PRYC.2.1** (creación de programas funcionales) y parte de **PRYC.2.2** (procesar y almacenar datos). 

## 1.3. Criterios de evaluación

| Código | Criterio de evaluación | 
|--------|------------------------|
| PRYC.2.1.1 | Transformar ideas en aplicaciones de forma creativa, descomponiendo problemas complejos en otros más simples e ideando modelos abstractos de los mismos y algoritmos que permitan implementar una solución computacional. | 
| PRYC.2.1.2 | Escribir programas, convenientemente estructurados y comentados, que recogen y procesan la información procedente de diferentes fuentes y generan la correspondiente salida. | 
| PRYC.2.2.1 | Explotar las posibilidades del almacenamiento de datos para la recogida y procesamiento de información, buscando patrones y conexiones que faciliten la resolución de problemas. | 

**Método de calificación:** media aritmética de los criterios implicados.

## 1.4. Saberes básicos

**A. Programación**
- *A.1. Lenguajes de programación*
  - A.1.1. Tipos de lenguajes. Estructura de un programa informático y elementos básicos del lenguaje. Tipos básicos de datos. Constantes y variables. Operadores y expresiones. Comentarios.
  - A.1.2. Estructuras de control condicionales e iterativas. Estructuras de datos.
  - A.1.3. Funciones y reutilización de código. Manipulación de archivos.

- *Saberes de proceso* (transversales): enfoque *top-down* y fragmentación de problemas; pseudocódigo y diagramas de flujo; desarrollo iterativo; entornos de desarrollo integrado (IDE); análisis, diseño, programación y pruebas; depuración; control de versiones; trabajo en equipo.

## 1.5. Vinculación con competencias clave y descriptores operativos

| Competencia clave | Descriptores operativos | Cómo se movilizan |
|-------------------|-------------------------|-------------------|
| STEM | STEM1, STEM2, STEM3, STEM4, STEM5 | Descomposición de problemas, modelización, algoritmos, resolución de problemas reales |
| CD (digital) | CD1, CD2, CD3, CD4, CD5 | Uso del IDE, control de versiones, depuración, seguridad y buenas prácticas |
| CCL | CCL1, CCL2, CCL5 | Comentarios, documentación, memoria técnica, exposición oral |
| CPSAA | CPSAA1, CPSAA3, CPSAA4, CPSAA5 | Autorregulación, trabajo cooperativo, gestión del error y de la frustración |
| CE (emprendedora) | CE1, CE2, CE3 | Creatividad, iniciativa, ideación de producto con valor real |
| CC (ciudadana) | CC1, CC3 | Uso crítico y responsable de la tecnología; datos y privacidad |
| CCEC | CCEC4 | Cuidado estético de la interfaz y de la presentación del producto |

## 1.6. Objetivos didácticos comunes

- OA1. Diseñar soluciones computacionales a problemas reales aplicando el pensamiento computacional.
- OA2. Utilizar el entorno de desarrollo, el depurador y el control de versiones con autonomía.
- OA3. Escribir código legible, estructurado y comentado, siguiendo convenciones de estilo (PEP 8).
- OA4. Trabajar de forma cooperativa, asumiendo roles y comunicando el resultado del trabajo técnico.

## 1.7. Metodología

- **Aprendizaje Basado en Proyectos (ABP):** cada SdA culmina en un producto funcional evaluable.
- **Pensamiento computacional:** modelado, descomposición y abstracción guiados.
- **Programación por parejas (*pair programming*):** roles de conductor y copiloto, rotando.
- **Depuración guiada y aprendizaje del error:** el error como fuente de aprendizaje.
- **Aula invertida puntual:** vídeos breves de sintaxis como trabajo previo.
- **Instrucción directa** para sintaxis nueva, combinada con **práctica autónoma**.

## 1.8. Evaluación común

- **Formativa y continua**, con retroalimentación en cada práctica.
- **Tres agentes:** heteroevaluación (docente), coevaluación (entre iguales) y autoevaluación.
- **Instrumentos:** rúbricas, listas de cotejo, portafolio de código (repositorio Git), pruebas prácticas cortas, diario de aprendizaje y exposición oral.

## 1.9. Principios DUA y atención a la diversidad (comunes)

- **Representación:** material en múltiples formatos (texto, vídeo, esquemas, ejemplos resueltos).
- **Acción y expresión:** el alumnado puede demostrar lo aprendido mediante código, diagrama o explicación oral.
- **Implicación:** reto con contexto real, elección de temática dentro de FinanzApp, niveles de dificultad.
- **Medidas:** plantillas de código para niveles de apoyo, retos de ampliación para nivel avanzado, tiempos flexibles y tutoría entre iguales.

---

# 2. Situación de Aprendizaje 1 — "El motor de FinanzApp"

## 2.1. Datos e identificación

- **Título:** El motor de FinanzApp
- **Unidad:** A.1. Lenguajes de programación
- **Duración:** 12 horas (12 sesiones de 60 min)
- **Área/agrupamiento:** aula de informática; individual, parejas y grupos de 4

## 2.2. Contexto y justificación

El alumnado de 2º de Bachillerato está próximo a la vida adulta y a la gestión de sus propios recursos (matrícula, transporte, ocio). A partir de una situación cotidiana —querer saber *en qué se gasta el dinero*—, diseñarán el **motor lógico de una aplicación de finanzas personales**. El reto permite trabajar con naturalidad todos los elementos básicos del lenguaje: variables, tipos, operadores, control de flujo, estructuras de datos, funciones y archivos.

Se plantea como **primera etapa** de un proyecto mayor que continuará en la SdA 2 con la orientación a objetos, de modo que el código que produzcan aquí será la materia prima de la siguiente situación.

## 2.3. Reto / pregunta motriz

> **¿Podemos crear un programa en Python que registre nuestros ingresos y gastos, los clasifique por categorías y guarde los datos para consultarlos otro día?**

## 2.4. Producto final

Un programa de consola modular `finanzapp.py` que:
1. Registra ingresos y gastos (fecha, concepto, importe, categoría).
2. Clasifica y muestra el saldo y los totales por categoría.
3. Persiste los datos en un archivo (CSV o JSON) y los recupera al iniciar.
4. Está organizado en **funciones**, comentado y estructurado.
5. Se acompaña de un **diagrama de flujo** del flujo principal y un **breve manual de uso**.

## 2.5. Concreción curricular (criterios ↔ saberes ↔ sesiones)

| Criterio | Saberes (A.1) | Sesiones |
|----------|---------------|----------|
| PRYC.2.1.1 | Pseudocódigo, diagramas de flujo, top-down | 0, 1, 2, 11 |
| PRYC.2.1.2 | A.1.1, A.1.2, A.1.3 | 1–10 |
| PRYC.2.2.1 | A.1.3 (manipulación de archivos) | 9, 10, 11 |

## 2.6. Secuenciación didáctica (12 sesiones)

### FASE INICIAL (Sesión 0 · 1 h)

**Sesión 0 — "Planteamos el reto"**
- *Actividad de arranque (motivación):* ¿cuánto gastamos al mes? Estimación rápida y puesta en común.
- Presentación del producto final, del contrato de trabajo y de la rúbrica de evaluación.
- **Evaluación inicial (diagnóstico):** cuestionario breve individual de ideas previas (qué es un programa, qué es una variable, qué lenguajes conocen).
- Conceptualización: **tipos de lenguajes** (compilados/interpretados, alto/bajo nivel) y estructura de un programa.
- Configuración del entorno: instalar VS Code + Python, primer `print("Hola, FinanzApp")` y primer repositorio Git.
- *Agrupamiento:* gran grupo + individual. *DUA:* cuestionario con opción oral o escrita.

### FASE DE DESARROLLO (Sesiones 1–10)

**Sesión 1 — Elementos básicos del lenguaje (A.1.1)**
- Tipos básicos de datos (`int`, `float`, `str`, `bool`), constantes y variables, `input()`, `print()`.
- Operadores aritméticos, de comparación y lógicos; expresiones y f-strings.
- **Comentarios** y estilo PEP 8.
- *Práctica:* "Ficha de bienvenida": pedir nombre y saldo inicial y mostrarlos formateados.
- *Producto:* `01_basicos.py`.

**Sesión 2 — Operadores y expresiones aplicados (A.1.1)**
- Cálculo de porcentajes, redondeos, conversión de tipos, errores comunes.
- *Práctica:* "Registro de un movimiento" (concepto, importe, cálculo del IVA/descuento).
- *Producto:* `02_expresiones.py`.

**Sesión 3 — Estructuras de control condicionales (A.1.2)**
- `if / elif / else`, condiciones anidadas, operador ternario.
- *Práctica:* clasificar un movimiento según signo (ingreso/gasto/cero) y avisar de saldo negativo.
- *Producto:* `03_condicionales.py`.

**Sesión 4 — Estructuras de control iterativas (A.1.2)**
- Bucles `while` y `for`, `range()`, `break`/`continue`.
- *Práctica:* menú repetitivo que permite introducir varios movimientos hasta salir.
- *Producto:* `04_bucles.py`.

**Sesión 5 — Práctica integradora "mini-retos"**
- Retos progresivos que combinan condicionales y bucles (validación de datos, menús).
- *Evaluación formativa:* lista de cotejo de estilo y funcionamiento + retroalimentación individual.
- *Producto:* `05_retos.py`.

**Sesión 6 — Estructuras de datos I (A.1.2)**
- Listas y tuplas: creación, indexación, métodos, mutabilidad.
- *Práctica:* almacenar una lista de importes y calcular total, media, máximo y mínimo.
- *Producto:* `06_listas.py`.

**Sesión 7 — Estructuras de datos II (A.1.2)**
- Diccionarios y conjuntos. Estructuras anidadas (lista de diccionarios).
- *Práctica:* cada movimiento como diccionario `{fecha, concepto, importe, categoria}`; recuento por categoría.
- *Producto:* `07_diccionarios.py`.

**Sesión 8 — Funciones y reutilización de código (A.1.3)**
- Definición, parámetros, valor de retorno, ámbito y paso por referencia.
- *Práctica:* refactorizar la lógica de movimientos en funciones (`añadir_movimiento`, `calcular_saldo`…).
- *Producto:* `08_funciones.py`.

**Sesión 9 — Funciones II y módulos (A.1.3)**
- Importar la biblioteca estándar (`datetime`, `math`, `random`). Modularización en varios archivos.
- Introducción a la **lectura/escritura de archivos**: `open()`, modos, `with`.
- *Producto:* `09_modulos.py`.

**Sesión 10 — Manipulación de archivos (A.1.3)**
- Persistencia en **CSV** (módulo `csv`) y en **JSON** (módulo `json`). Lectura, escritura y manejo de errores (`try/except`).
- *Práctica:* guardar y cargar los movimientos al iniciar/cerrar el programa.
- *Producto:* `movimientos.csv` y `10_archivos.py`.

> **Sesión 11 — Integración del producto final** *(fase final)*
- Ensamblado de `finanzapp.py`: menú, lógica en funciones y persistencia en archivo.
- Elaboración del **diagrama de flujo** del flujo principal y del manual de uso.
- *Agrupamiento:* por parejas. *DUA:* se admite apoyo con plantilla de esqueleto de código.

> **Sesión 12 — Socialización y evaluación** *(fase final)*
- Presentación/defensa breve (3 min) del programa funcionando.
- **Coevaluación** entre parejas con rúbrica; **autoevaluación** con diario de aprendizaje; cierre del docente.
- *Producto:* repositorio Git con el motor + memoria breve.

## 2.7. Evaluación de la SdA 1

| Criterio | Instrumento | Momento | Peso |
|----------|-------------|---------|:----:|
| PRYC.2.1.1 | Diagrama de flujo + diseño top-down | S0, S11 | 20 % |
| PRYC.2.1.2 | Prácticas de sesión + rúbrica del producto final | Continuo | 55 % |
| PRYC.2.2.1 | Rúbrica de persistencia (archivos) | S10–S11 | 25 % |

- **Autoevaluación:** diario de aprendizaje (S12).
- **Coevaluación:** rúbrica entre parejas (S12).
- **Prueba práctica corta** opcional (S10) para consolidar sintaxis.

## 2.8. Materiales y recursos

- Aula de informática con Python 3.x, VS Code, acceso a Git/GitHub.
- Repositorio plantilla con `README.md` y estructura de carpetas.
- Guiones de prácticas y **recursos de apoyo** (chuletas de sintaxis, plantillas de código).
- Archivos de ejemplo `movimientos_ejemplo.csv`.

## 2.9. Evaluación de la práctica docente

- Cuestionario final al alumnado (claridad, ritmo, utilidad, dificultad percibida).
- Análisis de resultados por criterio y ajuste de tiempos; revisión de las plantillas de apoyo y retos de ampliación.

---

# 3. Anexos

## Anexo A · Rúbrica general de producto de código (SdA )

| Criterio | 4 — Excelente | 3 — Adecuado | 2 — En desarrollo | 1 — Insuficiente |
|----------|---------------|--------------|-------------------|------------------|
| *Funcionalidad* | Hace todo lo pedido y gestiona casos límite | Hace lo esencial con algún fallo menor | Funciona parcialmente | No funciona o falla en lo básico |
| *Estructura y estilo* | Código limpio, modular, PEP 8 y comentado | Generalmente ordenado y legible | Estructura mejorable, poco comentado | Código desordenado o sin comentarios |
| *Persistencia* (archivos) | Guarda y recupera sin pérdida de datos y con manejo de errores | Guarda y recupera correctamente | Persistencia parcial | No persiste o corrompe datos |
| *Documentación* | Memoria/diagrama completos y claros | Documentación suficiente | Documentación escasa | Sin documentación |

## Anexo B · Lista de cotejo — entrega de repositorio

- [ ] El repositorio tiene `README.md` con instrucciones de uso.
- [ ] Los *commits* son frecuentes y descriptivos.
- [ ] El código sigue un estilo homogéneo (PEP 8).
- [ ] Existen comentarios/docstrings en clases y funciones principales.
- [ ] Se incluyen datos de ejemplo y se documenta el formato de archivo.
- [ ] El programa arranca desde cero sin errores.

## Anexo D · Diario de aprendizaje (autoevaluación)

1. ¿Qué he aprendido en esta situación de aprendizaje?
2. ¿Qué parte me ha resultado más difícil y cómo la he resuelto?
3. ¿Cómo he colaborado con mi pareja/grupo?
4. ¿Qué mejoraría si volviera a empezar?
5. Valoración personal del resultado (1–5) y por qué.


## Anexo C · Correspondencia de la SdA con los saberes básicos

| Saber básico | SdA 1 |
|--------------|:-----:|
| A.1.1 Tipos, variables, operadores, comentarios | ✔ | |
| A.1.2 Condicionales, iterativas, estructuras de datos | ✔ | |
| A.1.3 Funciones y archivos | ✔ | |


---

*Documento elaborado como propuesta didáctica. Adaptar códigos, calificaciones y nomenclatura a la concreción curricular de la comunidad autónoma y del centro.*
