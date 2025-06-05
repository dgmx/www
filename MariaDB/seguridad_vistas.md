---
title: 3. Seguridad con Vistas
parent: "MariadD"
---
# Seguridad con Vistas en SQL 

### usando `WITH CHECK OPTION`

Este documento muestra cómo utilizar vistas con propósito de seguridad en bases de datos SQL, usando la cláusula `WITH CHECK OPTION`, y cómo configurar usuarios con acceso limitado a través de una vista segura.

---

## 🧱 1. Crear la tabla base

```sql
CREATE TABLE empleados (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    departamento VARCHAR(50),
    salario DECIMAL(10,2)
);
```

---

## 👁 2. Crear la vista segura

```sql
CREATE VIEW vista_ventas AS
SELECT * FROM empleados
WHERE departamento = 'Ventas'
WITH CHECK OPTION;
```

Esta vista:

- **Permite consultar solo empleados del departamento "Ventas"**
- **Impide insertar o modificar datos fuera de ese departamento**

---

## 🧪 3. Ejemplos de INSERT

### ✅ Válidos (cumplen la condición)

```sql
INSERT INTO vista_ventas (id, nombre, departamento, salario)
VALUES (1, 'Ana Torres', 'Ventas', 4000.00);

INSERT INTO vista_ventas (id, nombre, departamento, salario)
VALUES (2, 'Luis Fernández', 'Ventas', 4200.00);
```

### ❌ Inválido (fallará por `WITH CHECK OPTION`)

```sql
INSERT INTO vista_ventas (id, nombre, departamento, salario)
VALUES (3, 'Carlos Gómez', 'Marketing', 3900.00);
```

**Error esperado:**
```
ERROR: new row violates check option for view "vista_ventas"
```

---

## 🔄 UPDATE bloqueado por seguridad

```sql
UPDATE vista_ventas
SET departamento = 'RRHH'
WHERE id = 1;
```

**Esto fallará** porque el resultado de la modificación saldría del conjunto definido por la vista.

---

## 👤 4. Crear un usuario restringido

```sql
CREATE USER usuario_ventas IDENTIFIED BY 'clave_segura';
```


---

## 🔐 5. Asignar permisos

### ❌ Revocar acceso directo a la tabla base

```sql
REVOKE ALL ON empleados FROM usuario_ventas;
```

### ✅ Conceder acceso a la vista

```sql
GRANT SELECT, INSERT, UPDATE ON vista_ventas TO usuario_ventas;
```

---

## 📋 Resumen

| Objeto          | Permiso        | Usuario          | Efecto                                    |
|-----------------|----------------|------------------|--------------------------------------------|
| `empleados`     | ❌ Ninguno     | `usuario_ventas` | No puede ver, modificar ni consultar       |
| `vista_ventas`  | ✅ SELECT/INSERT/UPDATE | `usuario_ventas` | Solo ve empleados de "Ventas", y solo puede modificar/insertar respetando esa condición |

---

## 🧪 Prueba como usuario

### ✅ Permitido:

```sql
INSERT INTO vista_ventas (id, nombre, departamento, salario)
VALUES (10, 'Laura Méndez', 'Ventas', 4100.00);
```

### ❌ Bloqueado:

```sql
INSERT INTO vista_ventas (id, nombre, departamento, salario)
VALUES (11, 'Marco Ruiz', 'Finanzas', 4300.00);
```

---

## ✅ Seguridad reforzada

- Se evita que el usuario vea o modifique otros datos.
- Solo puede trabajar con información que cumple las condiciones de la vista.
