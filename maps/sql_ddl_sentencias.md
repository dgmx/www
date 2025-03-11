# SQL como DDL (Lenguaje de Definición de Datos)

## 1. Creación y Eliminación de Bases de Datos  
### Crear una base de datos  
```sql
CREATE DATABASE NombreBaseDatos;
```
### Eliminar una base de datos  
```sql
DROP DATABASE NombreBaseDatos;
```

## 2. Creación de Tablas  
### Sintaxis básica  
```sql
CREATE TABLE NombreTabla (
    Columna1 TipoDato [Restricciones],
    Columna2 TipoDato [Restricciones],
    ...
    ColumnaN TipoDato [Restricciones]
);
```
### Ejemplo  
```sql
CREATE TABLE Alumnos (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Edad INT CHECK (Edad >= 18),
    Email VARCHAR(100) UNIQUE
);
```

## 3. Modificación de Tablas  
### Renombrar una tabla  
```sql
RENAME TABLE NombreViejo TO NombreNuevo;
```
### Agregar columnas  
```sql
ALTER TABLE NombreTabla ADD ColumnaNueva TipoDato [Restricciones];
```
### Eliminar columnas  
```sql
ALTER TABLE NombreTabla DROP COLUMN ColumnaNombre;
```
### Modificar columnas  
```sql
ALTER TABLE NombreTabla MODIFY ColumnaNombre NuevoTipoDato [Restricciones];
```

## 4. Eliminación de Tablas  
```sql
DROP TABLE NombreTabla;
```

## 5. Creación y Eliminación de Índices  
### Crear un índice  
```sql
CREATE INDEX NombreIndice ON NombreTabla (Columna1, Columna2);
```
### Eliminar un índice  
```sql
DROP INDEX NombreIndice;
```

## 6. Creación y Eliminación de Vistas  
### Crear una vista  
```sql
CREATE VIEW NombreVista AS
SELECT Columna1, Columna2 FROM NombreTabla WHERE Condicion;
```
### Eliminar una vista  
```sql
DROP VIEW NombreVista;
```

## 7. Restricciones en Tablas  
- `PRIMARY KEY`: Define una clave primaria.  
- `NOT NULL`: Impide valores nulos.  
- `UNIQUE`: Asegura valores únicos en una columna.  
- `CHECK (condición)`: Restringe los valores permitidos.  
- `FOREIGN KEY`: Define claves foráneas.  

### Ejemplo con restricciones  
```sql
CREATE TABLE Productos (
    ID INT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Precio DECIMAL(10,2) CHECK (Precio > 0),
    CategoriaID INT,
    FOREIGN KEY (CategoriaID) REFERENCES Categorias(ID)
);
```


[Generar PDF](sql_ddl_sentencias.pdf){: .btn .btn-purple }
