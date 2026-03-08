---
title: 2. Julia VS Python
parent: "Julia"
---

# Estimación de π usando el método de Monte Carlo

## 1. Idea matemática

El método de Monte Carlo es una técnica probabilística para aproximar
valores numéricos mediante muestreo aleatorio.

Para estimar π:

1. Se considera un cuadrado de lado 2 centrado en el origen.
2. Dentro se inscribe un círculo de radio 1.
3. Se generan puntos aleatorios dentro del cuadrado.
4. Se cuenta cuántos caen dentro del círculo.

Áreas:

- Área del cuadrado: 4
- Área del círculo: π

Probabilidad:

π ≈ 4 × (puntos dentro del círculo / puntos totales)

------------------------------------------------------------------------

## 2. Implementación en Python

```python
import random
import time

def montecarlo_pi(n):
    dentro = 0

    for _ in range(n):
        x = random.uniform(-1, 1)
        y = random.uniform(-1, 1)

        if x*x + y*y <= 1:
            dentro += 1

    return 4 * dentro / n


inicio = time.perf_counter()
resultado = montecarlo_pi(10_000_000)
fin = time.perf_counter()

tiempo_ms = (fin - inicio) * 1000

print(f"π ≈ {resultado}")
print(f"Tiempo de ejecución: {tiempo_ms:.2f} ms")
```

### Características

- Lenguaje interpretado.
- El bucle `for` es relativamente lento.
- El módulo `random` añade sobrecarga.
- Puede acelerarse usando `NumPy`, pero el ejemplo muestra Python “puro”.
- En Python, la forma recomendada para medir el tiempo de ejecución es usar `time.perf_counter()`, que proporciona el temporizador de mayor precisión disponible en el sistema

------------------------------------------------------------------------

## 3. Implementación en Julia

``` julia
using Random

function montecarlo_pi(n)
    dentro = 0

    for i in 1:n
        x = rand()*2 - 1
        y = rand()*2 - 1

        if x^2 + y^2 <= 1
            dentro += 1
        end
    end

    return 4 * dentro / n
end


inicio = time_ns()
resultado = montecarlo_pi(10_000_000)
fin = time_ns()

tiempo_ms = (fin - inicio) / 1e6

println("π ≈ ", resultado)
println("Tiempo de ejecución: ", round(tiempo_ms, digits=2), " ms")
```

Alternativa rápida:

```julia
tiempo = @elapsed montecarlo_pi(10_000_000)
println("Tiempo: ", tiempo * 1000, " ms")
```

Nota: La primera ejecución en Julia incluye tiempo de compilación JIT.

### Características en Julia

- Lenguaje compilado con JIT (Just-In-Time).
- Bucles for tan eficientes como en C.
- Generación de números aleatorios optimizada.
- No requiere vectorización para alto rendimiento.
- Julia incluye herramientas nativas de medición de tiempo de muy bajo overhead

------------------------------------------------------------------------

## 4. Comparación de eficiencia

| Aspecto | Python | Julia |
|---------|--------|-------|
| Tipo de lenguaje | Interpretado | Compilado JIT |
| Rendimiento en bucles | Bajo | Muy alto |
| Necesidad de optimización | Alta | Baja |
| Cercanía a C/Fortran | No | Sí |
| Escalabilidad | Limitada | Excelente |

------------------------------------------------------------------------

## 5. Gráficas de simulacion de Montecarlo

Para añadir gráficas a la simulación Monte Carlo, normalmente se visualizan dos cosas:

- Distribución de puntos generados (dentro y fuera del círculo).
- Convergencia del valor estimado de π a medida que aumentan las iteraciones.

A continuación se muestran ejemplos para Python y Julia.

### 5.1. Gráfica de la simulación Monte Carlo (Python)

Esta gráfica muestra los puntos generados en el cuadrado y cuáles caen dentro del círculo.

```python
import random
import matplotlib.pyplot as plt

def montecarlo_pi_plot(n):
    x_inside = []
    y_inside = []
    x_outside = []
    y_outside = []

    dentro = 0

    for _ in range(n):
        x = random.uniform(-1,1)
        y = random.uniform(-1,1)

        if x*x + y*y <= 1:
            dentro += 1
            x_inside.append(x)
            y_inside.append(y)
        else:
            x_outside.append(x)
            y_outside.append(y)

    pi_est = 4 * dentro / n
    print("π ≈", pi_est)

    plt.scatter(x_inside, y_inside, s=1)
    plt.scatter(x_outside, y_outside, s=1)

    plt.title("Simulación Monte Carlo para π")
    plt.xlabel("x")
    plt.ylabel("y")
    plt.axis("equal")
    plt.show()

montecarlo_pi_plot(5000)
```

La gráfica resultante muestra:

### 5.2. Gráfica de convergencia de π (Python)

Esta gráfica muestra cómo la estimación mejora con más iteraciones.

- Un círculo aproximado formado por puntos dentro.
- Puntos fuera del círculo distribuidos en el cuadrado.

```python
import random
import matplotlib.pyplot as plt

def montecarlo_convergencia(n):

    dentro = 0
    estimaciones = []

    for i in range(1, n+1):

        x = random.uniform(-1,1)
        y = random.uniform(-1,1)

        if x*x + y*y <= 1:
            dentro += 1

        pi_est = 4 * dentro / i
        estimaciones.append(pi_est)

    plt.plot(estimaciones)
    plt.axhline(3.141592653589793)

    plt.xlabel("Iteraciones")
    plt.ylabel("Estimación de π")
    plt.title("Convergencia del método Monte Carlo")

    plt.show()

montecarlo_convergencia(10000)
```

![Puntos Monte Carlo](img/montecarlo_points.png)

Se observa que:

- al principio hay gran variabilidad,
- después la estimación se estabiliza cerca de π.

### 5.3. Gráfica en Julia

En Julia se suele usar la librería Plots.jl.

Instalación:

```
using Pkg
Pkg.add("Plots")
```

### Simulación con gráfica de puntos

```julia
using Random
using Plots

function montecarlo_plot(n)

    x_in = Float64[]
    y_in = Float64[]
    x_out = Float64[]
    y_out = Float64[]

    dentro = 0

    for i in 1:n

        x = rand()*2 - 1
        y = rand()*2 - 1

        if x^2 + y^2 <= 1
            dentro += 1
            push!(x_in, x)
            push!(y_in, y)
        else
            push!(x_out, x)
            push!(y_out, y)
        end
    end

    pi_est = 4 * dentro / n
    println("π ≈ ", pi_est)

    scatter(x_in, y_in, markersize=1)
    scatter!(x_out, y_out, markersize=1)

end

montecarlo_plot(5000)
```

![Convergencia Monte Carlo](img/montecarlo_convergence.png)

### 5.4. Gráfica de convergencia en Julia

```julia
using Random
using Plots

function convergencia_pi(n)

    dentro = 0
    estimaciones = Float64[]

    for i in 1:n

        x = rand()*2 - 1
        y = rand()*2 - 1

        if x^2 + y^2 <= 1
            dentro += 1
        end

        push!(estimaciones, 4 * dentro / i)

    end

    plot(estimaciones, label="Estimación π")
    hline!([π], label="π real")

end

convergencia_pi(10000)
```

## 6. Conclusión

- El método de Monte Carlo permite estimar `π` mediante simulación aleatoria.
- Python es adecuado para aprendizaje y prototipos.
- Julia ofrece **mayor rendimiento computacional** en simulaciones numéricas intensivas.
- La gráfica de puntos Monte Carlo muestra visualmente el método probabilístico.
- El gráfico de convergencia demuestra que el algoritmo converge hacia `π`.
- Observa este PDF donde se compara el rendimiento de los lenguajes interpretados en relación a los compilados: [Compilados VS Interpretados](docs/JuliaRescate.pdf).
