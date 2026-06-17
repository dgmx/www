# Práctica : Bases de Datos (SQL Básico)

## Ejercicio 1 — EMPRESA

Dadas las siguientes tablas:

- **Empleado** (codEmp, nomEmp, sexEmp, fecNac, fecIncorporacion, salEmp, comis, cargo, nroDpto)
- **Departamento** (codDpto, nombreDpto, ciudad, director)

### a) Crea la base de datos Empresa para trabajar sobre ella.

```sql
CREATE DATABASE EMPRESA;
USE EMPRESA;
```

### b) Crea las tablas anteriores con los tipos de datos y restricciones que creas conveniente.

```sql
CREATE TABLE Departamento (
  codDpto INT UNSIGNED PRIMARY KEY,
  nombreDpto VARCHAR(20) NOT NULL,
  ciudad VARCHAR(15),
  codDirector INT UNSIGNED
);

CREATE TABLE Empleado (
  codEmp INT UNSIGNED PRIMARY KEY,
  nomEmp VARCHAR(30) NOT NULL,
  sexEmp ENUM('F', 'M') NOT NULL,
  fecNac DATE NOT NULL,
  fecIncorporacion DATE NOT NULL,
  salEmp DECIMAL(7,2) NOT NULL,
  comisionE DECIMAL(7,2) NOT NULL,
  cargoE VARCHAR(15) NOT NULL,
  nroDpto INT UNSIGNED NOT NULL,
  FOREIGN KEY (nroDpto) REFERENCES Departamento(codDpto)
);
```

### c) Inserta los siguientes datos:

**Inserción de datos en la tabla Departamento:**

| codDpto | nombreDpto   | Ciudad   | Director  |
|---------|--------------|----------|-----------|
| 1000    | GERENCIA     | MADRID   | 32.526.220 |
| 2000    | PRODUCCIÓN   | MADRID   | 16.215.250 |
| 2500    | VENTAS       | BARCELONA| 20.648.351 |
| 3000    | INVESTIGACIÓN| BARCELONA| 75.745.745 |
| 4000    | VENTAS       | SEVILLA  | 14.142.142 |
| 4500    | INVESTIGACIÓN| SEVILLA  | 36.361.361 |

```sql
INSERT INTO Departamento (codDpto, nombreDpto, ciudad, codDirector) VALUES
(1000, 'GERENCIA',      'MADRID',    32526220),
(2000, 'PRODUCCIÓN',    'MADRID',    16215250),
(2500, 'VENTAS',        'BARCELONA', 20648351),
(3000, 'INVESTIGACIÓN', 'BARCELONA', 75745745),
(4000, 'VENTAS',        'SEVILLA',   14142142),
(4500, 'INVESTIGACIÓN', 'SEVILLA',   36361361);
```

**Inserción de datos en la tabla Empleado:**

| codEmp   | nomEmp           | sexEmp | fecNac     | fecIncorporacion | salEmp | comis | cargo     | nroDpto |
|----------|------------------|--------|------------|------------------|--------|-------|-----------|---------|
| 31.840.269 | María Rojas    | F      | 15/01/1985 | 16/05/2000       | 1500   | 200   | Gerente   | 1000    |
| 74.758.963 | Juan Martín    | M      | 23/04/1980 | 29/04/2019       | 1000   | 50    | Comercial | 2500    |
| 96.963.963 | Pepe Viciana   | M      | 25/05/2000 | 04/01/2019       | 2500   | 0     | Científico| 3000    |
| 58.582.582 | María José Sánchez | F  | 10/10/1990 | 15/01/2005       | 5000   | 400   | Gerente   | 1000    |
| 74.741.741 | Laura Pastor   | F      | 25/05/1986 | 20/04/2009       | 3000   | 350   | At. Cliente| 2500   |

```sql
INSERT INTO Empleado VALUES
(31840269, 'María Rojas',        'F', '1985-01-15', '2000-05-16', 1500, 200, 'Gerente',    1000),
(74758963, 'Juan Martín',        'M', '1980-04-23', '2019-04-29', 1000,  50, 'Comercial',   2500),
(96963963, 'Pepe Viciana',       'M', '2000-05-25', '2019-01-04', 2500,   0, 'Científico', 3000),
(58582582, 'María José Sánchez', 'F', '1990-10-10', '2015-01-15', 5000, 400, 'Gerente',    1000),
(74741741, 'Laura Pastor',       'F', '1986-05-25', '2009-04-20', 3000, 350, 'At. Cliente', 2500);
```

### d) Realiza las siguientes actualizaciones:

- Modifica la fecha de incorporación del empleado 31.840.269 a 16/05/2001.

```sql
UPDATE Empleado SET fecIncorporacion = '2001-05-16'
WHERE codEmp = 31840269;
```

- Sube el salario de todos los gerentes un 10%.

```sql
UPDATE Empleado SET salEmp = salEmp * 1.10
WHERE cargoE = 'Gerente';
```

- Aumenta la comisión de todas las mujeres 50 euros.

```sql
UPDATE Empleado SET comisionE = comisionE + 50
WHERE sexEmp = 'F';
```

---

## Ejercicio 2 — TIENDA DE INFORMÁTICA

Dado el siguiente esquema:

```mermaid
erDiagram
    fabricante {
        int codigo PK
        varchar nombre
    }
    producto {
        int codigo PK
        varchar nombre
        double precio
        int codigo_fabricante FK
    }
    fabricante ||--o{ producto : tiene
```

### a) Crea la base de datos TiendaInformatica para trabajar sobre estas tablas.

```sql
CREATE DATABASE TiendaInformatica CHARACTER SET utf8;
USE TiendaInformatica;
```

### b) Crea las tablas anteriores con los tipos de datos y restricciones que se ven en el esquema.

```sql
CREATE TABLE fabricante (
  codigo INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE producto (
  codigo INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(6,2) NOT NULL,
  codigo_fabricante INT UNSIGNED NOT NULL,
  FOREIGN KEY (codigo_fabricante) REFERENCES fabricante(codigo)
);
```

### c) Inserta los siguientes datos:

| Código | Fabricante |
|--------|-----------|
| 1      | Asus      |
| 2      | Lenovo    |
| 3      | HP        |
| 4      | Samsung   |
| 5      | Seagate   |
| 6      | Crucial   |
| 7      | Gigabyte  |

```sql
INSERT INTO fabricante (nombre) VALUES
('Asus'),
('Lenovo'),
('HP'),
('Samsung'),
('Seagate'),
('Crucial'),
('Gigabyte');
```

| Código | Nombre       | Precio  | Codigo_Fabricante |
|--------|-------------|---------|-------------------|
| 1      | Disco Duro  | 86.99   | 5                 |
| 2      | Memoria Ram | 120     | 6                 |
| 3      | Disco SSD   | 150.99  | 4                 |
| 4      | GeForce     | 185     | 7                 |
| 5      | Monitor     | 202     | 1                 |
| 6      | Portátil    | 505     | 2                 |
| 7      | Impresora   | 59.99   | 3                 |

```sql
INSERT INTO producto (nombre, precio, codigo_fabricante) VALUES
('Disco Duro',  86.99,  5),
('Memoria Ram', 120,    6),
('Disco SSD',   150.99, 4),
('GeForce',     185,    7),
('Monitor',     202,    1),
('Portátil',    505,    2),
('Impresora',   59.99,  3);
```

### d) Realiza las siguientes actualizaciones:

- Elimina los productos que suministra el fabricante de código 1.

```sql
DELETE FROM producto WHERE codigo_fabricante = 1;
```

- Rebaja el precio de todos los productos en un 20%.

```sql
UPDATE producto SET precio = precio * 0.80;
```

- Cambia el proveedor de la impresora al fabricante número 4.

```sql
UPDATE producto SET codigo_fabricante = 4 WHERE nombre = 'Impresora';
```

---

## Ejercicio 3 — UNIVERSIDAD

Dado el siguiente diagrama entidad-relación:

Para que un alumno ingrese en la Universidad debe realizar una preinscripción, especificando a qué estudios desea acceder en orden de preferencia.

```mermaid
erDiagram
    ALUMNO {
        int DNI PK
        varchar nombre
        double nota
        char opcion
    }
    ESTUDIO {
        varchar codigo PK
        varchar nombre
        double notaDeCorte
    }
    PREINSCRIPCION {
        int DNIAlumno PK, FK
        varchar codEstudio PK, FK
        char admitido
        int orden
    }
    ALUMNO ||--o{ PREINSCRIPCION : realiza
    ESTUDIO ||--o{ PREINSCRIPCION : tiene
```

### a) Haz el grafo relacional a partir del diagrama anterior.

```
ALUMNO (DNI, Nombre, Nota, Opción)

PREINSCRIPCION (DNIAlumno, CodEstudio, Admitido, Orden)

ESTUDIO (Código, Nombre, NotaDeCorte)
```

### b) Crea la base de datos universidad en SQL para trabajar sobre ella.

```sql
CREATE DATABASE universidad CHARACTER SET utf8;
USE universidad;
```

### c) Crea las tablas anteriores en SQL con todas las restricciones inherentes del modelo y además con las siguientes consideraciones:

I. Opción tomará los valores A, B, C ó D.
II. La nota de corte ha de ser mayor que 5.
III. El atributo "admitido" tomará los valores S ó N.

```sql
CREATE TABLE alumno (
  DNI INT UNSIGNED PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  nota DOUBLE NOT NULL,
  opcion ENUM('A', 'B', 'C', 'D') NOT NULL
);

CREATE TABLE estudio (
  Codigo VARCHAR(10) PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  NotaDeCorte DOUBLE NOT NULL CHECK (NotaDeCorte > 5)
);

CREATE TABLE preinscripcion (
  DNIAlumno INT UNSIGNED,
  CodEstudio VARCHAR(10),
  admitido ENUM('S', 'N') NOT NULL,
  orden INT UNSIGNED NOT NULL,
  PRIMARY KEY (DNIAlumno, CodEstudio),
  FOREIGN KEY (DNIAlumno) REFERENCES alumno(DNI),
  FOREIGN KEY (CodEstudio) REFERENCES estudio(Codigo)
);
```

---

## Ejercicio 4 — PEDIDOS

Dado el siguiente esquema:

```mermaid
erDiagram
    cliente {
        int id PK
        varchar nombre
        varchar apellido1
        varchar apellido2
        varchar ciudad
        int categoria
    }
    comercial {
        int id PK
        varchar nombre
        varchar apellido1
        varchar apellido2
        float comision
    }
    pedido {
        int id PK
        double total
        date fecha
        int id_cliente FK
        int id_comercial FK
    }
    cliente ||--o{ pedido : realiza
    comercial ||--o{ pedido : gestiona
```

### a) Crea la base de datos pedidos para trabajar sobre estas tablas.

```sql
CREATE DATABASE pedidos CHARACTER SET utf8;
USE pedidos;
```

### b) Crea las tablas anteriores con los tipos de datos y restricciones que se ven en el esquema.

```sql
CREATE TABLE cliente (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido1 VARCHAR(100) NOT NULL,
  apellido2 VARCHAR(100),
  ciudad VARCHAR(100),
  categoria INT UNSIGNED
);

CREATE TABLE comercial (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellido1 VARCHAR(100) NOT NULL,
  apellido2 VARCHAR(100),
  comision FLOAT
);

CREATE TABLE pedido (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  total DOUBLE NOT NULL,
  fecha DATE,
  id_cliente INT UNSIGNED NOT NULL,
  id_comercial INT UNSIGNED NOT NULL,
  FOREIGN KEY (id_cliente) REFERENCES cliente(id),
  FOREIGN KEY (id_comercial) REFERENCES comercial(id)
);
```

### c) Inserta los siguientes datos:

**Tabla CLIENTE:**

| Id | Nombre | Apellido1 | Apellido2 | Ciudad | Categoría |
|----|--------|-----------|-----------|--------|-----------|
| 1  | Aarón  | Rivero    | Gómez     | Almería| 100       |
| 2  | Adela  | Sala      | Diaz      | Granada| 200       |
| 3  | Adolfo | Rubio     | Flores    | Sevilla| -         |
| 4  | Adrián | Suárez    | -         | Jaén   | 300       |
| 5  | Marcos | Loyola    | Mendez    | Almería| 200       |
| 6  | María  | Santana   | Moreno    | Cádiz  | 100       |
| 7  | Pilar  | Ruiz      | -         | Sevilla| 300       |
| 8  | Pepe   | Ruiz      | Santana   | Huelva | 200       |

```sql
INSERT INTO cliente VALUES
(1, 'Aarón',  'Rivero', 'Gómez',   'Almería', 100),
(2, 'Adela',  'Sala',   'Díaz',    'Granada', 200),
(3, 'Adolfo', 'Rubio',  'Flores',  'Sevilla', NULL),
(4, 'Adrián', 'Suárez', NULL,      'Jaén',    300),
(5, 'Marcos', 'Loyola', 'Mendez',  'Almería', 200),
(6, 'María',  'Santana','Moreno',  'Cádiz',   100),
(7, 'Pilar',  'Ruiz',   NULL,      'Sevilla', 300),
(8, 'Pepe',   'Ruiz',   'Santana', 'Huelva',  200);
```

**Tabla COMERCIAL:**

| Id | Nombre  | Apellido1  | Apellido2 | Comisión |
|----|---------|------------|-----------|----------|
| 1  | Daniel  | Sáez       | Vega      | 0.15     |
| 2  | Juan    | Gómez      | López     | 0.13     |
| 3  | Diego   | Flores     | Salas     | 0.11     |
| 4  | Marta   | Herrera    | Gil       | 0.14     |
| 5  | Antonio | Carretero  | Ortega    | 0.12     |

```sql
INSERT INTO comercial VALUES
(1, 'Daniel',  'Sáez',      'Vega',   0.15),
(2, 'Juan',    'Gómez',     'López',  0.13),
(3, 'Diego',   'Flores',    'Salas',  0.11),
(4, 'Marta',   'Herrera',   'Gil',    0.14),
(5, 'Antonio', 'Carretero', 'Ortega', 0.12);
```

**Tabla PEDIDOS:**

| Id | Total   | Fecha      | IdCliente | IdComercial |
|----|---------|------------|-----------|-------------|
| 1  | 150.5   | 05/10/2019 | 5         | 2           |
| 2  | 270     | 10/09/2016 | 1         | 5           |
| 3  | 65.25   | 05/10/2017 | 2         | 1           |
| 4  | 110.5   | 17/08/2019 | 8         | 3           |
| 5  | 950     | 25/05/2019 | 5         | 2           |
| 6  | 2010.50 | 10/01/2019 | 3         | 4           |
| 7  | 5000    | 01/01/2019 | 7         | 3           |
| 8  | 1983    | 05/08/2015 | 6         | 4           |
| 9  | 250.36  | 05/09/1983 | 1         | 1           |
| 10 | 369.36  | 06/07/1986 | 2         | 5           |

```sql
INSERT INTO pedido VALUES
(1,  150.5,   '2019-10-05', 5, 2),
(2,  270,     '2016-09-10', 1, 5),
(3,  65.25,   '2017-10-05', 2, 1),
(4,  110.5,   '2019-08-17', 8, 3),
(5,  950,     '2019-05-25', 5, 2),
(6,  2010.50, '2019-01-10', 3, 4),
(7,  5000,    '2019-01-01', 7, 3),
(8,  1983,    '2015-08-05', 6, 4),
(9,  250.36,  '1983-09-05', 1, 1),
(10, 369.36,  '1986-07-06', 2, 5);
```

### d) Realiza las siguientes actualizaciones:

- Añade a la tabla cliente las columnas email y el teléfono.

```sql
ALTER TABLE cliente ADD (email VARCHAR(100), telefono INT);
```

- Añade también teléfono para la tabla comercial.

```sql
ALTER TABLE comercial ADD (telefono INT);
```

- Aumenta la comisión de todos los comerciales en un 5%.

```sql
UPDATE comercial SET comision = comision * 1.05;
```

- Borra todos los pedidos de menos de 200 euros.

```sql
DELETE FROM pedido WHERE total < 200;
```

---

## Ejercicio 5 — INSTITUTO

Dado el siguiente diagrama entidad-relación y su grafo relacional:

```mermaid
erDiagram
    PROFESOR {
        varchar NIF PK
        varchar nombre
        varchar especialidad
        int telefono
    }
    ASIGNATURA {
        varchar Cod_Asignatura PK
        varchar nombre
        varchar NIF_Profesor FK
    }
    ALUMNO {
        int id_Alumno PK
        varchar nombre
        date Fecha_Nacimiento
        int telefono
    }
    RECIBE {
        int id_Alumno PK, FK
        varchar Cod_Asignatura PK, FK
        varchar curso
    }
    PROFESOR ||--o{ ASIGNATURA : imparte
    ALUMNO ||--o{ RECIBE : cursa
    ASIGNATURA ||--o{ RECIBE : incluida
```

```
ALUMNO (id_Alumno, Nombre, Fecha_Nacimiento, Teléfono)

RECIBE (id_Alumno, cod_Asignatura, curso)

ASIGNATURA (Cod_Asignatura, Nombre, NIF_Profesor)

PROFESOR (NIF, Nombre, Especialidad, Teléfono)
```

### a) Crea la base de datos "Instituto" para trabajar sobre ella.

```sql
CREATE DATABASE Instituto CHARACTER SET utf8;
USE Instituto;
```

### b) Crea las tablas necesarias con los tipos de datos y restricciones que consideres oportunas.

```sql
CREATE TABLE alumno (
  id_Alumno INT UNSIGNED PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  Fecha_Nacimiento DATE NOT NULL,
  telefono INT UNSIGNED
);

CREATE TABLE profesor (
  NIF VARCHAR(9) PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  especialidad VARCHAR(30) NOT NULL,
  telefono INT UNSIGNED
);

CREATE TABLE asignatura (
  Cod_Asignatura VARCHAR(10) PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  NIF_Profesor VARCHAR(9) NOT NULL,
  FOREIGN KEY (NIF_Profesor) REFERENCES profesor(NIF)
);

CREATE TABLE recibe (
  id_Alumno INT UNSIGNED,
  Cod_Asignatura VARCHAR(10),
  Curso VARCHAR(10) NOT NULL,
  PRIMARY KEY (id_Alumno, Cod_Asignatura, Curso),
  FOREIGN KEY (id_Alumno) REFERENCES alumno(id_Alumno),
  FOREIGN KEY (Cod_Asignatura) REFERENCES asignatura(Cod_Asignatura)
);
```
