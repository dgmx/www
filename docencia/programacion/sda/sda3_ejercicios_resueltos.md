# SdA 3 — Ejercicios resueltos · InvernaderoDB

**Programación y Computación · 2.º de Bachillerato · Bloque B.1. Bases de datos relacionales**

Este documento es el **solucionario del profesorado** de la SdA 3. Contiene el modelo de datos, el script SQL completo, dieciséis ejercicios resueltos (doce consultas y cuatro operaciones de modificación), pruebas de integridad y un ejercicio de normalización. El script ejecutable se entrega también en `invernadero.sql`.

> **Uso didáctico.** Los ejercicios pueden proyectarse sin la solución para trabajarlos en clase y utilizarse después como referencia o para la corrección. Las consultas están ordenadas de menor a mayor dificultad y cubren los tres saberes del bloque B.1.

## 1. Modelo de datos

### 1.1. Entidades y relaciones

| Entidad | Atributos principales |
|---------|-----------------------|
| **Invernadero** | `id_invernadero`, `nombre`, `ubicacion`, `superficie_m2`, `tipo_estructura` |
| **Cultivo** | `id_cultivo`, `nombre`, `variedad`, `ciclo`, `precio_kg` |
| **Parcela** | `id_parcela`, `codigo`, `id_invernadero`, `id_cultivo`, `superficie_m2`, `fecha_plantacion`, `estado` |
| **Cosecha** | `id_cosecha`, `id_parcela`, `fecha`, `kg`, `precio_kg`, `destino` |

Relaciones:

- Un **invernadero** tiene muchas **parcelas** (1:N).
- Un **cultivo** puede estar en muchas **parcelas** (1:N).
- Una **parcela** puede tener muchas **cosechas** (1:N).

```text
Invernadero (1) ─────< Parcela >───── (1) Cultivo
                           │
                           │ (1:N)
                           ▼
                        Cosecha
```

### 1.2. Esquema relacional

```text
Invernadero(id_invernadero PK, nombre UNIQUE, ubicacion, superficie_m2, tipo_estructura)
Cultivo(id_cultivo PK, nombre, variedad, ciclo, precio_kg, UNIQUE(nombre, variedad))
Parcela(id_parcela PK, codigo UNIQUE, id_invernadero FK, id_cultivo FK,
        superficie_m2, fecha_plantacion, estado)
Cosecha(id_cosecha PK, id_parcela FK, fecha, kg, precio_kg, destino)
```

### 1.3. Diccionario de datos

| Tabla | Campo | Tipo | Restricción | Descripción |
|-------|-------|------|-------------|-------------|
| Invernadero | `id_invernadero` | INTEGER | PK, AUTOINCREMENT | Identificador interno |
| Invernadero | `nombre` | TEXT | NOT NULL, UNIQUE | Nombre del invernadero |
| Invernadero | `ubicacion` | TEXT | NOT NULL | Paraje o dirección |
| Invernadero | `superficie_m2` | REAL | NOT NULL, CHECK > 0 | Superficie total |
| Invernadero | `tipo_estructura` | TEXT | CHECK | Multitúnel, Invernadero o Macrotúnel |
| Cultivo | `id_cultivo` | INTEGER | PK, AUTOINCREMENT | Identificador interno |
| Cultivo | `nombre` | TEXT | NOT NULL | Nombre del cultivo |
| Cultivo | `variedad` | TEXT | NOT NULL | Variedad cultivada |
| Cultivo | `ciclo` | TEXT | CHECK | Corto, Medio o Largo |
| Cultivo | `precio_kg` | REAL | NOT NULL, CHECK > 0 | Precio de referencia por kg |
| Parcela | `id_parcela` | INTEGER | PK, AUTOINCREMENT | Identificador interno |
| Parcela | `codigo` | TEXT | NOT NULL, UNIQUE | Código visible de la parcela |
| Parcela | `id_invernadero` | INTEGER | FK, NOT NULL | Invernadero al que pertenece |
| Parcela | `id_cultivo` | INTEGER | FK, NOT NULL | Cultivo plantado |
| Parcela | `superficie_m2` | REAL | NOT NULL, CHECK > 0 | Superficie de la parcela |
| Parcela | `fecha_plantacion` | TEXT | NOT NULL | Fecha en formato ISO |
| Parcela | `estado` | TEXT | CHECK, DEFAULT | Activa, En reposo o Preparación |
| Cosecha | `id_cosecha` | INTEGER | PK, AUTOINCREMENT | Identificador interno |
| Cosecha | `id_parcela` | INTEGER | FK, NOT NULL | Parcela de origen |
| Cosecha | `fecha` | TEXT | NOT NULL | Fecha de recogida |
| Cosecha | `kg` | REAL | NOT NULL, CHECK > 0 | Kilogramos recogidos |
| Cosecha | `precio_kg` | REAL | NOT NULL, CHECK > 0 | Precio real de venta |
| Cosecha | `destino` | TEXT | CHECK | Cooperativa, Mercado local o Venta directa |

### 1.4. Justificación de la normalización

El esquema está en **tercera forma normal (3FN)**:

- **1FN:** todos los atributos son atómicos; no hay listas ni valores repetidos en una celda.
- **2FN:** todas las tablas tienen clave primaria simple, por lo que no existen dependencias parciales.
- **3FN:** los atributos no clave dependen únicamente de la clave de su tabla. Los datos del invernadero no se repiten en cada cosecha, sino que se guardan una sola vez en `Invernadero` y se referencian mediante `id_invernadero`.

`Cosecha.precio_kg` se mantiene de forma intencionada: no es el precio de catálogo del cultivo, sino el **precio real de venta** de esa cosecha concreta, que puede variar con el mercado.

## 2. Script completo de la base de datos

El siguiente script crea las tablas, inserta los datos de ejemplo y deja la base de datos lista para los ejercicios.

```sql
-- ============================================================
-- InvernaderoDB v1.0 · Solución completa
-- Ejecutar: sqlite3 invernadero.db < invernadero.sql
-- ============================================================

PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS Cosecha;
DROP TABLE IF EXISTS Parcela;
DROP TABLE IF EXISTS Cultivo;
DROP TABLE IF EXISTS Invernadero;

CREATE TABLE Invernadero (
    id_invernadero   INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre           TEXT    NOT NULL UNIQUE,
    ubicacion        TEXT    NOT NULL,
    superficie_m2    REAL    NOT NULL CHECK (superficie_m2 > 0),
    tipo_estructura  TEXT    NOT NULL CHECK (tipo_estructura IN ('Multitúnel', 'Invernadero', 'Macrotúnel'))
);

CREATE TABLE Cultivo (
    id_cultivo  INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre      TEXT    NOT NULL,
    variedad    TEXT    NOT NULL,
    ciclo       TEXT    NOT NULL CHECK (ciclo IN ('Corto', 'Medio', 'Largo')),
    precio_kg   REAL    NOT NULL CHECK (precio_kg > 0),
    UNIQUE (nombre, variedad)
);

CREATE TABLE Parcela (
    id_parcela        INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo            TEXT    NOT NULL UNIQUE,
    id_invernadero    INTEGER NOT NULL,
    id_cultivo        INTEGER NOT NULL,
    superficie_m2     REAL    NOT NULL CHECK (superficie_m2 > 0),
    fecha_plantacion  TEXT    NOT NULL,
    estado            TEXT    NOT NULL DEFAULT 'Activa' CHECK (estado IN ('Activa', 'En reposo', 'Preparación')),
    FOREIGN KEY (id_invernadero) REFERENCES Invernadero (id_invernadero)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (id_cultivo) REFERENCES Cultivo (id_cultivo)
        ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE Cosecha (
    id_cosecha  INTEGER PRIMARY KEY AUTOINCREMENT,
    id_parcela  INTEGER NOT NULL,
    fecha       TEXT    NOT NULL,
    kg          REAL    NOT NULL CHECK (kg > 0),
    precio_kg   REAL    NOT NULL CHECK (precio_kg > 0),
    destino     TEXT    NOT NULL CHECK (destino IN ('Cooperativa', 'Mercado local', 'Venta directa')),
    FOREIGN KEY (id_parcela) REFERENCES Parcela (id_parcela)
        ON UPDATE CASCADE ON DELETE RESTRICT
);

INSERT INTO Invernadero (id_invernadero, nombre, ubicacion, superficie_m2, tipo_estructura) VALUES
    (1, 'El Tomillar', 'Paraje Los Llanos', 1200, 'Multitúnel'),
    (2, 'La Vega', 'Camino de la Vega', 900, 'Invernadero'),
    (3, 'El Saladar', 'Paraje El Saladar', 1500, 'Macrotúnel');

INSERT INTO Cultivo (id_cultivo, nombre, variedad, ciclo, precio_kg) VALUES
    (1, 'Tomate', 'Ramallet', 'Largo', 1.20),
    (2, 'Pimiento', 'California', 'Medio', 1.80),
    (3, 'Pepino', 'Español', 'Corto', 0.95),
    (4, 'Calabacín', 'Negro', 'Corto', 1.10);

INSERT INTO Parcela (id_parcela, codigo, id_invernadero, id_cultivo, superficie_m2, fecha_plantacion, estado) VALUES
    (1, 'P-01', 1, 1, 400, '2026-02-10', 'Activa'),
    (2, 'P-02', 1, 2, 350, '2026-02-15', 'Activa'),
    (3, 'P-03', 2, 3, 300, '2026-03-01', 'Activa'),
    (4, 'P-04', 2, 4, 280, '2026-03-05', 'Activa'),
    (5, 'P-05', 3, 1, 500, '2026-02-20', 'Activa'),
    (6, 'P-06', 3, 3, 450, '2026-04-01', 'En reposo');

INSERT INTO Cosecha (id_cosecha, id_parcela, fecha, kg, precio_kg, destino) VALUES
    (1, 1, '2026-04-15', 850, 1.25, 'Cooperativa'),
    (2, 1, '2026-05-02', 920, 1.30, 'Cooperativa'),
    (3, 2, '2026-04-20', 600, 1.85, 'Mercado local'),
    (4, 2, '2026-05-10', 650, 1.90, 'Mercado local'),
    (5, 3, '2026-04-25', 480, 1.00, 'Venta directa'),
    (6, 3, '2026-05-15', 510, 1.05, 'Cooperativa'),
    (7, 4, '2026-04-30', 390, 1.15, 'Venta directa'),
    (8, 4, '2026-05-20', 420, 1.20, 'Mercado local'),
    (9, 5, '2026-04-18', 1100, 1.22, 'Cooperativa'),
    (10, 5, '2026-05-05', 1250, 1.28, 'Cooperativa'),
    (11, 1, '2026-05-20', 780, 1.35, 'Mercado local'),
    (12, 2, '2026-05-25', 580, 1.95, 'Venta directa'),
    (13, 3, '2026-06-01', 450, 0.98, 'Cooperativa'),
    (14, 5, '2026-06-10', 980, 1.30, 'Venta directa');
```

### 2.1. Correspondencia con las sesiones de la SdA 3

| Sesión | Producto | Parte del solucionario |
|--------|----------|------------------------|
| Sesión 5 | `05_create.sql` | Creación de tablas (apartado 2) |
| Sesión 6 | `06_insert.sql` | Inserción de datos (apartado 2) |
| Sesión 7 | `07_select_basico.sql` | Ejercicios 1–3 |
| Sesión 8 | `08_consultas_agregadas.sql` | Ejercicios 4–12 |
| Sesión 9 | `09_update_delete.sql` | Ejercicios 13–16 |
| Sesión 10 | `10_pruebas.sql` | Apartado 4 |

## 3. Ejercicios resueltos

### Ejercicio 1. Listado de invernaderos

**Enunciado:** obtén el nombre, la ubicación y la superficie de todos los invernaderos, ordenados de mayor a menor superficie.

```sql
SELECT nombre, ubicacion, superficie_m2
FROM Invernadero
ORDER BY superficie_m2 DESC;
```

**Resultado esperado:**

| nombre | ubicacion | superficie_m2 |
|--------|-----------|---------------|
| El Saladar | Paraje El Saladar | 1500.0 |
| El Tomillar | Paraje Los Llanos | 1200.0 |
| La Vega | Camino de la Vega | 900.0 |

**Explicación:** `ORDER BY ... DESC` ordena de mayor a menor. No se usa `WHERE` porque se piden todos los registros.

### Ejercicio 2. Parcelas activas con su invernadero y cultivo

**Enunciado:** muestra el código de cada parcela activa, el nombre del invernadero, el cultivo y su superficie.

```sql
SELECT p.codigo,
       i.nombre AS invernadero,
       c.nombre AS cultivo,
       p.superficie_m2,
       p.estado
FROM Parcela p
JOIN Invernadero i ON i.id_invernadero = p.id_invernadero
JOIN Cultivo c ON c.id_cultivo = p.id_cultivo
WHERE p.estado = 'Activa'
ORDER BY i.nombre, p.codigo;
```

**Resultado esperado:**

| codigo | invernadero | cultivo | superficie_m2 | estado |
|--------|-------------|---------|---------------|--------|
| P-05 | El Saladar | Tomate | 500.0 | Activa |
| P-01 | El Tomillar | Tomate | 400.0 | Activa |
| P-02 | El Tomillar | Pimiento | 350.0 | Activa |
| P-03 | La Vega | Pepino | 300.0 | Activa |
| P-04 | La Vega | Calabacín | 280.0 | Activa |

**Explicación:** se necesitan dos `JOIN` porque los nombres del invernadero y del cultivo están en tablas distintas. `P-06` no aparece porque está `En reposo`.

### Ejercicio 3. Cultivos con precio superior a 1,10 €/kg

**Enunciado:** lista los cultivos cuyo precio de referencia supere 1,10 €/kg, ordenados de mayor a menor precio.

```sql
SELECT nombre, variedad, precio_kg
FROM Cultivo
WHERE precio_kg > 1.10
ORDER BY precio_kg DESC;
```

**Resultado esperado:**

| nombre | variedad | precio_kg |
|--------|----------|-----------|
| Pimiento | California | 1.8 |
| Tomate | Ramallet | 1.2 |

**Explicación:** el filtro se aplica con `WHERE` antes de ordenar. El pepino (0,95) y el calabacín (1,10) no cumplen la condición estricta `>`.

### Ejercicio 4. Kilos totales por invernadero

**Enunciado:** calcula los kilogramos totales cosechados en cada invernadero, ordenados de mayor a menor.

```sql
SELECT i.nombre AS invernadero,
       ROUND(SUM(co.kg), 2) AS kg_totales
FROM Invernadero i
JOIN Parcela p ON p.id_invernadero = i.id_invernadero
JOIN Cosecha co ON co.id_parcela = p.id_parcela
GROUP BY i.id_invernadero, i.nombre
ORDER BY kg_totales DESC;
```

**Resultado esperado:**

| invernadero | kg_totales |
|-------------|------------|
| El Tomillar | 4380.0 |
| El Saladar | 3330.0 |
| La Vega | 2250.0 |

**Explicación:** se agrupa por invernadero y se suma `kg`. Se incluye `i.id_invernadero` en el `GROUP BY` para evitar ambigüedades si dos invernaderos tuvieran el mismo nombre.

### Ejercicio 5. Producción y precio medio por cultivo

**Enunciado:** obtén los kilos totales y el precio medio de venta de cada cultivo.

```sql
SELECT c.nombre AS cultivo,
       c.variedad,
       ROUND(SUM(co.kg), 2) AS kg_totales,
       ROUND(AVG(co.precio_kg), 2) AS precio_medio
FROM Cultivo c
JOIN Parcela p ON p.id_cultivo = c.id_cultivo
JOIN Cosecha co ON co.id_parcela = p.id_parcela
GROUP BY c.id_cultivo, c.nombre, c.variedad
ORDER BY kg_totales DESC;
```

**Resultado esperado:**

| cultivo | variedad | kg_totales | precio_medio |
|---------|----------|------------|--------------|
| Tomate | Ramallet | 5880.0 | 1.28 |
| Pimiento | California | 1830.0 | 1.9 |
| Pepino | Español | 1440.0 | 1.01 |
| Calabacín | Negro | 810.0 | 1.17 |

**Explicación:** `SUM` acumula los kilos y `AVG` calcula la media de los precios reales de venta. No se usa el precio de catálogo de `Cultivo`, sino el de cada cosecha.

### Ejercicio 6. Cosechas y kilos por destino

**Enunciado:** cuenta cuántas cosechas se han destinado a cada destino y cuántos kilos se han recogido.

```sql
SELECT destino,
       COUNT(*) AS num_cosechas,
       ROUND(SUM(kg), 2) AS kg_totales
FROM Cosecha
GROUP BY destino
ORDER BY kg_totales DESC;
```

**Resultado esperado:**

| destino | num_cosechas | kg_totales |
|---------|--------------|------------|
| Cooperativa | 6 | 5080.0 |
| Mercado local | 4 | 2450.0 |
| Venta directa | 4 | 2430.0 |

**Explicación:** `COUNT(*)` cuenta filas y `SUM(kg)` suma los kilos de cada grupo. El total de las tres filas coincide con los 9960 kg de todas las cosechas.

### Ejercicio 7. Parcelas sin ninguna cosecha

**Enunciado:** localiza las parcelas que todavía no tienen ninguna cosecha registrada.

```sql
SELECT p.codigo,
       i.nombre AS invernadero,
       c.nombre AS cultivo
FROM Parcela p
JOIN Invernadero i ON i.id_invernadero = p.id_invernadero
JOIN Cultivo c ON c.id_cultivo = p.id_cultivo
LEFT JOIN Cosecha co ON co.id_parcela = p.id_parcela
WHERE co.id_cosecha IS NULL;
```

**Resultado esperado:**

| codigo | invernadero | cultivo |
|--------|-------------|---------|
| P-06 | El Saladar | Pepino |

**Explicación:** `LEFT JOIN` conserva todas las parcelas, aunque no tengan cosecha. Las que no tienen coincidencia presentan `NULL` en la tabla `Cosecha`. Una alternativa equivalente sería `WHERE NOT EXISTS (SELECT 1 FROM Cosecha co WHERE co.id_parcela = p.id_parcela)`.

### Ejercicio 8. Cosechas con ingresos superiores a 1200 €

**Enunciado:** muestra las cosechas cuyos ingresos (`kg × precio_kg`) superan los 1200 €, ordenadas de mayor a menor ingreso.

```sql
SELECT co.id_cosecha,
       p.codigo,
       co.fecha,
       co.kg,
       co.precio_kg,
       ROUND(co.kg * co.precio_kg, 2) AS ingresos
FROM Cosecha co
JOIN Parcela p ON p.id_parcela = co.id_parcela
WHERE co.kg * co.precio_kg > 1200
ORDER BY ingresos DESC;
```

**Resultado esperado:**

| id_cosecha | codigo | fecha | kg | precio_kg | ingresos |
|------------|--------|-------|----|-----------|----------|
| 10 | P-05 | 2026-05-05 | 1250.0 | 1.28 | 1600.0 |
| 9 | P-05 | 2026-04-18 | 1100.0 | 1.22 | 1342.0 |
| 14 | P-05 | 2026-06-10 | 980.0 | 1.3 | 1274.0 |
| 4 | P-02 | 2026-05-10 | 650.0 | 1.9 | 1235.0 |

**Explicación:** se puede operar con columnas en el `SELECT` y en el `WHERE`. `ROUND(..., 2)` redondea el resultado a dos decimales.

### Ejercicio 9. Media de kilos por cosecha y invernadero

**Enunciado:** calcula la media de kilos por cosecha en cada invernadero, mostrando solo aquellos cuya media supere los 500 kg.

```sql
SELECT i.nombre AS invernadero,
       ROUND(AVG(co.kg), 2) AS kg_medio_por_cosecha,
       COUNT(*) AS num_cosechas
FROM Invernadero i
JOIN Parcela p ON p.id_invernadero = i.id_invernadero
JOIN Cosecha co ON co.id_parcela = p.id_parcela
GROUP BY i.id_invernadero, i.nombre
HAVING AVG(co.kg) > 500
ORDER BY kg_medio_por_cosecha DESC;
```

**Resultado esperado:**

| invernadero | kg_medio_por_cosecha | num_cosechas |
|-------------|----------------------|--------------|
| El Saladar | 1110.0 | 3 |
| El Tomillar | 730.0 | 6 |

**Explicación:** `HAVING` filtra grupos ya calculados; no se puede sustituir por `WHERE`, porque la media se obtiene después de agrupar. La Vega queda fuera al tener una media de 450 kg.

### Ejercicio 10. Última cosecha de cada parcela

**Enunciado:** muestra la fecha y los kilos de la cosecha más reciente de cada parcela.

```sql
SELECT p.codigo, co.fecha, co.kg
FROM Cosecha co
JOIN Parcela p ON p.id_parcela = co.id_parcela
WHERE co.fecha = (
    SELECT MAX(co2.fecha)
    FROM Cosecha co2
    WHERE co2.id_parcela = co.id_parcela
)
ORDER BY p.codigo;
```

**Resultado esperado:**

| codigo | fecha | kg |
|--------|-------|----|
| P-01 | 2026-05-20 | 780.0 |
| P-02 | 2026-05-25 | 580.0 |
| P-03 | 2026-06-01 | 450.0 |
| P-04 | 2026-05-20 | 420.0 |
| P-05 | 2026-06-10 | 980.0 |

**Explicación:** la subconsulta correlacionada obtiene la fecha máxima de cada parcela. `P-06` no aparece porque no tiene cosechas. En SQLite también podría resolverse con una función de ventana, pero se ha optado por una solución básica.

### Ejercicio 11. Rendimiento por metro cuadrado

**Enunciado:** calcula los kilos cosechados por metro cuadrado en cada invernadero.

```sql
SELECT i.nombre AS invernadero,
       i.superficie_m2,
       ROUND(SUM(co.kg), 2) AS kg_totales,
       ROUND(SUM(co.kg) / i.superficie_m2, 2) AS kg_por_m2
FROM Invernadero i
JOIN Parcela p ON p.id_invernadero = i.id_invernadero
JOIN Cosecha co ON co.id_parcela = p.id_parcela
GROUP BY i.id_invernadero, i.nombre, i.superficie_m2
ORDER BY kg_por_m2 DESC;
```

**Resultado esperado:**

| invernadero | superficie_m2 | kg_totales | kg_por_m2 |
|-------------|---------------|------------|-----------|
| El Tomillar | 1200.0 | 4380.0 | 3.65 |
| La Vega | 900.0 | 2250.0 | 2.5 |
| El Saladar | 1500.0 | 3330.0 | 2.22 |

**Explicación:** se divide la suma de kilos entre la superficie total del invernadero. Es un indicador útil para comparar la eficiencia productiva.

### Ejercicio 12. Ingresos totales por invernadero

**Enunciado:** calcula los ingresos totales generados por las cosechas de cada invernadero.

```sql
SELECT i.nombre AS invernadero,
       ROUND(SUM(co.kg * co.precio_kg), 2) AS ingresos_totales
FROM Invernadero i
JOIN Parcela p ON p.id_invernadero = i.id_invernadero
JOIN Cosecha co ON co.id_parcela = p.id_parcela
GROUP BY i.id_invernadero, i.nombre
ORDER BY ingresos_totales DESC;
```

**Resultado esperado:**

| invernadero | ingresos_totales |
|-------------|------------------|
| El Tomillar | 6787.5 |
| El Saladar | 4216.0 |
| La Vega | 2409.0 |

**Explicación:** el ingreso de cada cosecha es `kg × precio_kg`; después se suma por invernadero. El total global sería 13 412,50 €.

### Ejercicio 13. Insertar una nueva cosecha

**Enunciado:** registra una cosecha de 300 kg de pepino en la parcela `P-06`, con fecha `2026-06-15`, a 0,99 €/kg y destino cooperativa. Comprueba el resultado y deshaz el cambio para no alterar los datos de ejemplo.

```sql
BEGIN TRANSACTION;

INSERT INTO Cosecha (id_parcela, fecha, kg, precio_kg, destino)
VALUES (6, '2026-06-15', 300, 0.99, 'Cooperativa');

SELECT id_cosecha, id_parcela, fecha, kg, precio_kg, destino
FROM Cosecha
WHERE id_parcela = 6;

ROLLBACK;
```

**Resultado esperado:**

| id_cosecha | id_parcela | fecha | kg | precio_kg | destino |
|------------|------------|-------|----|-----------|---------|
| 15 | 6 | 2026-06-15 | 300.0 | 0.99 | Cooperativa |

**Explicación:** no se indica `id_cosecha` porque es `AUTOINCREMENT`. La transacción permite comprobar el efecto y deshacerlo con `ROLLBACK`.

### Ejercicio 14. Actualizar el precio de un cultivo

**Enunciado:** sube el precio de referencia del tomate Ramallet a 1,25 €/kg. Comprueba el cambio y deshazlo.

```sql
BEGIN TRANSACTION;

UPDATE Cultivo
SET precio_kg = 1.25
WHERE nombre = 'Tomate' AND variedad = 'Ramallet';

SELECT nombre, variedad, precio_kg
FROM Cultivo
WHERE nombre = 'Tomate';

ROLLBACK;
```

**Resultado esperado:**

| nombre | variedad | precio_kg |
|--------|----------|-----------|
| Tomate | Ramallet | 1.25 |

**Explicación:** el `WHERE` combina nombre y variedad para no afectar a otros tomates. Sin `WHERE`, se actualizarían todas las filas de la tabla.

### Ejercicio 15. Borrar una cosecha errónea

**Enunciado:** elimina la cosecha con `id_cosecha = 13`, comprueba cuántas quedan y deshaz el borrado.

```sql
BEGIN TRANSACTION;

DELETE FROM Cosecha
WHERE id_cosecha = 13;

SELECT COUNT(*) AS cosechas_restantes
FROM Cosecha;

ROLLBACK;
```

**Resultado esperado:**

| cosechas_restantes |
|--------------------|
| 13 |

**Explicación:** el `WHERE` limita el borrado a una sola fila. Antes de borrar conviene comprobar con un `SELECT` que el registro es el correcto.

### Ejercicio 16. Cambiar el estado de una parcela

**Enunciado:** pasa la parcela `P-06` de "En reposo" a "Activa". Comprueba el cambio y deshazlo.

```sql
BEGIN TRANSACTION;

UPDATE Parcela
SET estado = 'Activa'
WHERE codigo = 'P-06';

SELECT codigo, estado
FROM Parcela
WHERE codigo = 'P-06';

ROLLBACK;
```

**Resultado esperado:**

| codigo | estado |
|--------|--------|
| P-06 | Activa |

**Explicación:** se usa el código de parcela, que es `UNIQUE`, para identificar la fila sin ambigüedad. El valor debe pertenecer a la lista permitida por el `CHECK`.

## 4. Pruebas de integridad

Estas pruebas permiten comprobar que las restricciones funcionan. Deben ejecutarse con `PRAGMA foreign_keys = ON;`.

| Prueba | Sentencia | Resultado esperado |
|--------|-----------|--------------------|
| Clave foránea inexistente | `INSERT INTO Cosecha (id_parcela, fecha, kg, precio_kg, destino) VALUES (99, '2026-06-15', 100, 1.0, 'Cooperativa');` | `FOREIGN KEY constraint failed` |
| Borrado con parcelas asociadas | `DELETE FROM Invernadero WHERE id_invernadero = 1;` | `FOREIGN KEY constraint failed` |
| Nombre de invernadero duplicado | `INSERT INTO Invernadero (nombre, ubicacion, superficie_m2, tipo_estructura) VALUES ('El Tomillar', 'Otra', 100, 'Invernadero');` | `UNIQUE constraint failed: Invernadero.nombre` |
| Superficie negativa | `INSERT INTO Parcela (codigo, id_invernadero, id_cultivo, superficie_m2, fecha_plantacion) VALUES ('P-99', 1, 1, -5, '2026-01-01');` | `CHECK constraint failed: superficie_m2 > 0` |

**Explicación:** las pruebas demuestran que la base de datos no acepta datos incoherentes. El `ON DELETE RESTRICT` impide borrar un invernadero mientras tenga parcelas; primero habría que borrar o reasignar esas parcelas.

## 5. Ejercicio de normalización resuelto

**Enunciado:** se propone la siguiente tabla única para registrar las cosechas:

```text
RegistroCosecha(
    id_cosecha, fecha, invernadero, ubicacion, superficie_invernadero,
    cultivo, variedad, precio_cultivo, kg, precio_kg, destino
)
```

**Problemas detectados:**

- **Redundancia:** los datos del invernadero y del cultivo se repiten en cada cosecha.
- **Anomalía de actualización:** si cambia la ubicación de un invernadero, hay que modificar muchas filas.
- **Anomalía de inserción:** no se puede dar de alta un invernadero o un cultivo hasta que tenga una cosecha.
- **Anomalía de borrado:** al borrar la última cosecha se pierden los datos del invernadero y del cultivo.

**Dependencias funcionales principales:**

```text
id_cosecha → fecha, id_parcela, kg, precio_kg, destino
id_parcela → id_invernadero, id_cultivo, superficie_m2, fecha_plantacion, estado
id_invernadero → nombre, ubicacion, superficie_m2, tipo_estructura
id_cultivo → nombre, variedad, ciclo, precio_kg
```

**Descomposición en 3FN:**

```text
Invernadero(id_invernadero PK, nombre, ubicacion, superficie_m2, tipo_estructura)
Cultivo(id_cultivo PK, nombre, variedad, ciclo, precio_kg)
Parcela(id_parcela PK, codigo, id_invernadero FK, id_cultivo FK,
        superficie_m2, fecha_plantacion, estado)
Cosecha(id_cosecha PK, id_parcela FK, fecha, kg, precio_kg, destino)
```

**Justificación:** cada hecho se guarda una sola vez en la tabla que le corresponde. Las tablas `Parcela` y `Cosecha` referencian a las demás mediante claves foráneas, lo que evita duplicidades y garantiza la integridad de los datos.

## 6. Checklist de entrega de la SdA 3

- [ ] El diagrama E-R incluye las cuatro entidades y sus cardinalidades.
- [ ] El esquema relacional define claves primarias y foráneas.
- [ ] La normalización está justificada y el esquema está en 3FN.
- [ ] El script `invernadero.sql` se ejecuta sin errores desde cero.
- [ ] Las tablas tienen las restricciones adecuadas (`NOT NULL`, `UNIQUE`, `CHECK`, `FOREIGN KEY`).
- [ ] Los datos de ejemplo respetan la integridad referencial.
- [ ] El catálogo incluye al menos diez consultas con su finalidad.
- [ ] Las consultas usan `WHERE`, `ORDER BY`, `JOIN`, `GROUP BY` y funciones de agregación.
- [ ] Las operaciones `UPDATE` y `DELETE` siempre incluyen `WHERE`.
- [ ] Se han probado casos normales, límite y erróneos.
- [ ] La memoria recoge las decisiones de diseño y las mejoras frente a los archivos.
