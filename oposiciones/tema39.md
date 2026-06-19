

# Tema 39 - Lenguajes para Definición y Manipulación de Datos en Bases de Datos Relacionales

## ÍNDICE 
```bash
1. INTRODUCCIÓN
2. CONCEPTOS BÁSICOS
3. LENGUAJE DE DEFINICIÓN DE DATOS (DDL)
   3.1. TIPOS
   3.2. CARACTERÍSTICAS
4. LENGUAJE DE MANIPULACIÓN DE DATOS (DML)
   4.1. TIPOS
   4.2. CARACTERÍSTICAS
5. LENGUAJE SQL
   5.1. INTRODUCCIÓN
   5.2. ELEMENTOS DEL LENGUAJE SQL
   5.3. SQL COMO DDL
   5.4. SQL COMO DML
6. CONCLUSIÓN
7. BIBLIOGRAFÍA
```

---

## 1. Introducción
- Importancia de los datos en la actualidad
- Relación con el currículo educativo y profesional
- Bases de datos y su gestión eficiente

## 2. Conceptos Básicos
- **Base de datos**: colección estructurada de datos
- **SGBD (Sistema Gestor de Bases de Datos)**: software para manejar bases de datos
- **Tipos de lenguajes para bases de datos**:
  - Definición de datos (DDL)
  - Manipulación de datos (DML)

## 3. Lenguaje de Definición de Datos (DDL)
- **Definición**: Lenguaje proporcionado para definición y consulta de datos

### 3.1 Tipos
  - Interactivo (ejecución manual)
  - Embebido (dentro de otro lenguaje)
  
### 3.2 Características
  - Define estructuras de datos
  - Alto nivel, simplicidad, abstracción

## 4. Lenguaje de Manipulación de Datos (DML)
Lenguaje que permite las operaciones necesarias de manipulación (inserción, modificación y borrado) como las de recuperación de datos (consultas)
- Lenguaje simple, gramática completa y dependiente del SGBD.
- Puede ser genérico o propio

### 4.1 Tipos
  - Procedimentales (especifican el cómo)
  - No procedimentales (solo indican qué)
  - Basados en álgebra y cálculo relacional
  - Estándar o propietario
  
### 4.2 Características
  - Dependencia de SGBD, Simplicidad y uniformidad, lenguajes formales

## 5. Lenguaje SQL
### 5.1 Introducción
- Lenguaje estándar de bases de datos relacionales
- Definido por ANSI e ISO

### 5.2 Elementos del Lenguaje SQL
- **Comandos**:
  - DDL (Definición de Datos): `CREATE, DROP, ALTER`
  - DML (Manipulación de Datos): `SELECT, INSERT, UPDATE, DELETE`
  - DCL (Control de Datos): `GRANT, REVOKE`
- **Cláusulas**:
  - `WHERE`, `GROUP BY`, `HAVING`, etc.
- **Otros elementos**:
  - Operadores, funciones y literales

### 5.3 SQL como DDL
- Creación y eliminación de bases de datos
- Creación, modificación y eliminación de tablas, índices y vistas
- [SQL como DDL](sql_ddl_sentencias.md)  

### 5.4 SQL como DML
- **Consultas**: `SELECT`
- **Manipulación de datos**:
  - **Inserción**: `INSERT INTO`
  - **Modificación**: `UPDATE`
  - **Eliminación**: `DELETE`


## 6. Conclusión
- Importancia de las bases de datos y su manipulación
- SQL como lenguaje clave en los SGBD

## 7. BIBLIOGRAFÍA

- Date C.J (2000). *Introducción a los sistemas de bases de datos*. Addison-Wesley.  
- De Miguel A, Piattini M (1999). *Fundamentos y modelos de BBDD*. Ra-Ma.  
- Núñez R (2023). *Gestión de bases de datos*. Ra-Ma.  
- Korth H, Silberschatz (2002). *Fundamentos de bases de datos*. McGraw-Hill.  
- [Oracle](https://www.oracle.com/)  
- [MySQL](https://www.mysql.com/)  
- [MongoDB](https://www.mongodb.com/)  
- [MariaDB](https://mariadb.org/)  


[Tema 39 Mapa Visual](/oposdocs/mapasweb/tema39map.html).