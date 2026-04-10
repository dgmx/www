---
title: 4. Comando ALTER en MariaDB
parent: "MariaDB"
---

# ALTER TABLE en MariaDB

### Casos de Uso y Ejemplos

La sentencia `ALTER` en **MariaDB** se utiliza para modificar la estructura de una tabla existente. Tiene múltiples usos, desde agregar columnas hasta cambiar claves primarias.

## 🔧 1. Agregar columna

```sql
ALTER TABLE empleados ADD columna_salario DECIMAL(10,2);
```

## 🧱 2. Agregar múltiples columnas

```sql
ALTER TABLE empleados
ADD direccion VARCHAR(100),
ADD fecha_ingreso DATE;
```


## 🧾 3. Eliminar columna

```sql
ALTER TABLE empleados DROP COLUMN direccion;
```


## ✏️ 4. Modificar una columna

```sql
ALTER TABLE empleados MODIFY columna_salario DECIMAL(12,2) NOT NULL;
```


## 🔄 5. Cambiar el nombre de una columna

```sql
ALTER TABLE empleados CHANGE columna_salario salario DECIMAL(12,2);
```


## 🏷️ 6. Renombrar la tabla

```sql
ALTER TABLE empleados RENAME TO empleados_antiguos;
```

O también:

```sql
RENAME TABLE empleados TO empleados_antiguos;
```

## 🔑 7. Agregar clave primaria

```sql
ALTER TABLE empleados ADD PRIMARY KEY (id);
```

## 🔓 8. Eliminar clave primaria

```sql
ALTER TABLE empleados DROP PRIMARY KEY;
```

## 🔒 9. Agregar clave foránea

```sql
ALTER TABLE empleados
ADD CONSTRAINT fk_departamento
FOREIGN KEY (id_departamento) REFERENCES departamentos(id);
```

## 🗑️ 10. Eliminar clave foránea

```sql
ALTER TABLE empleados DROP FOREIGN KEY fk_departamento;
```

## 🏷️ 11. Agregar índice

```sql
ALTER TABLE empleados ADD INDEX idx_nombre (nombre);
```

## 🚫 12. Eliminar índice

```sql
ALTER TABLE empleados DROP INDEX idx_nombre;
```

## 📌 13. Agregar clave única

```sql
ALTER TABLE empleados ADD UNIQUE (email);
```

## ❌ 14. Eliminar clave única

```sql
ALTER TABLE empleados DROP INDEX email;
```

> En MariaDB, las claves únicas también son índices.

## 🧬 15. Modificar el motor de almacenamiento

```sql
ALTER TABLE empleados ENGINE = InnoDB;
```

## 🛠️ 16. Cambiar el valor por defecto de una columna

```sql
ALTER TABLE empleados ALTER salario SET DEFAULT 1000.00;
```

## 🧽 17. Eliminar valor por defecto

```sql
ALTER TABLE empleados ALTER salario DROP DEFAULT;
```

## ⚠️ Consideraciones

- Siempre **haz respaldo** antes de usar `ALTER TABLE`, especialmente en producción.
- `ALTER` puede bloquear la tabla durante los cambios (MariaDB mejora esto con operaciones online en versiones recientes).
