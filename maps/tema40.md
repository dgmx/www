# Tema 40 - Diseño de Bases de Datos Relacionales

## 1. Introducción
- Importancia del diseño de bases de datos relacionales.
- Decisiones clave en el diseño de bases de datos:
  - Definir relaciones y atributos.
  - Claves primarias y foráneas.
- Relación con el currículo educativo y profesional.

## 2. Diseño de Bases de Datos Relacionales
- **Base de datos**: conjunto estructurado y persistente de datos.
- **Objetivo**: definir la estructura de datos para garantizar coherencia y eficiencia.
- **Fases del diseño**:
  1. **Diseño conceptual**: modelo entidad-relación (E/R).
  2. **Diseño lógico**: conversión al modelo relacional.
  3. **Diseño físico**: implementación en memoria secundaria.

## 3. Diseño Conceptual: Modelo Entidad-Relación (E/R)
### 3.1. Entidades
- Representan objetos del mundo real.
- **Tipos**:
  - **Regulares**: existen por sí mismas.
  - **Débiles**: dependen de otras entidades.


### 3.2. Relaciones
- Asociación entre entidades.
- **Tipos**:
  - **1:1** (uno a uno).
  - **1:N** (uno a muchos).
  - **M:N** (muchos a muchos).
- **Grados**:
  - Unarias, binarias, ternarias, n-arias.

### 3.3. Atributos
- **Univaluado**: un solo valor por entidad.
- **Multivaluado**: varios valores posibles.
- **Clave primaria**: identifica de manera única una entidad.

### 3.4. Modelo E/R Extendido
- **Cardinalidad**: número de ocurrencias de una entidad relacionadas con otra.
- **Generalización y Especialización**:
  - Generalización: agrupar entidades en un supertipo.
  - Especialización: subdividir en subtipos.

## 4. Diseño Lógico
### 4.1. Simplificación de Diagramas E/R
- Transformaciones necesarias antes de convertir al modelo relacional:
  - Eliminar relaciones cíclicas.
  - Convertir entidades débiles en fuertes.

### 4.2. Paso del Modelo E/R al Modelo Relacional
- **Conversión de entidades en tablas**.
- **Conversión de atributos en columnas**.
- **Conversión de relaciones**:
  - 1:N → Propagar clave primaria.
  - M:N → Nueva tabla intermedia.

### 4.3. Normalización y Formas Normales
- **Objetivos**:
  - Reducir redundancia.
  - Mejorar integridad de datos.
- **Dependencias funcionales**:
  - Reflexiva, aumentativa, transitiva, completa.
- **Formas normales**:
  1. **1FN**: Sin grupos repetitivos.
  2. **2FN**: Dependencia total de la clave primaria.
  3. **3FN**: Eliminación de dependencias transitivas.
  4. **FNBC**: Todas las claves candidatas son determinantes.
  5. **4FN**: Sin dependencias multivaluadas.
  6. **5FN**: Eliminación de dependencias de reunión.

## 5. Diseño Físico
- **Objetivo**: Optimizar rendimiento y almacenamiento.
- **Factores clave**:
  - Índices.
  - Punteros y direccionamiento (hashing).
  - Agrupación y particionamiento de datos.
  - Seguridad y redundancia.

## 6. Aplicación en Contexto Escolar y Laboral
### 6.1. Contexto Escolar
- Se estudia en asignaturas como TIC en Bachillerato y módulos de FP (DAM, DAW, ASIR).

### 6.2. Contexto Laboral
- Aplicaciones en banca, telecomunicaciones, salud, e-commerce, etc.
- Tendencias emergentes:
  - **Inteligencia Artificial aplicada a bases de datos**.
  - **Entornos Multicloud**.

## 7. Conclusión
- Importancia del diseño en bases de datos relacionales.
- Etapas clave:
  1. Diseño conceptual (modelo E/R).
  2. Diseño lógico (transformación al modelo relacional).
  3. Diseño físico (optimización para almacenamiento y rendimiento).

## 8. Bibliografía
- **Date, C.J.** (2000). *Introducción a los sistemas de bases de datos*. Addison-Wesley.
- **De Miguel A, Piattini M** (1999). *Fundamentos y modelos de BBDD*. Ra-Ma.
- **Korth H, Silberschatz** (2002). *Fundamentos de bases de datos*. McGraw-Hill.
- **Núñez, R.** (2023). *Gestión de bases de datos*. Ra-Ma.
- Oracle, MySQL, MongoDB, MariaDB, SQL Server


