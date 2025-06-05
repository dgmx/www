---
title: 2. Seguridad en MariaDB
parent: "MariadD"
---


# Gestión de Usuarios y Seguridad en MariaDB

## 1. Ejemplo de Escalado de Privilegios Mal Configurado

Supón que tienes un usuario llamado `usuario_inseguro` al que sin querer le diste permisos como este:

```sql
GRANT SELECT, INSERT, UPDATE ON base_datos.* TO 'usuario_inseguro'@'localhost' WITH GRANT OPTION;
```

Con ese `WITH GRANT OPTION`, el usuario puede **dar permisos a otros usuarios o incluso a sí mismo**.

### El usuario se da más permisos

```sql
GRANT ALL PRIVILEGES ON base_datos.* TO 'usuario_inseguro'@'localhost';
```

### También podría crear otro usuario con más privilegios

```sql
CREATE USER 'nuevo_jefe'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON *.* TO 'nuevo_jefe'@'localhost' WITH GRANT OPTION;
```

---

## 2. Cómo evitar esto (Buenas Prácticas)

### Nunca uses `WITH GRANT OPTION` salvo que sea necesario

### Crea usuarios con permisos específicos

```sql
GRANT SELECT, INSERT ON base_datos.ventas TO 'usuario_ventas'@'localhost';
```

### Revisa qué privilegios tiene un usuario

```sql
SHOW GRANTS FOR 'usuario_inseguro'@'localhost';
```

### Revoca privilegios si hay algo raro

```sql
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'usuario_inseguro'@'localhost';
```

### Verificar si un usuario tiene `GRANT OPTION`

```sql
SELECT user, host, Grant_priv FROM mysql.user WHERE user = 'usuario_inseguro';
```

---

## 3. Ver Usuarios Conectados

### Ver conexiones activas (usuarios conectados y lo que hacen)

```sql
SHOW PROCESSLIST;
```

### Ver conexiones activas de forma más limpia

```sql
SELECT ID, USER, HOST, DB, COMMAND, TIME, STATE 
FROM information_schema.PROCESSLIST;
```

### Ver solo conexiones activas distintas

```sql
SELECT DISTINCT user, host 
FROM information_schema.PROCESSLIST;
```

### Ver usuarios creados (no necesariamente conectados)

```sql
SELECT user, host FROM mysql.user;
```

### Requiere permiso `PROCESS` para ver conexiones ajenas

```sql
GRANT PROCESS ON *.* TO 'usuario'@'localhost';
```

---

## 4. Resumen

| Situación                               | Riesgo        | Solución                                 |
|----------------------------------------|---------------|------------------------------------------|
| Usuario con `WITH GRANT OPTION`        | Escala fácil  | Evita este privilegio                   |
| Usuario con privilegios en `*.*`       | Control total | Limita a bases/tables específicas        |
| Revisión de permisos                   | Necesaria     | `SHOW GRANTS`, `mysql.user`              |

---

