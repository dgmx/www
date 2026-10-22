-- ============================================================
-- InvernaderoDB v1.0 · Solución completa
-- Materia: Programación y Computación · 2.º de Bachillerato
-- SdA 3 · Bloque B.1. Bases de datos relacionales
--
-- Ejecución:
--   sqlite3 invernadero.db < invernadero.sql
-- o abrir el archivo desde DB Browser for SQLite.
--
-- Nota: SQLite desactiva las claves foráneas por defecto en cada
-- conexión; por eso se activan explícitamente con PRAGMA.
-- ============================================================

PRAGMA foreign_keys = ON;

-- ------------------------------------------------------------
-- 1. Eliminación previa (permite volver a ejecutar el script)
-- ------------------------------------------------------------

DROP TABLE IF EXISTS Cosecha;
DROP TABLE IF EXISTS Parcela;
DROP TABLE IF EXISTS Cultivo;
DROP TABLE IF EXISTS Invernadero;

-- ------------------------------------------------------------
-- 2. Creación de tablas
-- ------------------------------------------------------------

-- Invernaderos: datos generales de cada instalación.
CREATE TABLE Invernadero (
    id_invernadero   INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre           TEXT    NOT NULL UNIQUE,
    ubicacion        TEXT    NOT NULL,
    superficie_m2    REAL    NOT NULL CHECK (superficie_m2 > 0),
    tipo_estructura  TEXT    NOT NULL CHECK (tipo_estructura IN ('Multitúnel', 'Invernadero', 'Macrotúnel'))
);

-- Cultivos: catálogo de cultivos y variedades.
CREATE TABLE Cultivo (
    id_cultivo  INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre      TEXT    NOT NULL,
    variedad    TEXT    NOT NULL,
    ciclo       TEXT    NOT NULL CHECK (ciclo IN ('Corto', 'Medio', 'Largo')),
    precio_kg   REAL    NOT NULL CHECK (precio_kg > 0),
    UNIQUE (nombre, variedad)
);

-- Parcelas: cada parcela pertenece a un invernadero y tiene un cultivo.
CREATE TABLE Parcela (
    id_parcela        INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo            TEXT    NOT NULL UNIQUE,
    id_invernadero    INTEGER NOT NULL,
    id_cultivo        INTEGER NOT NULL,
    superficie_m2     REAL    NOT NULL CHECK (superficie_m2 > 0),
    fecha_plantacion  TEXT    NOT NULL,
    estado            TEXT    NOT NULL DEFAULT 'Activa' CHECK (estado IN ('Activa', 'En reposo', 'Preparación')),
    FOREIGN KEY (id_invernadero) REFERENCES Invernadero (id_invernadero)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    FOREIGN KEY (id_cultivo) REFERENCES Cultivo (id_cultivo)
        ON UPDATE CASCADE ON DELETE RESTRICT
);

-- Cosechas: cada recogida de una parcela.
CREATE TABLE Cosecha (
    id_cosecha  INTEGER PRIMARY KEY AUTOINCREMENT,
    id_parcela  INTEGER NOT NULL,
    fecha       TEXT    NOT NULL,
    kg          REAL    NOT NULL CHECK (kg > 0),
    precio_kg   REAL    NOT NULL CHECK (precio_kg > 0),
    destino     TEXT    NOT NULL CHECK (destino IN ('Cooperativa', 'Mercado local', 'Venta directa')),
    FOREIGN KEY (id_parcela) REFERENCES Parcela (id_parcela)
        ON UPDATE CASCADE ON DELETE RESTRICT
);

-- ------------------------------------------------------------
-- 3. Datos de ejemplo
-- ------------------------------------------------------------

INSERT INTO Invernadero (id_invernadero, nombre, ubicacion, superficie_m2, tipo_estructura) VALUES
    (1, 'El Tomillar', 'Paraje Los Llanos', 1200, 'Multitúnel'),
    (2, 'La Vega', 'Camino de la Vega', 900, 'Invernadero'),
    (3, 'El Saladar', 'Paraje El Saladar', 1500, 'Macrotúnel');

INSERT INTO Cultivo (id_cultivo, nombre, variedad, ciclo, precio_kg) VALUES
    (1, 'Tomate', 'Ramallet', 'Largo', 1.20),
    (2, 'Pimiento', 'California', 'Medio', 1.80),
    (3, 'Pepino', 'Español', 'Corto', 0.95),
    (4, 'Calabacín', 'Negro', 'Corto', 1.10);

INSERT INTO Parcela (id_parcela, codigo, id_invernadero, id_cultivo, superficie_m2, fecha_plantacion, estado) VALUES
    (1, 'P-01', 1, 1, 400, '2026-02-10', 'Activa'),
    (2, 'P-02', 1, 2, 350, '2026-02-15', 'Activa'),
    (3, 'P-03', 2, 3, 300, '2026-03-01', 'Activa'),
    (4, 'P-04', 2, 4, 280, '2026-03-05', 'Activa'),
    (5, 'P-05', 3, 1, 500, '2026-02-20', 'Activa'),
    (6, 'P-06', 3, 3, 450, '2026-04-01', 'En reposo');

INSERT INTO Cosecha (id_cosecha, id_parcela, fecha, kg, precio_kg, destino) VALUES
    (1, 1, '2026-04-15', 850, 1.25, 'Cooperativa'),
    (2, 1, '2026-05-02', 920, 1.30, 'Cooperativa'),
    (3, 2, '2026-04-20', 600, 1.85, 'Mercado local'),
    (4, 2, '2026-05-10', 650, 1.90, 'Mercado local'),
    (5, 3, '2026-04-25', 480, 1.00, 'Venta directa'),
    (6, 3, '2026-05-15', 510, 1.05, 'Cooperativa'),
    (7, 4, '2026-04-30', 390, 1.15, 'Venta directa'),
    (8, 4, '2026-05-20', 420, 1.20, 'Mercado local'),
    (9, 5, '2026-04-18', 1100, 1.22, 'Cooperativa'),
    (10, 5, '2026-05-05', 1250, 1.28, 'Cooperativa'),
    (11, 1, '2026-05-20', 780, 1.35, 'Mercado local'),
    (12, 2, '2026-05-25', 580, 1.95, 'Venta directa'),
    (13, 3, '2026-06-01', 450, 0.98, 'Cooperativa'),
    (14, 5, '2026-06-10', 980, 1.30, 'Venta directa');
