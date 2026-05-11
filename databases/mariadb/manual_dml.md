# Manual DML — MySQL / MariaDB

---

## 1. SELECT

### 1.1 SELECT básico

```sql
SELECT * FROM empleados;
SELECT id, nombre, apellido FROM empleados;
```

### 1.2 ALIAS

```sql
SELECT nombre AS nom, salario AS sueldo FROM empleados;
SELECT e.id, e.nombre FROM empleados e;
```

### 1.3 DISTINCT

```sql
SELECT DISTINCT departamento_id FROM empleados;
```

### 1.4 WHERE

```sql
SELECT * FROM empleados WHERE salario > 2000;
SELECT * FROM empleados WHERE nombre = 'Carlos';
SELECT * FROM empleados WHERE salario BETWEEN 1500 AND 3000;
SELECT * FROM empleados WHERE nombre LIKE 'J%';
SELECT * FROM empleados WHERE departamento_id IN (1, 3, 5);
SELECT * FROM empleados WHERE salario IS NULL;
SELECT * FROM empleados WHERE salario IS NOT NULL;
```

### 1.5 Operadores lógicos

```sql
SELECT * FROM empleados
WHERE salario > 2000 AND activo = 1;

SELECT * FROM empleados
WHERE salario > 3000 OR departamento_id = 2;

SELECT * FROM empleados
WHERE NOT activo;
```

### 1.6 ORDER BY

```sql
SELECT * FROM empleados ORDER BY salario;
SELECT * FROM empleados ORDER BY salario DESC;
SELECT * FROM empleados ORDER BY apellido, nombre ASC;
```

### 1.7 LIMIT y OFFSET

```sql
SELECT * FROM empleados LIMIT 10;
SELECT * FROM empleados LIMIT 10 OFFSET 20;
SELECT * FROM empleados LIMIT 20, 10;  -- OFFSET, LIMIT
```

### 1.8 JOINs

```sql
-- INNER JOIN (solo coincidencias)
SELECT e.nombre, d.nombre AS departamento
FROM empleados e
INNER JOIN departamentos d ON e.departamento_id = d.id;

-- LEFT JOIN (todo de la izquierda, NULL si no coincide)
SELECT e.nombre, d.nombre AS departamento
FROM empleados e
LEFT JOIN departamentos d ON e.departamento_id = d.id;

-- RIGHT JOIN (todo de la derecha)
SELECT e.nombre, d.nombre AS departamento
FROM empleados e
RIGHT JOIN departamentos d ON e.departamento_id = d.id;

-- CROSS JOIN (producto cartesiano)
SELECT e.nombre, p.nombre
FROM empleados e
CROSS JOIN proyectos p;
```

### 1.9 Funciones de agregado

| Función | Descripción |
|---|---|
| `COUNT(*)` | Número de filas |
| `COUNT(col)` | Número de no-NULL |
| `COUNT(DISTINCT col)` | Número de valores distintos |
| `SUM(col)` | Suma |
| `AVG(col)` | Media |
| `MAX(col)` | Máximo |
| `MIN(col)` | Mínimo |

```sql
SELECT COUNT(*) FROM empleados;
SELECT AVG(salario) FROM empleados;
SELECT MAX(salario), MIN(salario) FROM empleados;
```

### 1.10 GROUP BY

```sql
SELECT departamento_id, COUNT(*) AS num_emp, AVG(salario) AS media_sal
FROM empleados
GROUP BY departamento_id;
```

### 1.11 HAVING

```sql
SELECT departamento_id, AVG(salario) AS media
FROM empleados
GROUP BY departamento_id
HAVING media >= 2500;
```

### 1.12 Subconsultas

```sql
-- Escalar
SELECT nombre, salario
FROM empleados
WHERE salario > (SELECT AVG(salario) FROM empleados);

-- En IN
SELECT * FROM departamentos
WHERE id IN (SELECT DISTINCT departamento_id FROM empleados);

-- Correlacionada
SELECT e.nombre, e.salario
FROM empleados e
WHERE e.salario > (
    SELECT AVG(salario) FROM empleados WHERE departamento_id = e.departamento_id
);
```

### 1.13 UNION

```sql
SELECT nombre FROM empleados
UNION
SELECT nombre FROM ex_empleados;

-- UNION ALL (permite duplicados)
SELECT nombre FROM empleados
UNION ALL
SELECT nombre FROM ex_empleados;
```

### 1.14 CASE

```sql
SELECT nombre, salario,
    CASE
        WHEN salario < 1500 THEN 'Bajo'
        WHEN salario BETWEEN 1500 AND 3000 THEN 'Medio'
        ELSE 'Alto'
    END AS categoria
FROM empleados;
```

### 1.15 COALESCE e IFNULL

```sql
-- COALESCE devuelve el primer no-NULL
SELECT nombre, COALESCE(telefono, 'Sin teléfono') FROM empleados;

-- IFNULL (solo MySQL)
SELECT nombre, IFNULL(telefono, 'Sin teléfono') FROM empleados;
```

### 1.16 EXISTS

```sql
SELECT * FROM departamentos d
WHERE EXISTS (
    SELECT 1 FROM empleados WHERE departamento_id = d.id
);
```

---

## 2. INSERT

```sql
-- Insertar una fila
INSERT INTO fabricante (nombre) VALUES ('Asus');

-- Insertar múltiples filas
INSERT INTO fabricante (nombre) VALUES ('Lenovo'), ('HP'), ('Dell');

-- Insertar en todas las columnas (sin especificar)
INSERT INTO fabricante VALUES (10, 'Apple');

-- Insertar con SELECT
INSERT INTO fabricante_audit (nombre, fecha)
SELECT nombre, NOW() FROM fabricante WHERE id > 5;

-- INSERT ... SET (MySQL específico)
INSERT INTO fabricante SET nombre = 'Xiaomi', activo = 1;
```

---

## 3. UPDATE

```sql
-- Actualizar una fila
UPDATE empleados SET salario = 2500 WHERE id = 1;

-- Actualizar múltiples columnas
UPDATE empleados
SET salario = 2800, activo = 0
WHERE id = 2;

-- Actualizar múltiples filas
UPDATE empleados
SET salario = salario * 1.10
WHERE departamento_id = 3;

-- UPDATE con JOIN
UPDATE empleados e
INNER JOIN departamentos d ON e.departamento_id = d.id
SET e.salario = e.salario * 1.15
WHERE d.nombre = 'Ventas';

-- UPDATE con subconsulta
UPDATE empleados
SET salario = (SELECT AVG(salario) FROM empleados)
WHERE id = 1;
```

---

## 4. DELETE

```sql
-- Eliminar una fila
DELETE FROM empleados WHERE id = 10;

-- Eliminar múltiples filas
DELETE FROM empleados WHERE activo = 0;

-- Eliminar todas las filas (lento, con registro)
DELETE FROM empleados;

-- DELETE con JOIN (MySQL)
DELETE e
FROM empleados e
INNER JOIN departamentos d ON e.departamento_id = d.id
WHERE d.nombre = 'Inactivos';

-- DELETE con subconsulta
DELETE FROM empleados
WHERE departamento_id NOT IN (SELECT id FROM departamentos);
```

---

## 5. TRUNCATE (DDL pero relacionado)

```sql
TRUNCATE TABLE empleados;
-- Elimina todas las filas sin registro individual
-- Resetea AUTO_INCREMENT
-- No se puede deshacer
```

---

## 6. REPLACE (MySQL específico)

```sql
-- Si existe (PK o UNIQUE duplicada) hace UPDATE, si no INSERT
REPLACE INTO fabricante (id, nombre) VALUES (1, 'Asus renovado');
```

---

## 7. INSERT ... ON DUPLICATE KEY UPDATE

```sql
INSERT INTO fabricante (id, nombre) VALUES (1, 'Asus')
ON DUPLICATE KEY UPDATE nombre = VALUES(nombre);
```

---

## 8. WITH (CTE — Common Table Expression)

```sql
WITH empleados_activos AS (
    SELECT id, nombre, salario
    FROM empleados
    WHERE activo = 1
)
SELECT * FROM empleados_activos WHERE salario > 2000;
```

### CTE recursiva

```sql
WITH RECURSIVE organigrama AS (
    SELECT id, nombre, jefe_id, 1 AS nivel
    FROM empleados
    WHERE jefe_id IS NULL
    UNION ALL
    SELECT e.id, e.nombre, e.jefe_id, o.nivel + 1
    FROM empleados e
    INNER JOIN organigrama o ON e.jefe_id = o.id
)
SELECT * FROM organigrama;
```

---

## Orden de ejecución de una consulta

```
FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT
```

**Importante:**
- `WHERE` filtra filas **antes** de agrupar → no puede usar agregadas
- `HAVING` filtra grupos **después** de agrupar → puede usar agregadas
- Los alias del `SELECT` solo se pueden usar en `ORDER BY` y `HAVING`, no en `WHERE`
