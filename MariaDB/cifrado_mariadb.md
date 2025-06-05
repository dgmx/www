---
title: 1. Cifrado en MariaDB
parent: "MariadD"
---

# Cifrado de columnas en MariaDB 

### usando AES_ENCRYPT y triggers

Este documento describe cómo implementar cifrado de columnas en MariaDB utilizando la función `AES_ENCRYPT()` para almacenar datos cifrados y `AES_DECRYPT()` para recuperarlos. También incluye un ejemplo con un trigger para cifrado automático al insertar datos.

---

## 1. Crear una tabla con un campo cifrado

```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARBINARY(255) -- usamos VARBINARY para datos cifrados
);
```

---

## 2. Insertar datos cifrados manualmente

```sql
-- Insertar el nombre 'Juan' cifrado con AES usando una clave
INSERT INTO usuarios (nombre)
VALUES (AES_ENCRYPT('Juan', 'clave_secreta'));
```

---

## 3. Consultar y descifrar los datos

```sql
-- Ver los datos descifrados
SELECT AES_DECRYPT(nombre, 'clave_secreta') AS nombre_descifrado
FROM usuarios;
```

### Convertir a texto legible:

```sql
SELECT CAST(AES_DECRYPT(nombre, 'clave_secreta') AS CHAR) AS nombre
FROM usuarios;
```

---

## 4. Cifrado automático con trigger

### Crear una tabla con campo cifrado y campo en texto plano (opcional)

```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_plain VARCHAR(255),           -- campo en texto plano (opcional)
    nombre_cifrado VARBINARY(255)        -- campo cifrado
);
```

### Crear trigger para cifrar automáticamente antes de insertar

```sql
DELIMITER //

CREATE TRIGGER cifrar_nombre
BEFORE INSERT ON usuarios
FOR EACH ROW
BEGIN
    SET NEW.nombre_cifrado = AES_ENCRYPT(NEW.nombre_plain, 'clave_secreta');
END;
//

DELIMITER ;
```

---

## 5. Insertar datos (ya se cifran automáticamente)

```sql
INSERT INTO usuarios (nombre_plain) VALUES ('Carlos');
```

---

## 6. Consultar datos cifrados y descifrarlos

```sql
SELECT 
  nombre_plain,
  CAST(AES_DECRYPT(nombre_cifrado, 'clave_secreta') AS CHAR) AS nombre_descifrado
FROM usuarios;
```

---

## Recomendaciones

- Nunca almacenes la clave de cifrado directamente en las consultas en producción.
- Usa gestión segura de claves (por aplicación o servicios como HashiCorp Vault, AWS KMS, etc.).
- Considera usar solo el campo cifrado y eliminar `nombre_plain` para evitar duplicidad de datos sensibles.

