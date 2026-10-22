# Situaciones de Aprendizaje — Programación y Computación (2º Bachillerato)

**Enfoque LOMLOE · Lenguaje: Python y SQL · Hilo conductor: "FinanzApp" y la digitalización de un invernadero familiar**

Este documento recoge **tres situaciones de aprendizaje (SdA) encadenadas**, correspondientes a las tres primeras unidades de la materia:

| SdA | Unidad | Saberes básicos | Duración | Producto final |
|-----|--------|-----------------|----------|----------------|
| **SdA 1 — "El motor de FinanzApp"** | Unidad 1 · A.1 Lenguajes de programación | A.1.1, A.1.2, A.1.3 | 12 h (12 sesiones) | Motor en Python (programación estructurada) que registra, clasifica y guarda movimientos financieros |
| **SdA 2 — "FinanzApp se vuelve objetual"** | Unidad 2 · A.2 Orientación a objetos | A.2.1, A.2.2 | 12 h (12 sesiones) | Refactorización del motor a POO (clases, herencia, interfaces y polimorfismo) + memoria técnica |
| **SdA 3 — "InvernaderoDB"** | Unidad 3 · B.1 Bases de datos relacionales | B.1.1, B.1.2, B.1.3 | 12 h (12 sesiones) | Base de datos relacional "InvernaderoDB" (SQLite): modelo E-R, esquema normalizado, scripts SQL y consultas de explotación |

Las dos primeras comparten **centro de interés y contexto**, formando un itinerario coherente: primero se construye el software de forma estructurada y después se rediseña aplicando el paradigma orientado a objetos. Esto permite al alumnado **transferir** aprendizajes y comprender *por qué* la POO mejora la mantenibilidad del código.

La SdA 3 traslada el foco al **contexto local del alumnado** —una población agrícola en la que los invernaderos familiares son la principal actividad económica— y conecta con las dos anteriores: si FinanzApp guardaba datos en archivos, ahora se da el salto a un **sistema gestor de bases de datos relacionales**, aplicando el mismo pensamiento computacional (abstracción, modelado y descomposición) a un problema real de gestión agrícola.

---

## Índice

1. Marco curricular común a las tres SdA
2. SdA 1 — El motor de FinanzApp (Unidad A.1)
3. SdA 2 — FinanzApp se vuelve objetual (Unidad A.2)
4. SdA 3 — InvernaderoDB (Unidad B.1)
5. Anexos: rúbricas, listas de cotejo y plantillas

---

# 1. Marco curricular común a las tres SdA

## 1.1. Datos identificativos

- **Etapa:** Bachillerato
- **Curso:** 2º de Bachillerato
- **Materia:** Programación y Computación (PRYC)
- **Marco normativo:** RD 243/2022 (enseñanzas mínimas de Bachillerato) y concreción autonómica correspondiente
- **Carácter:** Materia de modalidad (Ciencias y Tecnología / opción afín)

## 1.2. Competencias específicas trabajadas

- **PRYC.2.1.** Desarrollar la capacidad de abstracción, producir programas informáticos funcionales e integrarse en un equipo de desarrollo de software que sea capaz de afrontar proyectos acordes al nivel de desarrollo del alumnado, fomentando sus habilidades sociales y aplicando la creatividad.
- **PRYC.2.2.** Recopilar y procesar datos que ayuden en la resolución de un problema, analizando cómo su almacenamiento, transmisión y presentación se benefician de la manipulación computacional.

> La SdA 1 incide especialmente en **PRYC.2.1** (creación de programas funcionales) y parte de **PRYC.2.2** (procesar y almacenar datos). La SdA 2 profundiza en **PRYC.2.1**, añadiendo abstracción avanzada, trabajo colaborativo y ciclo de vida del software. La SdA 3 refuerza **PRYC.2.2**, centrándose en el almacenamiento estructurado y en la explotación de datos mediante bases de datos relacionales.

## 1.3. Criterios de evaluación

| Código | Criterio de evaluación | SdA 1 | SdA 2 | SdA 3 |
|--------|------------------------|:-----:|:-----:|:-----:|
| PRYC.2.1.1 | Transformar ideas en aplicaciones de forma creativa, descomponiendo problemas complejos en otros más simples e ideando modelos abstractos de los mismos y algoritmos que permitan implementar una solución computacional. | ✔ | ✔ | — |
| PRYC.2.1.2 | Escribir programas, convenientemente estructurados y comentados, que recogen y procesan la información procedente de diferentes fuentes y generan la correspondiente salida. | ✔ | ✔ | — |
| PRYC.2.1.3 | Identificar y aplicar los principales pasos del ciclo de vida de una aplicación, y trabajar de forma colaborativa, depurando programas y gestionando versiones. | — | ✔ | — |
| PRYC.2.2.1 | Explotar las posibilidades del almacenamiento de datos para la recogida y procesamiento de información, buscando patrones y conexiones que faciliten la resolución de problemas. | ✔ | ✔ | ✔ |

**Método de calificación:** media aritmética de los criterios implicados.

> La SdA 3 se evalúa con **PRYC.2.2.1**, centrada en el almacenamiento, la integridad y la explotación de datos mediante bases de datos relacionales.

## 1.4. Saberes básicos

**A. Programación**
- *A.1. Lenguajes de programación*
  - A.1.1. Tipos de lenguajes. Estructura de un programa informático y elementos básicos del lenguaje. Tipos básicos de datos. Constantes y variables. Operadores y expresiones. Comentarios.
  - A.1.2. Estructuras de control condicionales e iterativas. Estructuras de datos.
  - A.1.3. Funciones y reutilización de código. Manipulación de archivos.
- *A.2. Orientación a objetos*
  - A.2.1. Clases, objetos y constructores. Sobrecarga, encapsulamiento y ocultación.
  - A.2.2. Herencia. Subclases y superclases. Interfaces. Polimorfismo.
- *A.3. Ciclo de vida del software*
  - A.3.1. Metodologías de desarrollo de software.
  - A.3.2. Enfoque Top-Down, fragmentación de problemas y algoritmos.
  - A.3.3. Pseudocódigo y diagramas de flujo.
  - A.3.4. Desarrollo iterativo.
  - A.3.5. Entornos de desarrollo integrado.
  - A.3.6. Análisis, Diseño, Programación y Pruebas. Depuración.
  - A.3.7. Control de versiones.
  - A.3.8. Trabajo en equipo.

**B. Bases de datos**
- *B.1. Bases de datos relacionales*
  - B.1.1. Sistemas gestores de bases de datos. Ventajas con respecto a los archivos.
  - B.1.2. Diseño de bases de datos relacionales. Diagramas entidad-relación, esquema relacional y normalización.
  - B.1.3. Creación y manipulación de bases de datos relacionales. Comandos básicos de SQL: Create, Insert, Delete, Select, Update.

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

# 3. Situación de Aprendizaje 2 — "FinanzApp se vuelve objetual"

> **Nota de viabilidad y adaptación curricular.** La implementación de esta situación de aprendizaje está supeditada a la correcta temporalización de la SdA 1 y al grado de consecución competencial alcanzado por el alumnado. Por consiguiente, la secuencia aquí diseñada posee carácter flexible y no prescriptivo en cuanto a su extensión: en caso de que la SdA 1 experimente retrasos o de que el nivel de desempeño del grupo requiera una mayor consolidación de los saberes del bloque A.1, podrá reducirse el alcance de esta SdA 2. Dicha reducción se efectuará priorizando los saberes esenciales de la unidad (A.2.1 y A.2.2) y posponiendo o suprimiendo, total o parcialmente, los saberes de ampliación y del bloque transversal A.3, así como aquellos elementos de la orientación a objetos que no resulten imprescindibles para la consecución de los criterios de evaluación. En consecuencia, no se garantiza la impartición íntegra de todos los epígrafes contemplados, decisión que se adoptará atendiendo a la evolución del grupo y al criterio del equipo docente.

## 3.1. Datos e identificación

- **Título:** FinanzApp se vuelve objetual
- **Unidad:** A.2. Orientación a objetos
- **Bloque transversal:** A.3. Ciclo de vida del software
- **Duración:** 12 horas (12 sesiones de 60 min)
- **Área/agrupamiento:** aula de informática; individual, parejas y grupos de 4

## 3.2. Contexto y justificación

El motor de la SdA 1 funciona, pero al crecer se vuelve difícil de mantener: todo son funciones y diccionarios sueltos. Se plantea ahora el reto profesional de **rediseñar la aplicación aplicando el paradigma orientado a objetos**. El alumnado comprueba de primera mano las ventajas de la abstracción (clases), el encapsulamiento y el polimorfismo, conectando la teoría de la programación con la ingeniería de software real. La continuidad del producto refuerza el sentido de progreso y el trabajo sobre código propio.

Además, la SdA se organiza como un **proyecto de desarrollo real**, de modo que el alumnado no solo aprende POO, sino que la sitúa dentro del **ciclo de vida del software** (bloque A.3): elige una metodología de desarrollo, analiza y descompone el problema (*top-down*), planifica con pseudocódigo y diagramas de flujo, trabaja de forma **iterativa**, usa un **IDE**, aplica **análisis, diseño, programación, pruebas y depuración**, gestiona el código con **control de versiones** y colabora en **equipo**.

## 3.3. Reto / pregunta motriz

> **¿Cómo podemos reorganizar FinanzApp para que sea más fácil de ampliar (nuevos tipos de cuenta, categorías, formatos de salida) sin romper lo que ya funciona?**

## 3.4. Producto final

La versión **2.0 objetual** de FinanzApp:
1. Modelo de dominio con **clases**: `Movimiento`, `Cuenta` (y especializaciones) y `Repositorio`.
2. **Encapsulamiento** de atributos y validación en constructores.
3. Uso de **sobrecarga**/métodos especiales (por ejemplo `__str__`, `__eq__` o métodos sobrecargados por tipo).
4. **Herencia** e **interfaces** (clases abstractas `ABC`) con distintas implementaciones.
5. **Polimorfismo** aplicado (p. ej. distintas formas de exportar: CSV, JSON, pantalla).
6. **Memoria técnica** breve con **diagrama de clases (UML)** y reflexión sobre las mejoras frente a la versión 1.0.
7. **Cuaderno de desarrollo** (bloque A.3): metodología elegida y justificada, análisis *top-down*, pseudocódigo y diagrama de flujo, registro de iteraciones, plan de pruebas y evidencias de depuración.
8. **Repositorio Git** con historial de *commits* que refleje el desarrollo iterativo y los roles de equipo.

## 3.5. Concreción curricular (criterios ↔ saberes ↔ sesiones)

| Criterio | Saberes | Sesiones |
|----------|---------|----------|
| PRYC.2.1.1 | A.2.1, A.2.2 (abstracción y modelado); A.3.2, A.3.3 | 0, 1, 9, 10 |
| PRYC.2.1.2 | A.2.1, A.2.2 | 2–9 |
| PRYC.2.1.3 | A.3.1, A.3.4, A.3.5, A.3.6, A.3.7, A.3.8 | 0, 10, 11, 12 |
| PRYC.2.2.1 | Persistencia desde el modelo objetual; A.3.6 | 8, 9 |

## 3.6. Secuenciación didáctica (12 sesiones)

### FASE INICIAL (Sesión 0 · 1 h)

**Sesión 0 — "Del procedimiento al objeto" (arranque del ciclo de vida)**
- *Arranque:* recuperar el código de la SdA 1 y detectar sus "dolores" (duplicidad, diccionarios frágiles).
- **Pregunta motriz** y presentación de la v2.0 y su rúbrica.
- **Evaluación inicial:** identificar en el código v1.0 dónde "cabría" un objeto.
- **Metodologías de desarrollo (A.3.1):** comparar el modelo en cascada con las metodologías iterativas/ágiles y justificar la elección para el proyecto.
- **Análisis y diseño (A.3.2, A.3.3):** descomponer el problema *top-down*; escribir el pseudocódigo del flujo principal y dibujar su **diagrama de flujo**.
- **Entorno de desarrollo integrado (A.3.5):** configurar el IDE (intérprete, depurador, extensiones) y el repositorio.
- Introducción conceptual: qué es una clase, qué es un objeto, qué es una instancia.
- *Agrupamiento:* gran grupo y parejas. *DUA:* esquema visual clase/objeto y plantilla de pseudocódigo.

### FASE DE DESARROLLO (Sesiones 1–10)

**Sesión 1 — Clases, objetos y constructores (A.2.1)**
- Definición de clase, atributos de instancia y de clase, método `__init__`, `self`.
- Instanciación y acceso a atributos.
- *Práctica:* crear la clase `Movimiento` (fecha, concepto, importe, categoría).
- *Producto:* `movimiento.py`.

**Sesión 2 — Métodos y constructor (A.2.1)**
- Métodos de instancia, paso de parámetros, valores por defecto.
- *Práctica:* dotar a `Movimiento` de métodos (`es_gasto()`, `a_dict()`).
- *Producto:* `movimiento_v2.py`.

**Sesión 3 — Encapsulamiento y ocultación (A.2.1)**
- Atributos "privados" (`_`/`__`), propiedades (`@property`) y *setters* con validación (importe > 0).
- *Práctica:* proteger el importe y la categoría de `Movimiento`; pruebas de validación.
- *Producto:* `movimiento_encapsulado.py`.

**Sesión 4 — Sobrecarga y métodos especiales (A.2.1)**
- Métodos mágicos (`__str__`, `__repr__`, `__eq__`, `__lt__`); comparación y ordenación de movimientos.
- Noción de sobrecarga de operadores/métodos.
- *Producto:* `movimiento_dunder.py`.

**Sesión 5 — Práctica integradora "modelamos el dominio"**
- Clase `Cuenta` (titular, movimientos, saldo) que agrega objetos `Movimiento`.
- *Evaluación formativa:* observación + preguntas de comprensión; retroalimentación por parejas.
- *Producto:* `cuenta.py`.

**Sesión 6 — Herencia: subclases y superclases (A.2.2)**
- Relación "es-un". Clase base y clase derivada, `super()`.
- *Práctica:* `CuentaAhorro` y `CuentaCorriente` como subclases de `Cuenta`, con comportamiento propio (intereses, comisiones).
- *Producto:* `cuentas.py`.

**Sesión 7 — Herencia II: reutilización y extensión (A.2.2)**
- Sobrescritura de métodos, ampliación con `super()`, jerarquías de dos niveles.
- *Práctica:* especializar categorías de movimiento mediante herencia.
- *Producto:* `jerarquia.py`.

**Sesión 8 — Polimorfismo (A.2.2)**
- Métodos con la misma firma y distinto comportamiento; *duck typing* en Python.
- *Práctica:* método `exportar()` que se comporta distinto según el tipo de objeto.
- *Producto:* `polimorfismo.py`.

**Sesión 9 — Clases abstractas e interfaces (A.2.2)**
- `abc.ABC`, `@abstractmethod`; el contrato de las interfaces.
- *Práctica:* interfaz `Exportador` con implementaciones `ExportadorCSV`, `ExportadorJSON` y `ExportadorPantalla`.
- *Producto:* `exportadores.py`.

**Sesión 10 — Integración del producto final (desarrollo iterativo)**
- Refactor completo de `finanzapp.py` usando el modelo objetual y aplicando polimorfismo para exportar.
- **Desarrollo iterativo (A.3.4):** abordar el refactor en incrementos pequeños y funcionales, revisando el resultado tras cada uno.
- **Análisis, diseño, programación y pruebas. Depuración (A.3.6):** depurar con el IDE (puntos de ruptura, inspección de variables).
- **Control de versiones (A.3.7):** *commits* descriptivos por incremento; uso de ramas si el grupo lo necesita.
- **Trabajo en equipo (A.3.8):** reparto de tareas y revisión cruzada del código.
- *Producto:* `finanzapp_v2.py` + `repositorio.py`.

> **Sesión 11 — Documentación, pruebas y memoria** *(fase final)*
- Elaboración del **diagrama de clases UML** y de la **memoria técnica** (decisiones de diseño, ventajas de la POO frente a la v1.0).
- **Pruebas y depuración (A.3.6):** plan de pruebas con casos normales y casos límite; `assert` o `unittest` básico; registrar los errores encontrados y su corrección.
- **Control de versiones (A.3.7):** consolidar el historial y etiquetar la versión final.
- *Agrupamiento:* parejas/grupos. *DUA:* se admite memoria en vídeo o presentación.

> **Sesión 12 — Socialización y evaluación** *(fase final)*
- Demostración funcional de la v2.0 y comparación razonada con la v1.0.
- **Trabajo en equipo (A.3.8):** coevaluación del reparto de roles y de la contribución individual.
- **Control de versiones (A.3.7):** presentar el historial de *commits* como evidencia del proceso.
- **Coevaluación** entre grupos con rúbrica; **autoevaluación** con diario; cierre reflexivo sobre el ciclo de vida del software.
- *Producto:* repositorio Git final con v2.0 + memoria + UML + cuaderno de desarrollo.

## 3.6.1. Tratamiento explícito del bloque A.3 (Ciclo de vida del software)

| Saber (A.3) | Cómo se trabaja en la SdA 2 | Sesiones | Evidencia |
|-------------|-----------------------------|:--------:|-----------|
| **A.3.1** Metodologías de desarrollo | Comparación cascada vs. iterativo/ágil y elección justificada | 0 | Apartado de la memoria |
| **A.3.2** Enfoque Top-Down y algoritmos | Descomposición del problema en subproblemas y clases | 0, 1 | Esquema de descomposición |
| **A.3.3** Pseudocódigo y diagramas de flujo | Pseudocódigo del flujo principal y diagrama de flujo | 0 | Cuaderno de desarrollo |
| **A.3.4** Desarrollo iterativo | Incrementos funcionales del refactor | 1–10 | Historial de *commits* |
| **A.3.5** Entornos de desarrollo integrado | Configuración y uso del IDE y su depurador | 0–10 | Observación directa |
| **A.3.6** Análisis, diseño, programación y pruebas | Diseño UML, codificación y plan de pruebas/depuración | 10, 11 | UML + batería de pruebas |
| **A.3.7** Control de versiones | Repositorio Git y *commits* descriptivos | 10–12 | Repositorio |
| **A.3.8** Trabajo en equipo | Roles, revisión cruzada y coevaluación | 10–12 | Rúbrica de equipo |

## 3.7. Evaluación de la SdA 2

| Criterio | Instrumento | Momento | Peso |
|----------|-------------|---------|:----:|
| PRYC.2.1.1 | Diagrama UML + memoria técnica + cuaderno de desarrollo (metodología, *top-down*, pseudocódigo y diagrama de flujo) | S0, S11 | 20 % |
| PRYC.2.1.2 | Prácticas de sesión + rúbrica del producto final | Continuo | 45 % |
| PRYC.2.1.3 | Historial de commits, depuración, plan de pruebas y coevaluación | S10–S12 | 25 % |
| PRYC.2.2.1 | Rúbrica de persistencia objetual | S9–S10 | 10 % |

- **Autoevaluación:** diario de aprendizaje (S12).
- **Coevaluación:** rúbrica entre grupos y de trabajo en equipo (S12).
- **Prueba práctica** de POO (opcional, S11).

### 3.7.1. Indicadores de logro del bloque A.3

- **A.3.1:** justifica la metodología elegida frente a otras alternativas.
- **A.3.2:** descompone el problema en subproblemas y los asocia a clases.
- **A.3.3:** escribe pseudocódigo y un diagrama de flujo coherentes con la solución.
- **A.3.4:** construye la solución en incrementos funcionales y verificables.
- **A.3.5:** usa el IDE para editar, ejecutar y depurar con autonomía.
- **A.3.6:** distingue análisis, diseño, programación y pruebas; localiza y corrige errores.
- **A.3.7:** mantiene un historial de versiones ordenado y comprensible.
- **A.3.8:** asume un rol, revisa el trabajo ajeno y comunica el resultado.

## 3.8. Materiales y recursos

- Aula de informática con Python 3.x, VS Code y Git.
- Herramienta de diagramas UML (draw.io, PlantUML o similar).
- Guiones de prácticas, plantillas de clases y ejemplos de jerarquías.
- Documentación oficial de Python (módulos `abc`, `dataclasses`, `json`, `csv`).

## 3.9. Evaluación de la práctica docente

- Comparativa de resultados con la SdA 1 para valorar la progresión en abstracción.
- Cuestionario de percepción del alumnado sobre la utilidad de la POO.
- Revisión de la carga de trabajo y del andamiaje (plantillas) para futuras ediciones.

---

# 4. Situación de Aprendizaje 3 — "InvernaderoDB: los datos del invernadero familiar"

> **Nota de viabilidad y adaptación curricular.** Esta situación de aprendizaje se plantea como cierre del itinerario y requiere que el alumnado haya consolidado la lógica de programación de las SdA 1 y 2. Si la temporalización del trimestre se viera comprometida, podrá reducirse el número de consultas y de entidades del modelo, manteniendo los saberes esenciales del bloque B.1: diseño E-R, esquema relacional normalizado y comandos básicos de SQL. La prioridad será que el alumnado sea capaz de crear una base de datos funcional y de explotarla con consultas significativas para el contexto del invernadero.

## 4.1. Datos e identificación

- **Título:** InvernaderoDB: los datos del invernadero familiar
- **Unidad:** B.1. Bases de datos relacionales
- **Bloque:** B. Bases de datos
- **Duración:** 12 horas (12 sesiones de 60 min)
- **Área/agrupamiento:** aula de informática; individual, parejas y grupos de 4

## 4.2. Contexto y justificación

El centro se sitúa en una población de tradición agrícola en la que buena parte de las familias vive del campo y, muy especialmente, del cultivo en invernadero. El alumnado conoce de primera mano una realidad que, sin embargo, suele gestionarse con libretas, notas dispersas y hojas de cálculo improvisadas: nombres de cultivos escritos de varias formas, parcelas duplicadas, cosechas apuntadas en distintos sitios y dificultades para saber qué se produjo, dónde y con qué coste.

Partiendo de esa realidad cercana, la SdA plantea **sustituir ese caos de archivos por una base de datos relacional sencilla**. El reto conecta directamente con los saberes del bloque B.1 y con lo aprendido en las situaciones anteriores: si en la SdA 1 se guardaban datos en archivos y en la SdA 2 se modelaba el dominio con objetos, ahora se da el salto a un **sistema gestor de bases de datos** que garantiza integridad, evita redundancias y permite consultar la información con SQL.

La elección de un invernadero familiar como dominio no es anecdótica: permite trabajar con entidades y relaciones comprensibles (invernaderos, parcelas, cultivos y cosechas), formular preguntas reales (¿cuántos kilos se recogieron por invernadero?, ¿qué cultivo es más rentable?, ¿qué parcela no ha producido?) y valorar el papel de la digitalización en la agricultura local. Además, el carácter básico del producto final —cuatro entidades y un conjunto acotado de consultas— lo hace viable para 2.º de Bachillerato sin renunciar al rigor del modelado y de la normalización.

## 4.3. Reto / pregunta motriz

> **¿Cómo podemos organizar en una base de datos la información de un invernadero familiar —invernaderos, parcelas, cultivos y cosechas— para consultarla sin duplicidades, mantenerla actualizada y tomar mejores decisiones?**

## 4.4. Producto final

La base de datos relacional **InvernaderoDB v1.0**, implementada en SQLite, que incluya:

1. **Diagrama entidad-relación** del dominio, con entidades, atributos, claves y cardinalidades justificadas.
2. **Esquema relacional** resultante, con claves primarias y foráneas, y una breve justificación de la **normalización** aplicada (al menos hasta 3FN).
3. **Script SQL** `invernadero.sql` con las sentencias `CREATE`, `INSERT`, `SELECT`, `UPDATE` y `DELETE`, estructurado y comentado.
4. **Base de datos funcional** `invernadero.db` con datos de ejemplo coherentes y realistas del contexto.
5. **Catálogo de consultas**: al menos diez consultas SQL documentadas, indicando qué pregunta responde cada una y un ejemplo de resultado.
6. **Diccionario de datos** y **memoria técnica breve**: decisiones de diseño, problemas detectados, mejoras introducidas y reflexión sobre las ventajas del SGBD frente a los archivos.
7. **Repositorio Git** con los scripts, la documentación y el historial de versiones.

## 4.5. Concreción curricular (criterios ↔ saberes ↔ sesiones)

| Criterio | Saberes (B.1) | Sesiones |
|----------|---------------|----------|
| PRYC.2.2.1 | B.1.1, B.1.2 y B.1.3 (almacenamiento, integridad y explotación de datos) | 0–10 |

## 4.6. Secuenciación didáctica (12 sesiones)

### FASE INICIAL (Sesión 0 · 1 h)

**Sesión 0 — "De la libreta al dato"**
- *Actividad de arranque:* mostrar una libreta y una hoja de cálculo con datos reales o simulados del invernadero (parcelas repetidas, cultivos con nombres distintos, cosechas sin fecha). Preguntar: ¿qué información tenemos?, ¿qué nos falta?, ¿qué errores detectamos?
- Presentación del **reto**, del producto final, del contrato de trabajo y de la rúbrica.
- **Evaluación inicial (diagnóstico):** cuestionario breve individual sobre ideas previas de bases de datos (qué es una tabla, un registro, una clave, qué es SQL).
- **B.1.1. Sistemas gestores de bases de datos:** conceptualización de base de datos, SGBD y sus ventajas frente a los archivos (integridad, menor redundancia, consultas, concurrencia, seguridad y copias de seguridad).
- Configuración del entorno: instalar **SQLite** y **DB Browser for SQLite** (o usar el servidor del centro), primer contacto con una base de datos de ejemplo y creación del repositorio Git.
- *Agrupamiento:* gran grupo + individual. *DUA:* cuestionario con opción oral o escrita y esquema visual de conceptos.

### FASE DE DESARROLLO (Sesiones 1–9)

**Sesión 1 — SGBD frente a archivos (B.1.1)**
- Profundización en las funciones de un SGBD y en los problemas de los archivos: redundancia, inconsistencia, aislamiento, dificultad de consulta y de concurrencia.
- *Práctica:* analizar un conjunto de datos del invernadero en CSV y elaborar un **diagnóstico** de sus problemas, proponiendo qué mejoraría con una base de datos.
- *Producto:* `01_diagnostico_sgbd.md`.

**Sesión 2 — Diseño entidad-relación I (B.1.2)**
- Conceptos de entidad, atributo, relación, clave y cardinalidad.
- Identificación de las entidades del dominio: `Invernadero`, `Cultivo`, `Parcela` y `Cosecha` (y, opcionalmente, `Gasto`).
- *Práctica:* listar atributos, detectar relaciones y representar un primer borrador del diagrama E-R.
- *Producto:* `02_borrador_er.md` (o imagen del borrador).

**Sesión 3 — Diseño entidad-relación II (B.1.2)**
- Claves primarias y foráneas, cardinalidades (1:1, 1:N, N:M), obligatoriedad y participación.
- *Práctica:* completar y revisar el diagrama E-R en draw.io/diagrams.net; justificar las decisiones de diseño.
- *Producto:* `03_modelo_er.png` + justificación breve.

**Sesión 4 — Esquema relacional y normalización (B.1.2)**
- Transformación del modelo E-R a tablas: claves, relaciones y atributos.
- Noción de **normalización**: 1FN, 2FN y 3FN; detección de redundancias y anomalías de inserción, actualización y borrado.
- *Práctica:* convertir el E-R en esquema relacional y normalizar una tabla "plana" de cosechas; elaborar el **diccionario de datos**.
- *Producto:* `04_esquema_relacional.md`.

**Sesión 5 — Creación de la base de datos: `CREATE` (B.1.3)**
- Tipos de datos en SQLite, `CREATE TABLE`, restricciones (`PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, `UNIQUE`, `CHECK`), claves compuestas y comentarios.
- *Práctica:* crear `invernadero.db` y las tablas del esquema, respetando las relaciones.
- *Producto:* `05_create.sql`.

**Sesión 6 — Inserción de datos: `INSERT` (B.1.3)**
- `INSERT INTO`, inserción de varias filas, orden de inserción y respeto de la integridad referencial.
- *Práctica:* cargar datos de ejemplo (al menos 3 invernaderos, 4 cultivos, 6 parcelas y 12 cosechas) y comprobar errores típicos.
- *Producto:* `06_insert.sql` + `invernadero.db`.

**Sesión 7 — Consultas básicas: `SELECT` (B.1.3)**
- `SELECT`, `WHERE`, `ORDER BY`, `LIMIT`, operadores de comparación y lógicos, `LIKE`, valores `NULL` y alias.
- *Práctica:* consultar parcelas por invernadero, cosechas por fecha y cultivos por variedad.
- *Producto:* `07_select_basico.sql`.

**Sesión 8 — Consultas avanzadas y explotación de datos (B.1.3)**
- `JOIN`, `GROUP BY`, `HAVING`, funciones de agregación (`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`) y subconsultas sencillas.
- *Práctica:* obtener kilos por invernadero, producción media por cultivo, parcelas sin cosecha y precio medio de venta.
- *Producto:* `08_consultas_agregadas.sql`.

**Sesión 9 — Actualización, borrado y depuración (B.1.3)**
- `UPDATE` y `DELETE` con `WHERE`, riesgos de las actualizaciones masivas, integridad referencial y copias de seguridad.
- *Práctica:* corregir un precio, actualizar la superficie de una parcela y eliminar una cosecha errónea; verificar cada cambio con `SELECT`.
- *Producto:* `09_update_delete.sql` + versión integrada de `invernadero.db`.

### FASE FINAL (Sesiones 10–11)

**Sesión 10 — Pruebas, documentación y memoria**
- **Plan de pruebas:** casos normales, casos límite y casos erróneos; comprobación de restricciones y de la integridad referencial.
- Elaboración del **catálogo de consultas**, del **diccionario de datos** y de la **memoria técnica**: decisiones de diseño, normalización, problemas encontrados y mejoras.
- **Control de versiones:** *commits* descriptivos y etiquetado de la versión final.
- *Agrupamiento:* parejas/grupos. *DUA:* se admite memoria en formato escrito, presentación o vídeo.
- *Producto:* `10_pruebas.sql` + `memoria_invernaderodb.md`.

**Sesión 11 — Socialización y evaluación**
- Demostración funcional de la base de datos (5 min por grupo): una consulta que responda a una pregunta real del invernadero.
- **Coevaluación** entre grupos con rúbrica; **autoevaluación** con diario de aprendizaje; cierre del docente.
- Reflexión final: **¿qué ventajas aporta la base de datos frente a la libreta o la hoja de cálculo?** Transferencia a otros contextos (cooperativa, ganadería, gestión del centro).
- *Producto:* repositorio Git final con la base de datos, los scripts y la documentación.

## 4.6.1. Tratamiento explícito del bloque B.1

| Saber (B.1) | Cómo se trabaja en la SdA 3 | Sesiones | Evidencia |
|-------------|-----------------------------|:--------:|-----------|
| **B.1.1** SGBD y ventajas frente a archivos | Diagnóstico de datos dispersos y comparación archivos/SGBD | 0, 1 | Informe de diagnóstico |
| **B.1.2** Diseño, E-R, esquema relacional y normalización | Modelado del invernadero, transformación a tablas y normalización | 2–4 | Diagrama E-R + esquema + diccionario de datos |
| **B.1.3** Creación y manipulación con SQL | Scripts de `CREATE`, `INSERT`, `SELECT`, `UPDATE` y `DELETE` | 5–10 | Scripts + base de datos + catálogo de consultas |

## 4.7. Evaluación de la SdA 3

| Criterio | Instrumento | Momento | Peso |
|----------|-------------|---------|:----:|
| PRYC.2.2.1 | Diagrama E-R + esquema relacional + justificación de la normalización | S2–S4, S10 | 30 % |
| PRYC.2.2.1 | Scripts SQL + pruebas prácticas + rúbrica del producto final | Continuo | 40 % |
| PRYC.2.2.1 | Base de datos funcional + catálogo de consultas + informe de explotación | S7–S10 | 30 % |

Los tres instrumentos evalúan el mismo criterio **PRYC.2.2.1** con distinto peso; la calificación final del criterio resulta de la media ponderada de las tres evidencias.

- **Autoevaluación:** diario de aprendizaje (S11).
- **Coevaluación:** rúbrica entre grupos (S11).
- **Prueba práctica corta** opcional (S9) para consolidar `SELECT`, `UPDATE` y `DELETE`.

### 4.7.1. Indicadores de logro del bloque B.1

- **B.1.1:** explica las ventajas de un SGBD frente a los archivos y reconoce situaciones en las que su uso es necesario.
- **B.1.2:** identifica entidades, atributos y relaciones, y construye un diagrama E-R coherente con el dominio.
- **B.1.2:** transforma el modelo E-R en un esquema relacional con claves correctas y justifica la normalización.
- **B.1.3:** crea tablas con restricciones y carga datos respetando la integridad referencial.
- **B.1.3:** formula consultas `SELECT` con filtros, ordenación, agrupaciones y uniones para responder preguntas reales.
- **B.1.3:** actualiza y elimina datos de forma segura, comprobando previamente el alcance de la operación.
- **Transversal:** documenta el diseño y las consultas, prueba la base de datos y comunica los resultados con claridad.

## 4.8. Materiales y recursos

- Aula de informática con **SQLite**, **DB Browser for SQLite**, VS Code (extensión SQLite) y Git.
- Alternativa: servidor **MariaDB/MySQL** del centro, si se dispone de él.
- Herramienta de diagramas E-R (draw.io/diagrams.net).
- Conjunto de datos de ejemplo `datos_invernadero.csv` (invernaderos, parcelas, cultivos y cosechas).
- Guiones de prácticas, plantilla de diagrama E-R, plantilla de diccionario de datos y plantilla de plan de pruebas.
- Chuleta de SQL y documentación oficial de SQLite.
- **Solucionario del profesorado:** `sda3_ejercicios_resueltos.md` y script completo `invernadero.sql`.
- Proyector para las demostraciones finales.

## 4.9. Evaluación de la práctica docente

- Análisis de los errores más frecuentes en los scripts SQL (claves foráneas, `WHERE` ausente, tipos de datos) para reforzar en futuras ediciones.
- Cuestionario de percepción del alumnado sobre la utilidad y la cercanía del contexto del invernadero.
- Revisión de la temporalización, de las plantillas de apoyo y del nivel de exigencia en la normalización.
- Comparación de resultados con las SdA 1 y 2 para valorar la progresión en abstracción, modelado y explotación de datos.

---

# 5. Anexos

## Anexo A · Rúbrica general de producto de código (SdA 1 y 2)

| Criterio | 4 — Excelente | 3 — Adecuado | 2 — En desarrollo | 1 — Insuficiente |
|----------|---------------|--------------|-------------------|------------------|
| *Funcionalidad* | Hace todo lo pedido y gestiona casos límite | Hace lo esencial con algún fallo menor | Funciona parcialmente | No funciona o falla en lo básico |
| *Estructura y estilo* | Código limpio, modular, PEP 8 y comentado | Generalmente ordenado y legible | Estructura mejorable, poco comentado | Código desordenado o sin comentarios |
| *Persistencia* (archivos) | Guarda y recupera sin pérdida de datos y con manejo de errores | Guarda y recupera correctamente | Persistencia parcial | No persiste o corrompe datos |
| *Documentación* | Memoria/diagrama completos y claros | Documentación suficiente | Documentación escasa | Sin documentación |

## Anexo B · Rúbrica específica de POO (SdA 2)

| Criterio | 4 — Excelente | 3 — Adecuado | 2 — En desarrollo | 1 — Insuficiente |
|----------|---------------|--------------|-------------------|------------------|
| Clases y objetos / constructores | Modelo coherente, constructores con validación | Clases correctas | Clases incompletas o mal usadas | No usa clases |
| Encapsulamiento y ocultación | Atributos protegidos y propiedades bien implementadas | Encapsula lo esencial | Encapsulamiento deficitario | No encapsula |
| Herencia, subclases y superclases | Jerarquía bien justificada y reutilizable | Herencia correcta | Herencia poco justificada | No usa herencia |
| Interfaces y polimorfismo | Interfaz con varias implementaciones polimórficas | Polimorfismo funcional | Uso superficial | No aplica |
| Sobrecarga / métodos especiales | Usa `__str__`, `__eq__`, etc. con sentido | Usa algún método especial | Uso mínimo | No usa |

## Anexo C · Lista de cotejo — entrega de repositorio (SdA 1, 2 y 3)

- [ ] El repositorio tiene `README.md` con instrucciones de uso.
- [ ] Los *commits* son frecuentes y descriptivos.
- [ ] El código y los scripts SQL siguen un estilo homogéneo (PEP 8 / convenciones SQL).
- [ ] Existen comentarios/docstrings en clases, funciones y scripts principales.
- [ ] Se incluyen datos de ejemplo y se documenta el formato de archivo o el esquema de la base de datos.
- [ ] El programa arranca desde cero sin errores o la base de datos se crea y carga sin errores.

## Anexo D · Diario de aprendizaje (autoevaluación)

1. ¿Qué he aprendido en esta situación de aprendizaje?
2. ¿Qué parte me ha resultado más difícil y cómo la he resuelto?
3. ¿Cómo he colaborado con mi pareja/grupo?
4. ¿Qué mejoraría si volviera a empezar?
5. Valoración personal del resultado (1–5) y por qué.

## Anexo E · Banco de retos de ampliación

- Añadir autenticación por usuario y varios perfiles.
- Incorporar gráficos con `matplotlib` a partir de los datos guardados.
- Exportar a PDF o a base de datos SQLite.
- Añadir tests con `unittest` y cobertura.
- Refactorizar usando `dataclasses` para los modelos.
- Añadir índices y vistas a `InvernaderoDB` para optimizar consultas.
- Conectar `InvernaderoDB` con una aplicación Python que consulte y muestre los datos.
- Migrar la base de datos a MariaDB/MySQL y comparar ambas soluciones.

## Anexo F · Correspondencia de la SdA con los saberes básicos

| Saber básico | SdA 1 | SdA 2 | SdA 3 |
|--------------|:-----:|:-----:|:-----:|
| A.1.1 Tipos, variables, operadores, comentarios | ✔ | | |
| A.1.2 Condicionales, iterativas, estructuras de datos | ✔ | | |
| A.1.3 Funciones y archivos | ✔ | | |
| A.2.1 Clases, objetos, constructores, sobrecarga, encapsulamiento | | ✔ | |
| A.2.2 Herencia, interfaces, polimorfismo | | ✔ | |
| A.3.1 Metodologías de desarrollo de software | | ✔ | |
| A.3.2 Enfoque Top-Down, fragmentación y algoritmos | (base) | ✔ | |
| A.3.3 Pseudocódigo y diagramas de flujo | (base) | ✔ | |
| A.3.4 Desarrollo iterativo | | ✔ | |
| A.3.5 Entornos de desarrollo integrado | ✔ | ✔ | |
| A.3.6 Análisis, diseño, programación y pruebas. Depuración | (base) | ✔ | |
| A.3.7 Control de versiones | (base) | ✔ | |
| A.3.8 Trabajo en equipo | ✔ | ✔ | |
| B.1.1 SGBD y ventajas frente a los archivos | | | ✔ |
| B.1.2 Diseño E-R, esquema relacional y normalización | | | ✔ |
| B.1.3 Creación y manipulación con SQL (Create, Insert, Delete, Select, Update) | | | ✔ |

## Anexo G · Rúbrica específica de bases de datos (SdA 3)

| Criterio | 4 — Excelente | 3 — Adecuado | 2 — En desarrollo | 1 — Insuficiente |
|----------|---------------|--------------|-------------------|------------------|
| Modelo E-R | Entidades, atributos y relaciones completos, con claves y cardinalidades bien justificadas | Modelo correcto con algún detalle mejorable | Modelo incompleto o con relaciones confusas | No representa el dominio o es incoherente |
| Esquema relacional y normalización | Esquema correcto, claves bien definidas y normalización justificada hasta 3FN | Esquema correcto con justificación básica | Esquema con errores o normalización insuficiente | No obtiene un esquema relacional válido |
| `CREATE` e `INSERT` | Crea todas las tablas con restricciones y carga datos coherentes respetando la integridad | Crea y carga lo esencial con algún fallo menor | Errores de claves o de tipos que impiden parte del funcionamiento | No crea la base de datos o no inserta datos |
| `SELECT` | Consultas variadas con filtros, ordenación, uniones y agregaciones correctas | Consultas correctas de complejidad media | Consultas básicas con errores frecuentes | No formula consultas correctas |
| `UPDATE` y `DELETE` | Modifica y elimina con precisión, usando `WHERE` y verificando el resultado | Operaciones correctas con comprobación básica | Errores o falta de comprobación | Modifica o elimina datos de forma incorrecta |
| Documentación y pruebas | Memoria, diccionario y catálogo completos; plan de pruebas riguroso | Documentación suficiente y pruebas básicas | Documentación escasa o pruebas incompletas | Sin documentación ni pruebas |

