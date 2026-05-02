
# Tema 11: Organización Lógica de los Datos. Estructuras Estáticas

## 1. Introducción
- Importancia de la organización de datos en informática.
- Relación con la eficiencia del procesamiento de información.
- Relevancia en sistemas de análisis de datos y big data.

## 2. Organización Lógica de los Datos
### 2.1. Datos y variables
- Objeto manipulable por un ordenador.
- Tipos:
  - **Básicos**: Enteros, reales, booleanos, caracteres.
  - **Definidos por el programador**: Estructuras personalizadas.

### 2.2. Tipos de datos

### 2.3. Tipado de datos

### 2.4. Estructuras de Datos
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

## 4. Conclusión

Las estructuras estáticas son especialmente útiles cuando el tamaño de los datos es conocido de antemano y no cambia durante la ejecución del programa. Su principal ventaja es que permiten un acceso muy eficiente a los elementos (generalmente en tiempo constante, O(1)) y un uso de memoria simple y predecible, ya que se asigna de forma contigua desde el inicio.

Se utilizan cuando se prioriza:
- Rapidez de acceso
- Bajo coste computacional
- Simplicidad en la implementación

Sin embargo, su limitación principal es la falta de flexibilidad, ya que no pueden adaptarse fácilmente a cambios en la cantidad de datos.

En resumen, son ideales para escenarios donde los datos son estables, conocidos y no crecen dinámicamente.

[Tema 11 Mapa Visual](/oposdocs/mapasweb/tema11map.html).

![Estructuras de datos](img/est_dinamicas.png)