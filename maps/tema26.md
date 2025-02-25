---
title: "Tema 26 Programación Modular, Diseño de Funciones, Recursividad, Librerías"
parent: "Maps"
nav_exclude: true
---

# Tema 26 Programación Modular, Diseño de Funciones, Recursividad, Librerías

## 1. Introducción
- Importancia en el avance tecnológico.
- Aplicación en ciclos formativos y desarrollo de software.

## 2. Conceptos Previos
- **Informática:** busca soluciones a problemas mediante algoritmos.
- **Programación:** traducción de algoritmos a un lenguaje entendible por la computadora.
- **Lenguaje de programación:** conjunto de reglas y símbolos para escribir programas.
- **Evolución:** de código "espagueti" a paradigmas estructurados y modulares.
- **Paradigmas:** Programación estructurada y modular

## 3. Programación Modular
- **Definición**: División de un programa en módulos independientes.
- **Características**:
  - Trabajo en equipo.
  - Depuración.
  - Reutilización.
  - Mantenimiento.
  - Creación de librerías.
- **Objetivos**:
  - Simplificación del problema.
  - Independencia en programación.
  - Mejor legibilidad y mantenimiento.

### 3.1 Programa Principal y Subprogramas
- Subprogramas internos vs externos.

### 3.2 Ámbito de un Identificador
- Identificadores locales vs globales.

## 4. Diseño de Funciones
- **Definición**: Subprograma que devuelve un resultado.
- **Tipos**: Propias del lenguaje vs definidas por el usuario.

### 4.1 Declaración
- **Cabecera**: modificadores, tipo de retorno, nombre función y parametros y tipo.
- **Cuerpo**: Instrucciones a realizar por la función

```java
// Funcion que calcula el factoria de un numero en java

public static void factoria(int n){   // Cabecera de la funcion
    int fact = 1;                       // Cuerpo de la funcion.
    for(int i=1; i<n; i++){
        fact = fact * i;
        return fact;
    }
}
```
### 4.2 Invocación
- Llamada con parámetros actuales.

### 4.3 Paso de Parámetros
- Paso por valor vs referencia.

## 5. Recursividad
- **Definición**: Función que se llama a sí misma.

### 5.1 Estructura
- Caso base.
- Llamada recursiva.

### 5.2 Características
- Uso de memoria dinámica.
- Almacenamiento en pila.
- Profundidad de recursión.

### 5.3 Tipos
- Recursividad directa vs indirecta.

## 6. Librerías
- **Definición**: Conjunto de funciones reutilizables.

### 6.1 Estructura
- Llamadas a otras librerías.
- Declaraciones globales.
- Definición de funciones.

### 6.2 Características
- Ocultación de información.
- Reutilización y portabilidad.

### 6.3 Tipos
- Librerías estándar vs de usuario.

## 7. Recursos y Herramientas de Interés
- Ejemplo: Sololearn.

## 8. Aplicación de los Contenidos al Contexto Escolar y Laboral
- Uso en ciclos formativos.
- Aplicación en desarrollo de software.

## 9. Conclusión
- Ventajas de la programación modular: legibilidad, mantenimiento, y resolución de problemas.

## 10. Bibliografía
- Joyanes, L. (2020). Fundamentos de programación.
- Prieto, A. (2006). Introducción a la informática.
- López, L. (2004). Programación Estructurada.
- Hernández M. (2022). Estructiras de datos. Editoria Ra-Ma

[Mapa Visual](tema26map.html){: .btn .btn-blue }
[Generar PDF](tema26.pdf){: .btn .btn-purple }