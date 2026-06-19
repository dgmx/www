
# Tema 40 - Diseño de Bases de Datos Relacionales

## ÍNDICE 
```bash
1. INTRODUCCIÓN
2. DISEÑO DE BASES DE DATOS RELACIONALES
3. DISEÑO CONCEPTUAL: MODELO ENTIDAD-RELACIÓN (E/R)
   3.1. ENTIDADES
   3.2. RELACIONES
   3.3. ATRIBUTOS
   3.4. MODELO E/R EXTENDIDO
4. DISEÑO LÓGICO
   4.1. PASO DEL MODELO E/R AL MODELO RELACIONAL
   4.2. NORMALIZACIÓN Y FORMAS NORMALES
5. DISEÑO FÍSICO
6. CONCLUSIÓN
7. BIBLIOGRAFÍA
```

---

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


### 4.1. Paso del Modelo E/R al Modelo Relacional
- **Conversión de entidades en tablas**.
- **Conversión de atributos en columnas**.
- **Conversión de relaciones**:
  - 1:N → Propagar clave primaria.
  - M:N → Nueva tabla intermedia.

### 4.2. Normalización y Formas Normales
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
  - Cifrado


## 6. Conclusión
- Importancia del diseño en bases de datos relacionales.
- Etapas clave:
  1. Diseño conceptual (modelo E/R).
  2. Diseño lógico (transformación al modelo relacional).
  3. Diseño físico (optimización para almacenamiento y rendimiento).

## 7. Bibliografía
- **Date, C.J.** (2000). *Introducción a los sistemas de bases de datos*. Addison-Wesley.
- **De Miguel A, Piattini M** (1999). *Fundamentos y modelos de BBDD*. Ra-Ma.
- **Korth H, Silberschatz** (2002). *Fundamentos de bases de datos*. McGraw-Hill.
- **Núñez, R.** (2023). *Gestión de bases de datos*. Ra-Ma.
- Oracle, MySQL, MongoDB, MariaDB, SQL Server


