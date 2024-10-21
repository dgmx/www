---
title: 2. La biblioteca math en Python
parent: "Python"
---

## La biblioteca `math` en Python
- La biblioteca `math` en Python es un módulo que proporciona funciones matemáticas avanzadas y constantes que permiten realizar cálculos numéricos de forma más precisa y eficiente.
- Para usar las funciones de la biblioteca `math`, primero necesitas importarla en tu programa con la siguiente línea de código:
  ```python
  import math
  ```

## Funciones matemáticas más importantes en `math`

1. **Raíz cuadrada (`math.sqrt`)**
   - Devuelve la raíz cuadrada de un número.
   - Ejemplo:
     ```python
     import math
     resultado = math.sqrt(16)  # Resultado: 4.0
     ```

2. **Potencias (`math.pow`)**
   - Calcula la potencia de un número elevado a otro.
   - Ejemplo:
     ```python
     import math
     resultado = math.pow(2, 3)  # Resultado: 8.0
     ```

3. **Valor absoluto (`math.fabs`)**
   - Devuelve el valor absoluto de un número (siempre positivo).
   - Ejemplo:
     ```python
     import math
     resultado = math.fabs(-10)  # Resultado: 10.0
     ```

4. **Redondeo hacia abajo (`math.floor`)**
   - Redondea un número decimal hacia el entero más cercano por debajo.
   - Ejemplo:
     ```python
     import math
     resultado = math.floor(4.7)  # Resultado: 4
     ```

5. **Redondeo hacia arriba (`math.ceil`)**
   - Redondea un número decimal hacia el entero más cercano por encima.
   - Ejemplo:
     ```python
     import math
     resultado = math.ceil(4.1)  # Resultado: 5
     ```

6. **Constante Pi (`math.pi`)**
   - `math.pi` es una constante que representa el valor de Pi (≈ 3.14159).
   - Ejemplo:
     ```python
     import math
     area_circulo = math.pi * math.pow(5, 2)  # Área de un círculo con radio 5
     ```

7. **Trigonometría (funciones como `math.sin`, `math.cos`, `math.tan`)**
   - Se utilizan para cálculos relacionados con ángulos.
   - Ejemplo:
     ```python
     import math
     seno = math.sin(math.pi / 2)  # Resultado: 1.0
     ```

## Resumen práctico para los estudiantes
- **`math.sqrt(x)`**: Raíz cuadrada de `x`.
- **`math.pow(x, y)`**: `x` elevado a la potencia `y`.
- **`math.fabs(x)`**: Valor absoluto de `x`.
- **`math.floor(x)`**: Redondea `x` hacia abajo.
- **`math.ceil(x)`**: Redondea `x` hacia arriba.
- **`math.pi`**: Constante Pi.
- **`math.sin(x)`, `math.cos(x)`, `math.tan(x)`**: Funciones trigonométricas.
