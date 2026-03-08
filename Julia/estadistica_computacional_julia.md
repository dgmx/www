---
title: 2. Estadistica Computacional
parent: "Julia"
---

# Estadística Computacional con Julia
> **Versión Julia:** ≥ 1.9  
> **Nivel:** Intermedio ·  Grado en Estadística  
> **Librerías principales:** Statistics, StatsBase, Distributions, HypothesisTests, GLM, DataFrames, CSV, Plots, StatsPlots, Random, LinearAlgebra. 

---

## Tabla de Contenidos

1. [Entorno de Trabajo para Estadística](#1-entorno-de-trabajo-para-estadística)
2. [Manipulación de Datos con DataFrames](#2-manipulación-de-datos-con-dataframes)
3. [Estadística Descriptiva](#3-estadística-descriptiva)
4. [Distribuciones de Probabilidad](#4-distribuciones-de-probabilidad)
5. [Generación de Números Aleatorios y Simulación](#5-generación-de-números-aleatorios-y-simulación)
6. [Visualización Estadística](#6-visualización-estadística)
7. [Inferencia Estadística: Estimación](#7-inferencia-estadística-estimación)
8. [Contrastes de Hipótesis](#8-contrastes-de-hipótesis)
9. [Regresión Lineal](#9-regresión-lineal)
10. [Regresión Logística y Modelos Lineales Generalizados](#10-regresión-logística-y-modelos-lineales-generalizados)
11. [Análisis de Varianza (ANOVA)](#11-análisis-de-varianza-anova)
12. [Métodos No Paramétricos](#12-métodos-no-paramétricos)
13. [Series Temporales](#13-series-temporales)
14. [Métodos de Remuestreo: Bootstrap y Jackknife](#14-métodos-de-remuestreo-bootstrap-y-jackknife)
15. [Métodos de Monte Carlo y MCMC](#15-métodos-de-monte-carlo-y-mcmc)
16. [Reducción de Dimensionalidad: PCA y AFC](#16-reducción-de-dimensionalidad-pca-y-afc)
17. [Casos de Estudio Completos](#17-casos-de-estudio-completos)
18. [Referencia de Librerías](#18-referencia-de-librerías)

---

## 1. Entorno de Trabajo para Estadística

### 1.1 Instalación del ecosistema estadístico

Lo primero es configurar un proyecto Julia con todas las librerías necesarias. Se recomienda crear un entorno dedicado para no mezclar dependencias entre proyectos.

```julia
# Crear y activar un entorno de proyecto
# En modo Pkg (presiona ] en el REPL)
# pkg> activate .
# pkg> instantiate

# O desde código Julia
using Pkg
Pkg.activate(".")

# Instalar el ecosistema estadístico completo
paquetes = [
    "Statistics",       # Estadística básica (stdlib)
    "StatsBase",        # Estadística avanzada
    "Distributions",    # Distribuciones de probabilidad
    "HypothesisTests",  # Contrastes de hipótesis
    "GLM",              # Modelos lineales generalizados
    "DataFrames",       # Tablas de datos
    "CSV",              # Lectura/escritura de CSV
    "Plots",            # Visualización general
    "StatsPlots",       # Gráficos estadísticos
    "Random",           # Números aleatorios (stdlib)
    "LinearAlgebra",    # Álgebra lineal (stdlib)
    "MultivariateStats",# Estadística multivariante (PCA, etc.)
    "KernelDensity",    # Estimación densidad kernel
    "TimeSeries",       # Series temporales
    "Turing",           # Inferencia bayesiana (MCMC)
    "CategoricalArrays",# Variables categóricas
    "Printf",           # Formateo de salida (stdlib)
    "RDatasets",        # Conjuntos de datos de referencia
]

Pkg.add(paquetes)
```

### 1.2 Cargar librerías al inicio de sesión

Es recomendable crear un archivo de proyecto con las importaciones habituales:

```julia
# ── Librerías estándar ──────────────────────────────
using Statistics          # mean, std, var, median, cor, cov...
using LinearAlgebra       # det, inv, eigen, svd, norm...
using Random              # rand, randn, seed!, shuffle...
using Printf              # @printf, @sprintf

# ── Datos ───────────────────────────────────────────
using DataFrames          # DataFrame, groupby, select, filter...
using CSV                 # CSV.read, CSV.write
using CategoricalArrays   # categorical(), levels()

# ── Estadística ─────────────────────────────────────
using StatsBase           # fit, describe, ecdf, autocor, pacf...
using Distributions       # Normal(), Binomial(), Poisson()...
using HypothesisTests     # OneSampleTTest, ChisqTest, MannWhitneyU...
using GLM                 # lm(), glm(), coef(), predict()...
using KernelDensity       # kde()
using MultivariateStats   # fit(PCA, ...), fit(MDS, ...)

# ── Visualización ────────────────────────────────────
using Plots               # plot, scatter, histogram, boxplot...
using StatsPlots          # @df, violin, corrplot, marginalhist...

# Fijar semilla global para reproducibilidad
Random.seed!(42)
println("✓ Entorno estadístico cargado correctamente")
```

### 1.3 Conjuntos de datos de referencia

El paquete `RDatasets` proporciona acceso a los clásicos datasets de R:

```julia
using RDatasets

# Ver datasets disponibles
datasets = RDatasets.datasets()
first(datasets, 10)

# Cargar datasets clásicos
iris    = dataset("datasets", "iris")
mtcars  = dataset("datasets", "mtcars")
airqual = dataset("datasets", "airquality")
faithful = dataset("datasets", "faithful")

# Ver estructura
println(size(iris))           # (150, 5)
println(names(iris))          # nombres de columnas
describe(iris)                # resumen estadístico
first(iris, 5)                # primeras 5 filas
```

---

## 2. Manipulación de Datos con DataFrames

### 2.1 Crear y explorar DataFrames

```julia
using DataFrames, CSV, CategoricalArrays

# Crear DataFrame desde cero
df = DataFrame(
    id       = 1:10,
    nombre   = ["Ana","Luis","Eva","Carlos","Marta",
                 "Pedro","Lucía","Juan","Sara","Tomás"],
    edad     = [23, 31, 28, 45, 36, 22, 29, 53, 41, 38],
    salario  = [28000, 42000, 35000, 61000, 48000,
                 25000, 38000, 72000, 55000, 50000],
    dpto     = categorical(["IT","RR.HH.","IT","Finanzas","IT",
                            "RR.HH.","Finanzas","IT","Finanzas","RR.HH."])
)

# Información general
nrow(df)           # Número de filas: 10
ncol(df)           # Número de columnas: 5
size(df)           # (10, 5)
names(df)          # Nombres de columnas
eltype.(eachcol(df))  # Tipos de cada columna
describe(df)       # Estadísticas descriptivas por columna
```

### 2.2 Selección y filtrado

```julia
# Seleccionar columnas
df[:, :edad]               # Columna como vector
df[:, [:nombre, :salario]] # Varias columnas
select(df, :nombre, :edad, :salario)  # Lo mismo

# Filtrar filas
filter(row -> row.edad > 30, df)
filter(row -> row.dpto == "IT", df)

# Filtrado compuesto
subset(df, :edad => a -> a .> 30, :salario => s -> s .> 40000)

# Indexación directa
df[1:3, :]                    # Primeras 3 filas
df[df.edad .> 35, :]          # Filtro booleano
df[!, :salario]               # Columna (referencia, sin copia)
df[:, :salario]               # Columna (copia)
```

### 2.3 Transformar y agregar columnas

```julia
# Agregar columna calculada
df.salario_mensual = df.salario ./ 12
df.mayor_40 = df.edad .> 40

# Transformar con transform
transform!(df, :salario => (s -> s ./ 1000) => :salario_k)

# Renombrar columnas
rename!(df, :edad => :años)

# Eliminar columna
select!(df, Not(:mayor_40))
```

### 2.4 Valores faltantes (missing)

```julia
# Crear datos con missing
df2 = DataFrame(
    x = [1.0, 2.0, missing, 4.0, 5.0, missing, 7.0],
    y = [10, missing, 30, 40, missing, 60, 70]
)

# Detectar missing
ismissing.(df2.x)            # Vector de booleanos
any(ismissing.(df2.x))       # ¿Hay algún missing?
sum(ismissing.(df2.x))       # Cuántos missing

# Eliminar filas con missing
dropmissing(df2)             # Nueva copia sin filas con missing
dropmissing!(df2)            # In-place

# Completar con un valor
coalesce.(df2.x, 0.0)        # Reemplaza missing por 0.0
replace(df2.x, missing => mean(skipmissing(df2.x)))  # Por la media

# Estadísticas ignorando missing
mean(skipmissing(df2.x))
std(skipmissing(df2.x))
```

### 2.5 Agrupación y resumen

```julia
using RDatasets
iris = dataset("datasets", "iris")

# Agrupar y calcular estadísticas por grupo
gdf = groupby(iris, :Species)

# Aplicar función a cada grupo
combine(gdf,
    :SepalLength => mean => :media_sepalo,
    :SepalLength => std  => :desv_sepalo,
    :PetalLength => mean => :media_petalo,
    nrow                 => :n
)

# Resultado:
# 3×5 DataFrame
#  Species     | media_sepalo | desv_sepalo | media_petalo | n
#  setosa      | 5.006        | 0.352       | 1.462        | 50
#  versicolor  | 5.936        | 0.516       | 4.260        | 50
#  virginica   | 6.588        | 0.636       | 5.552        | 50
```

### 2.6 Unión de DataFrames

```julia
# Datos de ejemplo
clientes = DataFrame(
    id = [1,2,3,4,5],
    nombre = ["Ana","Luis","Eva","Carlos","Marta"]
)

compras = DataFrame(
    id = [1,1,2,3,5,5,5],
    producto = ["A","B","A","C","A","B","C"],
    precio = [100, 200, 150, 300, 120, 180, 250]
)

# Diferentes tipos de join
innerjoin(clientes, compras, on=:id)    # Solo coincidencias
leftjoin(clientes, compras, on=:id)     # Todos los clientes
rightjoin(clientes, compras, on=:id)    # Todas las compras
outerjoin(clientes, compras, on=:id)    # Todos los registros

# Apilar DataFrames verticalmente
vcat(df1, df2)

# Apilar horizontalmente
hcat(df1, df2)
```

### 2.7 Lectura y escritura de CSV

```julia
# Leer CSV
df = CSV.read("datos.csv", DataFrame)
df = CSV.read("datos.csv", DataFrame,
    header=true,
    delim=';',
    decimal=',',       # Decimales con coma (europeo)
    missingstring=["NA", "N/A", ""],
    types=Dict(:edad => Int64, :salario => Float64)
)

# Escribir CSV
CSV.write("resultado.csv", df)
CSV.write("resultado.csv", df, delim=';', decimal=',')

# Leer desde URL
using Downloads
url = "https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv"
df = CSV.read(Downloads.download(url), DataFrame)
```

---

## 3. Estadística Descriptiva

### 3.1 Medidas de tendencia central

```julia
using Statistics, StatsBase, DataFrames, RDatasets

datos = [23, 31, 28, 45, 36, 22, 29, 53, 41, 38,
         31, 29, 44, 27, 35, 41, 28, 33, 47, 30]

# Media aritmética
media = mean(datos)                   # 33.55

# Mediana
med = median(datos)                   # 32.0

# Moda (StatsBase)
moda = mode(datos)                    # Valor más frecuente
modas = modes(datos)                  # Todas las modas

# Media recortada (trimmed mean) — robusta a outliers
mean_recortada = mean(datos, trim=0.1)  # Elimina 10% de cada extremo

# Media winsorizada
StatsBase.winsor(datos, prop=0.1)    # Reemplaza extremos

# Media geométrica y armónica
geom = geomean(datos)
arm  = harmmean(datos)

println("Media:      $(round(media, digits=2))")
println("Mediana:    $med")
println("Moda:       $moda")
println("Media recortada 10%: $(round(mean_recortada, digits=2))")
println("Media geométrica:    $(round(geom, digits=2))")
```

### 3.2 Medidas de dispersión

```julia
# Varianza y desviación típica
var_m  = var(datos)           # Varianza muestral (divide entre n-1)
var_p  = var(datos, corrected=false)  # Varianza poblacional (divide entre n)
desv_m = std(datos)           # Desviación típica muestral
desv_p = std(datos, corrected=false)  # Desviación típica poblacional

# Rango
rango = maximum(datos) - minimum(datos)

# Rango intercuartílico (IQR)
q1, q2, q3 = quantile(datos, [0.25, 0.50, 0.75])
iqr_val = iqr(datos)          # = Q3 - Q1 (StatsBase)

# Coeficiente de variación
cv = std(datos) / mean(datos) * 100    # En porcentaje

# Error estándar de la media
sem_val = sem(datos)          # = std / sqrt(n)  (StatsBase)

# Desviación absoluta mediana (MAD) — muy robusta
mad_val = mad(datos, normalize=true)

println("Varianza muestral:  $(round(var_m, digits=2))")
println("Desv. típica:       $(round(desv_m, digits=2))")
println("IQR:                $iqr_val")
println("CV (%):             $(round(cv, digits=2))%")
println("Error estándar:     $(round(sem_val, digits=4))")
println("MAD normalizado:    $(round(mad_val, digits=2))")
```

### 3.3 Momentos y forma de la distribución

```julia
using StatsBase

# Asimetría (skewness)
asim = skewness(datos)
# > 0: cola derecha larga (asimetría positiva)
# < 0: cola izquierda larga (asimetría negativa)
# ≈ 0: aproximadamente simétrica

# Curtosis (kurtosis)
kurt = kurtosis(datos)
# Exceso de curtosis respecto a la normal (0 = mesocúrtica)
# > 0: leptocúrtica (colas pesadas)
# < 0: platicúrtica (colas ligeras)

println("Asimetría: $(round(asim, digits=4))")
println("Curtosis (exceso): $(round(kurt, digits=4))")

# Interpretación
if abs(asim) < 0.5
    println("  → Distribución aproximadamente simétrica")
elseif asim > 0
    println("  → Asimetría positiva (cola derecha)")
else
    println("  → Asimetría negativa (cola izquierda)")
end
```

### 3.4 Cuantiles y boxplot estadístico

```julia
# Percentiles
percentiles = quantile(datos, [0.10, 0.25, 0.50, 0.75, 0.90])
println("P10: $(percentiles[1])")
println("Q1:  $(percentiles[2])")
println("Q2:  $(percentiles[3])")
println("Q3:  $(percentiles[4])")
println("P90: $(percentiles[5])")

# Resumen de cinco números (Five-number summary)
five_num = [minimum(datos), q1, median(datos), q3, maximum(datos)]
println("\nResumen de cinco números:")
println("Min=$(five_num[1]), Q1=$(five_num[2]), Med=$(five_num[3]), Q3=$(five_num[4]), Max=$(five_num[5])")

# Detección de outliers con criterio IQR
iqr_val = q3 - q1
lim_inf = q1 - 1.5 * iqr_val
lim_sup = q3 + 1.5 * iqr_val
outliers = filter(x -> x < lim_inf || x > lim_sup, datos)
println("\nOutliers IQR: $outliers")
```

### 3.5 Tablas de frecuencias

```julia
# Variable discreta: tabla de frecuencias absolutas
edades_grupo = [20, 22, 21, 23, 20, 22, 24, 21, 20, 23, 22, 21, 25, 20, 22]

# Con StatsBase
freq_abs = countmap(edades_grupo)           # Diccionario valor => frecuencia
freq_abs_sorted = sort(collect(freq_abs))

# Construir tabla completa
valores = sort(unique(edades_grupo))
n = length(edades_grupo)
tabla = DataFrame(
    valor       = valores,
    freq_abs    = [count(==(v), edades_grupo) for v in valores],
)
tabla.freq_rel    = tabla.freq_abs ./ n
tabla.freq_abs_ac = cumsum(tabla.freq_abs)
tabla.freq_rel_ac = cumsum(tabla.freq_rel)

println(tabla)

# Variable continua: tabla de frecuencias por intervalos
using StatsBase
h = fit(Histogram, datos, nbins=5)   # Histograma con 5 bins
edges = h.edges[1]
counts = h.weights

tabla_cont = DataFrame(
    intervalo = ["[$(edges[i]), $(edges[i+1]))" for i in 1:length(counts)],
    freq_abs  = counts,
    freq_rel  = counts ./ sum(counts)
)
println("\nTabla de frecuencias (datos agrupados):")
println(tabla_cont)
```

### 3.6 Correlación y covarianza

```julia
using Statistics, StatsBase, RDatasets

iris = dataset("datasets", "iris")

# Correlación de Pearson
x = iris.SepalLength
y = iris.PetalLength
r = cor(x, y)
println("r de Pearson: $(round(r, digits=4))")

# Matriz de correlaciones (solo columnas numéricas)
X = Matrix(iris[:, 1:4])  # Las 4 variables numéricas
R = cor(X)
println("\nMatriz de correlaciones:")
display(round.(R, digits=3))

# Covarianza
cov_val = cov(x, y)
Σ = cov(X)                    # Matriz de covarianzas

# Correlación de Spearman (rangos)
r_spearman = corspearman(x, y)
println("\nr de Spearman: $(round(r_spearman, digits=4))")

# Correlación de Kendall
r_kendall = corkendall(x, y)
println("τ de Kendall:  $(round(r_kendall, digits=4))")
```

### 3.7 Función describe() extendida

```julia
using DataFrames, StatsBase, RDatasets

mtcars = dataset("datasets", "mtcars")

# describe() de DataFrames
describe(mtcars, :mean, :std, :min, :q25, :median, :q75, :max, :nmissing)

# Resumen detallado con StatsBase para una variable
v = mtcars.MPG
s = summarystats(v)
println(s)
# Variables de interés: s.min, s.max, s.mean, s.median, s.q25, s.q75
```

---

## 4. Distribuciones de Probabilidad

El paquete `Distributions.jl` ofrece una interfaz unificada para trabajar con distribuciones. Todas comparten la misma API: `pdf`, `cdf`, `quantile`, `rand`, `mean`, `var`, `std`.

### 4.1 Distribuciones discretas

```julia
using Distributions

# ── Distribución Binomial ──────────────────────────────
B = Binomial(20, 0.3)      # n=20 ensayos, p=0.3

mean(B)                    # np = 6.0
var(B)                     # np(1-p) = 4.2
std(B)                     # 2.049...

pdf(B, 5)                  # P(X = 5)
cdf(B, 8)                  # P(X ≤ 8)
ccdf(B, 8)                 # P(X > 8) = 1 - cdf(B, 8)
quantile(B, 0.95)          # Cuantil 95%
rand(B, 100)               # 100 realizaciones aleatorias

# ── Distribución de Poisson ───────────────────────────
P = Poisson(3.5)           # λ = 3.5

pdf(P, 3)                  # P(X = 3)
cdf(P, 5)                  # P(X ≤ 5)
mean(P)                    # λ = 3.5
var(P)                     # λ = 3.5 (media = varianza)

# ── Distribución Geométrica ───────────────────────────
G = Geometric(0.25)        # p=0.25 (número de fallos antes del 1er éxito)
pdf(G, 3)                  # P(X = 3)  → 3 fallos antes del éxito

# ── Distribución Hipergeométrica ─────────────────────
H = Hypergeometric(30, 20, 10)  # N=50, K=30 éxitos, n=10 extracciones
mean(H)                    # 6.0
pdf(H, 6)                  # P(X = 6)

# ── Binomial Negativa ────────────────────────────────
NB = NegativeBinomial(5, 0.4)   # r=5 éxitos, p=0.4
mean(NB)                   # r(1-p)/p = 7.5

# ── Distribución Uniforme Discreta ───────────────────
U = DiscreteUniform(1, 6)  # Dado de 6 caras
pdf(U, 3)                  # 1/6
```

### 4.2 Distribuciones continuas

```julia
# ── Distribución Normal ──────────────────────────────
N = Normal(100, 15)        # μ=100, σ=15

pdf(N, 100)                # f(100) = densidad en la media
cdf(N, 115)                # P(X ≤ 115) = P(Z ≤ 1) ≈ 0.8413
cdf(N, 115) - cdf(N, 85)   # P(85 ≤ X ≤ 115) ≈ 0.6827
quantile(N, 0.975)         # 129.4 → valor crítico bilateral α=0.05

# Normal estándar
Z = Normal(0, 1)
quantile(Z, 0.975)         # 1.96

# ── Distribución t de Student ────────────────────────
T = TDist(10)              # gl = 10
quantile(T, 0.975)         # 2.228 > 1.96 (colas más pesadas)
pdf(T, 0)                  # Densidad en 0

# ── Distribución Chi-cuadrado ────────────────────────
X2 = Chisq(5)              # gl = 5
mean(X2)                   # gl = 5
var(X2)                    # 2*gl = 10
quantile(X2, 0.95)         # 11.07 (valor crítico α=0.05)

# ── Distribución F de Snedecor ───────────────────────
F = FDist(3, 20)           # gl1=3, gl2=20
quantile(F, 0.95)          # Valor crítico F para ANOVA

# ── Distribución Exponencial ─────────────────────────
E = Exponential(2.0)       # β = 2 (media = 1/λ = 2)
mean(E)                    # 2.0
pdf(E, 1.0)                # f(1) = (1/2) * exp(-1/2)
cdf(E, 3.0)                # P(X ≤ 3)

# ── Distribución Gamma ────────────────────────────────
G = Gamma(2.0, 3.0)        # α=2 (forma), β=3 (escala)
mean(G)                    # α*β = 6.0
var(G)                     # α*β² = 18.0

# ── Distribución Beta ────────────────────────────────
Be = Beta(2.0, 5.0)        # α=2, β=5 (en [0,1])
mean(Be)                   # α/(α+β) = 2/7 ≈ 0.286
mode(Be)                   # (α-1)/(α+β-2) = 0.2

# ── Distribución Uniforme Continua ───────────────────
U = Uniform(0, 10)
mean(U)                    # 5.0
var(U)                     # (b-a)²/12 ≈ 8.33

# ── Distribución de Weibull ──────────────────────────
W = Weibull(2.0, 3.0)      # α=2 (forma), β=3 (escala)
mean(W)                    # β * Γ(1 + 1/α)

# ── Distribución Log-Normal ──────────────────────────
LN = LogNormal(1.0, 0.5)   # μ=1, σ=0.5 (parámetros del logaritmo)
mean(LN)                   # exp(μ + σ²/2)
median(LN)                 # exp(μ)
```

### 4.3 Operaciones comunes con distribuciones

```julia
# Calcular probabilidades en intervalos
N = Normal(0, 1)

# Regla empírica (68-95-99.7)
p1σ = cdf(N, 1) - cdf(N, -1)    # ≈ 0.6827
p2σ = cdf(N, 2) - cdf(N, -2)    # ≈ 0.9545
p3σ = cdf(N, 3) - cdf(N, -3)    # ≈ 0.9973
@printf("P(|Z| ≤ 1) = %.4f\n", p1σ)
@printf("P(|Z| ≤ 2) = %.4f\n", p2σ)
@printf("P(|Z| ≤ 3) = %.4f\n", p3σ)

# Valores críticos habituales
α = [0.10, 0.05, 0.025, 0.01, 0.005]
for a in α
    z = quantile(N, 1 - a)
    @printf("z_{%.3f} = %.4f\n", a, z)
end

# Ajustar distribución a datos (MLE)
datos = [2.3, 1.8, 3.1, 2.7, 2.1, 3.5, 2.9, 2.4, 1.9, 3.0]
dist_ajustada = fit(Normal, datos)
println("\nDistribución ajustada: $dist_ajustada")
println("μ̂ = $(round(mean(dist_ajustada), digits=4))")
println("σ̂ = $(round(std(dist_ajustada), digits=4))")

# También para otras distribuciones
fit(Exponential, abs.(randn(200)))
fit(Gamma, abs.(randn(200)) .+ 0.1)
fit(Poisson, rand(0:10, 100))

# Mezcla de distribuciones (mixture)
# P(X) = 0.3·N(0,1) + 0.7·N(5,2)
mezcla = MixtureModel(Normal, [(0.0, 1.0), (5.0, 2.0)], [0.3, 0.7])
rand(mezcla, 10)
pdf(mezcla, 2.5)
```

### 4.4 Verificación de normalidad

```julia
using HypothesisTests, StatsBase

datos = randn(50) .* 2 .+ 5    # Datos N(5, 4)

# Test de Kolmogorov-Smirnov (bondad de ajuste)
ks = ExactOneSampleKSTest(datos, Normal(mean(datos), std(datos)))
println("KS test: p-valor = $(round(pvalue(ks), digits=4))")

# Test de Shapiro-Wilk (más potente para muestras pequeñas)
# Disponible vía HypothesisTests
sw = ShapiroWilkTest(datos)
println("Shapiro-Wilk: p-valor = $(round(pvalue(sw), digits=4))")

# Gráfico Q-Q (Quantile-Quantile)
using Plots
n = length(datos)
teoricos = quantile(Normal(0,1), [(i - 0.5)/n for i in 1:n])
empiricos = sort(datos)
empiricos_std = (empiricos .- mean(datos)) ./ std(datos)

scatter(teoricos, empiricos_std,
    xlabel="Cuantiles teóricos N(0,1)",
    ylabel="Cuantiles muestrales estandarizados",
    title="Gráfico Q-Q Normal",
    label="Datos",
    markersize=4)
plot!([minimum(teoricos), maximum(teoricos)],
      [minimum(teoricos), maximum(teoricos)],
      label="Línea de referencia", lw=2, color=:red)
```

---

## 5. Generación de Números Aleatorios y Simulación

### 5.1 Generadores básicos

```julia
using Random, Distributions

# Fijar semilla para reproducibilidad
Random.seed!(2024)

# Uniforme continua [0,1)
rand()           # Un valor
rand(5)          # Vector de 5 valores
rand(3, 3)       # Matriz 3×3

# Uniforme en enteros
rand(1:6)        # Simular un dado
rand(1:6, 10)    # 10 lanzamientos

# Normal estándar
randn()
randn(100)
randn(4, 4)

# Desde distribuciones de Distributions.jl
rand(Normal(5, 2), 100)
rand(Binomial(10, 0.4), 50)
rand(Exponential(3), 200)

# Permutaciones y muestreo
datos = 1:20
shuffle(collect(datos))              # Permutación aleatoria
sample(collect(datos), 5)            # Muestra SIN reposición
sample(collect(datos), 5, replace=true)  # Muestra CON reposición

# Pesos en el muestreo
pesos = [0.1, 0.2, 0.3, 0.15, 0.25]
sample(["A","B","C","D","E"], Weights(pesos), 10)
```

### 5.2 Simulación de fenómenos estadísticos

#### Ley de los Grandes Números

```julia
using Plots, Random
Random.seed!(42)

ns = [10, 50, 100, 500, 1000, 5000, 10000]
medias_acumuladas = Float64[]

# Simular lanzamientos de moneda (Bernoulli(0.5))
lanzamientos = rand(Bernoulli(0.5), 10000)

for n in 1:10000
    push!(medias_acumuladas, mean(lanzamientos[1:n]))
end

plot(1:10000, medias_acumuladas,
    xscale=:log10,
    xlabel="Número de lanzamientos (escala log)",
    ylabel="Proporción de caras",
    title="Ley de los Grandes Números",
    label="Proporción observada",
    lw=1.5)
hline!([0.5], label="p = 0.5 (valor teórico)",
       color=:red, lw=2, ls=:dash)
```

#### Teorema Central del Límite

```julia
using Plots, Distributions, Random
Random.seed!(42)

# Suma de variables Uniforme(0,1)
ns = [1, 2, 5, 30]
plts = []

for n in ns
    muestras = [sum(rand(Uniform(0,1), n)) for _ in 1:5000]
    μ_teo = n * 0.5
    σ_teo = sqrt(n * 1/12)
    muestras_std = (muestras .- μ_teo) ./ σ_teo

    p = histogram(muestras_std, normalize=:pdf, bins=40,
        title="n = $n", label="Muestra", alpha=0.6,
        xlabel="Z estandarizado", ylabel="Densidad")
    x_range = range(-4, 4, length=200)
    plot!(p, x_range, pdf.(Normal(0,1), x_range),
          label="N(0,1)", lw=2, color=:red)
    push!(plts, p)
end

plot(plts..., layout=(2,2), size=(900, 700),
     suptitle="Teorema Central del Límite: suma de Uniformes(0,1)")
```

### 5.3 Simulación de Montecarlo básica

```julia
using Random, Printf
Random.seed!(42)

# Estimación de π por el método del dardo
function estimar_pi(n)
    dentro = 0
    for _ in 1:n
        x, y = rand(), rand()
        if x^2 + y^2 ≤ 1.0
            dentro += 1
        end
    end
    return 4 * dentro / n
end

for n in [100, 1_000, 10_000, 100_000, 1_000_000]
    π_est = estimar_pi(n)
    error = abs(π_est - π)
    @printf("n = %8d → π̂ = %.6f  error = %.6f\n", n, π_est, error)
end

# Vectorizado (mucho más eficiente)
function estimar_pi_vec(n)
    x = rand(n)
    y = rand(n)
    4 * sum(x.^2 .+ y.^2 .≤ 1.0) / n
end
```

### 5.4 Procesos estocásticos básicos

```julia
using Plots, Random
Random.seed!(42)

# ── Paseo aleatorio (Random Walk) ──────────────────
function paseo_aleatorio(n; p=0.5)
    pasos = rand(Bernoulli(p), n) .* 2 .- 1   # +1 o -1
    return cumsum(pasos)
end

n = 500
plts_paseos = [plot(paseo_aleatorio(n), label="", alpha=0.6)
               for _ in 1:8]
plot(plts_paseos..., layout=(2,4), size=(1000, 400),
     title="Paseos Aleatorios", xlabel="Paso", ylabel="Posición")

# ── Movimiento Browniano (Wiener) ─────────────────
function browniano(T, n)
    dt = T / n
    dW = randn(n) .* sqrt(dt)
    return cumsum([0.0; dW])
end

t_grid = range(0, 1, length=501)
plot([plot(t_grid, browniano(1, 500)) for _ in 1:5]...,
     layout=(1,5), legend=false, title="Movimiento Browniano")

# ── Cadena de Markov simple ────────────────────────
# Estados: 0=Soleado, 1=Nublado, 2=Lluvia
P_trans = [0.7 0.2 0.1;
           0.3 0.4 0.3;
           0.2 0.3 0.5]

function simular_markov(P, n, estado0=1)
    estados = zeros(Int, n)
    estados[1] = estado0
    for t in 2:n
        probs = P[estados[t-1], :]
        estados[t] = sample(1:3, Weights(probs))
    end
    return estados
end

clima = simular_markov(P_trans, 365, 1)
conteo = countmap(clima)
println("Distribución estacionaria simulada:")
println("Soleado: $(round(conteo[1]/365, digits=3))")
println("Nublado: $(round(conteo[2]/365, digits=3))")
println("Lluvia:  $(round(conteo[3]/365, digits=3))")
```

---

## 6. Visualización Estadística

### 6.1 Histogramas y densidades

```julia
using Plots, StatsPlots, KernelDensity, Distributions, RDatasets

iris = dataset("datasets", "iris")
datos = iris.SepalLength

# Histograma básico
histogram(datos,
    bins=15, normalize=:pdf,
    xlabel="Longitud sépalo (cm)", ylabel="Densidad",
    title="Distribución de Longitud de Sépalo",
    label="Histograma", alpha=0.6, color=:steelblue)

# Superponer densidad kernel
kd = kde(datos)
plot!(kd.x, kd.density, lw=2, color=:red, label="Densidad KDE")

# Superponer Normal ajustada
μ̂, σ̂ = mean(datos), std(datos)
x_range = range(minimum(datos), maximum(datos), length=200)
plot!(x_range, pdf.(Normal(μ̂, σ̂), x_range),
      lw=2, color=:darkgreen, label="Normal ajustada N($(round(μ̂,digits=1)), $(round(σ̂,digits=2)))")

# Histograma por grupos con @df
@df iris histogram(:SepalLength, group=:Species,
    bins=12, alpha=0.6, normalize=:pdf,
    xlabel="Longitud sépalo (cm)", title="Por Especie",
    layout=3, legend=false)
```

### 6.2 Boxplots y violines

```julia
using StatsPlots, RDatasets

iris = dataset("datasets", "iris")
mtcars = dataset("datasets", "mtcars")

# Boxplot por grupos
@df iris boxplot(:Species, :SepalLength,
    xlabel="Especie", ylabel="Longitud sépalo (cm)",
    title="Boxplot: Longitud de Sépalo por Especie",
    notch=true, fillalpha=0.7)

# Violin plot (más informativo que boxplot)
@df iris violin(:Species, :SepalLength,
    xlabel="Especie", ylabel="Longitud sépalo (cm)",
    title="Violin Plot", fillalpha=0.5)
@df iris dotplot!(:Species, :SepalLength,
    marker=(:black, 2), label="")

# Boxplot múltiple (varias variables)
p1 = @df iris boxplot(:Species, :SepalLength, title="Sépalo Longitud")
p2 = @df iris boxplot(:Species, :SepalWidth,  title="Sépalo Anchura")
p3 = @df iris boxplot(:Species, :PetalLength, title="Pétalo Longitud")
p4 = @df iris boxplot(:Species, :PetalWidth,  title="Pétalo Anchura")
plot(p1, p2, p3, p4, layout=(2,2), size=(900, 700), legend=false)
```

### 6.3 Gráficos de dispersión

```julia
using Plots, StatsPlots, RDatasets

iris = dataset("datasets", "iris")

# Scatter básico con regresión
scatter(iris.SepalLength, iris.PetalLength,
    group=iris.Species,
    xlabel="Longitud sépalo", ylabel="Longitud pétalo",
    title="Relación Sépalo-Pétalo en Iris",
    markersize=4, alpha=0.7)

# Añadir línea de regresión
using GLM
modelo = lm(@formula(PetalLength ~ SepalLength), iris)
x_pred = range(minimum(iris.SepalLength), maximum(iris.SepalLength), length=100)
y_pred = predict(modelo, DataFrame(SepalLength=collect(x_pred)))
plot!(x_pred, y_pred, lw=2, color=:black, label="Regresión lineal")

# Matriz de dispersión (scatter matrix / pairs plot)
@df iris cornerplot([:SepalLength, :SepalWidth, :PetalLength, :PetalWidth],
    compact=true, size=(800, 800),
    title="Matriz de Dispersión - Iris")
```

### 6.4 Corrplot y gráficos de correlación

```julia
using StatsPlots, RDatasets

iris = dataset("datasets", "iris")
X = Matrix(iris[:, 1:4])

# Mapa de calor de correlaciones
R = cor(X)
col_names = names(iris)[1:4]

heatmap(col_names, col_names, R,
    title="Matriz de Correlaciones",
    color=:RdBu, clims=(-1,1),
    annotate=true)

# Annotate con los valores
for i in 1:4, j in 1:4
    annotate!(j, i, text(round(R[i,j], digits=2), 8))
end

# corrplot de StatsPlots
@df iris corrplot([:SepalLength, :SepalWidth, :PetalLength, :PetalWidth],
    grid=false, size=(700,700))
```

### 6.5 Gráfico Q-Q y P-P

```julia
using Plots, Distributions, StatsBase

# Generar datos
datos = [2.1, 3.4, 1.8, 4.2, 2.9, 3.7, 2.5, 3.1, 2.8, 4.0,
         1.9, 3.3, 2.6, 3.8, 2.2, 3.5, 2.0, 4.1, 2.7, 3.6]

n = length(datos)
probs = [(i - 0.375)/(n + 0.25) for i in 1:n]  # Posición de Blom

# Cuantiles teóricos N(μ̂, σ̂)
μ̂, σ̂ = mean(datos), std(datos)
N_ajustada = Normal(μ̂, σ̂)
teoricos = quantile.(N_ajustada, probs)
empiricos = sort(datos)

# Q-Q Plot
scatter(teoricos, empiricos,
    xlabel="Cuantiles teóricos N($(round(μ̂,d=2)), $(round(σ̂,d=2)))",
    ylabel="Cuantiles empíricos",
    title="Gráfico Q-Q Normal",
    label="Observaciones", markersize=5)

# Línea de referencia (percentiles 25 y 75)
q25e, q75e = quantile(datos, [0.25, 0.75])
q25t, q75t = quantile(N_ajustada, [0.25, 0.75])
pendiente = (q75e - q25e) / (q75t - q25t)
intercepto = q25e - pendiente * q25t
x_line = [minimum(teoricos), maximum(teoricos)]
y_line = intercepto .+ pendiente .* x_line
plot!(x_line, y_line, lw=2, color=:red, label="Línea de referencia")
```

### 6.6 Gráficos para series y datos temporales

```julia
using Plots, Distributions, Random
Random.seed!(42)

t = 1:200
tendencia = 0.05 .* t
estacional = 2 .* sin.(2π .* t ./ 12)
ruido = randn(200)
serie = tendencia .+ estacional .+ ruido

# Gráfico de la serie
p1 = plot(t, serie, xlabel="Tiempo", ylabel="Valor",
     title="Serie Temporal Simulada", label="Observaciones", lw=1)
plot!(p1, t, tendencia .+ estacional, lw=2,
      label="Señal verdadera", color=:red)

# Autocorrelación (ACF)
using StatsBase
acf_vals = autocor(serie, 0:30)
p2 = bar(0:30, acf_vals, xlabel="Lag", ylabel="ACF",
     title="Función de Autocorrelación", label="ACF")
hline!(p2, [1.96/sqrt(200), -1.96/sqrt(200)],
       ls=:dash, color=:red, label="IC 95%")

# Autocorrelación parcial (PACF)
pacf_vals = pacf(serie, 1:30)
p3 = bar(1:30, pacf_vals, xlabel="Lag", ylabel="PACF",
     title="Función de Autocorrelación Parcial", label="PACF")
hline!(p3, [1.96/sqrt(200), -1.96/sqrt(200)],
       ls=:dash, color=:red, label="IC 95%")

plot(p1, p2, p3, layout=(3,1), size=(800, 900))
```


---

## 7. Inferencia Estadística: Estimación

### 7.1 Estimación puntual

```julia
using Statistics, StatsBase, Distributions

# Datos: muestra aleatoria de una N(μ, σ²)
Random.seed!(42)
n = 50
muestra = rand(Normal(68, 10), n)   # Verdad: μ=68, σ=10

# Estimadores de máxima verosimilitud (MLE)
μ̂_mle = mean(muestra)              # Estimador insesgado de μ
σ̂_mle = std(muestra, corrected=false)  # MLE de σ (sesgado)
σ̂_insesgado = std(muestra)         # Cuasivarianza (insesgado)

@printf("μ verdadero = 68.000\n")
@printf("μ̂ (MLE)    = %.3f\n", μ̂_mle)
@printf("σ verdadero = 10.000\n")
@printf("σ̂ MLE       = %.3f (sesgado)\n", σ̂_mle)
@printf("σ̂ cuasi     = %.3f (insesgado)\n", σ̂_insesgado)

# Propiedades del estimador: sesgo, varianza, ECM
# Simulación de propiedades del estimador de la media
R = 10000
medias = [mean(rand(Normal(68, 10), 30)) for _ in 1:R]

sesgo = mean(medias) - 68
varianza_est = var(medias)
ecm = sesgo^2 + varianza_est

@printf("\nPropiedades de X̄ (R=%d simulaciones, n=30):\n", R)
@printf("  Sesgo:    %.5f\n", sesgo)
@printf("  Varianza: %.5f\n", varianza_est)
@printf("  ECM:      %.5f\n", ecm)
@printf("  Var teórica σ²/n = %.5f\n", 100/30)
```

### 7.2 Intervalos de confianza para la media

```julia
using Distributions, Statistics, HypothesisTests

Random.seed!(42)
muestra = rand(Normal(50, 8), 25)
n = length(muestra)
x̄ = mean(muestra)
s = std(muestra)

# IC para μ con σ conocido (Z)
σ = 8.0   # Supuesto conocido
z95 = quantile(Normal(), 0.975)
z99 = quantile(Normal(), 0.995)

ic_z95 = (x̄ - z95*σ/√n, x̄ + z95*σ/√n)
ic_z99 = (x̄ - z99*σ/√n, x̄ + z99*σ/√n)

# IC para μ con σ desconocido (t de Student)
t95 = quantile(TDist(n-1), 0.975)
t99 = quantile(TDist(n-1), 0.995)

ic_t95 = (x̄ - t95*s/√n, x̄ + t95*s/√n)
ic_t99 = (x̄ - t99*s/√n, x̄ + t99*s/√n)

@printf("Muestra: n=%d, x̄=%.3f, s=%.3f\n\n", n, x̄, s)
@printf("IC 95%% (Z, σ=8):  (%.3f, %.3f)\n", ic_z95...)
@printf("IC 99%% (Z, σ=8):  (%.3f, %.3f)\n", ic_z99...)
@printf("IC 95%% (t, s):    (%.3f, %.3f)\n", ic_t95...)
@printf("IC 99%% (t, s):    (%.3f, %.3f)\n", ic_t99...)
```

### 7.3 Intervalos de confianza para proporciones

```julia
using HypothesisTests, Distributions

# Datos: 156 éxitos en 400 ensayos
n = 400
k = 156
p̂ = k / n

# IC de Wald (aproximación normal)
z = quantile(Normal(), 0.975)
margen_wald = z * sqrt(p̂*(1-p̂)/n)
ic_wald = (p̂ - margen_wald, p̂ + margen_wald)

# IC de Wilson (mejor para p̂ extremas o n pequeño)
centro_wilson = (p̂ + z^2/(2n)) / (1 + z^2/n)
margen_wilson = z * sqrt(p̂*(1-p̂)/n + z^2/(4n^2)) / (1 + z^2/n)
ic_wilson = (centro_wilson - margen_wilson, centro_wilson + margen_wilson)

@printf("p̂ = %d/%d = %.4f\n\n", k, n, p̂)
@printf("IC 95%% Wald:   (%.4f, %.4f)\n", ic_wald...)
@printf("IC 95%% Wilson: (%.4f, %.4f)\n", ic_wilson...)

# Con HypothesisTests
test = BinomialTest(k, n)
ci = confint(test, level=0.95)
@printf("IC 95%% exacto: (%.4f, %.4f)\n", ci[1], ci[2])
```

### 7.4 Intervalos de confianza para varianzas

```julia
using Distributions, Statistics

muestra = [12.1, 11.8, 13.2, 12.7, 11.5, 12.9, 13.1, 12.3, 11.9, 12.6]
n = length(muestra)
s² = var(muestra)

# IC para σ² usando χ²
α = 0.05
χ²_inf = quantile(Chisq(n-1), α/2)
χ²_sup = quantile(Chisq(n-1), 1 - α/2)

ic_var = ((n-1)*s²/χ²_sup, (n-1)*s²/χ²_inf)
ic_std = sqrt.(ic_var)

@printf("s² = %.4f\n", s²)
@printf("IC 95%% para σ²: (%.4f, %.4f)\n", ic_var...)
@printf("IC 95%% para σ:  (%.4f, %.4f)\n", ic_std...)
```

### 7.5 Cobertura empírica del IC (simulación)

```julia
# Verificar que el IC del 95% cubre el verdadero parámetro ~95% de las veces
function cobertura_ic(μ_verdadero, σ, n, R=10000, nivel=0.95)
    t_critico = quantile(TDist(n-1), 1 - (1-nivel)/2)
    coberturas = 0
    for _ in 1:R
        muestra = rand(Normal(μ_verdadero, σ), n)
        x̄ = mean(muestra)
        s = std(muestra)
        lim_inf = x̄ - t_critico * s/√n
        lim_sup = x̄ + t_critico * s/√n
        if lim_inf ≤ μ_verdadero ≤ lim_sup
            coberturas += 1
        end
    end
    return coberturas / R
end

for n in [5, 10, 20, 50, 100]
    cob = cobertura_ic(10.0, 2.0, n)
    @printf("n = %3d: cobertura = %.4f (nominal: 0.9500)\n", n, cob)
end
```

---

## 8. Contrastes de Hipótesis

### 8.1 Contraste para la media: t de Student

```julia
using HypothesisTests, Statistics

# ── Una muestra: ¿es μ = μ₀? ──────────────────────
Random.seed!(42)
muestra = rand(Normal(52, 10), 30)

# H₀: μ = 50   vs   H₁: μ ≠ 50 (bilateral)
test_1m = OneSampleTTest(muestra, 50)
println(test_1m)
@printf("Estadístico t: %.4f\n", test_1m.t)
@printf("p-valor:       %.4f\n", pvalue(test_1m))
@printf("IC 95%%:        (%.3f, %.3f)\n", confint(test_1m)...)

# Contraste unilateral: H₁: μ > 50
pvalue(test_1m, tail=:right)

# ── Dos muestras independientes: ¿es μ₁ = μ₂? ────
grupo_A = rand(Normal(50, 8), 35)
grupo_B = rand(Normal(55, 9), 40)

# Test de Levene/F para igualdad de varianzas
test_var = VarianceFTest(grupo_A, grupo_B)
@printf("\nTest F varianzas: F=%.3f, p=%.4f\n",
        test_var.F, pvalue(test_var))

# t-test con varianzas iguales
test_2m_eq = EqualVarianceTTest(grupo_A, grupo_B)
# t-test con varianzas desiguales (Welch)
test_2m_uneq = UnequalVarianceTTest(grupo_A, grupo_B)

println("\nDos muestras (varianzas iguales):")
@printf("t = %.4f, p = %.4f\n", test_2m_eq.t, pvalue(test_2m_eq))
println("\nDos muestras (Welch, varianzas desiguales):")
@printf("t = %.4f, p = %.4f\n", test_2m_uneq.t, pvalue(test_2m_uneq))

# ── Datos emparejados ─────────────────────────────
antes = [78, 82, 75, 90, 88, 72, 85, 80, 77, 84]
despues = [81, 85, 74, 93, 91, 75, 87, 84, 80, 88]
diferencias = despues .- antes

test_pares = OneSampleTTest(diferencias, 0)
@printf("\nTest datos emparejados: t=%.4f, p=%.4f\n",
        test_pares.t, pvalue(test_pares))
```

### 8.2 Contraste para proporciones

```julia
using HypothesisTests

# Una proporción: H₀: p = 0.5
test_p = BinomialTest(42, 80, 0.5)
@printf("Test binomial: p̂=%.3f, p-valor=%.4f\n",
        42/80, pvalue(test_p))

# Dos proporciones
n1, k1 = 200, 90    # Grupo 1
n2, k2 = 250, 95    # Grupo 2

# Z-test para diferencia de proporciones
p1, p2 = k1/n1, k2/n2
p_pool = (k1+k2)/(n1+n2)
z = (p1-p2) / sqrt(p_pool*(1-p_pool)*(1/n1+1/n2))
p_val = 2*(1 - cdf(Normal(), abs(z)))
@printf("Z = %.4f, p-valor = %.4f\n", z, p_val)
```

### 8.3 Contraste chi-cuadrado

```julia
using HypothesisTests

# ── Bondad de ajuste ─────────────────────────────
# ¿Sigue el dado una distribución uniforme?
observados = [18, 22, 15, 20, 13, 12]  # 100 lanzamientos
esperados  = fill(100/6, 6)             # 16.67 cada cara

test_gof = ChisqTest(observados, fill(1/6, 6))
println(test_gof)
@printf("χ² = %.4f, p-valor = %.4f\n",
        test_gof.stat, pvalue(test_gof))

# ── Independencia ─────────────────────────────────
# ¿Son independientes el género y la preferencia?
tabla_cont = [45 30; 25 40]  # [Hombre_Sí  Hombre_No; Mujer_Sí  Mujer_No]

test_ind = ChisqTest(tabla_cont)
println(test_ind)
@printf("χ² = %.4f, p-valor = %.4f\n",
        test_ind.stat, pvalue(test_ind))

# Tabla de contingencia desde DataFrame
using DataFrames, FreqTables
df = DataFrame(
    genero = ["H","H","H","M","M","M","H","M","H","M"],
    pref   = ["A","B","A","A","B","A","B","B","A","A"]
)
tabla = freqtable(df, :genero, :pref)

# ── Test exacto de Fisher (muestras pequeñas) ─────
tabla_2x2 = [8 2; 3 7]
test_fisher = FisherExactTest(tabla_2x2[1,1], tabla_2x2[1,2],
                               tabla_2x2[2,1], tabla_2x2[2,2])
@printf("Fisher exacto: p = %.4f\n", pvalue(test_fisher))
```

### 8.4 Potencia y tamaño muestral

```julia
using Distributions, Plots

# ── Potencia del t-test de una muestra ─────────
function potencia_ttest_1m(μ₀, μ₁, σ, n, α=0.05)
    t_critico = quantile(TDist(n-1), 1 - α/2)
    δ = abs(μ₁ - μ₀) / σ * √n   # Parámetro de no centralidad
    dist_altern = NoncentralT(n-1, δ)
    return 1 - cdf(dist_altern, t_critico) + cdf(dist_altern, -t_critico)
end

# Curva de potencia en función de n
ns = 5:5:200
μ₀, μ₁, σ = 50, 55, 10
potencias = potencia_ttest_1m.(μ₀, μ₁, σ, ns)

plot(ns, potencias,
    xlabel="Tamaño muestral (n)",
    ylabel="Potencia (1-β)",
    title="Curva de Potencia: t-test μ₀=50 vs μ₁=55, σ=10",
    lw=2, label="Potencia")
hline!([0.80], ls=:dash, color=:red, label="Potencia 80%")
hline!([0.90], ls=:dash, color=:orange, label="Potencia 90%")
vline!([ns[findfirst(potencias .≥ 0.80)]], ls=:dot, color=:red, label="n para 80%")

# ── Tamaño muestral para proporción ───────────
function n_proporcion(p₀, p₁, α=0.05, β=0.20)
    z_α = quantile(Normal(), 1 - α/2)
    z_β = quantile(Normal(), 1 - β)
    p̄ = (p₀ + p₁) / 2
    return ceil(Int, (z_α*√(2*p̄*(1-p̄)) + z_β*√(p₀*(1-p₀)+p₁*(1-p₁)))^2 /
                     (p₀ - p₁)^2)
end

@printf("n para p₀=0.5 vs p₁=0.6 (80%%): %d\n", n_proporcion(0.5, 0.6))
@printf("n para p₀=0.5 vs p₁=0.6 (90%%): %d\n", n_proporcion(0.5, 0.6, 0.05, 0.10))
```

### 8.5 Corrección por comparaciones múltiples

```julia
# p-valores de 20 tests simultáneos
p_valores = [0.023, 0.044, 0.001, 0.301, 0.512, 0.067, 0.038, 0.182,
             0.005, 0.421, 0.089, 0.003, 0.741, 0.055, 0.092, 0.412,
             0.019, 0.281, 0.047, 0.153]

# Bonferroni
α_bonferroni = 0.05 / length(p_valores)
sig_bonferroni = p_valores .< α_bonferroni

# Benjamini-Hochberg (FDR)
function bh_correction(p_vals; α=0.05)
    m = length(p_vals)
    orden = sortperm(p_vals)
    p_sorted = p_vals[orden]
    threshold = (1:m) ./ m .* α
    sig = p_sorted .≤ threshold
    k = findlast(sig)
    resultado = zeros(Bool, m)
    if !isnothing(k)
        resultado[orden[1:k]] .= true
    end
    return resultado
end

sig_bh = bh_correction(p_valores)

println("Tests significativos con α=0.05 sin corrección: $(sum(p_valores .< 0.05))")
println("Tests significativos con Bonferroni:            $(sum(sig_bonferroni))")
println("Tests significativos con BH (FDR):              $(sum(sig_bh))")
```

---

## 9. Regresión Lineal

### 9.1 Regresión lineal simple

```julia
using GLM, DataFrames, Plots, StatsBase, Printf, RDatasets

# Dataset cars: velocidad (mph) → distancia de frenado (ft)
cars = dataset("datasets", "cars")

# Ajustar modelo
modelo = lm(@formula(Dist ~ Speed), cars)
println(modelo)

# Coeficientes e interpretación
β̂ = coef(modelo)
@printf("Intercepto β₀ = %.4f\n", β̂[1])
@printf("Pendiente   β₁ = %.4f (por cada mph adicional, +%.2f ft)\n", β̂[2], β̂[2])

# Tabla de coeficientes
ct = coeftable(modelo)
println(ct)

# Bondad de ajuste
r² = r2(modelo)
r²_adj = adjr2(modelo)
@printf("R²         = %.4f\n", r²)
@printf("R² ajustado = %.4f\n", r²_adj)

# ANOVA del modelo
println(anova(modelo))

# Predicciones e intervalos
nuevos = DataFrame(Speed=[10, 20, 30, 40])
pred_media = predict(modelo, nuevos)                              # IC para la media
pred_ic    = predict(modelo, nuevos, interval=:confidence, level=0.95)  # IC
pred_ip    = predict(modelo, nuevos, interval=:prediction, level=0.95)  # IP

# Gráfico completo
x_pred = range(minimum(cars.Speed), maximum(cars.Speed), length=100)
df_pred = DataFrame(Speed=collect(x_pred))
ic = predict(modelo, df_pred, interval=:confidence, level=0.95)
ip = predict(modelo, df_pred, interval=:prediction, level=0.95)

scatter(cars.Speed, cars.Dist,
    xlabel="Velocidad (mph)", ylabel="Distancia de frenado (ft)",
    title="Regresión Lineal Simple: cars", label="Observaciones",
    markersize=4, alpha=0.7)
plot!(x_pred, ic.prediction, lw=2, color=:red, label="Recta ajustada")
plot!(x_pred, ic.lower, lw=1, ls=:dash, color=:orange, label="IC 95% μ")
plot!(x_pred, ic.upper, lw=1, ls=:dash, color=:orange, label="")
plot!(x_pred, ip.lower, lw=1, ls=:dot, color=:blue, label="IP 95%")
plot!(x_pred, ip.upper, lw=1, ls=:dot, color=:blue, label="")
```

### 9.2 Análisis de residuos

```julia
using GLM, DataFrames, Plots, StatsBase, Distributions

cars = dataset("datasets", "cars")
modelo = lm(@formula(Dist ~ Speed), cars)

# Residuos y valores ajustados
residuos = residuals(modelo)
ajustados = fitted(modelo)
res_std = residuos ./ std(residuos)  # Residuos estandarizados

# Métricas de diagnóstico
n, p = nobs(modelo), length(coef(modelo))
mse = sum(residuos.^2) / (n - p)

# Gráfico 1: Residuos vs Ajustados (homocedasticidad)
p1 = scatter(ajustados, residuos,
    xlabel="Valores ajustados", ylabel="Residuos",
    title="Residuos vs Ajustados", label="")
hline!(p1, [0], color=:red, lw=2, label="")

# Gráfico 2: Q-Q de residuos (normalidad)
n_res = length(residuos)
probs = [(i-0.5)/n_res for i in 1:n_res]
teoricos = quantile(Normal(0,1), probs)
p2 = scatter(teoricos, sort(res_std),
    xlabel="Cuantiles N(0,1)", ylabel="Residuos estandarizados",
    title="Q-Q Normal de Residuos", label="")
plot!(p2, [minimum(teoricos), maximum(teoricos)],
      [minimum(teoricos), maximum(teoricos)],
      color=:red, lw=2, label="Referencia")

# Gráfico 3: Escala-localización (homocedasticidad)
p3 = scatter(ajustados, sqrt.(abs.(res_std)),
    xlabel="Valores ajustados", ylabel="√|Res. estandarizados|",
    title="Escala-Localización", label="")

# Gráfico 4: Índice vs Residuos (independencia)
p4 = scatter(1:n_res, residuos,
    xlabel="Orden de observación", ylabel="Residuos",
    title="Independencia de Residuos", label="")
hline!(p4, [0], color=:red, lw=2, label="")

plot(p1, p2, p3, p4, layout=(2,2), size=(900, 700))
```

### 9.3 Regresión lineal múltiple

```julia
using GLM, DataFrames, StatsBase, RDatasets

mtcars = dataset("datasets", "mtcars")

# Modelo completo
m_completo = lm(@formula(MPG ~ Cyl + Disp + HP + WT + Gear), mtcars)
println(m_completo)

# Selección de variables: criterio AIC
using StepwiseRegression  # O manual con criterios informativos

# AIC y BIC del modelo
@printf("AIC = %.4f\n", aic(m_completo))
@printf("BIC = %.4f\n", bic(m_completo))

# Comparación de modelos anidados
m_reducido = lm(@formula(MPG ~ HP + WT), mtcars)

@printf("\nModelo reducido (HP + WT):\n")
@printf("R² = %.4f,  AIC = %.4f\n", r2(m_reducido), aic(m_reducido))
@printf("\nModelo completo (Cyl + Disp + HP + WT + Gear):\n")
@printf("R² = %.4f,  AIC = %.4f\n", r2(m_completo), aic(m_completo))

# Factor de inflación de varianza (VIF) — multicolinealidad
function vif(modelo)
    X = modelmatrix(modelo)[:, 2:end]  # Sin intercepto
    R = cor(X)
    return diag(inv(R))
end

vifs = vif(m_completo)
println("\nVIF por variable:")
for (nombre, v) in zip(coefnames(m_completo)[2:end], vifs)
    @printf("  %-10s VIF = %.2f %s\n", nombre, v,
            v > 10 ? "⚠ ALTA multicolinealidad" :
            v > 5  ? "⚠ Moderada" : "✓")
end

# Predicción con intervalo
nuevos = DataFrame(HP=[100.0, 150.0, 200.0], WT=[2.5, 3.0, 3.5])
pred = predict(m_reducido, nuevos, interval=:prediction)
println("\nPredicciones:")
println(pred)
```

### 9.4 Regresión con variables categóricas

```julia
using GLM, DataFrames, CategoricalArrays, RDatasets

iris = dataset("datasets", "iris")

# Variable categórica como predictor (dummy coding automático)
modelo_cat = lm(@formula(SepalLength ~ Species + PetalLength), iris)
println(modelo_cat)
# Julia crea automáticamente dummies: Species: versicolor y virginica
# Categoría base: setosa

# Ver los contrastes aplicados
# El coeficiente "Species: versicolor" = diferencia de media con setosa
# controlando por PetalLength
```

---

## 10. Regresión Logística y Modelos Lineales Generalizados

### 10.1 Regresión logística binaria

```julia
using GLM, DataFrames, Distributions, Random, Plots

Random.seed!(42)

# Simular datos: ¿aprueba el examen según horas de estudio?
n = 200
horas = rand(Uniform(0, 10), n)
logit_p = -4 + 1.2 .* horas
p = 1 ./ (1 .+ exp.(-logit_p))
aprueba = Int.(rand.(Bernoulli.(p)))

df_log = DataFrame(aprueba=aprueba, horas=horas)

# Ajustar modelo logístico
modelo_log = glm(@formula(aprueba ~ horas), df_log,
                 Binomial(), LogitLink())
println(modelo_log)

# Coeficientes e interpretación
β̂ = coef(modelo_log)
@printf("Intercepto: %.4f\n", β̂[1])
@printf("β horas:    %.4f\n", β̂[2])
@printf("OR horas:   %.4f (por cada hora adicional, OR = %.2f)\n",
        exp(β̂[2]), exp(β̂[2]))

# Probabilidades predichas
x_horas = range(0, 10, length=100)
df_pred = DataFrame(horas=collect(x_horas))
prob_pred = predict(modelo_log, df_pred)

scatter(horas, aprueba,
    xlabel="Horas de estudio", ylabel="P(Aprueba)",
    title="Regresión Logística", label="Observaciones",
    alpha=0.4, markersize=3)
plot!(x_horas, prob_pred, lw=2, color=:red, label="P ajustada")
hline!([0.5], ls=:dash, color=:gray, label="p=0.5")

# Clasificación y métricas
umbral = 0.5
pred_clase = predict(modelo_log) .≥ umbral
exactitud = mean(pred_clase .== Bool.(aprueba))
@printf("\nExactitud (umbral=0.5): %.4f\n", exactitud)

# Matriz de confusión
TP = sum(pred_clase .& Bool.(aprueba))
TN = sum(.!pred_clase .& .!Bool.(aprueba))
FP = sum(pred_clase .& .!Bool.(aprueba))
FN = sum(.!pred_clase .& Bool.(aprueba))
@printf("Matriz de confusión:\n  TP=%d  FP=%d\n  FN=%d  TN=%d\n",
        TP, FP, FN, TN)
@printf("Sensibilidad: %.4f\n", TP/(TP+FN))
@printf("Especificidad: %.4f\n", TN/(TN+FP))
```

### 10.2 Regresión de Poisson

```julia
using GLM, DataFrames, Distributions, Random

Random.seed!(42)

# Número de accidentes según años de experiencia
n = 150
experiencia = rand(Uniform(0, 20), n)
log_λ = 2.5 - 0.12 .* experiencia
λ = exp.(log_λ)
accidentes = rand.(Poisson.(λ))

df_poisson = DataFrame(accidentes=accidentes, experiencia=experiencia)

# Modelo de Poisson
modelo_pois = glm(@formula(accidentes ~ experiencia), df_poisson,
                  Poisson(), LogLink())
println(modelo_pois)

β̂ = coef(modelo_pois)
@printf("Razón de tasas (IRR) por año de experiencia: %.4f\n", exp(β̂[2]))
@printf("→ Cada año extra de experiencia multiplica los\n")
@printf("  accidentes esperados por %.4f\n", exp(β̂[2]))

# Verificar sobredispersión
residuos_pearson = residuals(modelo_pois, type=:pearson)
phi = sum(residuos_pearson.^2) / (n - length(coef(modelo_pois)))
@printf("Estadístico de dispersión φ = %.3f\n", phi)
@printf("%s\n", phi > 1.5 ? "⚠ Sobredispersión detectada" : "✓ Sin sobredispersión notable")
```

---

## 11. Análisis de Varianza (ANOVA)

### 11.1 ANOVA de un factor

```julia
using GLM, DataFrames, HypothesisTests, StatsBase, Plots, StatsPlots

# Rendimiento de 3 tipos de fertilizante
Random.seed!(42)
grupo_A = rand(Normal(52, 8), 20)
grupo_B = rand(Normal(58, 8), 20)
grupo_C = rand(Normal(55, 8), 20)

df_anova = DataFrame(
    rendimiento = [grupo_A; grupo_B; grupo_C],
    fertilizante = categorical(repeat(["A", "B", "C"], inner=20))
)

# ANOVA con GLM (modelo lineal)
modelo_anova = lm(@formula(rendimiento ~ fertilizante), df_anova)
tabla_anova = anova(modelo_anova)
println(tabla_anova)

# Extraer estadístico F y p-valor
F_stat = ftest(lm(@formula(rendimiento ~ 1), df_anova), modelo_anova)
println(F_stat)

# Medias y boxplot por grupo
gdf = groupby(df_anova, :fertilizante)
medias = combine(gdf, :rendimiento => mean, :rendimiento => std,
                          :rendimiento => length)
println(medias)

@df df_anova boxplot(:fertilizante, :rendimiento,
    xlabel="Fertilizante", ylabel="Rendimiento",
    title="ANOVA de un factor: Efecto del fertilizante",
    fillalpha=0.7, notch=false)
@df df_anova dotplot!(:fertilizante, :rendimiento,
    marker=(:black, 2), label="")

# Comparaciones múltiples post-hoc (Tukey)
# usando HypothesisTests o implementación manual
function comparaciones_pares(grupos, nombres; α=0.05)
    k = length(grupos)
    n_total = sum(length.(grupos))
    k_grupos = length(grupos)
    ns = length.(grupos)

    # Error cuadrático medio del ANOVA
    medias_g = mean.(grupos)
    media_total = mean(vcat(grupos...))
    SSE = sum([sum((g .- mean(g)).^2) for g in grupos])
    MSE = SSE / (n_total - k_grupos)

    println("\nComparaciones post-hoc (diferencias de medias):")
    println("=" ^ 50)
    for i in 1:k-1, j in i+1:k
        dif = medias_g[i] - medias_g[j]
        ee = sqrt(MSE * (1/ns[i] + 1/ns[j]))
        t_val = dif / ee
        p_val = 2 * (1 - cdf(TDist(n_total - k_grupos), abs(t_val)))
        sig = p_val < α ? "✓ Sig." : "✗ n.s."
        @printf("%s vs %s: dif=%.2f, t=%.3f, p=%.4f  %s\n",
                nombres[i], nombres[j], dif, t_val, p_val, sig)
    end
end

comparaciones_pares([grupo_A, grupo_B, grupo_C], ["A","B","C"])
```

### 11.2 ANOVA de dos factores

```julia
using GLM, DataFrames, CategoricalArrays

# Diseño factorial 2×3: Método (2) × Dificultad (3)
Random.seed!(42)
metodos = ["Trad.", "Nuevo"]
dificultades = ["Baja", "Media", "Alta"]
reps = 10

datos_2f = DataFrame(
    nota        = Float64[],
    metodo      = String[],
    dificultad  = String[]
)

efectos = Dict(
    ("Trad.", "Baja") => 75, ("Trad.", "Media") => 65, ("Trad.", "Alta") => 55,
    ("Nuevo", "Baja") => 80, ("Nuevo", "Media") => 75, ("Nuevo", "Alta") => 70
)

for m in metodos, d in dificultades
    for _ in 1:reps
        nota = efectos[(m,d)] + randn() * 5
        push!(datos_2f, (nota, m, d))
    end
end

datos_2f.metodo      = categorical(datos_2f.metodo)
datos_2f.dificultad  = categorical(datos_2f.dificultad)

# ANOVA dos factores con interacción
m_2f = lm(@formula(nota ~ metodo * dificultad), datos_2f)
tabla = anova(m_2f)
println(tabla)

# Gráfico de interacción
gdf = groupby(datos_2f, [:metodo, :dificultad])
medias_2f = combine(gdf, :nota => mean => :media_nota)

using StatsPlots
@df medias_2f plot(:dificultad, :media_nota, group=:metodo,
    marker=:circle, lw=2,
    xlabel="Dificultad", ylabel="Nota media",
    title="Gráfico de interacción Método × Dificultad",
    legend=:topleft)
```

---

## 12. Métodos No Paramétricos

### 12.1 Tests de localización

```julia
using HypothesisTests, Statistics

# ── Test de Wilcoxon de los rangos signados (1 muestra) ──
datos = [12, 15, 8, 22, 18, 14, 25, 10, 19, 16]

# H₀: mediana = 15
test_wilcoxon = SignedRankTest(datos, 15)
println(test_wilcoxon)
@printf("p-valor: %.4f\n", pvalue(test_wilcoxon))

# ── Test de Mann-Whitney-Wilcoxon (2 muestras indep.) ──
grupo_x = [15, 18, 23, 12, 27, 19, 14, 22]
grupo_y = [25, 28, 31, 22, 35, 29, 24, 33]

test_mwu = MannWhitneyUTest(grupo_x, grupo_y)
println(test_mwu)
@printf("p-valor: %.4f\n", pvalue(test_mwu))

# ── Test de Kruskal-Wallis (k muestras) ──────────────
g1 = [23, 25, 18, 21, 27]
g2 = [31, 33, 28, 35, 29]
g3 = [19, 22, 24, 20, 26]

test_kw = KruskalWallisTest(g1, g2, g3)
println(test_kw)
@printf("H = %.4f, p = %.4f\n",
        test_kw.H, pvalue(test_kw))
```

### 12.2 Tests de correlación no paramétrica

```julia
using StatsBase

x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
y = [2, 1, 4, 6, 5, 8, 7, 10, 9, 12]

# Correlación de Spearman
r_s = corspearman(x, y)

# Correlación de Kendall
r_k = corkendall(x, y)

@printf("r de Pearson:  %.4f\n", cor(x, y))
@printf("ρ de Spearman: %.4f\n", r_s)
@printf("τ de Kendall:  %.4f\n", r_k)
```

### 12.3 Estimación no paramétrica de densidad

```julia
using KernelDensity, Plots, Distributions, Random

Random.seed!(42)
datos = rand(MixtureModel(Normal, [(-2.0, 0.8), (2.0, 1.0)], [0.4, 0.6]), 300)

# KDE con diferentes anchos de banda
p = histogram(datos, normalize=:pdf, bins=30,
    alpha=0.3, label="Histograma", color=:gray)

for (bw, etiqueta) in [(0.3, "h=0.3 (subsuavizado)"),
                        (0.8, "h=0.8 (óptimo)"),
                        (2.0, "h=2.0 (sobresuavizado)")]
    kd = kde(datos, bandwidth=bw)
    plot!(p, kd.x, kd.density, lw=2, label=etiqueta)
end

# Densidad verdadera
mezcla = MixtureModel(Normal, [(-2.0, 0.8), (2.0, 1.0)], [0.4, 0.6])
x_range = range(-5, 6, length=200)
plot!(p, x_range, pdf.(mezcla, x_range), lw=2, ls=:dash,
      color=:black, label="Densidad verdadera")

plot!(p, xlabel="x", ylabel="Densidad",
      title="Estimación de Densidad Kernel: efecto del ancho de banda")
```


---

## 13. Series Temporales

### 13.1 Análisis exploratorio de series

```julia
using TimeSeries, Plots, StatsBase, Statistics, Dates

# Simular una serie ARIMA(1,1,1) manualmente
Random.seed!(42)
n = 200
# AR(1): X_t = 0.7 X_{t-1} + ε_t
ε = randn(n)
x = zeros(n)
x[1] = ε[1]
for t in 2:n
    x[t] = 0.7*x[t-1] + ε[t]
end

t = Date(2010,1,1):Month(1):Date(2010,1,1)+Month(n-1)

# Análisis de la serie
p_serie = plot(collect(t), x,
    xlabel="Fecha", ylabel="Valor",
    title="Serie AR(1): φ=0.7", label="Serie", lw=1)

# ACF y PACF
lags = 0:25
acf_vals = autocor(x, collect(lags))
pacf_vals = [1.0; pacf(x, collect(1:25))]

ic_band = 1.96/sqrt(n)

p_acf = bar(lags, acf_vals,
    xlabel="Lag", ylabel="ACF",
    title="Autocorrelación (ACF)", label="ACF")
hline!(p_acf, [ic_band, -ic_band],
       color=:red, ls=:dash, label="IC 95%")

p_pacf = bar(0:25, pacf_vals,
    xlabel="Lag", ylabel="PACF",
    title="Autocorrelación Parcial (PACF)", label="PACF")
hline!(p_pacf, [ic_band, -ic_band],
       color=:red, ls=:dash, label="IC 95%")

plot(p_serie, p_acf, p_pacf, layout=(3,1), size=(800, 800))
```

### 13.2 Descomposición de series

```julia
using Plots, Statistics, Random

# Simular serie con tendencia + estacionalidad + ruido
Random.seed!(42)
n = 120    # 10 años de datos mensuales
t = 1:n

tendencia  = 50 .+ 0.3 .* t
estacional = 10 .* sin.(2π .* t ./ 12) .+ 3 .* sin.(4π .* t ./ 12)
ruido      = randn(n) .* 5
serie      = tendencia .+ estacional .+ ruido

# Descomposición por medias móviles
function media_movil(x, m)
    n = length(x)
    ma = fill(NaN, n)
    mitad = m ÷ 2
    for i in (mitad+1):(n-mitad)
        ma[i] = mean(x[(i-mitad):(i+mitad)])
    end
    return ma
end

trend_est = media_movil(serie, 12)

# Componente estacional (promedio de residuos por mes)
residuos_detrend = serie .- trend_est
estacional_est = zeros(n)
for mes in 1:12
    indices = mes:12:n
    est_mes = mean(skipmissing(residuos_detrend[indices][.!isnan.(residuos_detrend[indices])]))
    estacional_est[indices] .= est_mes
end

componente_irregular = serie .- trend_est .- estacional_est

p1 = plot(t, serie, title="Serie original", lw=1, label="")
p2 = plot(t, trend_est, title="Tendencia (MA-12)", lw=2, color=:red, label="")
p3 = plot(t, estacional_est, title="Componente estacional", lw=1.5, color=:green, label="")
p4 = plot(t, componente_irregular, title="Residuos irregulares", lw=1, color=:gray, label="")

plot(p1, p2, p3, p4, layout=(4,1), size=(800, 1000),
     xlabel="Tiempo (meses)")
```

### 13.3 Modelos AR, MA y ARMA

```julia
using Statistics, StatsBase, Random, Printf

Random.seed!(42)
n = 500

# Simular AR(2): X_t = 0.5X_{t-1} - 0.3X_{t-2} + ε_t
function simular_ar2(n, φ1, φ2, σ=1.0)
    x = zeros(n)
    ε = randn(n) * σ
    x[1] = ε[1]
    x[2] = φ1*x[1] + ε[2]
    for t in 3:n
        x[t] = φ1*x[t-1] + φ2*x[t-2] + ε[t]
    end
    return x
end

x_ar2 = simular_ar2(n, 0.5, -0.3)

# Estimación de parámetros AR por Yule-Walker
function yule_walker(x, p)
    acf_vals = autocor(x, 0:p)
    R = [acf_vals[abs(i-j)+1] for i in 1:p, j in 1:p]
    r = acf_vals[2:p+1]
    φ_est = R \ r
    σ²_est = var(x) * (1 - dot(φ_est, r))
    return φ_est, σ²_est
end

φ_est, σ²_est = yule_walker(x_ar2, 2)
@printf("Parámetros AR(2) estimados (Yule-Walker):\n")
@printf("  φ₁ = %.4f (verdadero: 0.5)\n", φ_est[1])
@printf("  φ₂ = %.4f (verdadero: -0.3)\n", φ_est[2])
@printf("  σ² = %.4f\n", σ²_est)

# Criterios de información para selección de orden
function criterios_ar(x, p_max)
    n = length(x)
    println("p\t AIC\t\t BIC")
    println("-" ^ 35)
    for p in 1:p_max
        φ, σ² = yule_walker(x, p)
        log_lik = -n/2 * log(2π*σ²) - n/2
        aic_val = -2*log_lik + 2*(p+1)
        bic_val = -2*log_lik + log(n)*(p+1)
        @printf("%d\t %.4f\t %.4f\n", p, aic_val, bic_val)
    end
end

criterios_ar(x_ar2, 6)
```

---

## 14. Métodos de Remuestreo: Bootstrap y Jackknife

### 14.1 Bootstrap no paramétrico

```julia
using Random, Statistics, Distributions, Plots, Printf

Random.seed!(42)
muestra = rand(LogNormal(3, 0.5), 50)   # Datos asimétricos

# ── Bootstrap para la media ──────────────────────
function bootstrap(datos, estadistico, B=10000)
    n = length(datos)
    θ_boot = [estadistico(datos[rand(1:n, n)]) for _ in 1:B]
    return θ_boot
end

θ_obs = mean(muestra)
boot_medias = bootstrap(muestra, mean)

# IC Bootstrap: percentil directo
α = 0.05
ic_percentil = quantile(boot_medias, [α/2, 1-α/2])

# IC Bootstrap: básico (pivotal)
ic_basico = (2*θ_obs - ic_percentil[2], 2*θ_obs - ic_percentil[1])

# IC Bootstrap: normal con corrección
se_boot = std(boot_medias)
sesgo_boot = mean(boot_medias) - θ_obs
z_crit = quantile(Normal(), 0.975)
ic_normal = (θ_obs - sesgo_boot - z_crit*se_boot,
             θ_obs - sesgo_boot + z_crit*se_boot)

@printf("θ̂ (media muestral) = %.4f\n", θ_obs)
@printf("Sesgo bootstrap     = %.4f\n", sesgo_boot)
@printf("Error estándar boot = %.4f\n", se_boot)
@printf("\nIC 95%% Percentil: (%.4f, %.4f)\n", ic_percentil...)
@printf("IC 95%% Básico:    (%.4f, %.4f)\n", ic_basico...)
@printf("IC 95%% Normal:    (%.4f, %.4f)\n", ic_normal...)

# Distribución del estimador bootstrap
histogram(boot_medias, normalize=:pdf, bins=50,
    xlabel="Valores bootstrap de X̄", ylabel="Densidad",
    title="Distribución Bootstrap de la Media (B=10000)",
    label="Bootstrap", alpha=0.7)
vline!([θ_obs], lw=2, color=:red, label="Estimación puntual")
vline!(collect(ic_percentil), lw=2, ls=:dash, color=:orange, label="IC 95%")
```

### 14.2 Bootstrap para estadísticos complejos

```julia
# Bootstrap para la correlación
using Statistics, Random, Plots, Printf

Random.seed!(42)
n = 40
x = randn(n)
y = 0.6*x + randn(n)*0.8

r_obs = cor(x, y)

# Bootstrap para r de Pearson
B = 5000
r_boot = zeros(B)
for b in 1:B
    idx = rand(1:n, n)
    r_boot[b] = cor(x[idx], y[idx])
end

ic_r = quantile(r_boot, [0.025, 0.975])
@printf("r observada = %.4f\n", r_obs)
@printf("IC 95%% bootstrap: (%.4f, %.4f)\n", ic_r...)

# Test de hipótesis por bootstrap: H₀: ρ=0
r_boot_h0 = zeros(B)
x_c = x .- mean(x)
y_c = y .- mean(y)
for b in 1:B
    idx_x = rand(1:n, n)
    idx_y = rand(1:n, n)    # Permutación independiente
    r_boot_h0[b] = cor(x_c[idx_x], y_c[idx_y])
end

p_val_boot = mean(abs.(r_boot_h0) .≥ abs(r_obs))
@printf("p-valor bootstrap (H₀: ρ=0): %.4f\n", p_val_boot)
```

### 14.3 Jackknife

```julia
using Statistics, Printf

function jackknife(datos, estadistico)
    n = length(datos)
    θ_obs = estadistico(datos)
    θ_jack = [estadistico(datos[setdiff(1:n, i)]) for i in 1:n]

    # Pseudovalores
    pseudovalores = n .* θ_obs .- (n-1) .* θ_jack

    θ_jack_est = mean(pseudovalores)
    sesgo_jack = (n-1) * (mean(θ_jack) - θ_obs)
    se_jack    = sqrt((n-1)/n * sum((θ_jack .- mean(θ_jack)).^2))
    θ_corregido = θ_obs - sesgo_jack

    return (θ̂=θ_obs, sesgo=sesgo_jack, se=se_jack, θ_corr=θ_corregido)
end

Random.seed!(42)
muestra = rand(Exponential(3), 30)

# Jackknife para la media
jk_media = jackknife(muestra, mean)
@printf("Media:\n  θ̂=%.4f, sesgo=%.5f, SE=%.4f\n",
        jk_media.θ̂, jk_media.sesgo, jk_media.se)

# Jackknife para la varianza
jk_var = jackknife(muestra, var)
@printf("Varianza:\n  θ̂=%.4f, sesgo=%.5f, SE=%.4f\n",
        jk_var.θ̂, jk_var.sesgo, jk_var.se)
```

---

## 15. Métodos de Monte Carlo y MCMC

### 15.1 Integración de Monte Carlo

```julia
using Random, Distributions, Printf, Plots

Random.seed!(42)

# ── Integración 1D ─────────────────────────────
# ∫₀¹ eˣ dx = e - 1 ≈ 1.71828
f(x) = exp(x)
verdadero = exp(1) - 1

ns = [100, 1_000, 10_000, 100_000, 1_000_000]
for n in ns
    x = rand(n)
    est = mean(f.(x))
    error = abs(est - verdadero)
    @printf("n=%8d: I≈%.6f, error=%.6f\n", n, est, error)
end

# ── Integración multidimensional ───────────────
# Vol. de la esfera unitaria en R³ = 4π/3 ≈ 4.1888
function vol_esfera_mc(n, d=3)
    puntos = rand(n, d) .* 2 .- 1    # Hipercubo [-1,1]^d
    dentro = sum(sum(puntos.^2, dims=2) .≤ 1) / n
    return 2^d * dentro              # Vol. hipercubo × proporción
end

vol_esf = vol_esfera_mc(1_000_000)
@printf("\nVolumen esfera R³: MC=%.5f, exacto=%.5f\n",
        vol_esf, 4π/3)

# ── Control de varianza: muestreo de importancia ──
# ∫₀∞ x² e^(-x) dx = Γ(3) = 2
# Usando g(x) = Exponential(1) como distribución de importancia
n = 100_000
x_exp = rand(Exponential(1), n)
pesos = x_exp.^2           # f(x)/g(x) = x² e^(-x) / e^(-x) = x²
est_is = mean(pesos)
@printf("\nMuestreo de importancia: I≈%.6f (exacto: 2.000)\n", est_is)
```

### 15.2 Algoritmo de Metrópolis-Hastings

```julia
using Distributions, Plots, Statistics, Random

Random.seed!(42)

# ── Muestreo de N(0,1) con Metrópolis-Hastings ──
# Distribución objetivo: N(0,1)
# Propuesta: Normal centrada en el estado actual

function metropolis_hastings(n, σ_prop=1.0, x0=0.0)
    cadena = zeros(n)
    cadena[1] = x0
    n_accept = 0

    for i in 2:n
        x_actual = cadena[i-1]
        x_prop   = x_actual + randn() * σ_prop     # Propuesta simétrica

        # Ratio de aceptación
        log_r = logpdf(Normal(0,1), x_prop) - logpdf(Normal(0,1), x_actual)
        if log(rand()) < log_r
            cadena[i] = x_prop
            n_accept += 1
        else
            cadena[i] = x_actual
        end
    end

    tasa_accept = n_accept / (n - 1)
    return cadena, tasa_accept
end

# Diferentes σ de propuesta
burn_in = 1000
n_iter  = 11000

cadenas = Dict()
for σ in [0.1, 1.0, 5.0]
    cadena, ta = metropolis_hastings(n_iter, σ)
    cadenas[σ] = (cadena=cadena[burn_in+1:end], tasa=ta)
    @printf("σ_prop=%.1f: tasa aceptación=%.3f, media=%.4f, std=%.4f\n",
            σ, ta, mean(cadena[burn_in+1:end]), std(cadena[burn_in+1:end]))
end

# Diagnóstico visual
p1 = plot([cadenas[σ].cadena for σ in [0.1,1.0,5.0]],
    layout=(3,1), labels=["σ=0.1" "σ=1.0" "σ=5.0"],
    title=["Traceplot σ=0.1" "σ=1.0" "σ=5.0"],
    ylabel="x", xlabel="Iteración")

# Distribución empírica vs teórica
p2 = histogram(cadenas[1.0].cadena, normalize=:pdf, bins=50,
    alpha=0.6, label="MCMC (σ=1.0)")
x_range = range(-4, 4, length=200)
plot!(p2, x_range, pdf.(Normal(0,1), x_range),
      lw=2, color=:red, label="N(0,1) teórica")
plot!(p2, title="Distribución empírica vs teórica")
```

### 15.3 Inferencia Bayesiana con Turing.jl

```julia
using Turing, Distributions, Statistics, Plots, Random

Random.seed!(42)

# Datos observados: alturas de 20 personas
alturas = [165, 172, 158, 180, 170, 162, 175, 168, 171, 163,
           177, 169, 174, 161, 178, 167, 173, 160, 176, 166.0]

# ── Modelo bayesiano ─────────────────────────────
# Prior: μ ~ N(170, 10²), σ ~ HalfNormal(10)
# Verosimilitud: alturas_i ~ N(μ, σ²)

@model function modelo_normal(y)
    μ ~ Normal(170, 10)
    σ ~ truncated(Normal(0, 10), 0, Inf)
    for i in eachindex(y)
        y[i] ~ Normal(μ, σ)
    end
end

# Muestreo con NUTS (No-U-Turn Sampler)
modelo = modelo_normal(alturas)
cadena = sample(modelo, NUTS(), 2000; burnin=1000)

# Resumen de la posterior
println(cadena)

# Extractar muestras
muestras_μ = cadena[:μ]
muestras_σ = cadena[:σ]

@printf("\nPosterior μ: media=%.2f, IC95%%(%.2f, %.2f)\n",
        mean(muestras_μ), quantile(vec(muestras_μ), 0.025),
        quantile(vec(muestras_μ), 0.975))
@printf("Posterior σ: media=%.2f, IC95%%(%.2f, %.2f)\n",
        mean(muestras_σ), quantile(vec(muestras_σ), 0.025),
        quantile(vec(muestras_σ), 0.975))

# Gráficos de la posterior
p_μ = histogram(vec(muestras_μ), normalize=:pdf, bins=40,
    title="Posterior de μ", xlabel="μ", label="MCMC")
p_σ = histogram(vec(muestras_σ), normalize=:pdf, bins=40,
    title="Posterior de σ", xlabel="σ", label="MCMC")
plot(p_μ, p_σ, layout=(1,2), size=(800, 350))
```

---

## 16. Reducción de Dimensionalidad: PCA y AFC

### 16.1 Análisis de Componentes Principales (PCA)

```julia
using MultivariateStats, DataFrames, Plots, StatsPlots, RDatasets, Statistics

iris = dataset("datasets", "iris")
X = Matrix(iris[:, 1:4])'     # MultivariateStats necesita variables en filas

# Ajustar PCA (sobre datos centrados y escalados)
X_std = (X .- mean(X, dims=2)) ./ std(X, dims=2)
pca = fit(PCA, X_std; maxoutdim=4)

# Varianza explicada
var_exp = principalvars(pca) ./ var(pca)
var_exp_acum = cumsum(var_exp)

println("Varianza explicada por componente:")
for (i, (v, va)) in enumerate(zip(var_exp, var_exp_acum))
    @printf("  PC%d: %.4f (%.4f acumulada)\n", i, v, va)
end

# Cargas (loadings)
cargas = loadings(pca)
println("\nCargas de las 2 primeras CP:")
display(round.(cargas[:, 1:2], digits=4))

# Proyección de los datos
X_pc = MultivariateStats.transform(pca, X_std)

# Gráfico de scores
colores = Dict("setosa"=>:blue, "versicolor"=>:red, "virginica"=>:green)
especies = iris.Species
p_scores = scatter(X_pc[1,:], X_pc[2,:],
    color=[colores[string(e)] for e in especies],
    xlabel="CP1 ($(round(var_exp[1]*100, digits=1))%)",
    ylabel="CP2 ($(round(var_exp[2]*100, digits=1))%)",
    title="Biplot PCA - Iris",
    legend=false, markersize=4, alpha=0.8)

# Añadir vectores de cargas
escala = 3
var_names = ["Sépal.L", "Sépal.W", "Petal.L", "Petal.W"]
for i in 1:4
    plot!(p_scores, [0, cargas[i,1]*escala], [0, cargas[i,2]*escala],
          arrow=true, color=:black, lw=2, label="")
    annotate!(p_scores, cargas[i,1]*escala*1.1, cargas[i,2]*escala*1.1,
              text(var_names[i], 8))
end

# Scree plot
p_scree = bar(1:4, var_exp.*100,
    xlabel="Componente", ylabel="% Varianza explicada",
    title="Scree Plot", label="Var. explicada")
plot!(1:4, var_exp_acum.*100, lw=2, marker=:circle,
      color=:red, label="% Acumulado")
hline!([80], ls=:dash, color=:gray, label="80%")

plot(p_scores, p_scree, layout=(1,2), size=(1000, 450))
```

### 16.2 Análisis Factorial Clásico

```julia
using MultivariateStats, LinearAlgebra, Statistics, DataFrames

# Simular datos con estructura factorial conocida
# 3 factores latentes, 9 variables observadas
Random.seed!(42)
n = 300

# Cargas verdaderas
Λ_true = [0.8 0.0 0.0;   # x1
          0.7 0.0 0.1;   # x2
          0.9 0.0 0.0;   # x3
          0.0 0.8 0.0;   # x4
          0.1 0.7 0.0;   # x5
          0.0 0.9 0.1;   # x6
          0.0 0.0 0.8;   # x7
          0.1 0.0 0.7;   # x8
          0.0 0.1 0.9]   # x9

F = randn(n, 3)    # 3 factores latentes
E = 0.4 .* randn(n, 9)  # Errores
X_fa = F * Λ_true' .+ E

# Matriz de correlaciones
R_obs = cor(X_fa)

println("Estructura factorial (correlaciones con 9 variables):")
display(round.(R_obs, digits=2))

# PCA como aproximación al AF
pca_fa = fit(PCA, X_fa'; maxoutdim=3)
cargas_pca = loadings(pca_fa)

println("\nCargas PCA (3 factores):")
display(round.(cargas_pca, digits=3))
println("\nCargas verdaderas:")
display(round.(Λ_true, digits=3))
```

### 16.3 Escalamiento Multidimensional (MDS)

```julia
using MultivariateStats, DataFrames, Plots, Distances

# Distancias entre ciudades europeas (km aproximados)
ciudades = ["Madrid","Lisboa","París","Londres","Berlín",
            "Roma","Viena","Amsterdam","Bruselas","Varsovia"]
D = [0    502  1272 1260 2329 1950 2320 1985 1665 3432;
     502  0    1798 1761 2855 2475 2845 2510 2190 3957;
     1272 1798 0   343  1054  1105 1234  503  264  2271;
     1260 1761 343  0   1100  1441 1490  358  371  2315;
     2329 2855 1054 1100 0   1175  524  648  780  1744;
     1950 2475 1105 1441 1175  0   1135 1640 1376 2481;
     2320 2845 1234 1490 524  1135  0   1265  1152 1278;
     1985 2510 503  358  648  1640 1265   0   215  1889;
     1665 2190 264  371  780  1376 1152  215   0   2068;
     3432 3957 2271 2315 1744 2481 1278 1889 2068  0  ] .* 1.0

# MDS métrico (PCoA)
mds = fit(MDS, D; distances=true, maxoutdim=2)
coord = predict(mds)

scatter(coord[1,:], coord[2,:],
    xlabel="Dimensión 1", ylabel="Dimensión 2",
    title="MDS de distancias entre ciudades europeas",
    markersize=5, label="")
for (i, c) in enumerate(ciudades)
    annotate!(coord[1,i]+30, coord[2,i]+30, text(c, 9))
end
```

---

## 17. Casos de Estudio Completos

### Caso 1: Análisis exploratorio completo del dataset Titanic

```julia
using DataFrames, CSV, Statistics, StatsBase, Plots, StatsPlots
using HypothesisTests, GLM, CategoricalArrays, Downloads

# Cargar datos
url = "https://raw.githubusercontent.com/datasciencedojo/datasets/master/titanic.csv"
titanic = CSV.read(Downloads.download(url), DataFrame)

# ── 1. Exploración inicial ───────────────────────
println("Dimensiones: $(size(titanic))")
println("\nTipos de variables:")
for (col, tipo) in zip(names(titanic), eltype.(eachcol(titanic)))
    @printf("  %-15s %s\n", col, tipo)
end

println("\nValores faltantes:")
for col in names(titanic)
    n_miss = sum(ismissing.(titanic[:, col]))
    if n_miss > 0
        @printf("  %-15s %d (%.1f%%)\n", col, n_miss, n_miss/nrow(titanic)*100)
    end
end

# ── 2. Tasa de supervivencia ─────────────────────
tasa_general = mean(titanic.Survived)
@printf("\nTasa de supervivencia: %.2f%%\n", tasa_general*100)

# Por clase
gdf = groupby(titanic, :Pclass)
tasa_clase = combine(gdf, :Survived => mean => :tasa, nrow => :n)
println("\nSupervivencia por clase:")
println(tasa_clase)

# Por sexo
gdf_sexo = groupby(titanic, :Sex)
tasa_sexo = combine(gdf_sexo, :Survived => mean => :tasa, nrow => :n)
println("\nSupervivencia por sexo:")
println(tasa_sexo)

# ── 3. Visualización ─────────────────────────────
p1 = @df titanic groupedbar(:Pclass, :Survived,
    xlabel="Clase", ylabel="Tasa de supervivencia",
    title="Supervivencia por Clase")

ages_clean = dropmissing(titanic, :Age)
p2 = @df ages_clean histogram(:Age, group=:Survived,
    bins=20, alpha=0.6, normalize=:pdf,
    xlabel="Edad", title="Distribución de Edad por Supervivencia",
    label=["No sobrevivió" "Sobrevivió"])

# ── 4. Test de independencia ─────────────────────
# ¿Es la supervivencia independiente del sexo?
tabla_sexo = freqtable(titanic.Sex, titanic.Survived)
test_chi = ChisqTest(Matrix(tabla_sexo))
@printf("\nTest χ²(Sexo~Supervivencia): χ²=%.2f, p=%.4f\n",
        test_chi.stat, pvalue(test_chi))

# ── 5. Modelo de regresión logística ─────────────
titanic_clean = dropmissing(titanic, [:Age, :Pclass, :Sex])
titanic_clean.SexNum = ifelse.(titanic_clean.Sex .== "male", 0, 1)
titanic_clean.PclassF = categorical(titanic_clean.Pclass)

modelo = glm(@formula(Survived ~ Age + SexNum + PclassF),
             titanic_clean, Binomial(), LogitLink())
println("\nModelo logístico:")
println(modelo)

# Odds Ratios
ORs = exp.(coef(modelo))
println("\nOdds Ratios:")
for (nombre, or) in zip(coefnames(modelo), ORs)
    @printf("  %-20s OR = %.3f\n", nombre, or)
end
```

### Caso 2: Regresión múltiple con diagnóstico completo

```julia
using GLM, DataFrames, Plots, StatsBase, Statistics, RDatasets, Printf

# Dataset Boston Housing (mediante simulación representativa)
Random.seed!(42)
n = 200

# Simular: precio ≈ f(habitaciones, distancia, crimen)
crimen    = rand(Exponential(3), n)
habitac   = rand(Uniform(4, 9), n)
distancia = rand(Exponential(5), n)
precio = 30 .+ 5 .* habitac .- 0.5 .* crimen .- 1.2 .* distancia .+
         randn(n) .* 5

housing = DataFrame(precio=precio, habitaciones=habitac,
                    crimen=crimen, distancia=distancia)

# ── Ajuste del modelo ────────────────────────────
m = lm(@formula(precio ~ habitaciones + crimen + distancia), housing)
println(m)

@printf("\nR²          = %.4f\n", r2(m))
@printf("R² ajustado  = %.4f\n", adjr2(m))
@printf("AIC          = %.4f\n", aic(m))
@printf("RMSE         = %.4f\n", sqrt(mean(residuals(m).^2)))

# ── Diagnóstico de residuos ──────────────────────
res = residuals(m)
aj  = fitted(m)
res_std = res ./ std(res)

# Los 4 gráficos clásicos de diagnóstico
p1 = scatter(aj, res, xlabel="Ajustados", ylabel="Residuos",
    title="Residuos vs Ajustados", label="")
hline!(p1, [0], color=:red, lw=2)

probs_qq = [(i-0.5)/n for i in 1:n]
teoricos = quantile(Normal(0,1), probs_qq)
p2 = scatter(teoricos, sort(res_std), xlabel="N(0,1) teórico",
    ylabel="Residuos estandarizados", title="Q-Q Normal", label="")
plot!(p2, [minimum(teoricos),maximum(teoricos)],
          [minimum(teoricos),maximum(teoricos)], color=:red, lw=2)

p3 = scatter(aj, sqrt.(abs.(res_std)), xlabel="Ajustados",
    ylabel="√|Res. std|", title="Escala-Localización", label="")

# Leverage y distancia de Cook
X_mat = modelmatrix(m)
H = X_mat * inv(X_mat'X_mat) * X_mat'
leverage = diag(H)
p_params = length(coef(m))
cook_d = (res_std.^2 .* leverage) ./ (p_params .* (1 .- leverage))

p4 = scatter(leverage, cook_d, xlabel="Leverage h_ii",
    ylabel="Distancia de Cook", title="Influencia", label="")
vline!(p4, [2*p_params/n], ls=:dash, color=:red, label="2p/n")
hline!(p4, [4/n], ls=:dot, color=:orange, label="4/n")

plot(p1, p2, p3, p4, layout=(2,2), size=(900, 700),
     suptitle="Diagnóstico del Modelo de Regresión")
```

---

## 18. Referencia de Librerías

### Resumen de paquetes y sus funciones principales

| Paquete | Funciones clave | Uso principal |
|---|---|---|
| `Statistics` | `mean`, `median`, `std`, `var`, `cor`, `cov` | Estadística básica |
| `StatsBase` | `skewness`, `kurtosis`, `iqr`, `mode`, `ecdf`, `autocor`, `pacf`, `countmap`, `fit(Histogram,...)` | Estadística descriptiva avanzada |
| `Distributions` | `Normal()`, `Binomial()`, `Poisson()`, `pdf`, `cdf`, `quantile`, `rand`, `fit` | Distribuciones de probabilidad |
| `HypothesisTests` | `OneSampleTTest`, `UnequalVarianceTTest`, `ChisqTest`, `MannWhitneyUTest`, `KruskalWallisTest`, `ShapiroWilkTest` | Contrastes de hipótesis |
| `GLM` | `lm`, `glm`, `coef`, `coeftable`, `predict`, `residuals`, `fitted`, `r2`, `aic`, `anova` | Modelos lineales y GLM |
| `DataFrames` | `DataFrame`, `select`, `filter`, `transform`, `groupby`, `combine`, `innerjoin`, `describe` | Manipulación de datos |
| `CSV` | `CSV.read`, `CSV.write` | E/S de datos tabulares |
| `CategoricalArrays` | `categorical`, `levels`, `recode` | Variables categóricas |
| `Plots` | `plot`, `scatter`, `histogram`, `bar`, `heatmap`, `hline!`, `vline!` | Visualización general |
| `StatsPlots` | `@df`, `boxplot`, `violin`, `corrplot`, `marginalhist` | Gráficos estadísticos |
| `KernelDensity` | `kde` | Estimación densidad kernel |
| `MultivariateStats` | `fit(PCA,...)`, `fit(MDS,...)`, `loadings`, `transform` | Estadística multivariante |
| `TimeSeries` | `TimeArray`, `lag`, `lead` | Series temporales |
| `Turing` | `@model`, `sample`, `NUTS`, `MH` | Inferencia bayesiana |
| `Random` | `seed!`, `rand`, `randn`, `shuffle`, `sample` | Aleatoriedad |
| `LinearAlgebra` | `det`, `inv`, `eigen`, `svd`, `norm`, `diag` | Álgebra lineal |
| `RDatasets` | `dataset("paquete", "nombre")` | Datasets de referencia |

### Guía de selección de contraste

```
¿Cuántas muestras?
├── 1 muestra
│   ├── Variable continua, normal → OneSampleTTest
│   ├── Variable continua, no normal → SignedRankTest (Wilcoxon)
│   ├── Variable dicotómica → BinomialTest
│   └── Bondad de ajuste → ChisqTest / KSTest / ShapiroWilkTest
│
├── 2 muestras
│   ├── Independientes, normal
│   │   ├── Varianzas iguales → EqualVarianceTTest
│   │   └── Varianzas desiguales → UnequalVarianceTTest (Welch)
│   ├── Independientes, no normal → MannWhitneyUTest
│   ├── Emparejadas, normal → OneSampleTTest(diferencias)
│   └── Emparejadas, no normal → SignedRankTest(diferencias)
│
└── k muestras (k > 2)
    ├── Normal, 1 factor → ANOVA (lm + anova)
    ├── Normal, 2 factores → ANOVA factorial (lm con interacción)
    ├── No normal → KruskalWallisTest
    └── Datos de conteo/tabla → ChisqTest
```

### Formulación de modelos GLM

```julia
# Referencia rápida de fórmulas en GLM.jl

# Regresión lineal simple
lm(@formula(y ~ x), df)

# Regresión lineal múltiple
lm(@formula(y ~ x1 + x2 + x3), df)

# Con interacción
lm(@formula(y ~ x1 * x2), df)          # x1 + x2 + x1:x2
lm(@formula(y ~ x1 + x2 + x1:x2), df) # Equivalente

# Transformaciones
lm(@formula(y ~ log(x)), df)
lm(@formula(log(y) ~ x), df)
lm(@formula(y ~ x + x^2), df)          # Cuadrático

# Con variable categórica (dummies automáticas)
lm(@formula(y ~ x + grupo), df)        # grupo debe ser categorical

# Modelo logístico (Bernoulli/Binomial)
glm(@formula(y ~ x1 + x2), df, Binomial(), LogitLink())

# Modelo Poisson (conteos)
glm(@formula(y ~ x), df, Poisson(), LogLink())

# Modelo Gamma (respuesta positiva continua)
glm(@formula(y ~ x), df, Gamma(), InverseLink())

# Modelo Binomial Negativo
glm(@formula(y ~ x), df, NegativeBinomial(), LogLink())
```

---

*Manual de Estadística Computacional con Julia — Versión 1.0*  
*Elaborado para el Grado en Estadística*  
*Julia ≥ 1.9 · Todos los ejemplos son reproducibles fijando `Random.seed!(42)`*
