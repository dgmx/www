# 📘 Manual de Introducción al Pseudocódigo con PSeInt

## 🧩 ¿Qué es PSeInt?
**PSeInt** es una herramienta educativa que permite aprender los fundamentos de la programación usando **pseudocódigo**, un lenguaje intermedio entre el español y un lenguaje de programación real.  
Ayuda a desarrollar lógica sin preocuparse por la sintaxis estricta de lenguajes como C, Java o Python.

---

## 🖥️ Estructura básica de un algoritmo
Todo programa en PSeInt tiene la siguiente estructura:
```pseint
Proceso NombreDelProceso
    // Aquí va el código
FinProceso
```
Ejemplo:
```pseint
Proceso HolaMundo
    Escribir "¡Hola mundo!"
FinProceso
```

---

## 🧮 Operadores más utilizados

### 🔹 Operadores aritméticos
| Operador | Descripción         | Ejemplo           |
|-----------|--------------------|-------------------|
| `+`       | Suma               | `a + b`           |
| `-`       | Resta              | `a - b`           |
| `*`       | Multiplicación     | `a * b`           |
| `/`       | División real      | `a / b`           |
| `MOD`     | Resto o módulo     | `a MOD b`         |
| `^`       | Potencia           | `a ^ b`           |

### 🔹 Operadores relacionales
| Operador | Significado     | Ejemplo        |
|-----------|----------------|----------------|
| `=`       | Igual           | `a = b`        |
| `<>`      | Distinto        | `a <> b`       |
| `>`       | Mayor que       | `a > b`        |
| `<`       | Menor que       | `a < b`        |
| `>=`      | Mayor o igual   | `a >= b`       |
| `<=`      | Menor o igual   | `a <= b`       |

### 🔹 Operadores lógicos
| Operador | Significado | Ejemplo              |
|-----------|-------------|----------------------|
| `Y`       | AND         | `(a > 0) Y (b < 10)` |
| `O`       | OR          | `(a = 5) O (b = 7)`  |
| `NO`      | NOT         | `NO (a = b)`         |

---

## 📥 Entrada y salida de datos

### 🔹 Salida: `Escribir`
```pseint
Escribir "Hola"
Escribir "El resultado es: ", resultado
```

### 🔹 Entrada: `Leer`
```pseint
Leer nombre
Escribir "Hola ", nombre
```

---

## ⚖️ Condicionales

### 🔹 Estructura simple
```pseint
Si condicion Entonces
    // Instrucciones si es verdadero
FinSi
```

### 🔹 Estructura con alternativa
```pseint
Si condicion Entonces
    // Verdadero
Sino
    // Falso
FinSi
```

### 🔹 Estructura anidada o múltiple
```pseint
Si a > b Entonces
    Escribir "A es mayor"
Sino
    Si a = b Entonces
        Escribir "Son iguales"
    Sino
        Escribir "B es mayor"
    FinSi
FinSi
```

---

## 🔁 Bucles (iteraciones)

### 🔹 Mientras (bucle condicional)
```pseint
Mientras condicion Hacer
    // Repetir mientras la condición sea verdadera
FinMientras
```

Ejemplo:
```pseint
contador <- 1
Mientras contador <= 5 Hacer
    Escribir "Número: ", contador
    contador <- contador + 1
FinMientras
```

### 🔹 Repetir (bucle post-condicional)
```pseint
Repetir
    // Código
Hasta Que condicion
```
Ejemplo:
```pseint
contador <- 1
Repetir
    Escribir contador
    contador <- contador + 1
Hasta Que contador > 5
```

### 🔹 Para (bucle controlado)
```pseint
Para i <- 1 Hasta 10 Con Paso 1 Hacer
    Escribir i
FinPara
```

---

## 📦 Arreglos (arrays)
### 🔹 Definición
```pseint
Definir numeros Como Entero
Dimension numeros[5]
```

### 🔹 Asignación y uso
```pseint
numeros[1] <- 10
numeros[2] <- 20
Escribir "Primer número: ", numeros[1]
```

### 🔹 Recorrido con bucle
```pseint
Para i <- 1 Hasta 5 Hacer
    Leer numeros[i]
FinPara

Para i <- 1 Hasta 5 Hacer
    Escribir "Elemento ", i, ": ", numeros[i]
FinPara
```

---

## 🧠 Funciones y subprocesos

### 🔹 SubProceso (sin retorno)
```pseint
SubProceso MostrarSaludo(nombre)
    Escribir "Hola ", nombre
FinSubProceso

Proceso Principal
    Leer n
    MostrarSaludo(n)
FinProceso
```

### 🔹 Función (con retorno)
```pseint
Funcion resultado <- Sumar(a, b)
    resultado <- a + b
FinFuncion

Proceso Principal
    Escribir "La suma es: ", Sumar(5, 3)
FinProceso
```

---

## 🧾 Comentarios
```pseint
// Esto es un comentario
Comentario Esto también es un comentario
```

---

## 🧱 Tipos de datos
| Tipo       | Ejemplo de valor     |
|-------------|----------------------|
| `Entero`    | `10`, `-3`           |
| `Real`      | `3.14`, `-0.5`       |
| `Cadena`    | `"Hola"`             |
| `Logico`    | `Verdadero`, `Falso` |

---

## 🧩 Ejemplo completo
```pseint
Proceso PromedioNotas
    Definir nota1, nota2, nota3, promedio Como Real

    Escribir "Ingrese tres notas:"
    Leer nota1, nota2, nota3

    promedio <- (nota1 + nota2 + nota3) / 3

    Si promedio >= 6 Entonces
        Escribir "Aprobado con promedio: ", promedio
    Sino
        Escribir "Reprobado con promedio: ", promedio
    FinSi
FinProceso
```

---

## ✅ Conclusión
PSeInt es una herramienta ideal para **aprender lógica de programación**.  
Dominar la sintaxis básica te permitirá dar el salto fácilmente a lenguajes como **Python, Java o C++**.
