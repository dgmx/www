# Situación de Aprendizaje 3. "InvernaderoDB: los datos del invernadero familiar"

**Programación y Computación · 2.º de Bachillerato · Unidad B.1 · 12 sesiones**

> Documento independiente de la SdA 3. El marco curricular completo, las otras situaciones y los anexos generales se recogen en `sda_completo.md`.

## Marco curricular de referencia

- **Materia:** Programación y Computación (PRYC).
- **Marco normativo:** RD 243/2022, de enseñanzas mínimas de Bachillerato, y concreción autonómica correspondiente.
- **Competencia específica:** PRYC.2.2.
- **Criterio de evaluación:** PRYC.2.2.1.
- **Saberes básicos:** B.1.1, B.1.2 y B.1.3.
- **Metodología:** ABP, pensamiento computacional, modelado de datos, práctica guiada y trabajo cooperativo.
- **Evaluación:** formativa y continua, con heteroevaluación, coevaluación y autoevaluación.
- **DUA:** múltiples formas de representación, acción y expresión, e implicación.

---

> **Nota de viabilidad y adaptación curricular.** Esta situación de aprendizaje se plantea como cierre del itinerario y requiere que el alumnado haya consolidado la lógica de programación de las SdA 1 y 2. Si la temporalización del trimestre se viera comprometida, podrá reducirse el número de consultas y de entidades del modelo, manteniendo los saberes esenciales del bloque B.1: diseño E-R, esquema relacional normalizado y comandos básicos de SQL. La prioridad será que el alumnado sea capaz de crear una base de datos funcional y de explotarla con consultas significativas para el contexto del invernadero.

## 1.1. Datos e identificación

- **Título:** InvernaderoDB: los datos del invernadero familiar
- **Unidad:** B.1. Bases de datos relacionales
- **Bloque:** B. Datos e información
- **Duración:** 12 horas (12 sesiones de 60 min)
- **Área/agrupamiento:** aula de informática; individual, parejas y grupos de 4

## 1.2. Contexto y justificación

El centro se sitúa en una población de tradición agrícola en la que buena parte de las familias vive del campo y, muy especialmente, del cultivo en invernadero. El alumnado conoce de primera mano una realidad que, sin embargo, suele gestionarse con libretas, notas dispersas y hojas de cálculo improvisadas: nombres de cultivos escritos de varias formas, parcelas duplicadas, cosechas apuntadas en distintos sitios y dificultades para saber qué se produjo, dónde y con qué coste.

Partiendo de esa realidad cercana, la SdA plantea **sustituir ese caos de archivos por una base de datos relacional sencilla**. El reto conecta directamente con los saberes del bloque B.1 y con lo aprendido en las situaciones anteriores: si en la SdA 1 se guardaban datos en archivos y en la SdA 2 se modelaba el dominio con objetos, ahora se da el salto a un **sistema gestor de bases de datos** que garantiza integridad, evita redundancias y permite consultar la información con SQL.

La elección de un invernadero familiar como dominio no es anecdótica: permite trabajar con entidades y relaciones comprensibles (invernaderos, parcelas, cultivos y cosechas), formular preguntas reales (¿cuántos kilos se recogieron por invernadero?, ¿qué cultivo es más rentable?, ¿qué parcela no ha producido?) y valorar el papel de la digitalización en la agricultura local. Además, el carácter básico del producto final —cuatro entidades y un conjunto acotado de consultas— lo hace viable para 2.º de Bachillerato sin renunciar al rigor del modelado y de la normalización.

## 1.3. Reto / pregunta motriz

> **¿Cómo podemos organizar en una base de datos la información de un invernadero familiar —invernaderos, parcelas, cultivos y cosechas— para consultarla sin duplicidades, mantenerla actualizada y tomar mejores decisiones?**

## 1.4. Producto final

La base de datos relacional **InvernaderoDB v1.0**, implementada en SQLite, que incluya:

1. **Diagrama entidad-relación** del dominio, con entidades, atributos, claves y cardinalidades justificadas.
2. **Esquema relacional** resultante, con claves primarias y foráneas, y una breve justificación de la **normalización** aplicada (al menos hasta 3FN).
3. **Script SQL** `invernadero.sql` con las sentencias `CREATE`, `INSERT`, `SELECT`, `UPDATE` y `DELETE`, estructurado y comentado.
4. **Base de datos funcional** `invernadero.db` con datos de ejemplo coherentes y realistas del contexto.
5. **Catálogo de consultas**: al menos diez consultas SQL documentadas, indicando qué pregunta responde cada una y un ejemplo de resultado.
6. **Diccionario de datos** y **memoria técnica breve**: decisiones de diseño, problemas detectados, mejoras introducidas y reflexión sobre las ventajas del SGBD frente a los archivos.
7. **Repositorio Git** con los scripts, la documentación y el historial de versiones.

## 1.5. Concreción curricular (criterios ↔ saberes ↔ sesiones)

| Criterio | Saberes (B.1) | Sesiones |
|----------|---------------|----------|
| PRYC.2.2.1 | B.1.1, B.1.2 y B.1.3 (almacenamiento, integridad y explotación de datos) | 0–10 |

## 1.6. Secuenciación didáctica (12 sesiones)

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

## 1.6.1. Tratamiento explícito del bloque B.1

| Saber (B.1) | Cómo se trabaja en la SdA 3 | Sesiones | Evidencia |
|-------------|-----------------------------|:--------:|-----------|
| **B.1.1** SGBD y ventajas frente a archivos | Diagnóstico de datos dispersos y comparación archivos/SGBD | 0, 1 | Informe de diagnóstico |
| **B.1.2** Diseño, E-R, esquema relacional y normalización | Modelado del invernadero, transformación a tablas y normalización | 2–4 | Diagrama E-R + esquema + diccionario de datos |
| **B.1.3** Creación y manipulación con SQL | Scripts de `CREATE`, `INSERT`, `SELECT`, `UPDATE` y `DELETE` | 5–10 | Scripts + base de datos + catálogo de consultas |

## 1.7. Evaluación de la SdA 3

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

## 1.8. Materiales y recursos

- Aula de informática con **SQLite**, **DB Browser for SQLite**, VS Code (extensión SQLite) y Git.
- Alternativa: servidor **MariaDB/MySQL** del centro, si se dispone de él.
- Herramienta de diagramas E-R (draw.io/diagrams.net).
- Conjunto de datos de ejemplo `datos_invernadero.csv` (invernaderos, parcelas, cultivos y cosechas).
- Guiones de prácticas, plantilla de diagrama E-R, plantilla de diccionario de datos y plantilla de plan de pruebas.
- Chuleta de SQL y documentación oficial de SQLite.
- **Solucionario del profesorado:** `sda3_ejercicios_resueltos.md` y script completo `invernadero.sql`.
- Proyector para las demostraciones finales.

## 1.9. Evaluación de la práctica docente

- Análisis de los errores más frecuentes en los scripts SQL (claves foráneas, `WHERE` ausente, tipos de datos) para reforzar en futuras ediciones.
- Cuestionario de percepción del alumnado sobre la utilidad y la cercanía del contexto del invernadero.
- Revisión de la temporalización, de las plantillas de apoyo y del nivel de exigencia en la normalización.
- Comparación de resultados con las SdA 1 y 2 para valorar la progresión en abstracción, modelado y explotación de datos.

---

# Anexos

## Anexo A · Rúbrica específica de bases de datos (SdA 3)

| Criterio | 4 — Excelente | 3 — Adecuado | 2 — En desarrollo | 1 — Insuficiente |
|----------|---------------|--------------|-------------------|------------------|
| Modelo E-R | Entidades, atributos y relaciones completos, con claves y cardinalidades bien justificadas | Modelo correcto con algún detalle mejorable | Modelo incompleto o con relaciones confusas | No representa el dominio o es incoherente |
| Esquema relacional y normalización | Esquema correcto, claves bien definidas y normalización justificada hasta 3FN | Esquema correcto con justificación básica | Esquema con errores o normalización insuficiente | No obtiene un esquema relacional válido |
| `CREATE` e `INSERT` | Crea todas las tablas con restricciones y carga datos coherentes respetando la integridad | Crea y carga lo esencial con algún fallo menor | Errores de claves o de tipos que impiden parte del funcionamiento | No crea la base de datos o no inserta datos |
| `SELECT` | Consultas variadas con filtros, ordenación, uniones y agregaciones correctas | Consultas correctas de complejidad media | Consultas básicas con errores frecuentes | No formula consultas correctas |
| `UPDATE` y `DELETE` | Modifica y elimina con precisión, usando `WHERE` y verificando el resultado | Operaciones correctas con comprobación básica | Errores o falta de comprobación | Modifica o elimina datos de forma incorrecta |
| Documentación y pruebas | Memoria, diccionario y catálogo completos; plan de pruebas riguroso | Documentación suficiente y pruebas básicas | Documentación escasa o pruebas incompletas | Sin documentación ni pruebas |

## Anexo B · Lista de cotejo — entrega de repositorio (SdA 3)

- [ ] El repositorio tiene `README.md` con instrucciones de uso.
- [ ] Los *commits* son frecuentes y descriptivos.
- [ ] El código y los scripts SQL siguen un estilo homogéneo (PEP 8 / convenciones SQL).
- [ ] Existen comentarios/docstrings en clases, funciones y scripts principales.
- [ ] Se incluyen datos de ejemplo y se documenta el formato de archivo o el esquema de la base de datos.
- [ ] El programa arranca desde cero sin errores o la base de datos se crea y carga sin errores.

## Anexo C · Diario de aprendizaje (autoevaluación)

1. ¿Qué he aprendido en esta situación de aprendizaje?
2. ¿Qué parte me ha resultado más difícil y cómo la he resuelto?
3. ¿Cómo he colaborado con mi pareja/grupo?
4. ¿Qué mejoraría si volviera a empezar?
5. Valoración personal del resultado (1–5) y por qué.

## Anexo D · Banco de retos de ampliación (SdA 3)

- Añadir índices y vistas a `InvernaderoDB` para optimizar consultas.
- Conectar `InvernaderoDB` con una aplicación Python que consulte y muestre los datos.
- Migrar la base de datos a MariaDB/MySQL y comparar ambas soluciones.
- Añadir un informe de explotación con gráficos a partir de las consultas.
- Incorporar control de acceso y copias de seguridad.

## Anexo E · Correspondencia con los saberes básicos (SdA 3)

| Saber básico | SdA 3 |
|--------------|:-----:|
| B.1.1 SGBD y ventajas frente a los archivos | ✔ |
| B.1.2 Diseño E-R, esquema relacional y normalización | ✔ |
| B.1.3 Creación y manipulación con SQL (Create, Insert, Delete, Select, Update) | ✔ |
