---
title: "Tema 11 Organización Lógica de los Datos y Estructuras Estáticas."
parent: "Maps"
nav_exclude: true
---

# Tema 11: Organización Lógica de los Datos y Estructuras Estáticas

## 1. Introducción
- Importancia de la organización de datos en informática.
- Relación con la eficiencia del procesamiento de información.
- Relevancia en sistemas de análisis de datos y big data.

## 2. Organización Lógica de los Datos
### 2.1. Dato
- Objeto manipulable por un ordenador.
- Tipos:
  - **Básicos**: Enteros, reales, booleanos, caracteres.
  - **Definidos por el programador**: Estructuras personalizadas.

### 2.2. Estructuras de Datos
- Colección de datos organizados para su almacenamiento y manipulación.
- Clasificación según la gestión de memoria:
  - **Estáticas**: Tamaño fijo, definido en tiempo de compilación.
  - **Dinámicas**: Tamaño variable, asignado en tiempo de ejecución.

## 3. Estructuras Estáticas
### 3.1. Arrays
#### 3.1.1. Arrays Unidimensionales
- Definición: Colección lineal de elementos del mismo tipo.
- **Ejemplo de declaración**:
  ```cpp
  float notas[5]; // C++
  float [] notas = new float[5]; // Java
  var notas: array[1..5] of real; // Pascal
  ```
- Operaciones:
  - **Asignación**: `numeros[0] = 99; // Java`
  - **Acceso**: `int valor = numeros[2]; // C++`
  - **Recorrido**:
    ```pseudocódigo
    Para i = 1 hasta tamaño 
      Escribir notas[i]
    FinPara
    ```

#### 3.1.2. Arrays Multidimensionales
- Definición: Matriz de datos con múltiples índices.
- **Ejemplo de declaración**:
  ```cpp
  int matriz[3][3]; // C++
  int [][] matriz = new int[3][3]; // Java
  ```
- **Recorrido**:
  ```java
  for(int i=0; i<3; i++) {
      for(int j=0; j<3; j++) {
          System.out.println(matriz[i][j]);
      }
  }
  ```

### 3.2. Cadenas de Caracteres
- Definición: Array de caracteres.
- **Ejemplo en C**:
  ```c
  char cadena[20] = "Hola Mundo";
  ```
- Operaciones:
  - **Concatenación**:
    ```c
    strcat(cadena1, cadena2);
    ```
  - **Longitud**:
    ```c
    int len = strlen(cadena);
    ```

### 3.3. Registros
- Definición: Conjunto de campos de distintos tipos.
- **Ejemplo en C**:
  ```c
  struct Alumno {
      int DNI;
      char nombre[50];
      char apellidos[50];
  };
  ```
- Operaciones:
  - **Asignación**: `alumno1.DNI = 12345678;`
  - **Acceso**: `printf("%s", alumno1.nombre);`

### 3.4. Enumeraciones
- Definición: Conjunto de valores predefinidos.
- **Ejemplo en C**:
  ```c
  enum Dia {Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo};
  ```
- **Ejemplo en Java**:
  ```java
  public enum Dia {LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO, DOMINGO}
  ```

## 4. Recursos y Herramientas Educativas
- [SoloLearn](https://www.sololearn.com)
- [VisuAlgo](https://visualgo.net)

## 5. Aplicaciones en Contexto Escolar y Laboral
- **Escuela**: Enseñanza en ciclos formativos de informática.
- **Trabajo**:
  - Desarrollo de software.
  - Optimización del almacenamiento y acceso a datos.

## 6. Conclusión
- Elección de estructuras de datos según el problema a resolver.
- Beneficio de estructuras estáticas en eficiencia y uso de memoria.

[Tema 11 Mapa Visual](tema11map.html).