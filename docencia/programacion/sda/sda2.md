# Situación de Aprendizaje 2 — "FinanzApp se vuelve objetual"

**Programación y Computación · 2.º de Bachillerato · Unidad A.2 · Bloque A.3 · 12 sesiones**

> Documento independiente de la SdA 2. El marco curricular completo, las otras situaciones y los anexos generales se recogen en `sda_completo.md`.

## Marco curricular de referencia

- **Materia:** Programación y Computación (PRYC).
- **Marco normativo:** RD 243/2022, de enseñanzas mínimas de Bachillerato, y concreción autonómica correspondiente.
- **Competencias específicas:** PRYC.2.1 y PRYC.2.2.
- **Criterios de evaluación:** PRYC.2.1.1, PRYC.2.1.2, PRYC.2.1.3 y PRYC.2.2.1.
- **Saberes básicos:** A.2.1, A.2.2 y A.3.1–A.3.8.
- **Metodología:** ABP, desarrollo iterativo, trabajo en equipo, control de versiones y depuración guiada.
- **Evaluación:** formativa y continua, con heteroevaluación, coevaluación y autoevaluación.
- **DUA:** múltiples formas de representación, acción y expresión, e implicación.

---

> **Nota de viabilidad y adaptación curricular.** La implementación de esta situación de aprendizaje está supeditada a la correcta temporalización de la SdA 1 y al grado de consecución competencial alcanzado por el alumnado. Por consiguiente, la secuencia aquí diseñada posee carácter flexible y no prescriptivo en cuanto a su extensión: en caso de que la SdA 1 experimente retrasos o de que el nivel de desempeño del grupo requiera una mayor consolidación de los saberes del bloque A.1, podrá reducirse el alcance de esta SdA 2. Dicha reducción se efectuará priorizando los saberes esenciales de la unidad (A.2.1 y A.2.2) y posponiendo o suprimiendo, total o parcialmente, los saberes de ampliación y del bloque transversal A.3, así como aquellos elementos de la orientación a objetos que no resulten imprescindibles para la consecución de los criterios de evaluación. En consecuencia, no se garantiza la impartición íntegra de todos los epígrafes contemplados, decisión que se adoptará atendiendo a la evolución del grupo y al criterio del equipo docente.

## 1.1. Datos e identificación

- **Título:** FinanzApp se vuelve objetual
- **Unidad:** A.2. Orientación a objetos
- **Bloque transversal:** A.3. Ciclo de vida del software
- **Duración:** 12 horas (12 sesiones de 60 min)
- **Área/agrupamiento:** aula de informática; individual, parejas y grupos de 4

## 1.2. Contexto y justificación

El motor de la SdA 1 funciona, pero al crecer se vuelve difícil de mantener: todo son funciones y diccionarios sueltos. Se plantea ahora el reto profesional de **rediseñar la aplicación aplicando el paradigma orientado a objetos**. El alumnado comprueba de primera mano las ventajas de la abstracción (clases), el encapsulamiento y el polimorfismo, conectando la teoría de la programación con la ingeniería de software real. La continuidad del producto refuerza el sentido de progreso y el trabajo sobre código propio.

Además, la SdA se organiza como un **proyecto de desarrollo real**, de modo que el alumnado no solo aprende POO, sino que la sitúa dentro del **ciclo de vida del software** (bloque A.3): elige una metodología de desarrollo, analiza y descompone el problema (*top-down*), planifica con pseudocódigo y diagramas de flujo, trabaja de forma **iterativa**, usa un **IDE**, aplica **análisis, diseño, programación, pruebas y depuración**, gestiona el código con **control de versiones** y colabora en **equipo**.

## 1.3. Reto / pregunta motriz

> **¿Cómo podemos reorganizar FinanzApp para que sea más fácil de ampliar (nuevos tipos de cuenta, categorías, formatos de salida) sin romper lo que ya funciona?**

## 1.4. Producto final

La versión **2.0 objetual** de FinanzApp:
1. Modelo de dominio con **clases**: `Movimiento`, `Cuenta` (y especializaciones) y `Repositorio`.
2. **Encapsulamiento** de atributos y validación en constructores.
3. Uso de **sobrecarga**/métodos especiales (por ejemplo `__str__`, `__eq__` o métodos sobrecargados por tipo).
4. **Herencia** e **interfaces** (clases abstractas `ABC`) con distintas implementaciones.
5. **Polimorfismo** aplicado (p. ej. distintas formas de exportar: CSV, JSON, pantalla).
6. **Memoria técnica** breve con **diagrama de clases (UML)** y reflexión sobre las mejoras frente a la versión 1.0.
7. **Cuaderno de desarrollo** (bloque A.3): metodología elegida y justificada, análisis *top-down*, pseudocódigo y diagrama de flujo, registro de iteraciones, plan de pruebas y evidencias de depuración.
8. **Repositorio Git** con historial de *commits* que refleje el desarrollo iterativo y los roles de equipo.

## 1.5. Concreción curricular (criterios ↔ saberes ↔ sesiones)

| Criterio | Saberes | Sesiones |
|----------|---------|----------|
| PRYC.2.1.1 | A.2.1, A.2.2 (abstracción y modelado); A.3.2, A.3.3 | 0, 1, 9, 10 |
| PRYC.2.1.2 | A.2.1, A.2.2 | 2–9 |
| PRYC.2.1.3 | A.3.1, A.3.4, A.3.5, A.3.6, A.3.7, A.3.8 | 0, 10, 11, 12 |
| PRYC.2.2.1 | Persistencia desde el modelo objetual; A.3.6 | 8, 9 |

## 1.6. Secuenciación didáctica (12 sesiones)

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

## 1.6.1. Tratamiento explícito del bloque A.3 (Ciclo de vida del software)

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

## 1.7. Evaluación de la SdA 2

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

## 1.8. Materiales y recursos

- Aula de informática con Python 3.x, VS Code y Git.
- Herramienta de diagramas UML (draw.io, PlantUML o similar).
- Guiones de prácticas, plantillas de clases y ejemplos de jerarquías.
- Documentación oficial de Python (módulos `abc`, `dataclasses`, `json`, `csv`).

## 1.9. Evaluación de la práctica docente

- Comparativa de resultados con la SdA 1 para valorar la progresión en abstracción.
- Cuestionario de percepción del alumnado sobre la utilidad de la POO.
- Revisión de la carga de trabajo y del andamiaje (plantillas) para futuras ediciones.

---

# Anexos

## Anexo A · Rúbrica general de producto de código (SdA 2)

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

## Anexo C · Lista de cotejo — entrega de repositorio (SdA 2)

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

## Anexo E · Banco de retos de ampliación (SdA 2)

- Añadir autenticación por usuario y varios perfiles.
- Incorporar gráficos con `matplotlib` a partir de los datos guardados.
- Exportar a PDF o a base de datos SQLite.
- Añadir tests con `unittest` y cobertura.
- Refactorizar usando `dataclasses` para los modelos.

## Anexo F · Correspondencia con los saberes básicos (SdA 2)

| Saber básico | SdA 2 |
|--------------|:-----:|
| A.2.1 Clases, objetos, constructores, sobrecarga, encapsulamiento | ✔ |
| A.2.2 Herencia, interfaces, polimorfismo | ✔ |
| A.3.1 Metodologías de desarrollo de software | ✔ |
| A.3.2 Enfoque Top-Down, fragmentación y algoritmos | ✔ |
| A.3.3 Pseudocódigo y diagramas de flujo | ✔ |
| A.3.4 Desarrollo iterativo | ✔ |
| A.3.5 Entornos de desarrollo integrado | ✔ |
| A.3.6 Análisis, diseño, programación y pruebas. Depuración | ✔ |
| A.3.7 Control de versiones | ✔ |
| A.3.8 Trabajo en equipo | ✔ |
