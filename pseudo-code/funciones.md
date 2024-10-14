---
title: "Funciones"
parent: "Pseudo-Codigo"
nav_order: 2
---

# Guía sobre Funciones en Pseudocódigo

## Introducción a las Funciones
En programación, **las funciones** son bloques de código que realizan una tarea específica. Se utilizan para dividir el código en partes más pequeñas y manejables, facilitando su comprensión y mantenimiento. Las funciones pueden o no devolver un valor, y pueden recibir información a través de **parámetros**.

En pseudocódigo, el uso de funciones es fundamental para estructurar programas complejos de manera clara y ordenada. A continuación, explicaremos cómo definir y utilizar funciones, diferenciando entre aquellas que devuelven un valor y las que no.

## Tipos de Funciones

### 1. Funciones sin retorno
Las funciones **sin retorno** son aquellas que realizan una serie de acciones pero no devuelven ningún valor al programa que las llama. Estas funciones se usan cuando no necesitamos un resultado específico, sino simplemente ejecutar un conjunto de instrucciones.

#### Sintaxis en pseudocódigo
```pseudocode
SubProceso NombreDeLaFuncion (parámetros)
    // Instrucciones de la función
FinSubProceso
```

#### Ejemplo: Imprimir un mensaje
```pseudocode
SubProceso MostrarMensaje (mensaje Como Texto)
    Escribir "El mensaje es: ", mensaje
FinSubProceso
```

- **Descripción**: Esta función, llamada `MostrarMensaje`, recibe un **parámetro** llamado `mensaje` y lo muestra en pantalla. No devuelve ningún valor.

### Llamada a una función sin retorno
Para usar una función sin retorno en pseudocódigo, simplemente escribimos su nombre y pasamos los **argumentos** necesarios:
```pseudocode
MostrarMensaje("Hola, mundo!")
```

### 2. Funciones con retorno
Las funciones **con retorno** realizan un conjunto de acciones y devuelven un valor al programa que las llama. Estas funciones se utilizan cuando necesitamos calcular un resultado y luego utilizarlo.

#### Sintaxis en pseudocódigo
```pseudocode
Funcion NombreDeLaFuncion (parámetros) Como TipoDeDato
    // Instrucciones de la función
    Retornar valor
FinFuncion
```

#### Ejemplo: Calcular el cuadrado de un número
```pseudocode
Funcion CalcularCuadrado (numero Como Real) Como Real
    Retornar numero * numero
FinFuncion
```

- **Descripción**: Esta función, llamada `CalcularCuadrado`, recibe un **parámetro** llamado `numero`, calcula su cuadrado y devuelve el resultado.

### Llamada a una función con retorno
Para usar una función con retorno, almacenamos el valor devuelto en una variable o lo usamos directamente:
```pseudocode
resultado <- CalcularCuadrado(5)
Escribir "El cuadrado es: ", resultado
```

## Parámetros y Argumentos

### ¿Qué son los parámetros?
**Los parámetros** son las variables que se definen en la cabecera de una función y que se utilizan para recibir valores cuando la función es llamada. Se comportan como variables locales dentro de la función.

- En el ejemplo `Funcion CalcularCuadrado (numero Como Real) Como Real`, `numero` es un parámetro.

### ¿Qué son los argumentos?
**Los argumentos** son los valores específicos que se pasan a una función cuando se llama a esa función. Son los datos que se utilizan para que la función realice sus cálculos o acciones.

- En la llamada `CalcularCuadrado(5)`, el valor `5` es un argumento que se pasa al parámetro `numero`.

## Resumen

| Tipo de Función           | Sintaxis de Ejemplo                                      | Descripción                                     |
|---------------------------|---------------------------------------------------------|-------------------------------------------------|
| Función sin retorno       | `SubProceso NombreDeLaFuncion (parámetros)`              | Ejecuta instrucciones pero no devuelve valor.   |
| Función con retorno       | `Funcion NombreDeLaFuncion (parámetros) Como TipoDeDato` | Ejecuta instrucciones y devuelve un valor.      |

## Conclusión
Las funciones son herramientas poderosas para organizar y modularizar tu código en pseudocódigo. Las funciones **sin retorno** son útiles para ejecutar tareas repetitivas, mientras que las funciones **con retorno** son esenciales para cálculos y manipulación de datos. Comprender la diferencia entre **parámetros** y **argumentos** es clave para utilizar las funciones de manera eficiente.


## Ejemplo

Programa que pide al usuario la dimensión de un array para almacenar las calificaciones de un alumno, las muestra por pantalla y calcula la media una función (devuelve un float) y devuelve la calificación final como una cadena con otra función (devuelve un string)

```pseudocode
Funcion notafin <- Calificacion (NotaFinal)
	Definir evaluacion,notafin como Caracter
	
	Si NotaFinal < 5 Entonces
        evaluacion <- "Suspenso"
    Sino
        Si NotaFinal >= 5 Y NotaFinal < 6 Entonces
            evaluacion <- "Aprobado"
        Sino
            Si NotaFinal >= 6 Y NotaFinal < 7 Entonces
                evaluacion <- "Bien"
            Sino
                Si (NotaFinal >= 7 Y NotaFinal < 9) Entonces
                    evaluacion <- "Notable"
                Sino
                    Si NotaFinal >= 9 Y NotaFinal <= 10 Entonces
                        evaluacion <- "Sobresaliente"
                    Sino
                        evaluacion <- "Nota no válida"
                    FinSi
                FinSi
            FinSi
        FinSi
    FinSi
	notafin<-evaluacion
Fin Funcion

Funcion notamedia <- Promedio (num, cantidad)
	Definir suma Como Entero
	Definir notamedia como Real
	suma <-0
	Para i<-1 Hasta cantidad Hacer
		suma <- suma + num[i]
	FinPara
	notamedia <- suma/cantidad
Fin Funcion



Algoritmo array2
	Definir cantidad,i Como Entero
	Definir NotaFinal como Real
	Escribir "Introduce numero de calificaciones: "
	Leer cantidad
	Dimension num[cantidad]
	Para i<-1 Hasta cantidad  Hacer
		Escribir "Ingrese calificación número ",i 
		Leer num[i]
	FinPara
	Escribir "Las calificaciones ingresadas son : "
	Para i<-1 Hasta cantidad Hacer
		Escribir num[i]
	FinPara
	NotaFinal<-Promedio(num,cantidad)
	Escribir "La nota media es: ", NotaFinal
	Escribir "La nota Fin de Curso es: ", Calificacion(NotaFinal)
FinAlgoritmo
```