---
title: "Modelo de Datos Relacional. Estructura. Operaciones. Algebra Relacional"
parent: "Maps"
nav_exclude: true
---

# Tema 38: Modelo de Datos Relacional. Estructura. Operaciones. Algebra Relacional  

## 1. Introducción  
- Forma parte del temario oficial de acceso a la especialidad de Informática.  13 Feb 96
- Pertenece al bloque "Bases de Datos".  
- Importancia de las bases de datos en múltiples ámbitos (webs, salud, comercio electrónico).  
- Tres modelos tradicionales de bases de datos:  
   1. Jerárquico  
   2. En red  
   3. Relacional (el más extendido)  
- Se analizará la estructura, operaciones y álgebra relacional.  
- -Curriculo Informatica y comunicaciones.

## 2. Modelo de Datos Relacional  
### 2.1. Modelo de Datos  
- **Definición de Base de Datos**  
   - Conjunto de datos interrelacionados y estructurados.  
- **Sistema Gestor de Bases de Datos (SGBD)**  
   - Software que facilita la creación, manipulación y mantenimiento de bases de datos.  
- **Tipos de Modelos de Datos**  
   - Conceptuales (Ejemplo: Modelo Entidad-Relación).  
   - Lógicos (Ejemplo: Modelo Relacional).  
   - Físicos (implementados en SGBD).  

### 2.2. Modelo Relacional  
- **Definición**  
   - Basado en la **lógica de predicados** y la **teoría de conjuntos**.  
   - Propone el uso de **relaciones** (tablas) compuestas por tuplas (filas) y atributos (columnas).  
- **Ejemplo**  
   - Una tabla "Clientes" con los campos: `ID`, `Nombre`, `Email`, `Teléfono`.  
- **Lenguajes Relacionales**  
   - **Álgebra Relacional**: Especifica cómo obtener resultados.  
   - **Cálculo Relacional**: Indica qué resultados se desean.  

#### 2.2.1 Ventajas e Inconvenientes  
   1. Evita la duplicidad de registros.  
   2. Garantiza la **integridad referencial**.  
   3. Favorece la **normalización**.  
#### 2.2.2. **Inconvenientes**  
   1. Deficiencias en el manejo de datos gráficos y multimedia.  
   2. Ineficiencia en la manipulación de grandes bloques de texto.  

#### 2.2.3 Aspectos Fundamentales
- **Estructuras de datos**: dominio, atributo, tablas y relaciones.
- **Integridad de los datos**
- **Manipulación de los datos**. A través de los lenguajes de consulta

#### 2.2.4 Objetivos
- **Independencia física**
- **Independencia lógica**
- **Flexibilidad**
- **Uniformidad**
- **Sencillez**


## 3. Estructura del Modelo Relacional  
### 3.1. Relación o Tabla  
- Basado en **teoría de conjuntos**.  
- Conceptos clave:  
   - **Cardinalidad**: Número de filas en la tabla.  
   - **Grado**: Número de atributos en la tabla.  

### 3.2. Dominio y Atributo  
- **Dominio**: Conjunto finito de valores homogéneos.  
- **Atributo**: Asociación entre un dominio y una relación.  

### 3.3. Tipos de Claves  
- **Clave Candidata**: Identifica de forma única cada tupla.  
- **Clave Primaria**: Clave candidata elegida como identificador principal.  
- **Clave Alternativa**: Claves candidatas no seleccionadas como clave primaria.  
- **Clave Ajena**: Relaciona dos tablas a través de claves primarias.  

### 3.4. Restricciones  
- **Inherentes**  
   - No puede haber dos tuplas idénticas.  
   - Orden de tuplas y atributos no es relevante.  
- **De usuario**  
   - Restricciones específicas del problema.  
   - **Integridad referencial**: No se puede referenciar un dato inexistente.  
- **Operaciones Relacionales**  
   - **Restricción**: No se puede eliminar una tupla referenciada.  
   - **Cascada**: Borrado o modificación automática de datos dependientes.  
   - **Puesta a nulos**: Reemplaza valores eliminados con `NULL`.  

### 3.5. Índices  
- **Definición**  
   - Estructuras para acelerar la búsqueda de datos.  
- **Ventajas**  
   - Mejoran la velocidad de consultas.  
- **Inconvenientes**  
   - Ralentizan la inserción, modificación y eliminación de datos.  

## 4. Operaciones en el Modelo Relacional  
- Tipos de Operaciones  
   1. **Inserción**: Agregar nuevas tuplas.  
   2. **Borrado**: Eliminar tuplas existentes.  
   3. **Modificación**: Actualizar valores en tuplas.  
   4. **Consulta**: Recuperar información.  
- **Lenguajes Relacionales**  
   - Algebraicos: **Álgebra Relacional**: Especifica cómo se realizan los cambios.  
   - Predicativos: **Cálculo Relacional**: Define el estado final deseado.  

## 5. Álgebra Relacional  
Disciplina matematica que utiliza operadores:
- **Primitivos:** Esenciales, no pueden obtenerse a partir de otros.
- **Derivados:** Se obtienen aplicando operadores primitivos
### 5.1. Operadores Primitivos  
1. **Unión** (`R ∪ S`)  
   - Combina dos relaciones con el mismo esquema.  
2. **Diferencia** (`R - S`)  
   - Muestra los elementos de `R` que no están en `S`.  
3. **Producto Cartesiano** (`R × S`)  
   - Combina cada tupla de `R` con cada tupla de `S`.  
4. **Proyección** (`πx(R)`)  
   - Selecciona atributos específicos de `R`.  
5. **Selección** (`σF(R)`)  
   - Filtra tuplas de `R` según una condición `F`.  

### 5.2. Operadores Derivados  
1. **Intersección** (`R ∩ S`)  
    - Muestra los elementos comunes entre `R` y `S`.  
2. **División** (`R ÷ S`)  
   - Extrae subconjuntos relacionados de `R` con `S`.  
3. **Reunión (Join)**  
   - Combina tablas aplicando condiciones específicas.  
4. **Reunión Natural (Natural Join)**  
   - Une relaciones con atributos comunes, eliminando duplicados.  

## 6. Aplicación al Contexto Escolar y Laboral  
- **Contexto Escolar**  
   - Materia TIC en Bachillerato.  
   - Presente en ciclos formativos como DAM, DAW y ASIR.  
- **Contexto Laboral**  
   - Aplicaciones en banca, telecomunicaciones, comercio, salud, etc.  
   - Tendencias actuales: **Inteligencia Artificial (IA)** y **Multicloud**.  

## 7. Conclusión  
- **Importancia del modelo relacional** en la gestión de datos.  
- **Estructura y reglas** que garantizan eficiencia y seguridad.  
- **Expansión del modelo objeto-relacional** en los últimos años.  

## 8. Bibliografía  
- Date C.J (2000). *Introducción a los sistemas de bases de datos*.  
- De Miguel A, Piattini M (1999). *Fundamentos y modelos de BBDD*.  
- Korth H, Silberschatz (2002). *Fundamentos de bases de datos*.  
- Núñez R (2023). *Gestión de bases de datos*.  