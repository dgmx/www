# Manual DDL — MySQL / MariaDB

---

## 1. CREATE DATABASE

```sql
CREATE DATABASE nombre_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE DATABASE IF NOT EXISTS nombre_db;
```

---

## 2. DROP DATABASE

```sql
DROP DATABASE nombre_db;
DROP DATABASE IF EXISTS nombre_db;
```

---

## 3. USE

```sql
USE nombre_db;
```

---

## 4. CREATE TABLE

```sql
CREATE TABLE nombre_tabla (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL DEFAULT 0,
    activo TINYINT(1) NOT NULL DEFAULT 1,
    categoria_id INT UNSIGNED,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
        ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### Tipos de datos comunes

| Tipo | Descripción |
|---|---|
| `INT` / `INT UNSIGNED` | Entero |
| `BIGINT` | Entero grande |
| `VARCHAR(n)` | Cadena variable (n = máx caracteres) |
| `CHAR(n)` | Cadena fija |
| `TEXT` | Texto largo |
| `DECIMAL(t,d)` | Decimal exacto (total, decimales) |
| `FLOAT` / `DOUBLE` | Decimal aproximado |
| `DATE` | Fecha (YYYY-MM-DD) |
| `DATETIME` | Fecha + hora |
| `TIMESTAMP` | Fecha + hora (zona horaria) |
| `BOOLEAN` / `TINYINT(1)` | Booleano |
| `ENUM('a','b','c')` | Valor de una lista |
| `BLOB` | Binario |

### Restricciones (constraints)

| Restricción | Descripción |
|---|---|
| `PRIMARY KEY` | Clave primaria (única + NOT NULL) |
| `UNIQUE` | Valor único |
| `NOT NULL` | No permite NULL |
| `DEFAULT valor` | Valor por defecto |
| `AUTO_INCREMENT` | Auto-incremental (solo enteros) |
| `CHECK(condición)` | Validación de valores (MySQL ≥ 8.0.16 / MariaDB) |
| `FOREIGN KEY` | Clave foránea |

### Opciones de tabla

```sql
ENGINE=InnoDB                    -- Motor (InnoDB recomendado)
DEFAULT CHARSET=utf8mb4          -- Cotejamiento
AUTO_INCREMENT=1000              -- Empezar desde otro número
COMMENT='Descripción de la tabla'
```

---

## 5. ALTER TABLE

### 5.1 Añadir columna

```sql
ALTER TABLE empleados ADD COLUMN telefono VARCHAR(20);
ALTER TABLE empleados ADD COLUMN telefono VARCHAR(20) AFTER nombre;
ALTER TABLE empleados ADD COLUMENTO telefono VARCHAR(20) FIRST;
```

### 5.2 Eliminar columna

```sql
ALTER TABLE empleados DROP COLUMN telefono;
```

### 5.3 Modificar tipo

```sql
ALTER TABLE empleados MODIFY COLUMN salario DECIMAL(12,2) NOT NULL;
```

### 5.4 Renombrar columna

```sql
-- MySQL
ALTER TABLE empleados CHANGE salario_antiguo salario DECIMAL(10,2);

-- MySQL 8+ / MariaDB
ALTER TABLE empleados RENAME COLUMN salario_antiguo TO salario;
```

### 5.5 Añadir PRIMARY KEY

```sql
ALTER TABLE empleados ADD PRIMARY KEY (id);
ALTER TABLE empleados DROP PRIMARY KEY, ADD PRIMARY KEY (id);
```

### 5.6 Añadir FOREIGN KEY

```sql
-- Con nombre (recomendado)
ALTER TABLE empleados
ADD CONSTRAINT fk_empleados_depto
FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
ON DELETE RESTRICT ON UPDATE CASCADE;

-- Sin nombre
ALTER TABLE empleados
ADD FOREIGN KEY (departamento_id) REFERENCES departamentos(id);
```

### 5.7 Eliminar FOREIGN KEY

```sql
ALTER TABLE empleados DROP FOREIGN KEY fk_empleados_depto;
```

### 5.8 Añadir UNIQUE

```sql
ALTER TABLE empleados ADD UNIQUE (email);
ALTER TABLE empleados ADD CONSTRAINT uq_empleados_email UNIQUE (email);
```

### 5.9 Añadir CHECK

```sql
ALTER TABLE empleados
ADD CONSTRAINT chk_salario CHECK (salario > 0);
```

### 5.10 Añadir / eliminar DEFAULT

```sql
ALTER TABLE empleados ALTER COLUMN activo SET DEFAULT 1;
ALTER TABLE empleados ALTER COLUMN activo DROP DEFAULT;
```

### 5.11 Renombrar tabla

```sql
ALTER TABLE empleados RENAME TO trabajadores;
-- o
RENAME TABLE empleados TO trabajadores;
```

---

## 6. DROP TABLE

```sql
DROP TABLE nombre_tabla;
DROP TABLE IF EXISTS nombre_tabla;
DROP TABLE tabla1, tabla2, tabla3;
```

---

## 7. TRUNCATE TABLE

```sql
TRUNCATE TABLE nombre_tabla;
-- Elimina todos los registros y resetea AUTO_INCREMENT
-- No se puede deshacer (no usa transacción en InnoDB)
```

---

## 8. CREATE INDEX

```sql
CREATE INDEX idx_empleados_apellido ON empleados(apellido);
CREATE UNIQUE INDEX idx_empleados_email ON empleados(email);
CREATE FULLTEXT INDEX idx_descripcion ON productos(descripcion);
```

---

## 9. DROP INDEX

```sql
DROP INDEX idx_empleados_apellido ON empleados;
```

---

## 10. ALTER DATABASE

```sql
ALTER DATABASE nombre_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

---

## 11. CREATE VIEW

```sql
CREATE VIEW empleados_activos AS
SELECT id, nombre, apellido, salario
FROM empleados
WHERE activo = 1;
```

---

## 12. DROP VIEW

```sql
DROP VIEW IF EXISTS empleados_activos;
```

---

## Reglas referenciales (ON DELETE / ON UPDATE)

| Acción | Efecto |
|---|---|
| `RESTRICT` | Bloquea borrar/actualizar si hay dependencias |
| `CASCADE` | Propaga el borrado/actualización a los hijos |
| `SET NULL` | Pone NULL en los hijos al borrar/actualizar |
| `SET DEFAULT` | Pone el valor por defecto (no soportado en InnoDB) |
| `NO ACTION` | Igual que RESTRICT (en MySQL) |

---

## Orden lógico de creación

1. `CREATE DATABASE`
2. `CREATE TABLE` (tablas independientes primero, sin FK)
3. `ALTER TABLE ... ADD FOREIGN KEY` (tablas dependientes)
4. `ALTER TABLE ... ADD INDEX`
5. `CREATE VIEW`

---

## Ejemplo completo

```sql
CREATE DATABASE IF NOT EXISTS tienda CHARACTER SET utf8mb4;
USE tienda;

CREATE TABLE fabricante (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE producto (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    id_fabricante INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_fabricante) REFERENCES fabricante(id)
        ON DELETE RESTRICT ON UPDATE CASCADE
);

ALTER TABLE producto ADD COLUMN descripcion TEXT AFTER nombre;
ALTER TABLE producto MODIFY COLUMN precio DECIMAL(12,2) NOT NULL;
ALTER TABLE producto ADD INDEX idx_precio (precio);
```
