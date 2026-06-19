
# Tema 26 Programación Modular, Diseño de Funciones, Recursividad, Librerías

## ÍNDICE 
```bash
1. INTRODUCCIÓN
2. CONCEPTOS PREVIOS
3. PROGRAMACIÓN MODULAR
   3.1. PROGRAMA PRINCIPAL Y SUBPROGRAMAS
   3.2. ÁMBITO DE UN IDENTIFICADOR
4. DISEÑO DE FUNCIONES
   4.1. DECLARACIÓN
   4.2. INVOCACIÓN
   4.3. PASO DE PARÁMETROS
5. RECURSIVIDAD
   5.1. ESTRUCTURA
   5.2. CARACTERÍSTICAS
   5.3. TIPOS
6. LIBRERÍAS
   6.1. ESTRUCTURA
   6.2. CARACTERÍSTICAS
   6.3. TIPOS
7. CONCLUSIÓN
8. BIBLIOGRAFÍA
```

---

## 1. Introducción
- Paradigma de programación que consiste en la división del programa en varias partes que se comunican
- Importancia en el avance tecnológico.
- Fundamental para tecnologías modernas, dispositivos mobiles y ordenadores actuales
- Forma parte del temario oficial de acceso a especialidades de Informática.
- Ubicado en el bloque de "Algoritmos y Programación".
- Importancia en el currículo educativo y tecnológico.


## 2. Conceptos Previos
- **Informática:** busca soluciones a problemas mediante algoritmos.
- **Programación:** traducción de algoritmos a un lenguaje entendible por la computadora.
- **Lenguaje de programación:** conjunto de reglas y símbolos para escribir programas.
- **Evolución:** de código "espagueti" a paradigmas estructurados y modulares.
- **Paradigmas:** Programación estructurada y modular
- Paradigma de programación que consiste en la división del programa en varias partes que se comunican

## 3. Programación Modular
- **Definición**: División de un programa en módulos independientes que puedan entenderse y manejares de manera más fácil y que se comunican. Se denominan subprogramas o módulos y en el programa principal se llaman funciones.
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
El programa principal se soluciona con el correspondiente programa o algoritmo principal y la solución de los subprogramas mediante funciones que podrán ser invocadas.
La exstructura del subprograma es similar a la de un programa y su función es resolver parte el programa principal de forma independiente.
- **Subprogramas internos**: Reside en el mismo archivo que el programa principal
- **Externos**: Se encuentra en otro archivo separado.

### 3.2 Ámbito de un Identificador
- **Identificadores locales:** Definidos dentro de un subprograma, siendo su ámbito exclusivamente el de la función, no siendo accesible fuera de esta
- **Globales:** Definidos en el programa principal, siendo su ámbito todo el programa.
 
## 4. Diseño de Funciones
- **Definición**: Subprograma que recibe 0,1 o varios parámetros y devuelve un resultado asociado a la función, denominado retorno.
- **Tipos**: Propias del lenguaje vs definidas por el usuario. Las definidas por el usuario deben ser declaradas para ser invocadas.

### 4.1 Declaración
- **Cabecera**: modificadores, tipo de retorno, nombre función y parámetros y tipo.
- **Cuerpo**: Instrucciones a realizar por la función

```java
// Funcion que calcula el factorial de un numero en java

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
Existe una correspondencia entre los parámetros formales, los que recibe la función, y los actuales, los que se envían a la función, por el cual los actuales sustituyen a los formales.
Existen 2 métodos para establecer el paso de parámetros:
- **Paso por valor:** Los parámetros formales reciben una copia de los actuales.
- **Paso referencia:** Se envía la dirección de memoria del parámetro actual, siendo una variable compartida que puede ser modificada desde la función.

Los lenguajes modernos como Java, Python o Rust no implementan el paso por referencia, ya que gestionan la memoria de forma diferente.

## 5. Recursividad
- **Definición**: Herramienta de programación qie reduce los algoritmos.
- Realiza llamadas a un método dentro del mismo método
- Simplifica el problema en otros más simples, denominados caso base.
- Función que se llama a sí misma.
- Muy útil en métodos que operan con estructuras de datos.

### 5.1 Estructura
- **Caso base**: Se resuelve sin recursividad, debe existir para salir de la recursividad.
- **Llamada recursiva**: La llamada recursiva debe progresar al caso base

### 5.2 Características
- Uso de memoria dinámica.
- Almacenamiento en pila.
- Profundidad de la recursividad el número de veces que la función se llama a si misma
- Muy potente en cálculo
- La función iterativa puede consumir menos recursos que la recursiva.

### 5.3 Tipos
- **Recursividad directa:** La función se llama a si misma.
- **Indirecta:** La función llama a otra función que a su vez vuelve a llamar a la primera función

## 6. Librerías
- **Definición**: Conjunto de funciones reutilizables.

### 6.1 Estructura
- Llamadas a otras librerías.
- Declaraciones globales. Variables, constantes, funciones
- Definición de funciones. Desarrollo de las funciones de la librería

### 6.2 Características
- Ocultación de información.
- Reutilización y portabilidad.
- Portabilidad
- Permite la invocación de cualquier función de la librería

### 6.3 Tipos
- Librerías estándar vs de usuario.



## 7. Conclusión
- Ventajas de la programación modular: legibilidad, mantenimiento, y resolución de problemas.

## 8. Bibliografía
- Joyanes, L. (2020). Fundamentos de programación.
- Prieto, A. (2006). Introducción a la informática.
- López, L. (2004). Programación Estructurada.
- Hernández M. (2022). Estructuras de datos. Editorial Ra-Ma

[Mapa Visual](/oposdocs/mapasweb/tema26map.html)
[Generar PDF](/oposdocs/pdf/tema26.pdf)