---
title: 1. Manual de Julia
parent: "Julia"
---


# Manual de Introducción al Lenguaje de Programación Julia

> **Versión:** 1.0 · **Nivel:** Principiante · **Idioma:** Español

---

## Tabla de Contenidos

- [Manual de Introducción al Lenguaje de Programación Julia](#manual-de-introducción-al-lenguaje-de-programación-julia)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [1. ¿Qué es Julia?](#1-qué-es-julia)
    - [Características principales](#características-principales)
    - [¿Para qué se usa Julia?](#para-qué-se-usa-julia)
  - [2. Instalación](#2-instalación)
    - [Descarga oficial](#descarga-oficial)
    - [Instalación con `juliaup` (recomendado)](#instalación-con-juliaup-recomendado)
    - [Entornos de desarrollo](#entornos-de-desarrollo)
  - [3. El REPL de Julia](#3-el-repl-de-julia)
    - [3.1 Modos del REPL](#31-modos-del-repl)
      - [Modo Julia (prompt: `julia>`)](#modo-julia-prompt-julia)
      - [Modo Ayuda (prompt: `help?>`)](#modo-ayuda-prompt-help)
      - [Modo Pkg (prompt: `(@v1.10) pkg>`)](#modo-pkg-prompt-v110-pkg)
      - [Modo Shell (prompt: `shell>`)](#modo-shell-prompt-shell)
    - [3.2 Atajos de teclado útiles](#32-atajos-de-teclado-útiles)
    - [3.3 Historial y autocompletado](#33-historial-y-autocompletado)
  - [4. Variables y Tipos de Datos](#4-variables-y-tipos-de-datos)
    - [Reglas para nombres de variables](#reglas-para-nombres-de-variables)
    - [Verificar tipos](#verificar-tipos)
    - [4.1 Enteros y flotantes](#41-enteros-y-flotantes)
    - [4.2 Booleanos](#42-booleanos)
    - [4.3 Cadenas de texto](#43-cadenas-de-texto)
    - [4.4 Caracteres](#44-caracteres)
    - [4.5 Tipos numéricos especiales](#45-tipos-numéricos-especiales)
  - [5. Operadores](#5-operadores)
    - [5.1 Aritméticos](#51-aritméticos)
    - [5.2 Comparación](#52-comparación)
    - [5.3 Lógicos](#53-lógicos)
    - [5.4 Asignación compuesta](#54-asignación-compuesta)
  - [6. Cadenas de Texto en Detalle](#6-cadenas-de-texto-en-detalle)
  - [7. Estructuras de Control](#7-estructuras-de-control)
    - [7.1 Condicional if / elseif / else](#71-condicional-if--elseif--else)
    - [7.2 Operador ternario](#72-operador-ternario)
    - [7.3 Bucle while](#73-bucle-while)
    - [7.4 Bucle for](#74-bucle-for)
    - [7.5 break y continue](#75-break-y-continue)
  - [8. Funciones](#8-funciones)
    - [8.1 Definición básica](#81-definición-básica)
    - [8.2 Funciones de una línea](#82-funciones-de-una-línea)
    - [8.3 Argumentos con valor por defecto](#83-argumentos-con-valor-por-defecto)
    - [8.4 Argumentos con nombre (keyword arguments)](#84-argumentos-con-nombre-keyword-arguments)
    - [8.5 Funciones anónimas](#85-funciones-anónimas)
    - [8.6 Múltiples valores de retorno](#86-múltiples-valores-de-retorno)
    - [8.7 Despacho múltiple](#87-despacho-múltiple)
  - [9. Colecciones](#9-colecciones)
    - [9.1 Arrays (Vectores y Matrices)](#91-arrays-vectores-y-matrices)
    - [9.2 Tuplas](#92-tuplas)
    - [9.3 Diccionarios](#93-diccionarios)
    - [9.4 Conjuntos (Sets)](#94-conjuntos-sets)
  - [10. Comprensiones y Generadores](#10-comprensiones-y-generadores)
  - [11. Entrada y Salida](#11-entrada-y-salida)
    - [Salida (Output)](#salida-output)
    - [Entrada (Input)](#entrada-input)
  - [12. Manejo de Archivos](#12-manejo-de-archivos)
  - [13. Módulos y Paquetes](#13-módulos-y-paquetes)
    - [Módulos de la biblioteca estándar](#módulos-de-la-biblioteca-estándar)
    - [Gestión de paquetes externos](#gestión-de-paquetes-externos)
    - [Paquetes populares](#paquetes-populares)
    - [Crear tus propios módulos](#crear-tus-propios-módulos)
  - [14. Manejo de Errores y Excepciones](#14-manejo-de-errores-y-excepciones)
  - [15. Programas de Ejemplo Completos](#15-programas-de-ejemplo-completos)
    - [Ejemplo 1: Calculadora de IMC](#ejemplo-1-calculadora-de-imc)
    - [Ejemplo 2: Números primos con la Criba de Eratóstenes](#ejemplo-2-números-primos-con-la-criba-de-eratóstenes)
    - [Ejemplo 3: Estadísticas de una lista de números](#ejemplo-3-estadísticas-de-una-lista-de-números)
    - [Ejemplo 4: Juego de adivinar el número](#ejemplo-4-juego-de-adivinar-el-número)
    - [Ejemplo 5: Ordenamiento y búsqueda](#ejemplo-5-ordenamiento-y-búsqueda)
  - [16. Referencia Rápida](#16-referencia-rápida)
    - [Tipos de datos](#tipos-de-datos)
    - [Funciones de uso frecuente](#funciones-de-uso-frecuente)
    - [Convenciones de estilo](#convenciones-de-estilo)
    - [Comentarios](#comentarios)
  - [Próximos Pasos](#próximos-pasos)
    - [Recursos adicionales](#recursos-adicionales)

---

## 1. ¿Qué es Julia?

**Julia** es un lenguaje de programación de alto nivel, dinámico y de propósito general, diseñado especialmente para computación científica y numérica de alto rendimiento. Fue creado en el MIT y lanzado públicamente en 2012.

### Características principales

- **Velocidad cercana a C/Fortran:** Julia compila Just-In-Time (JIT) mediante LLVM, logrando un rendimiento muy superior al de Python o MATLAB en tareas numéricas.
- **Sintaxis amigable:** Su sintaxis es limpia y similar a Python/MATLAB, fácil de aprender.
- **Tipado dinámico con anotaciones opcionales:** Puedes escribir código sin declarar tipos, o anotarlos para mayor rendimiento.
- **Despacho múltiple:** El sistema de funciones más poderoso de Julia, que permite definir comportamientos distintos según los tipos de los argumentos.
- **Ecosistema rico:** Miles de paquetes para ciencia de datos, machine learning, optimización, álgebra lineal, etc.
- **Interoperabilidad:** Puede llamar directamente a código C, Fortran, Python y R.

### ¿Para qué se usa Julia?

- Computación científica y numérica
- Análisis y ciencia de datos
- Machine Learning e inteligencia artificial
- Simulaciones y modelado matemático
- Finanzas cuantitativas
- Bioinformática

---

## 2. Instalación

### Descarga oficial

Visita [https://julialang.org/downloads/](https://julialang.org/downloads/) y descarga la versión estable para tu sistema operativo.

### Instalación con `juliaup` (recomendado)

`juliaup` es el gestor oficial de versiones de Julia:

```bash
# En Linux y macOS
curl -fsSL https://install.julialang.org | sh

# En Windows (PowerShell)
winget install julia -s msstore
```

Después de instalar, verifica la instalación:

```bash
julia --version
# julia version 1.10.x
```

### Entornos de desarrollo

| Entorno | Descripción |
|---|---|
| **REPL** | Terminal interactiva incluida con Julia |
| **VS Code + Julia Extension** | IDE recomendado para desarrollo |
| **Jupyter Notebook** | Vía el paquete `IJulia` |
| **Pluto.jl** | Notebooks reactivos nativos de Julia |

---

## 3. El REPL de Julia

El **REPL** (Read-Eval-Print Loop) es la terminal interactiva de Julia. Es tu herramienta principal para explorar el lenguaje, probar código y ejecutar scripts. Para iniciarlo, simplemente escribe `julia` en tu terminal.

```julia
               _
   _       _ _(_)_     |  Documentation: https://docs.julialang.org
  (_)     | (_) (_)    |
   _ _   _| |_  __ _   |  Type "?" for help, "]?" for Pkg help.
  | | | | | | |/ _` |  |
  | | |_| | | | (_| |  |  Version 1.10.0
 _/ |\__'_|_|_|\__'_|  |
|__/                   |

julia>
```

El prompt `julia>` indica que el REPL está listo para recibir instrucciones.

### 3.1 Modos del REPL

Julia tiene **cuatro modos** que se activan con teclas especiales:

#### Modo Julia (prompt: `julia>`)
El modo predeterminado para ejecutar código Julia.

```julia
julia> 2 + 3
5

julia> println("Hola, Julia!")
Hola, Julia!
```

#### Modo Ayuda (prompt: `help?>`)
Se activa presionando `?`. Muestra documentación de cualquier función o tipo.

```
julia> ?           # Presiona ?
help?> println
search: println printstyled print sprint isprint

  println([io::IO], xs...)

  Print (using print) xs to io followed by a newline. If io is not supplied,
  prints to the standard output (stdout).
```

Presiona `Backspace` o `Ctrl+C` para volver al modo Julia.

#### Modo Pkg (prompt: `(@v1.10) pkg>`)
Se activa presionando `]`. Gestiona paquetes y entornos.

```
(@v1.10) pkg> add Plots          # Instala el paquete Plots
(@v1.10) pkg> status             # Lista paquetes instalados
(@v1.10) pkg> update             # Actualiza todos los paquetes
(@v1.10) pkg> remove Plots       # Elimina el paquete Plots
(@v1.10) pkg> instantiate        # Instala dependencias del proyecto
```

Presiona `Backspace` para volver al modo Julia.

#### Modo Shell (prompt: `shell>`)
Se activa presionando `;`. Ejecuta comandos del sistema operativo.

```
shell> ls -la          # Lista archivos (Linux/macOS)
shell> dir             # Lista archivos (Windows)
shell> pwd             # Directorio actual
shell> cd mi_carpeta   # Cambiar directorio
```

Presiona `Backspace` para volver al modo Julia.

### 3.2 Atajos de teclado útiles

| Atajo | Acción |
|---|---|
| `Ctrl + C` | Interrumpir ejecución actual |
| `Ctrl + D` | Salir del REPL |
| `Ctrl + L` | Limpiar pantalla |
| `Tab` | Autocompletar |
| `↑` / `↓` | Navegar historial de comandos |
| `Ctrl + R` | Buscar en el historial |
| `Alt + Enter` | Insertar salto de línea sin ejecutar |
| `Home` / `End` | Ir al inicio/fin de línea |
| `Ctrl + A` | Ir al inicio de línea |
| `Ctrl + E` | Ir al fin de línea |
| `Ctrl + K` | Borrar desde cursor hasta fin de línea |

### 3.3 Historial y autocompletado

**Autocompletado con Tab:**
```julia
julia> pri[TAB]
print       println     printstyled

julia> println[TAB]     # Muestra firma de la función
```

**Caracteres Unicode con Tab:**
Julia soporta Unicode completo. Puedes escribir símbolos matemáticos:

```julia
julia> \alpha[TAB]   →   α
julia> \beta[TAB]    →   β
julia> \pi[TAB]      →   π
julia> \sqrt[TAB]    →   √
julia> \in[TAB]      →   ∈
julia> \sum[TAB]     →   ∑
```

**La variable `ans`:**
El REPL guarda el último resultado en la variable especial `ans`:

```julia
julia> 10 * 5
50

julia> ans + 3
53
```

**Suprimir salida con `;`:**
Añade `;` al final de una expresión para que no imprima el resultado:

```julia
julia> x = 42;     # No muestra nada
julia> x
42
```

---

## 4. Variables y Tipos de Datos

En Julia, las variables se crean por asignación directa. No es necesario declarar el tipo (aunque se puede).

```julia
x = 10          # Entero
y = 3.14        # Flotante
nombre = "Ana"  # Cadena de texto
activo = true   # Booleano
```

### Reglas para nombres de variables

- Pueden contener letras, números, guiones bajos `_` y caracteres Unicode
- Deben comenzar con una letra o guion bajo
- Son sensibles a mayúsculas/minúsculas: `edad` ≠ `Edad`
- Por convención, se usan minúsculas con `_` (snake_case)

```julia
mi_variable = 100
_privada = "interno"
α = 0.05          # ¡Variables Unicode válidas!
velocidad_máxima = 300
```

### Verificar tipos

```julia
julia> typeof(42)
Int64

julia> typeof(3.14)
Float64

julia> typeof("hola")
String

julia> typeof(true)
Bool
```

### 4.1 Enteros y flotantes

```julia
# Enteros
a = 10          # Int64 (por defecto en sistemas de 64 bits)
b = Int32(10)   # Forzar Int32
c = 0xFF        # Hexadecimal → 255
d = 0b1010      # Binario → 10
e = 0o17        # Octal → 15

# Flotantes
f = 3.14        # Float64 (por defecto)
g = 3.14f0      # Float32
h = 1.5e10      # Notación científica → 1.5 × 10^10
i = 2.0E-3      # → 0.002

# Separadores de miles (guion bajo)
millon = 1_000_000
pi_aprox = 3.141_592_653
```

**Rango de tipos enteros:**

| Tipo | Mínimo | Máximo |
|---|---|---|
| `Int8` | -128 | 127 |
| `Int16` | -32,768 | 32,767 |
| `Int32` | -2,147,483,648 | 2,147,483,647 |
| `Int64` | -9.2 × 10¹⁸ | 9.2 × 10¹⁸ |
| `UInt8` | 0 | 255 |
| `UInt64` | 0 | 1.8 × 10¹⁹ |

```julia
# Enteros de precisión arbitraria
n = big(10)^100   # BigInt: puede ser tan grande como quieras
```

### 4.2 Booleanos

```julia
verdad = true
falso = false

typeof(true)   # Bool

# Los booleanos son subtipo de entero
Int(true)    # 1
Int(false)   # 0
true + true  # 2
```

### 4.3 Cadenas de texto

```julia
saludo = "Hola, mundo!"
multilinea = """
Esta es una cadena
que ocupa varias líneas.
"""

# Interpolación de variables con $
nombre = "Carlos"
edad = 30
println("Me llamo $nombre y tengo $edad años.")
# → Me llamo Carlos y tengo 30 años.

# Expresiones dentro de ${}
println("El doble de mi edad es $(edad * 2).")
# → El doble de mi edad es 60.
```

### 4.4 Caracteres

Los caracteres (un solo símbolo) se declaran con comillas simples:

```julia
c = 'A'
typeof(c)      # Char

'A' + 1        # → 'B' (aritmética de caracteres)
Int('A')       # → 65 (código ASCII/Unicode)
Char(65)       # → 'A'
```

### 4.5 Tipos numéricos especiales

```julia
# Infinito
Inf            # Infinito positivo (Float64)
-Inf           # Infinito negativo

# No es un número
NaN            # Not a Number

# Verificar
isinf(Inf)     # true
isnan(NaN)     # true
isfinite(3.0)  # true

# Números complejos
z = 3 + 4im
real(z)        # 3
imag(z)        # 4
abs(z)         # 5.0 (módulo)
conj(z)        # 3 - 4im

# Números racionales
r = 3//4       # Racional 3/4
r + 1//4       # 1//1
```

---

## 5. Operadores

### 5.1 Aritméticos

```julia
5 + 3      # 8   Suma
5 - 3      # 2   Resta
5 * 3      # 15  Multiplicación
10 / 3     # 3.3333...  División (siempre Float64)
10 ÷ 3     # 3   División entera (\div + Tab)
10 % 3     # 1   Módulo (resto)
2 ^ 10     # 1024  Potencia
-5         # -5  Negación unaria
```

```julia
# División entera también con div()
div(10, 3)   # 3

# Raíz cuadrada
sqrt(16)     # 4.0
√16          # 4.0  (con \sqrt + Tab)

# Valor absoluto
abs(-7)      # 7
```

### 5.2 Comparación

```julia
5 == 5      # true   Igual
5 != 3      # true   Distinto
5 ≠ 3       # true   Distinto (Unicode: \ne + Tab)
5 > 3       # true   Mayor que
5 < 3       # false  Menor que
5 >= 5      # true   Mayor o igual
5 <= 4      # false  Menor o igual

# Comparaciones encadenadas (¡característica única de Julia!)
1 < 5 < 10        # true
0 < x < 100       # verifica si x está entre 0 y 100
```

### 5.3 Lógicos

```julia
true && false    # false  AND (cortocircuito)
true || false    # true   OR  (cortocircuito)
!true            # false  NOT

# Operadores bit a bit
5 & 3      # 1   AND bit a bit
5 | 3      # 7   OR bit a bit
xor(5, 3)  # 6   XOR bit a bit
~5         # -6  NOT bit a bit
5 << 1     # 10  Desplazamiento izquierda
5 >> 1     # 2   Desplazamiento derecha
```

### 5.4 Asignación compuesta

```julia
x = 10
x += 5    # x = x + 5  → 15
x -= 3    # x = x - 3  → 12
x *= 2    # x = x * 2  → 24
x /= 4    # x = x / 4  → 6.0
x ^= 2    # x = x ^ 2  → 36.0
x %= 7    # x = x % 7  → 1.0
```

---

## 6. Cadenas de Texto en Detalle

```julia
s = "Julia es genial"

# Longitud
length(s)           # 15

# Acceso a caracteres (índice base 1)
s[1]                # 'J'
s[end]              # 'l'
s[1:5]              # "Julia"  (slicing)

# Concatenación
"Hola" * " " * "mundo"     # "Hola mundo"
string("Hola", " ", "mundo")  # "Hola mundo"

# Repetición
"ab" ^ 3            # "ababab"

# Mayúsculas y minúsculas
uppercase("julia")  # "JULIA"
lowercase("JULIA")  # "julia"

# Quitar espacios
strip("  hola  ")   # "hola"
lstrip("  hola  ")  # "hola  "
rstrip("  hola  ")  # "  hola"

# Verificar contenido
startswith("Julia", "Ju")    # true
endswith("Julia", "ia")      # true
occursin("li", "Julia")      # true

# Buscar y reemplazar
replace("gato negro", "negro" => "blanco")  # "gato blanco"

# Dividir cadena
split("uno,dos,tres", ",")   # ["uno", "dos", "tres"]

# Unir array de cadenas
join(["uno", "dos", "tres"], "-")  # "uno-dos-tres"

# Formatear números
string(π, digits=4)          # "3.142"
@sprintf("%.2f", 3.14159)    # "3.14"  (requiere Printf)
```

**Cadenas crudas (raw strings):**
```julia
r"\n no es un salto de línea"   # El \n se toma literalmente
```

---

## 7. Estructuras de Control

### 7.1 Condicional if / elseif / else

```julia
x = 15

if x > 10
    println("x es mayor que 10")
elseif x == 10
    println("x es igual a 10")
else
    println("x es menor que 10")
end
```

Los bloques terminan siempre con `end`. No hay llaves `{}` ni dos puntos `:`.

```julia
# Condicional con múltiples condiciones
temperatura = 22

if temperatura < 0
    println("Bajo cero: ¡congelado!")
elseif temperatura < 10
    println("Muy frío")
elseif temperatura < 20
    println("Frío")
elseif temperatura < 30
    println("Agradable")
else
    println("Caluroso")
end
```

### 7.2 Operador ternario

Para condiciones simples en una sola línea:

```julia
condicion ? valor_si_true : valor_si_false

x = 8
resultado = x > 5 ? "mayor" : "menor o igual"
println(resultado)   # "mayor"

# Muy útil en asignaciones
maximo = a > b ? a : b
```

### 7.3 Bucle while

```julia
contador = 1

while contador <= 5
    println("Iteración: $contador")
    contador += 1
end
```

```julia
# Ejemplo: suma hasta que se supere un límite
suma = 0
n = 1

while suma < 100
    suma += n
    n += 1
end

println("Suma: $suma, con n = $(n-1)")
```

### 7.4 Bucle for

```julia
# Iterar sobre un rango
for i in 1:5
    println(i)
end

# Rango con paso
for i in 1:2:10     # 1, 3, 5, 7, 9
    print("$i ")
end

# Rango descendente
for i in 10:-1:1    # 10, 9, 8, ..., 1
    print("$i ")
end

# Iterar sobre una colección
frutas = ["manzana", "pera", "naranja"]
for fruta in frutas
    println("Fruta: $fruta")
end

# Iterar sobre caracteres de una cadena
for c in "Julia"
    print("$c-")
end
# J-u-l-i-a-

# Iterar con índice usando enumerate
for (i, fruta) in enumerate(frutas)
    println("$i: $fruta")
end

# Iterar sobre dos colecciones a la vez con zip
nombres = ["Ana", "Luis", "Eva"]
edades = [25, 30, 28]
for (nombre, edad) in zip(nombres, edades)
    println("$nombre tiene $edad años")
end
```

### 7.5 break y continue

```julia
# break: salir del bucle
for i in 1:10
    if i == 6
        break   # Sale del bucle cuando i es 6
    end
    print("$i ")
end
# 1 2 3 4 5

# continue: saltar a la siguiente iteración
for i in 1:10
    if i % 2 == 0
        continue   # Salta los números pares
    end
    print("$i ")
end
# 1 3 5 7 9
```

---

## 8. Funciones

Las funciones son ciudadanos de primera clase en Julia: pueden pasarse como argumentos, retornarse de otras funciones y asignarse a variables.

### 8.1 Definición básica

```julia
function saludar(nombre)
    println("¡Hola, $nombre!")
end

saludar("Ana")    # ¡Hola, Ana!

# Función con retorno explícito
function suma(a, b)
    return a + b
end

resultado = suma(3, 4)   # 7
```

En Julia, si no hay `return`, la función retorna el valor de la última expresión evaluada:

```julia
function cuadrado(x)
    x ^ 2    # Este valor se retorna automáticamente
end

cuadrado(5)   # 25
```

### 8.2 Funciones de una línea

Para funciones simples, existe una sintaxis compacta:

```julia
cubo(x) = x ^ 3
area_circulo(r) = π * r ^ 2
celsius_a_fahrenheit(c) = c * 9/5 + 32

cubo(3)                     # 27
area_circulo(5)             # 78.539...
celsius_a_fahrenheit(100)   # 212.0
```

### 8.3 Argumentos con valor por defecto

```julia
function potencia(base, exponente=2)
    base ^ exponente
end

potencia(3)       # 9  (exponente = 2 por defecto)
potencia(3, 3)    # 27
```

### 8.4 Argumentos con nombre (keyword arguments)

Se separan de los argumentos posicionales con `;`:

```julia
function crear_perfil(nombre, edad; ciudad="Desconocida", activo=true)
    println("Nombre: $nombre")
    println("Edad: $edad")
    println("Ciudad: $ciudad")
    println("Activo: $activo")
end

crear_perfil("Ana", 25)
crear_perfil("Luis", 30, ciudad="Madrid", activo=false)

# Los keyword arguments pueden pasarse en cualquier orden
crear_perfil("Eva", 28, activo=true, ciudad="Barcelona")
```

### 8.5 Funciones anónimas

```julia
# Sintaxis: argumentos -> cuerpo
cuadrado = x -> x ^ 2
suma = (a, b) -> a + b

cuadrado(4)    # 16
suma(3, 5)     # 8

# Muy útiles como argumentos de otras funciones
numeros = [3, 1, 4, 1, 5, 9, 2, 6]
sort(numeros, by = x -> -x)   # Orden descendente
filter(x -> x > 3, numeros)   # [4, 5, 9, 6]
map(x -> x^2, numeros)        # [9, 1, 16, 1, 25, 81, 4, 36]
```

### 8.6 Múltiples valores de retorno

Julia puede retornar múltiples valores como una tupla:

```julia
function min_max(arr)
    return minimum(arr), maximum(arr)
end

datos = [4, 2, 7, 1, 9, 3]
minimo, maximo = min_max(datos)
println("Mínimo: $minimo, Máximo: $maximo")
# Mínimo: 1, Máximo: 9
```

### 8.7 Despacho múltiple

Esta es una de las características más poderosas de Julia. Puedes definir varias versiones de la misma función según los tipos de los argumentos:

```julia
# Diferentes implementaciones según el tipo
function describir(x::Int)
    println("Es un entero: $x")
end

function describir(x::Float64)
    println("Es un flotante: $x")
end

function describir(x::String)
    println("Es una cadena: \"$x\"")
end

function describir(x::Bool)
    println("Es un booleano: $x")
end

describir(42)        # Es un entero: 42
describir(3.14)      # Es un flotante: 3.14
describir("hola")    # Es una cadena: "hola"
describir(true)      # Es un booleano: true
```

```julia
# Ejemplo práctico: función área para diferentes figuras
function area(radio::Float64)
    π * radio ^ 2
end

function area(base::Float64, altura::Float64)
    base * altura / 2
end

area(5.0)          # Área de círculo: 78.54
area(6.0, 4.0)     # Área de triángulo: 12.0
```

---

## 9. Colecciones

### 9.1 Arrays (Vectores y Matrices)

Los arrays son la estructura de datos más importante en Julia.

```julia
# Vector (array 1D)
v = [1, 2, 3, 4, 5]
typeof(v)           # Vector{Int64}

# Vector de flotantes
f = [1.0, 2.5, 3.7]

# Vector vacío tipado
vacio = Int64[]
vacio_f = Float64[]

# Acceso (índice base 1)
v[1]                # 1 (primer elemento)
v[end]              # 5 (último elemento)
v[2:4]              # [2, 3, 4] (slice)
v[end-1]            # 4

# Modificar elemento
v[3] = 99
```

**Operaciones con vectores:**

```julia
v = [3, 1, 4, 1, 5, 9]

length(v)           # 6       → longitud
sum(v)              # 23      → suma
prod(v)             # 540     → producto
minimum(v)          # 1       → mínimo
maximum(v)          # 9       → máximo
mean(v)             # (requiere Statistics)
sort(v)             # [1, 1, 3, 4, 5, 9]
reverse(v)          # [9, 5, 1, 4, 1, 3]
unique(v)           # [3, 1, 4, 5, 9]

# Agregar y eliminar elementos
push!(v, 7)         # Añade al final: [3,1,4,1,5,9,7]
pop!(v)             # Elimina y retorna el último: 7
pushfirst!(v, 0)    # Añade al inicio: [0,3,1,4,1,5,9]
popfirst!(v)        # Elimina y retorna el primero: 0
insert!(v, 2, 99)   # Inserta 99 en posición 2
deleteat!(v, 2)     # Elimina elemento en posición 2

# Concatenar
a = [1, 2, 3]
b = [4, 5, 6]
[a; b]              # [1,2,3,4,5,6] (vertical)
append!(a, b)       # Modifica a: [1,2,3,4,5,6]

# Verificar pertenencia
5 in v              # true
in(5, v)            # true
```

**Operaciones vectorizadas con el operador punto `.`:**

```julia
v = [1, 2, 3, 4, 5]

v .^ 2              # [1, 4, 9, 16, 25]  → cuadrado de cada elemento
v .* 3              # [3, 6, 9, 12, 15]  → multiplicar cada elemento
sqrt.(v)            # [1.0, 1.41, 1.73, 2.0, 2.24]
sin.(v)             # seno de cada elemento

# También con comparación
v .> 3              # [false, false, false, true, true]
```

**Matrices (arrays 2D):**

```julia
# Crear matriz (filas separadas por ;)
M = [1 2 3;
     4 5 6;
     7 8 9]

size(M)             # (3, 3)
size(M, 1)          # 3  → número de filas
size(M, 2)          # 3  → número de columnas

# Acceso
M[2, 3]             # 6  → fila 2, columna 3
M[1, :]             # [1, 2, 3]  → primera fila
M[:, 2]             # [2, 5, 8]  → segunda columna
M[1:2, 2:3]         # Submatriz

# Crear matrices especiales
zeros(3, 3)         # Matriz de ceros 3×3
ones(2, 4)          # Matriz de unos 2×4
Matrix{Int}(I, 3, 3)  # Identidad 3×3 (requiere LinearAlgebra)
rand(3, 3)          # Matriz aleatoria uniforme [0,1)
randn(3, 3)         # Matriz aleatoria normal (0,1)

# Transpuesta
M'                  # Transpuesta (conjugada)
transpose(M)        # Transpuesta sin conjugar

# Álgebra lineal básica
A = [1.0 2.0; 3.0 4.0]
B = [5.0 6.0; 7.0 8.0]

A * B               # Multiplicación matricial
A + B               # Suma elemento a elemento
det(A)              # Determinante (requiere LinearAlgebra)
inv(A)              # Inversa
A \ b               # Resolver sistema Ax = b
```

### 9.2 Tuplas

Las tuplas son colecciones **inmutables** (no se pueden modificar tras su creación):

```julia
t = (1, "hola", 3.14, true)

# Acceso
t[1]                # 1
t[2]                # "hola"
t[end]              # true

length(t)           # 4

# Destructuración
a, b, c, d = t
println(a)          # 1

# Intercambio de variables
x, y = 10, 20
x, y = y, x         # Intercambia: x=20, y=10

# Tuplas nombradas
persona = (nombre="Ana", edad=25, ciudad="Madrid")
persona.nombre      # "Ana"
persona[:edad]      # 25
```

### 9.3 Diccionarios

Los diccionarios almacenan pares **clave → valor**:

```julia
# Crear diccionario
d = Dict("a" => 1, "b" => 2, "c" => 3)
d = Dict(:nombre => "Ana", :edad => 25)  # Usando símbolos como claves

# Acceso
d["a"]              # 1
d[:nombre]          # "Ana"

# Modificar o agregar
d["d"] = 4
d[:ciudad] = "Madrid"

# Verificar existencia de clave
haskey(d, "a")      # true
haskey(d, "z")      # false

# Obtener con valor por defecto (evita KeyError)
get(d, "z", 0)      # 0 (retorna 0 si "z" no existe)

# Eliminar
delete!(d, "a")

# Iterar
for (clave, valor) in d
    println("$clave → $valor")
end

# Solo claves o solo valores
keys(d)
values(d)

# Convertir a vectores
collect(keys(d))
collect(values(d))

# Longitud
length(d)
```

### 9.4 Conjuntos (Sets)

Los conjuntos son colecciones **sin duplicados** y sin orden definido:

```julia
s = Set([1, 2, 3, 2, 1])   # Set{Int64} con {1, 2, 3}

# Operaciones de conjuntos
A = Set([1, 2, 3, 4])
B = Set([3, 4, 5, 6])

union(A, B)         # {1, 2, 3, 4, 5, 6}
intersect(A, B)     # {3, 4}
setdiff(A, B)       # {1, 2}  (A - B)

# Agregar y eliminar
push!(s, 4)
delete!(s, 2)

# Verificar pertenencia
3 in s              # true

# Verificar subconjunto
issubset(Set([1,2]), A)  # true
```

---

## 10. Comprensiones y Generadores

Las comprensiones son una forma concisa y elegante de crear colecciones:

```julia
# Comprensión de array
cuadrados = [x^2 for x in 1:10]
# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Con condición (filtro)
pares = [x for x in 1:20 if x % 2 == 0]
# [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# Doble bucle (producto cartesiano)
pares_xy = [(x, y) for x in 1:3 for y in 1:3]
# [(1,1), (1,2), (1,3), (2,1), ...]

# Comprensión de diccionario
cuadrados_dict = Dict(x => x^2 for x in 1:5)
# Dict(1=>1, 2=>4, 3=>9, 4=>16, 5=>25)

# Comprensión de conjunto
unicos = Set(x % 3 for x in 1:10)
# Set{Int64} con {0, 1, 2}

# Generadores (sin crear el array, más eficiente)
suma = sum(x^2 for x in 1:100)   # Suma sin crear array intermedio

# Comprensión de matriz
M = [i * j for i in 1:3, j in 1:4]
# Matriz 3×4
```

---

## 11. Entrada y Salida

### Salida (Output)

```julia
# println: imprime con salto de línea
println("Hola, mundo!")
println(42)
println([1, 2, 3])

# print: imprime sin salto de línea
print("Hola ")
print("mundo")
# → Hola mundo

# Múltiples argumentos
println("a=", 1, ", b=", 2)     # a=1, b=2

# Interpolación de cadenas
nombre = "Julia"
version = 1.10
println("$nombre versión $version")

# @printf para formateo tipo C (requiere using Printf)
using Printf
@printf("π ≈ %.5f\n", π)        # π ≈ 3.14159
@printf("%-10s: %d\n", "edad", 25)

# display: muestra con formato más elaborado
display([1 2; 3 4])

# dump: muestra la estructura interna
dump([1, "dos", 3.0])
```

### Entrada (Input)

```julia
# Leer línea del usuario
print("¿Cuál es tu nombre? ")
nombre = readline()
println("¡Hola, $nombre!")

# Leer número entero
print("Introduce un número: ")
n = parse(Int, readline())
println("El cuadrado es: $(n^2)")

# Leer número flotante
x = parse(Float64, readline())

# Leer múltiples valores en una línea
print("Introduce dos números separados por espacio: ")
partes = split(readline())
a = parse(Int, partes[1])
b = parse(Int, partes[2])
```

---

## 12. Manejo de Archivos

```julia
# Escribir en un archivo
open("datos.txt", "w") do archivo
    println(archivo, "Primera línea")
    println(archivo, "Segunda línea")
    write(archivo, "Tercera línea\n")
end

# Leer archivo completo
contenido = read("datos.txt", String)
println(contenido)

# Leer línea por línea
open("datos.txt", "r") do archivo
    for linea in eachline(archivo)
        println("→ $linea")
    end
end

# Leer todas las líneas como vector
lineas = readlines("datos.txt")

# Modos de apertura
# "r"  → solo lectura (por defecto)
# "w"  → escritura (sobreescribe)
# "a"  → añadir al final
# "r+" → lectura y escritura

# Verificar si existe un archivo
isfile("datos.txt")       # true/false
isdir("mi_carpeta")       # true/false

# Obtener directorio actual
pwd()

# Cambiar directorio
cd("/ruta/al/directorio")

# Listar archivos
readdir(".")              # Lista archivos del directorio actual
readdir(".", join=true)   # Con rutas completas
```

---

## 13. Módulos y Paquetes

### Módulos de la biblioteca estándar

```julia
# Importar módulo completo
using Statistics

datos = [4, 8, 6, 5, 3, 2, 8, 9, 2, 5]
mean(datos)     # 5.2
median(datos)   # 5.0
std(datos)      # 2.44

# Importar solo algunas funciones
using Statistics: mean, std

# Importar con alias
import LinearAlgebra as LA
LA.det([1 2; 3 4])

# Módulos útiles de la stdlib
using Random      # Números aleatorios
using Dates       # Fechas y tiempos
using Printf      # Formateo printf-style
using LinearAlgebra  # Álgebra lineal
using DelimitedFiles # Archivos CSV/TSV
```

### Gestión de paquetes externos

```julia
# En el modo Pkg (presiona ])
# Instalar
pkg> add Plots
pkg> add DataFrames CSV

# O desde el código Julia
using Pkg
Pkg.add("Plots")
Pkg.add(["DataFrames", "CSV"])

# Actualizar
Pkg.update()

# Eliminar
Pkg.remove("Plots")

# Ver instalados
Pkg.status()
```

### Paquetes populares

| Paquete | Uso |
|---|---|
| `Plots.jl` | Gráficas y visualización |
| `DataFrames.jl` | Manipulación de datos tabulares |
| `CSV.jl` | Lectura/escritura de CSV |
| `Flux.jl` | Deep learning |
| `DifferentialEquations.jl` | Ecuaciones diferenciales |
| `Optim.jl` | Optimización numérica |
| `StatsBase.jl` | Estadística |
| `JSON.jl` | Manejo de JSON |
| `HTTP.jl` | Peticiones HTTP |
| `Makie.jl` | Visualización avanzada |

### Crear tus propios módulos

```julia
# archivo: MiModulo.jl
module MiModulo

export saludar, despedir

function saludar(nombre)
    println("¡Hola, $nombre!")
end

function despedir(nombre)
    println("¡Hasta luego, $nombre!")
end

# función privada (no exportada)
function _interna()
    println("Función interna")
end

end  # module

# Usar el módulo
include("MiModulo.jl")
using .MiModulo

saludar("Ana")    # ¡Hola, Ana!
despedir("Ana")   # ¡Hasta luego, Ana!
```

---

## 14. Manejo de Errores y Excepciones

```julia
# try / catch / finally
try
    x = 10 / 0
    println(x)
catch e
    println("Error: $e")
finally
    println("Esto siempre se ejecuta")
end

# Capturar tipos específicos de error
try
    parse(Int, "abc")
catch e
    if isa(e, ArgumentError)
        println("Argumento inválido: $(e.msg)")
    else
        println("Error desconocido: $e")
    end
end

# Lanzar errores
function dividir(a, b)
    if b == 0
        error("No se puede dividir entre cero")  # Lanza ErrorException
    end
    return a / b
end

# Tipos de error comunes
# ErrorException   → error genérico (vía error())
# ArgumentError    → argumento inválido
# BoundsError      → índice fuera de rango
# TypeError        → tipo incorrecto
# UndefVarError    → variable no definida
# DivideError      → división por cero (enteros)
# StackOverflowError → recursión infinita

# Lanzar errores tipados
throw(ArgumentError("El valor debe ser positivo"))
throw(DomainError(x, "x debe ser ≥ 0"))

# @assert para verificaciones
@assert x > 0 "x debe ser positivo"  # Lanza AssertionError si falla
```

---

## 15. Programas de Ejemplo Completos

### Ejemplo 1: Calculadora de IMC

```julia
"""
Calculadora de Índice de Masa Corporal (IMC)
"""

function calcular_imc(peso_kg, altura_m)
    if altura_m <= 0
        error("La altura debe ser positiva")
    end
    return peso_kg / altura_m^2
end

function clasificar_imc(imc)
    if imc < 18.5
        return "Bajo peso"
    elseif imc < 25.0
        return "Peso normal"
    elseif imc < 30.0
        return "Sobrepeso"
    else
        return "Obesidad"
    end
end

function main()
    println("=== Calculadora de IMC ===\n")

    print("Introduce tu peso (kg): ")
    peso = parse(Float64, readline())

    print("Introduce tu altura (m): ")
    altura = parse(Float64, readline())

    imc = calcular_imc(peso, altura)
    clasificacion = clasificar_imc(imc)

    println("\n--- Resultados ---")
    @printf("IMC: %.2f\n", imc)
    println("Clasificación: $clasificacion")
end

using Printf
main()
```

---

### Ejemplo 2: Números primos con la Criba de Eratóstenes

```julia
"""
Criba de Eratóstenes: encuentra todos los primos hasta n
"""
function criba_eratostenes(n)
    if n < 2
        return Int[]
    end

    es_primo = fill(true, n)   # Vector de booleanos
    es_primo[1] = false

    for i in 2:isqrt(n)
        if es_primo[i]
            for j in i^2:i:n
                es_primo[j] = false
            end
        end
    end

    return findall(es_primo)   # Índices donde es_primo == true
end

# Ejecutar
limite = 100
primos = criba_eratostenes(limite)

println("Primos hasta $limite:")
println(primos)
println("\nCantidad: $(length(primos))")
println("El mayor: $(primos[end])")
```

---

### Ejemplo 3: Estadísticas de una lista de números

```julia
"""
Análisis estadístico básico de datos introducidos por el usuario
"""
using Statistics
using Printf

function analizar_datos(datos)
    println("\n📊 Análisis Estadístico")
    println("=" ^ 30)
    @printf("Cantidad de datos : %d\n", length(datos))
    @printf("Suma              : %.4f\n", sum(datos))
    @printf("Media             : %.4f\n", mean(datos))
    @printf("Mediana           : %.4f\n", median(datos))
    @printf("Desv. estándar    : %.4f\n", std(datos))
    @printf("Varianza          : %.4f\n", var(datos))
    @printf("Mínimo            : %.4f\n", minimum(datos))
    @printf("Máximo            : %.4f\n", maximum(datos))
    @printf("Rango             : %.4f\n", maximum(datos) - minimum(datos))
end

println("Ingresa números separados por espacios:")
entrada = readline()
datos = parse.(Float64, split(entrada))

analizar_datos(datos)
```

---

### Ejemplo 4: Juego de adivinar el número

```julia
"""
Juego: adivina el número secreto
"""
using Random

function jugar()
    println("🎮 ¡Bienvenido al juego de adivinar el número!")
    println("Estoy pensando en un número entre 1 y 100...\n")

    secreto = rand(1:100)
    intentos = 0
    max_intentos = 10

    while intentos < max_intentos
        intentos += 1
        intentos_restantes = max_intentos - intentos + 1
        print("Intento $intentos/$max_intentos - Tu número: ")

        try
            numero = parse(Int, readline())

            if numero < secreto
                println("📈 Demasiado bajo")
            elseif numero > secreto
                println("📉 Demasiado alto")
            else
                println("\n🎉 ¡Correcto! El número era $secreto")
                println("Lo adivinaste en $intentos intentos.")
                return
            end
        catch
            println("⚠️  Por favor ingresa un número válido")
            intentos -= 1  # No contar intentos inválidos
        end
    end

    println("\n😔 Se acabaron los intentos. El número era: $secreto")
end

jugar()
```

---

### Ejemplo 5: Ordenamiento y búsqueda

```julia
"""
Implementación de algoritmos de ordenamiento y búsqueda
"""

# Ordenamiento burbuja
function burbuja(arr)
    n = length(arr)
    a = copy(arr)
    for i in 1:n-1
        for j in 1:n-i
            if a[j] > a[j+1]
                a[j], a[j+1] = a[j+1], a[j]
            end
        end
    end
    return a
end

# Búsqueda binaria (en array ordenado)
function busqueda_binaria(arr, objetivo)
    izq, der = 1, length(arr)
    while izq <= der
        mid = (izq + der) ÷ 2
        if arr[mid] == objetivo
            return mid
        elseif arr[mid] < objetivo
            izq = mid + 1
        else
            der = mid - 1
        end
    end
    return -1   # No encontrado
end

# Probar
datos = [64, 34, 25, 12, 22, 11, 90]
println("Original:  $datos")

ordenado = burbuja(datos)
println("Ordenado:  $ordenado")

objetivo = 25
pos = busqueda_binaria(ordenado, objetivo)
if pos != -1
    println("$objetivo encontrado en posición $pos")
else
    println("$objetivo no encontrado")
end
```

---

## 16. Referencia Rápida

### Tipos de datos

| Tipo | Ejemplo | Descripción |
|---|---|---|
| `Int64` | `42` | Entero 64 bits |
| `Float64` | `3.14` | Flotante 64 bits |
| `Bool` | `true` / `false` | Booleano |
| `Char` | `'A'` | Carácter Unicode |
| `String` | `"hola"` | Cadena de texto |
| `Vector{T}` | `[1,2,3]` | Array 1D |
| `Matrix{T}` | `[1 2; 3 4]` | Array 2D |
| `Tuple` | `(1, "a", 3.0)` | Tupla inmutable |
| `Dict{K,V}` | `Dict("a"=>1)` | Diccionario |
| `Set{T}` | `Set([1,2,3])` | Conjunto |

### Funciones de uso frecuente

| Función | Descripción |
|---|---|
| `println(x)` | Imprime con salto de línea |
| `print(x)` | Imprime sin salto de línea |
| `typeof(x)` | Tipo de x |
| `length(x)` | Longitud de colección |
| `size(M)` | Dimensiones de array |
| `push!(v, x)` | Añadir x al final de v |
| `pop!(v)` | Extraer último elemento |
| `sort(v)` | Ordenar (sin modificar) |
| `sort!(v)` | Ordenar (modificando) |
| `map(f, v)` | Aplicar f a cada elemento |
| `filter(f, v)` | Filtrar con predicado f |
| `reduce(op, v)` | Reducir con operador op |
| `sum(v)` | Suma |
| `prod(v)` | Producto |
| `minimum(v)` | Mínimo |
| `maximum(v)` | Máximo |
| `zeros(n)` | Vector de ceros |
| `ones(n)` | Vector de unos |
| `rand(n)` | Vector aleatorio [0,1) |
| `range(a,b,n)` | n puntos entre a y b |
| `parse(T, s)` | Convertir cadena a tipo T |
| `string(x)` | Convertir x a String |
| `split(s, d)` | Dividir cadena por delimitador |
| `join(v, d)` | Unir vector de cadenas |
| `occursin(p, s)` | ¿p aparece en s? |
| `replace(s, a=>b)` | Reemplazar en cadena |
| `readline()` | Leer línea del usuario |
| `open(f, modo)` | Abrir archivo |
| `read(f, String)` | Leer archivo como String |
| `readlines(f)` | Leer líneas como vector |

### Convenciones de estilo

| Convención | Descripción |
|---|---|
| `nombre_funcion` | Funciones: snake_case |
| `NombreTipo` | Tipos: CamelCase |
| `CONSTANTE` | Constantes: MAYÚSCULAS |
| `funcion!` | Funciones que modifican sus argumentos |
| `funcion?` | Funciones que retornan Bool (predicados) |

### Comentarios

```julia
# Esto es un comentario de una línea

#=
  Esto es un comentario
  de múltiples líneas
=#

"""
Docstring de función: aparece en el sistema de ayuda
"""
function mi_funcion()
    # código...
end
```

---

## Próximos Pasos

Una vez dominados los conceptos de este manual, puedes explorar:

1. **Structs y tipos compuestos** — Definir tus propios tipos de datos
2. **Programación genérica** — Funciones que operan sobre cualquier tipo
3. **Macros** — Metaprogramación con `@macro`
4. **Paralelismo** — `@threads`, `@distributed`, `Distributed.jl`
5. **Visualización** — `Plots.jl`, `Makie.jl`
6. **Ciencia de datos** — `DataFrames.jl`, `CSV.jl`, `Query.jl`
7. **Machine Learning** — `Flux.jl`, `MLJ.jl`
8. **Ecuaciones diferenciales** — `DifferentialEquations.jl`

### Recursos adicionales

- **Documentación oficial:** [https://docs.julialang.org](https://docs.julialang.org)
- **Juliacademy (tutoriales):** [https://juliaacademy.com](https://juliaacademy.com)
- **Foro oficial:** [https://discourse.julialang.org](https://discourse.julialang.org)
- **Julia en GitHub:** [https://github.com/JuliaLang/julia](https://github.com/JuliaLang/julia)
- **Paquetes registrados:** [https://juliahub.com](https://juliahub.com)
- **Julia VS Python usando el método Montecarlo** [Método Montecarlo con Julia y Python](julia_montecarlo.md)

---

*Manual elaborado como guía de introducción al lenguaje Julia. Se recomienda practicar cada sección en el REPL para afianzar los conceptos.*
