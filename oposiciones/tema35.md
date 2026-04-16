---
title: "Tema 35: Definición de Datos, Niveles de Descripción, Lenguajes y Diccionario de Datos"
parent: "Maps"
nav_exclude: true
---

# Tema 35: Definición de Datos, Niveles de Descripción, Lenguajes y Diccionario de Datos

## 1. Introducción
- Tema incluido en el temario oficial de acceso a la especialidad de Informática.  
- Forma parte del bloque temático "Bases de Datos".  
- Importancia de las bases de datos y los SGBD en la gestión de información. 
- Mayor activo de las organizaciones son los datos y su gestion eficaz y segura
- Curriculo Familia Profesional. DAM, DAW, ASIR (Modulo Bases de Datos)

## 2. La Definición de Datos
- **Base de datos**: Conjunto de datos almacenados en soporte informatico. Datos relacionados y estructurados. Persistentes. Usados por las empresas.
- **SGDBD**: Colección de programas para crear y mantener un base de datos. Facilita la definicion, construcción y manipulación.
  - Funciones de definicion, manipulación y control.
- Función de definición de datos permite especificar estructuras, relaciones y restricciones.  Se realiza mediante el DDL.

## 3. Niveles de Descripción
Ansi propone arquitectura de 3 niveles de abstracción. Fisica, logica y externa. El SGBD se encarga de las correspondencias entre los 3 niveles:

- 3.1. **Nivel Interno o Físico:**  
   - Define la estructura de almacenamiento físico (dispositivos, índices, estrategias de acceso).  Administradores
- 3.2. **Nivel Lógico o Conceptual:**  
   - Representa la estructura global de la BD, incluyendo entidades, atributos y relaciones. Programadores
- 3.3. **Nivel Externo o de Visión del Usuario:**  
   - Define diferentes vistas según el usuario o aplicación.  
- 3.4. **Correspondencias:**  
   - Conceptual - Interna: Relaciona el esquema conceptual con el almacenamiento físico.  
   - Externa - Conceptual: Relaciona las vistas de usuario con el esquema conceptual.  

## 4. Lenguajes de Definición de Datos (DDL)
Los lenguajes de lSGBD son el DDL, DCL y DML.
- 4.1. **Definición:**  
   - Lenguaje del SGBD para definir estructuras de datos y procedimientos de consulta.  
- 4.2. **Tipos:**  
   - Interactivo: Mediante consola.  
   - Embebido: Integrado en un lenguaje anfitrión.  
- 4.3. **Características:**  
   - Dependiente del SGBD.  
   - Lenguaje simple y de alto nivel.  
   - Permite definir datos a nivel externo, lógico e interno.  
- 4.4. **SQL como DDL:**  
   - Sentencias básicas:  
     - `CREATE DATABASE` / `DROP DATABASE`.  
     - `CREATE TABLE` / `ALTER TABLE` / `DROP TABLE`.  
     - `CREATE INDEX` / `DROP INDEX`.  
     - `CREATE VIEW` / `DROP VIEW`.  


## 5. Diccionario de Datos
Catalogo del sistema. Metabase de datos, información sobre otras bases de datos. Contiene las caracteristicas logicas de las estructuras que almacenand datos: nombre, descripcion, contenido y organizacion.
- 5.1. **Definición:**  
   - Base de datos que almacena información sobre la estructura de otra BD (metadatos).  
- 5.2. **Contenido:**  
   - Esquemas internos, conceptuales y externos.  
   - Restricciones de acceso y seguridad.  
   - Operaciones de usuarios sobre la BD.  
- 5.3. **Objetivos:**  
   - Estandarización de datos.  
   - Documentación del sistema.  
   - Detección de errores.  
   - Facilitar análisis y mejoras.  

## 6. Aplicación en Contextos Escolares y Laborales
- **En educación:**  
   - Materias de TIC en ESO y Bachillerato.  
   - Módulos en ciclos formativos como DAM, DAW y ASIR.  
- **En el mundo laboral:**  
   - Usos en banca, salud, comercio, telecomunicaciones, etc.  
   - Tendencias futuras: IA y entornos Multicloud.  

## 7. Conclusión
- Importancia de la definición de datos en los SGBD.  
- Descripción de niveles de abstracción.  
- Funcionalidad del DDL en la gestión de BD.  
- Papel fundamental del diccionario de datos.  

## 8. Bibliografía
- Date C.J (2000). *Introducción a los sistemas de bases de datos*. Addison-Wesley.  
- De Miguel A, Piattini M (1999). *Fundamentos y modelos de BBDD*. Ra-Ma.  
- Núñez R (2023). *Gestión de bases de datos*. Ra-Ma.  
- Korth H, Silberschatz (2002). *Fundamentos de bases de datos*. McGraw-Hill.  
- [Oracle](https://www.oracle.com/)  
- [MySQL](https://www.mysql.com/)  
- [MongoDB](https://www.mongodb.com/)  
- [MariaDB](https://mariadb.org/)  

[SQL como DDL](sql_ddl_sentencias.md)  

[Generar PDF](tema35.pdf){: .btn .btn-purple }