
# Tema 11: Organización Lógica de los Datos. Estructuras Estáticas

## ÍNDICE 
```bash
1. INTRODUCCIÓN
2. ORGANIZACIÓN LÓGICA DE LOS DATOS
   2.1. DATOS Y VARIABLES
   2.2. TIPOS DE DATOS
   2.3. TIPADO DE DATOS
   2.4. ESTRUCTURAS DE DATOS
3. ESTRUCTURAS ESTÁTICAS
   3.1. ARRAYS
   3.2. CADENAS DE CARACTERES
   3.3. REGISTROS
   3.4. ENUMERACIONES
4. CONCLUSIÓN
5. BIBLIOGRAFÍA
```

---

## 1. Introducción
- Importancia de la organización de datos en informática.
- Relación con la eficiencia del procesamiento de información.
- Relevancia en sistemas de análisis de datos y big data.

## 2. Organización Lógica de los Datos
### 2.1. Datos y variables

**Datos:** 
Son representaciones simbólicas de hechos, valores o información que pueden ser procesados por una computadora. Por sí solos no tienen significado hasta que se interpretan.

Características de los datos:
- Pueden ser numéricos, textuales, lógicos, etc.
- Son la base del procesamiento.
- Se almacenan y manipulan mediante estructuras de datos.

**Variables:**
Son espacios de memoria que se utilizan para almacenar datos durante la ejecución de un programa. Su valor puede cambiar a lo largo del tiempo.

Características de las variables:
- Tienen un nombre identificador.
- Almacenan un tipo de dato específico (entero, real, cadena, etc.).
- Su valor puede modificarse durante la ejecución.
- Ocupan un espacio en memoria.
- Permiten realizar cálculos 
- Facilitan la toma de decisiones.

### 2.2. Tipos de datos

Los tipos de datos son clasificaciones que indican qué tipo de valor puede almacenar una variable y qué operaciones se pueden realizar con ella.

Se clasifican en básicos, simples o primitivos y compuestos:

**Tipos de datos simples**.  
Son aquellos que almacenan un solo valor a la vez.   
Ejemplos:
- Numéricos: Entero (10) o Real (3.5)
- Carácter (char): 'A'
- Booleano (bool): true

Características:
- Representan datos básicos.
- Ocupan una sola posición de memoria.
- Son fáciles de manipular.

**Tipos de datos compuestos**.   
Son aquellos que pueden almacenar varios valores o estructuras de datos.   
Ejemplos:
- Arreglos (arrays)
- Listas
- Registros (struct)
- Cadenas de texto (strings, en muchos lenguajes)

Características:
- Agrupan varios datos simples.
- Permiten organizar información más compleja.
- Son más flexibles y potentes para estructuras grandes.

Dentro de los compuestos existen los llamados tipos definidos por el programador, que permiten la creación de tipos de datos que se adaptan a las necesidades de sus aplicaciones como las clases.

### 2.3. Tipado de datos

El tipado de datos se refiere a la forma en que un lenguaje de programación define, controla y maneja los tipos de datos que pueden usar las variables.

Clasificación del tipado de datos.  
**1. Tipado estático.**  
El tipo de dato de una variable se define en tiempo de compilación y no puede cambiar.   
Ejemplos de lenguajes: Java, C, C++
Características:
   - Requiere declarar el tipo de variable.
   - Detecta errores antes de ejecutar el programa.
   - Más control y eficiencia.    
  
**2. Tipado dinámico.**  
El tipo de dato se define en tiempo de ejecución y puede cambiar.   
Ejemplos de lenguajes: Python, JavaScript, PHP.  
Características:
   - No siempre es necesario declarar tipos.
   - Más flexible.
Los errores de tipo aparecen en ejecución.

**3. Tipado fuerte.**  
No permite mezclar tipos de datos sin conversión explícita.
Ejemplos: Python, Java.  
Características:
   - Estricto con las operaciones entre tipos.
   - Evita errores inesperados.
  
**4. Tipado débil.**  
Permite conversiones automáticas entre tipos de datos.   
Ejemplos: JavaScript, PHP.  
Características:
   - Más flexible, pero menos seguro.
   - Puede causar resultados inesperados.


El tipado de datos clasifica los lenguajes según cómo manejan los tipos de variables: pueden ser estáticos o dinámicos, y fuertes o débiles, dependiendo del nivel de control y flexibilidad que ofrecen.

Ademas, dependiendo si se declaran directamente o se infieren en tiempo de ejecución:

**Tipado explícito**
El programador declara directamente el tipo de dato de la variable.   
Ejemplo (Java):
```java
int numero = 10;
String nombre = "Ana";
````
Características:
- El tipo se especifica manualmente.
- Mayor control sobre el programa.
- Reduce ambigüedades.
- Más común en lenguajes de tipado estático.

**Inferencia de tipos**
El lenguaje deduce automáticamente el tipo de dato a partir del valor asignado.   
Ejemplos:
```java
// var en Java
var numero = 10;   // el compilador infiere que es int
```
```python
# Python
nombre = "Ana"     # Python infiere que es string
```
Características:
- No es necesario declarar el tipo.
- Código más corto y legible.
- Depende del valor asignado.
- Puede ocurrir en lenguajes estáticamente tipados con inferencia o dinámicos.


### 2.4. Estructuras de Datos
Colección de datos organizados para su almacenamiento y manipulación. Se caracterizan por su organización y por el tipo de operaciones que se pueden realizar con ellas.

Se clasificación según como gestionan la memoria:
- **Estáticas**: Tamaño fijo, definido en tiempo de compilación.
- **Dinámicas**: Tamaño variable, asignado en tiempo de ejecución.

## 3. Estructuras Estáticas
### 3.1. Arrays
#### 3.1.1. Arrays Unidimensionales
Definición: Colección lineal de elementos del mismo tipo los cuales tienen asociado un índice que determina de forna unívoca la posición de dicho dato en el array. 
- Al número de indices del array se le denomina tamaño del array
- Hay arrays de 1 dimensión o vector, de 2 dimensiones o matriz, de 3 o más denominados tensores.
- El número de índices necesarios para determinar un elemento del array indica la dimensión del array.
  
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
  - **Comparación**
    ```c
    strcmp(s1,s2);
    ```
  - **Asignación**: Directa o con
    ```c
    strcpy(dest, src)
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