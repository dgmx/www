---
title: "Tema 4 Memoria Interna - Tipos, Direccionamiento, Características y Funciones"
parent: "Maps"
nav_exclude: true
---


# Tema 2: Memoria Interna - Tipos, Direccionamiento, Características y Funciones

## 1. Introducción
- **Arquitectura Von Neumann**:
  - Elementos: memoria, CPU, entrada/salida y buses.
  - Diferenciación entre memoria interna (registros, caché, RAM, ROM) y externa (HDD, SSD).
- **Relevancia**:
  - Incluida en ciclos formativos: Administración de Sistemas, Desarrollo de Aplicaciones, y Redes.

---

## 2. Características y Funciones
### Características:
- **Capacidad**: Tamaño en bits, bytes o palabras (K, M, G, T).
- **Duración**:
  - Volátil: Pierde datos sin energía (RAM).
  - No volátil: Conserva datos sin energía (ROM, Flash).
- **Tipo**: DRAM, SRAM, Flash.
- **Latencia**: Tiempo de acceso a datos.
- **Ancho de banda**: Velocidad de transferencia (GB/s).

### Funciones:
1. **Almacenamiento temporal**: Datos y programas activos.
2. **Instrucciones de inicio**: BIOS en ROM.
3. **Caché**: Datos frecuentes para mejorar rendimiento.
4. **Comunicación**: Entre CPU, E/S y subsistemas.

---

## 3. Tipos de Memoria Interna
### 3.1. Registros
- **Generales**: Operandos para instrucciones.
- **Específicos**:
  - **MAR**: Dirección de memoria.
  - **AC**: Resultado de la ALU.
  - **PC**: Siguiente instrucción.
  - **IR**: Instrucción actual.
  - **SP**: Puntero de pila.
  - **PSW**: Estado del procesador.

### 3.2. Memoria Caché
- Entre procesador y RAM.
- **SRAM**: Más rápida pero costosa.
- Niveles:
  - **L1**: Más rápida, menor capacidad.
  - **L2**: Intermedia.
  - **L3**: Mayor capacidad, más lenta.

### 3.3. Memoria RAM
- **Tipos**:
  - **DDR, DDR2, DDR3, DDR4, DDR5**: Mayor velocidad y eficiencia en generaciones sucesivas.
  - **GDDR**: Gráficos.
  - **LPDDR**: Bajo consumo para móviles.
- **Formatos**:
  - **DIMM**: PCs de escritorio.
  - **SO-DIMM**: Portátiles.
  - **CAMM**: Nuevo estándar (2023).

### 3.4. Memoria ROM
- No volátil, datos permanentes.
- Tipos:
  - ROM: Programada en fábrica.
  - PROM: Programable una vez.
  - EPROM: Borrable por UV.
  - EEPROM: Borrado y escritura eléctrica (Flash).

---

## 4. Direccionamiento
- **Palabras**: Dirección única por palabra.
- **Bytes**: Memoria lee toda la palabra, ignora bytes no solicitados.
- **Bloques**: Transferencia de bloques completos.

---

## 5. Recursos Educativos
- Herramientas: RAMMap (análisis avanzado de memoria en Windows).

---

## 6. Principales Fabricantes de RAM
- **Marcas**: Kingston, Corsair, OCZ Technology, Crucial, G.Skill, Transcend.

---

## 7. Aplicaciones en Contexto Escolar y Laboral
### Escolar:
- Introducción en secundaria y FP (módulos de hardware y sistemas).
### Laboral:
- Diseño de sistemas.
- Optimización de software.
- IA: Gestión eficiente de memoria.
- Diagnóstico y actualización de sistemas.

---

## 8. Conclusión
- Memoria interna: Clave para el rendimiento de dispositivos modernos.
- Jerarquía y tipos (registros, caché, RAM, ROM): Esenciales para la operación eficiente de sistemas.

---

## 9. Bibliografía
- Autores destacados: Prieto, Stallings, Tanenbaum, Moreno.
- Recursos web: Xataka, ComputerHoy.

[Tema 4 Mapa Visual](tema4map.html).