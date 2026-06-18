# Ejercicios de Subredes: 

## Ejercicio 1. Segmentación de Red Corporativa

Una empresa tiene asignada la dirección IP **172.20.0.0/16** (clase B) y quiere segmentar su red entre **4 regiones** (Norte, Sur, Este, Oeste). En cada región hay **8 sucursales** y cada sucursal tiene **4 departamentos**.

Se pide:

- **a)** Direcciones de subred, primera/última dirección de host y dirección de broadcast de cada **región**.
- **b)** Direcciones de subred de cada **sucursal** de la región **Norte**.
- **c)** Para una sucursal del Norte, primera/última dirección y broadcast de cada uno de sus **departamentos**.
- **d)** Máscaras de subred de cada nivel.

---

## Soluciones

### a) Regiones

Necesitamos 4 regiones → \(2^n \ge 4\) → \(n = 2\) bits de subred.

Máscara base: /16. Añadimos 2 bits → **/18** (255.255.192.0).

Cada subred /18 tiene \(2^{14} = 16\,384\) direcciones totales, de las cuales \(16\,382\) son utilizables para hosts.

| Región | Subred | Primer host | Último host | Broadcast |
|--------|--------|-------------|-------------|-----------|
| Norte | 172.20.0.0/18 | 172.20.0.1 | 172.20.63.254 | 172.20.63.255 |
| Sur | 172.20.64.0/18 | 172.20.64.1 | 172.20.127.254 | 172.20.127.255 |
| Este | 172.20.128.0/18 | 172.20.128.1 | 172.20.191.254 | 172.20.191.255 |
| Oeste | 172.20.192.0/18 | 172.20.192.1 | 172.20.255.254 | 172.20.255.255 |

### b) Sucursales de la región Norte

Cada región (/18) se divide en 8 sucursales → \(2^n \ge 8\) → \(n = 3\) bits.

Máscara: /18 + 3 = **/21** (255.255.248.0).

Cada subred /21 tiene \(2^{11} = 2048\) direcciones totales, \(2046\) utilizables.

| Sucursal | Subred |
|----------|--------|
| 1 | 172.20.0.0/21 |
| 2 | 172.20.8.0/21 |
| 3 | 172.20.16.0/21 |
| 4 | 172.20.24.0/21 |
| 5 | 172.20.32.0/21 |
| 6 | 172.20.40.0/21 |
| 7 | 172.20.48.0/21 |
| 8 | 172.20.56.0/21 |

### c) Departamentos de la sucursal 1 del Norte

Cada sucursal (/21) se divide en 4 departamentos → \(2^n \ge 4\) → \(n = 2\) bits.

Máscara: /21 + 2 = **/23** (255.255.254.0).

Cada subred /23 tiene \(2^{9} = 512\) direcciones totales, \(510\) utilizables.

| Depto | Subred | Primer host | Último host | Broadcast |
|-------|--------|-------------|-------------|-----------|
| 1 | 172.20.0.0/23 | 172.20.0.1 | 172.20.1.254 | 172.20.1.255 |
| 2 | 172.20.2.0/23 | 172.20.2.1 | 172.20.3.254 | 172.20.3.255 |
| 3 | 172.20.4.0/23 | 172.20.4.1 | 172.20.5.254 | 172.20.5.255 |
| 4 | 172.20.6.0/23 | 172.20.6.1 | 172.20.7.254 | 172.20.7.255 |

### d) Máscaras de subred

| Nivel | Máscara | CIDR |
|-------|---------|------|
| Región | 255.255.192.0 | /18 |
| Sucursal | 255.255.248.0 | /21 |
| Departamento | 255.255.254.0 | /23 |

---

## Explicación detallada

### 1. Conceptos previos

#### Dirección IP y máscara de red

Una dirección IPv4 tiene 32 bits, divididos en 4 octetos. La máscara de red indica qué parte es **red** (bits a 1) y qué parte es **host** (bits a 0).

- **Clase B**: los primeros 16 bits son de red (por defecto /16).
- Ejemplo: `172.20.0.0/16` → los 16 bits más significativos (`172.20`) identifican la red, los 16 restantes (`0.0`) identifican hosts.

#### Formato CIDR

La notación CIDR (`/n`) indica cuántos bits de la máscara están a 1. La máscara en decimal se obtiene poniendo `n` unos a la izquierda y el resto ceros, luego convirtiendo cada octeto a decimal.

Para `n = 18`:
```
11111111.11111111.11000000.00000000
 255    . 255    . 192    . 0
```

#### Bits de subred

Para dividir una red en `N` subredes, necesitamos `k` bits extra donde \(2^k \ge N\). Esos bits se toman de la porción de host, alargando la máscara de red.

### 2. Cálculo de tamaños de subred a partir de CIDR

La máscara `/n` significa que `n` bits son de red y `32 - n` bits son de host.

| CIDR | Bits de host | Direcciones totales | Hosts utilizables |
|------|-------------|-------------------|-------------------|
| /16 | 16 | \(2^{16} = 65\,536\) | 65\,534 |
| /18 | 14 | \(2^{14} = 16\,384\) | 16\,382 |
| /21 | 11 | \(2^{11} = 2\,048\) | 2\,046 |
| /23 | 9 | \(2^{9} = 512\) | 510 |

**Fórmulas:**
- Direcciones totales = \(2^{32-n}\)
- Hosts utilizables = \(2^{32-n} - 2\) (se resta la dirección de red y la de broadcast)

#### Ejemplo: /21

```
32 - 21 = 11 bits para host
2^11 = 2048 direcciones totales
2048 - 2 = 2046 hosts utilizables
```

### 3. Cálculo del incremento entre subredes

El incremento (salto) entre subredes consecutivas viene dado por el valor del **último bit de red** (el bit menos significativo de la máscara).

- Para /18: el último bit de red está en el tercer octeto, con valor \(2^{14-16} = 2^{-2}\)... mejor calcularlo como \(256 - \text{octeto de máscara}\).

Una forma sencilla: el incremento es \(2^{32-n} / 256\) en el octeto correspondiente, o directamente:

| CIDR | Máscara | Incremento |
|------|---------|------------|
| /18 | 255.255.192.0 | \(256 - 192 = 64\) en el 3er octeto |
| /21 | 255.255.248.0 | \(256 - 248 = 8\) en el 3er octeto |
| /23 | 255.255.254.0 | \(256 - 254 = 2\) en el 3er octeto |

Así, las subredes /18 saltan de 64 en 64 en el tercer octeto:
- 0.0, 64.0, 128.0, 192.0

Las subredes /21 saltan de 8 en 8:
- 0.0, 8.0, 16.0, 24.0, ...

### 4. Cálculo de primer/último host y broadcast

Para una subred dada `X.Y.Z.0/n`:

- **Dirección de red**: `X.Y.Z.0` (todos los bits de host a 0)
- **Primer host**: `X.Y.Z.0 + 1` → `X.Y.Z.1`
- **Último host**: `X.Y.Z.0 + (2^{32-n} - 2)` → un número antes del broadcast
- **Broadcast**: `X.Y.Z.0 + (2^{32-n} - 1)` (todos los bits de host a 1)

#### Ejemplo: 172.20.64.0/18

```
Direcciones totales = 2^14 = 16384
Broadcast = 172.20.64.0 + 16383 = 172.20.127.255
Primer host = 172.20.64.1
Último host = 172.20.127.254
```

#### Ejemplo: 172.20.8.0/21

```
Direcciones totales = 2^11 = 2048
Broadcast = 172.20.8.0 + 2047 = 172.20.15.255
Primer host = 172.20.8.1
Último host = 172.20.15.254
```

### 5. Proceso completo del ejercicio paso a paso

**Paso 1: Calcular bits necesarios por nivel**

| Nivel | Entidades | Bits necesarios | Fórmula |
|-------|-----------|----------------|---------|
| Regiones | 4 | 2 | \(2^2 = 4\) |
| Sucursales por región | 8 | 3 | \(2^3 = 8\) |
| Departamentos por sucursal | 4 | 2 | \(2^2 = 4\) |

**Paso 2: Acumular máscaras**

```
Base:       /16  (2^16 = 65536 direcciones)
Región:     /18  (16 + 2)
Sucursal:   /21  (18 + 3)
Depto:      /23  (21 + 2)
```

**Paso 3: Verificar direcciones por nivel**

```
Por región (/18):        2^14 = 16384 dirs  →  suficientes para 8 sucursales × 4 deptos
Por sucursal (/21):      2^11 = 2048 dirs   →  suficiente para 4 departamentos
Por departamento (/23):  2^9  = 512 dirs    →  510 hosts utilizables
```

**Paso 4: Asignar rangos**

Las subredes se asignan secuencialmente dentro del rango de la subred padre, usando el incremento calculado.

### 6. Resumen visual

```
172.20.0.0/16  (red corporativa)
│
├── 172.20.0.0/18   (Norte)
│   ├── 172.20.0.0/21   (Sucursal 1)
│   │   ├── 172.20.0.0/23  (Depto 1)
│   │   ├── 172.20.2.0/23  (Depto 2)
│   │   ├── 172.20.4.0/23  (Depto 3)
│   │   └── 172.20.6.0/23  (Depto 4)
│   ├── 172.20.8.0/21   (Sucursal 2)
│   ├── 172.20.16.0/21  (Sucursal 3)
│   ├── 172.20.24.0/21  (Sucursal 4)
│   ├── 172.20.32.0/21  (Sucursal 5)
│   ├── 172.20.40.0/21  (Sucursal 6)
│   ├── 172.20.48.0/21  (Sucursal 7)
│   └── 172.20.56.0/21  (Sucursal 8)
│
├── 172.20.64.0/18   (Sur)
│   └── ...
├── 172.20.128.0/18  (Este)
│   └── ...
└── 172.20.192.0/18  (Oeste)
    └── ...
```

---
## Ejercicio 2. Provincias, oficinas y departamentos

### Enunciado

Una empresa tiene asignada la dirección IP **180.10.0.0** de clase B, y desea segmentar su red entre las oficinas que tiene en las provincias de **Granada**, **Málaga** y **Sevilla**. En cada provincia hay **4 oficinas** y cada oficina posee **8 departamentos**.

Se pide:

- **a)** Las direcciones de subred que tendrán asignadas cada Provincia, así como la primera dirección de equipo, la última y la dirección de difusión.
- **b)** Las direcciones de subred que tendrán asignadas cada Oficina de cada Provincia.
- **c)** Para una oficina de Granada, indicar la primera dirección de equipo, la última y la dirección de difusión que se podrán utilizar en cada uno de sus departamentos.
- **d)** Máscaras de subred.

---

## Soluciones

### a) Provincias

Necesitamos 3 provincias → \(2^n \ge 3\) → \(n = 2\) bits de subred.

Máscara base: /16. Añadimos 2 bits → **/18** (255.255.192.0).

Cada subred /18 tiene \(2^{14} = 16\,384\) direcciones totales, de las cuales \(16\,382\) son utilizables para hosts.

| Provincia | Subred | Primer host | Último host | Broadcast |
|-----------|--------|-------------|-------------|-----------|
| Granada | 180.10.0.0/18 | 180.10.0.1 | 180.10.63.254 | 180.10.63.255 |
| Málaga | 180.10.64.0/18 | 180.10.64.1 | 180.10.127.254 | 180.10.127.255 |
| Sevilla | 180.10.128.0/18 | 180.10.128.1 | 180.10.191.254 | 180.10.191.255 |

### b) Oficinas

Cada provincia (/18) se divide en 4 oficinas → \(2^n \ge 4\) → \(n = 2\) bits.

Máscara: /18 + 2 = **/20** (255.255.240.0).

Cada subred /20 tiene \(2^{12} = 4\,096\) direcciones totales, \(4\,094\) utilizables.

| Provincia | Of. 1 | Of. 2 | Of. 3 | Of. 4 |
|-----------|-------|-------|-------|-------|
| Granada | 180.10.0.0/20 | 180.10.16.0/20 | 180.10.32.0/20 | 180.10.48.0/20 |
| Málaga | 180.10.64.0/20 | 180.10.80.0/20 | 180.10.96.0/20 | 180.10.112.0/20 |
| Sevilla | 180.10.128.0/20 | 180.10.144.0/20 | 180.10.160.0/20 | 180.10.176.0/20 |

### c) Departamentos de la oficina 1 de Granada

Cada oficina (/20) se divide en 8 departamentos → \(2^n \ge 8\) → \(n = 3\) bits.

Máscara: /20 + 3 = **/23** (255.255.254.0).

Cada subred /23 tiene \(2^{9} = 512\) direcciones totales, \(510\) utilizables.

| Depto | Subred | Primer host | Último host | Broadcast |
|-------|--------|-------------|-------------|-----------|
| 1 | 180.10.0.0/23 | 180.10.0.1 | 180.10.1.254 | 180.10.1.255 |
| 2 | 180.10.2.0/23 | 180.10.2.1 | 180.10.3.254 | 180.10.3.255 |
| 3 | 180.10.4.0/23 | 180.10.4.1 | 180.10.5.254 | 180.10.5.255 |
| 4 | 180.10.6.0/23 | 180.10.6.1 | 180.10.7.254 | 180.10.7.255 |
| 5 | 180.10.8.0/23 | 180.10.8.1 | 180.10.9.254 | 180.10.9.255 |
| 6 | 180.10.10.0/23 | 180.10.10.1 | 180.10.11.254 | 180.10.11.255 |
| 7 | 180.10.12.0/23 | 180.10.12.1 | 180.10.13.254 | 180.10.13.255 |
| 8 | 180.10.14.0/23 | 180.10.14.1 | 180.10.15.254 | 180.10.15.255 |

### d) Máscaras de subred

| Nivel | Máscara | CIDR |
|-------|---------|------|
| Provincia | 255.255.192.0 | /18 |
| Oficina | 255.255.240.0 | /20 |
| Departamento | 255.255.254.0 | /23 |

---

## Explicación detallada

### 1. Análisis de la dirección base

La IP **180.10.0.0** es de **clase B**, por lo que su máscara por defecto es **/16** (255.255.0.0). Esto significa que tenemos 16 bits para red y 16 bits para hosts, lo que nos da \(2^{16} = 65\,536\) direcciones totales.

### 2. Cálculo de bits por nivel

| Nivel | Entidades | Bits necesarios | Fórmula |
|-------|-----------|----------------|---------|
| Provincias | 3 | \(2\) | \(2^2 = 4 \ge 3\) |
| Oficinas por provincia | 4 | \(2\) | \(2^2 = 4\) |
| Departamentos por oficina | 8 | \(3\) | \(2^3 = 8\) |

¿Por qué 2 bits para 3 provincias si con 1 bit (\(2^1 = 2\)) no basta? Porque necesitamos que \(2^n\) sea mayor o igual al número de subredes. \(2^1 = 2 < 3\) no sirve; \(2^2 = 4 \ge 3\) sí.

### 3. Deducción de máscaras

Acumulamos los bits desde la máscara base:

```
Base:        /16  (16 bits de red por defecto)
Provincia:  /18  (16 + 2 bits)
Oficina:    /20  (18 + 2 bits)
Depto:      /23  (20 + 3 bits)
```

Convertimos cada CIDR a máscara decimal:

| CIDR | Binario | Decimal |
|------|---------|---------|
| /18 | `11111111.11111111.11000000.00000000` | 255.255.192.0 |
| /20 | `11111111.11111111.11110000.00000000` | 255.255.240.0 |
| /23 | `11111111.11111111.11111110.00000000` | 255.255.254.0 |

### 4. Tamaño de cada subred

A partir de CIDR, calculamos direcciones totales y hosts utilizables:

| CIDR | Bits de host | Total direcciones | Hosts utilizables |
|------|-------------|-------------------|-------------------|
| /18 | \(32 - 18 = 14\) | \(2^{14} = 16\,384\) | \(16\,382\) |
| /20 | \(32 - 20 = 12\) | \(2^{12} = 4\,096\) | \(4\,094\) |
| /23 | \(32 - 23 = 9\) | \(2^{9} = 512\) | \(510\) |

**Fórmula general:** \( \text{direcciones totales} = 2^{32-n} \), donde \(n\) es el CIDR.

### 5. Cálculo del incremento entre subredes

El incremento se obtiene como \(256 - \text{valor del octeto donde está el último bit de red}\):

| CIDR | Máscara | Incremento |
|------|---------|------------|
| /18 | 255.255.192.0 | \(256 - 192 = 64\) en el 3er octeto |
| /20 | 255.255.240.0 | \(256 - 240 = 16\) en el 3er octeto |
| /23 | 255.255.254.0 | \(256 - 254 = 2\) en el 3er octeto |

Otra forma: el incremento es directamente \(2^{32-n} / 256\) cuando el salto cae en el tercer octeto.

Por ejemplo, para /20:
- \(2^{32-20} = 2^{12} = 4096\) direcciones por subred
- \(4096 / 256 = 16\) → las subredes saltan de 16 en 16 en el tercer octeto

### 6. Asignación de rangos

#### Provincias (/18)

Partimos de 180.10.0.0/16. Las subredes /18 saltan de 64 en 64:

```
180.10.0.0/18    →  180.10.0.0   a  180.10.63.255   (Granada)
180.10.64.0/18   →  180.10.64.0  a  180.10.127.255  (Málaga)
180.10.128.0/18  →  180.10.128.0 a  180.10.191.255  (Sevilla)
```

**Primer host:** dirección de red + 1  
**Último host:** broadcast - 1  
**Broadcast:** dirección de red + total direcciones - 1

Para Granada (180.10.0.0/18):
```
Total direcciones = 2^14 = 16384
Broadcast = 180.10.0.0 + 16383 = 180.10.63.255
Primer host = 180.10.0.1
Último host = 180.10.63.254
```

#### Oficinas (/20)

Dentro de cada provincia, saltan de 16 en 16 en el tercer octeto.

Para Granada (180.10.0.0/18 → rango 180.10.0.0 a 180.10.63.255):

```
Of. 1: 180.10.0.0/20    (180.10.0.0   - 180.10.15.255)
Of. 2: 180.10.16.0/20   (180.10.16.0  - 180.10.31.255)
Of. 3: 180.10.32.0/20   (180.10.32.0  - 180.10.47.255)
Of. 4: 180.10.48.0/20   (180.10.48.0  - 180.10.63.255)
```

Para Málaga (180.10.64.0/18):
```
Of. 1: 180.10.64.0/20   (180.10.64.0  - 180.10.79.255)
Of. 2: 180.10.80.0/20   (180.10.80.0  - 180.10.95.255)
Of. 3: 180.10.96.0/20   (180.10.96.0  - 180.10.111.255)
Of. 4: 180.10.112.0/20  (180.10.112.0 - 180.10.127.255)
```

Para Sevilla (180.10.128.0/18):
```
Of. 1: 180.10.128.0/20  (180.10.128.0 - 180.10.143.255)
Of. 2: 180.10.144.0/20  (180.10.144.0 - 180.10.159.255)
Of. 3: 180.10.160.0/20  (180.10.160.0 - 180.10.175.255)
Of. 4: 180.10.176.0/20  (180.10.176.0 - 180.10.191.255)
```

#### Departamentos (/23)

Dentro de la oficina 1 de Granada (180.10.0.0/20 → rango 180.10.0.0 a 180.10.15.255), saltan de 2 en 2:

```
Depto 1: 180.10.0.0/23   (180.10.0.0   - 180.10.1.255)
Depto 2: 180.10.2.0/23   (180.10.2.0   - 180.10.3.255)
Depto 3: 180.10.4.0/23   (180.10.4.0   - 180.10.5.255)
Depto 4: 180.10.6.0/23   (180.10.6.0   - 180.10.7.255)
Depto 5: 180.10.8.0/23   (180.10.8.0   - 180.10.9.255)
Depto 6: 180.10.10.0/23  (180.10.10.0  - 180.10.11.255)
Depto 7: 180.10.12.0/23  (180.10.12.0  - 180.10.13.255)
Depto 8: 180.10.14.0/23  (180.10.14.0  - 180.10.15.255)
```

**Verificación:** \(8 \times 512 = 4096\) direcciones → coincide exactamente con el tamaño de la oficina (/20 → 4096 direcciones).

### 7. Resumen jerárquico

```
180.10.0.0/16  (red corporativa)
│
├── 180.10.0.0/18      (Granada)
│   ├── 180.10.0.0/20    (Of. 1)
│   │   ├── 180.10.0.0/23   (Depto 1)
│   │   ├── 180.10.2.0/23   (Depto 2)
│   │   ├── 180.10.4.0/23   (Depto 3)
│   │   ├── 180.10.6.0/23   (Depto 4)
│   │   ├── 180.10.8.0/23   (Depto 5)
│   │   ├── 180.10.10.0/23  (Depto 6)
│   │   ├── 180.10.12.0/23  (Depto 7)
│   │   └── 180.10.14.0/23  (Depto 8)
│   ├── 180.10.16.0/20   (Of. 2)
│   ├── 180.10.32.0/20   (Of. 3)
│   └── 180.10.48.0/20   (Of. 4)
│
├── 180.10.64.0/18      (Málaga)
│   ├── 180.10.64.0/20   (Of. 1)
│   ├── 180.10.80.0/20   (Of. 2)
│   ├── 180.10.96.0/20   (Of. 3)
│   └── 180.10.112.0/20  (Of. 4)
│
└── 180.10.128.0/18     (Sevilla)
    ├── 180.10.128.0/20  (Of. 1)
    ├── 180.10.144.0/20  (Of. 2)
    ├── 180.10.160.0/20  (Of. 3)
    └── 180.10.176.0/20  (Of. 4)
```

## Ejercicio 3. VLSM

**Dirección base:** `172.20.0.0/22` (255.255.252.0)

### Requisitos

| Red | Hosts necesarios |
|-----|-----------------|
| A | 320 |
| B | 150 |
| C | 60 |
| D | 28 |
| E | 12 |
| F | 6 |
| G | 2 |
| Enlaces WAN (4 enlaces) | 2 c/u |

### Se pide

1. Ordenar las redes de mayor a menor cantidad de hosts.
2. Calcular máscara, rango, broadcast y gateway (primera IP usable) para cada subred.
3. Indicar la dirección de red resultante y la máscara en notación slash y decimal.
4. Verificar que no haya solapamiento entre subredes.
5. Calcular el % de desperdicio de direcciones IP en cada subred.


- Los 4 enlaces WAN deben ocupar las últimas subredes disponibles.
- El direccionamiento debe ser contiguo sin saltos.

---

### Solución

Orden descendente: A → B → C → D → E → F → G → WAN1..4

| Red | Dirección | Máscara | Rango usable | Broadcast | Gateway |
|-----|-----------|---------|-------------|-----------|---------|
| A | 172.20.0.0/23 | 255.255.254.0 | 172.20.0.1 – 172.20.1.254 | 172.20.1.255 | 172.20.0.1 |
| B | 172.20.2.0/24 | 255.255.255.0 | 172.20.2.1 – 172.20.2.254 | 172.20.2.255 | 172.20.2.1 |
| C | 172.20.3.0/26 | 255.255.255.192 | 172.20.3.1 – 172.20.3.62 | 172.20.3.63 | 172.20.3.1 |
| D | 172.20.3.64/27 | 255.255.255.224 | 172.20.3.65 – 172.20.3.94 | 172.20.3.95 | 172.20.3.65 |
| E | 172.20.3.96/28 | 255.255.255.240 | 172.20.3.97 – 172.20.3.110 | 172.20.3.111 | 172.20.3.97 |
| F | 172.20.3.112/29 | 255.255.255.248 | 172.20.3.113 – 172.20.3.118 | 172.20.3.119 | 172.20.3.113 |
| G | 172.20.3.120/30 | 255.255.255.252 | 172.20.3.121 – 172.20.3.122 | 172.20.3.123 | 172.20.3.121 |
| WAN1 | 172.20.3.124/30 | 255.255.255.252 | 172.20.3.125 – 172.20.3.126 | 172.20.3.127 | 172.20.3.125 |
| WAN2 | 172.20.3.128/30 | 255.255.255.252 | 172.20.3.129 – 172.20.3.130 | 172.20.3.131 | 172.20.3.129 |
| WAN3 | 172.20.3.132/30 | 255.255.255.252 | 172.20.3.133 – 172.20.3.134 | 172.20.3.135 | 172.20.3.133 |
| WAN4 | 172.20.3.136/30 | 255.255.255.252 | 172.20.3.137 – 172.20.3.138 | 172.20.3.139 | 172.20.3.137 |

### Desperdicio

| Red | Disponibles | Usados | Desperdicio |
|-----|------------|--------|-------------|
| A | 512 | 320 | **37.5 %** |
| B | 256 | 150 | **41.4 %** |
| C | 64 | 60 | **6.25 %** |
| D | 32 | 28 | **12.5 %** |
| E | 16 | 12 | **25 %** |
| F | 8 | 6 | **25 %** |
| G | 4 | 2 | **50 %** |
| WAN | 4×4 | 4×2 | **50 % c/u** |

**Total direcciones:** 1024 (rango /22) — **Usadas:** 908 — **Desperdicio global:** ~11.3 %

## Ejercicio 4. Mixto: VLSM + Subnetting Fijo

Una empresa tiene la dirección `10.0.0.0/16` y debe segmentar su red en dos fases.

---

### Fase 1 — Subnetting Fijo (por departamento)

Se dividen los primeros **512 /24** en 8 bloques fijos de **64 subredes /24** cada uno, asignados así:

| Bloque | Rango /24 | Asignación |
|--------|-----------|------------|
| 1 | 10.0.0.0 – 10.0.63.255 | Ventas |
| 2 | 10.0.64.0 – 10.0.127.255 | Marketing |
| 3 | 10.0.128.0 – 10.0.191.255 | RRHH |
| 4 | 10.0.192.0 – 10.0.255.255 | Sistemas |
| 5 | 10.1.0.0 – 10.1.63.255 | Operaciones |
| 6 | 10.1.64.0 – 10.1.127.255 | Logística |
| 7 | 10.1.128.0 – 10.1.191.255 | Soporte |
| 8 | 10.1.192.0 – 10.1.255.255 | Reserva |

#### Preguntas Fase 1

1. ¿Cuántas subredes /24 hay en total? ¿Cuántas direcciones usable por subred?
2. ¿Qué máscara en decimal tienen las subredes?
3. Para el departamento de **Sistemas** (bloque 4):
   - ¿Cuál es la dirección de red y broadcast de la **subred 10** dentro de ese bloque?
   - ¿Cuál es el rango de IPs usable?
4. ¿Qué porción del espacio /16 total se ha asignado en esta fase?

---

### Fase 2 — VLSM (intradepartamento)

El departamento de **Sistemas** (bloque 4: `10.0.192.0/18`) necesita subdividir su bloque con VLSM:

| Subred | Hosts |
|--------|-------|
| S-Prod | 2000 |
| S-Pre | 800 |
| S-Test | 300 |
| S-Dev | 100 |
| S-WAN1 | 2 |
| S-WAN2 | 2 |

#### Preguntas Fase 2

1. Ordenar de mayor a menor y calcular cada subred (red, máscara slash y decimal, rango, broadcast, gateway).
2. ¿Las subredes S-WAN1 y S-WAN2 son contiguas? Si no, ¿cuántas direcciones se pierden entre ellas?
3. ¿Cuánto espacio libre queda sin asignar dentro del bloque de Sistemas (en /24)?
4. ¿El bloque de Sistemas original alcanza para cubrir todos los requisitos? Si sobra, ¿qué % del bloque queda libre?

---

### Preguntas Integradoras

1. Si la empresa crece y necesita 20 subredes /24 adicionales, ¿de qué bloque las tomaría sin romper el direccionamiento existente?
2. Diseñe una **ruta resumida** (supernet / ruta agregada) que cubra todo el espacio asignado en la Fase 1 con la menor máscara posible.
3. Tomando el bloque de Sistemas después de aplicar VLSM, ¿es posible resumir S-Prod y S-Pre en una sola ruta? ¿Qué máscara usaría?

---

### Solución

#### Fase 1 — Subnetting Fijo

#### 1.1
- **8 bloques × 64 subredes = 512 subredes /24**
- Por cada /24: 256 direcciones totales − 2 (red y broadcast) = **254 usables**

#### 1.2
**255.255.255.0**

#### 1.3 — Sistemas (bloque 4: `10.0.192.0/18`)

Las subredes /24 dentro del bloque se numeran desde 0:

| Subred | Dirección |
|--------|-----------|
| 0 | 10.0.192.0/24 |
| 1 | 10.0.193.0/24 |
| 2 | 10.0.194.0/24 |
| ... | ... |
| **10** | **10.0.202.0/24** |
| ... | ... |
| 63 | 10.0.255.0/24 |

- **Red:** 10.0.202.0
- **Broadcast:** 10.0.202.255
- **Rango usable:** 10.0.202.1 – 10.0.202.254

#### 1.4

Los bloques 1–4 ocupan `10.0.0.0/16` completo. Los bloques 5–8 ocupan `10.1.0.0/16`. En total se asignan **2 × /16** (espacio `10.0.0.0/15`).

| Concepto | Valor |
|----------|-------|
| Espacio asignado | 10.0.0.0/15 |
| Subredes /24 | 512 |
| Direcciones totales | 131,072 |

---

### Fase 2 — VLSM (bloque Sistemas: `10.0.192.0/18`)

Orden: S-Prod (/21) → S-Pre (/22) → S-Test (/23) → S-Dev (/25) → S-WAN1 (/30) → S-WAN2 (/30)

#### Tabla completa

| Subred | Red | Máscara | Rango usable | Broadcast | Gateway |
|--------|-----|---------|-------------|-----------|---------|
| S-Prod | 10.0.192.0/21 | 255.255.248.0 | 10.0.192.1 – 10.0.199.254 | 10.0.199.255 | 10.0.192.1 |
| S-Pre | 10.0.200.0/22 | 255.255.252.0 | 10.0.200.1 – 10.0.203.254 | 10.0.203.255 | 10.0.200.1 |
| S-Test | 10.0.204.0/23 | 255.255.254.0 | 10.0.204.1 – 10.0.205.254 | 10.0.205.255 | 10.0.204.1 |
| S-Dev | 10.0.206.0/25 | 255.255.255.128 | 10.0.206.1 – 10.0.206.126 | 10.0.206.127 | 10.0.206.1 |
| S-WAN1 | 10.0.206.128/30 | 255.255.255.252 | 10.0.206.129 – 10.0.206.130 | 10.0.206.131 | 10.0.206.129 |
| S-WAN2 | 10.0.206.132/30 | 255.255.255.252 | 10.0.206.133 – 10.0.206.134 | 10.0.206.135 | 10.0.206.133 |

#### Cálculo de potencias

| Subred | Hosts | Mínima potencia | Máscara | Direcciones totales |
|--------|-------|----------------|---------|-------------------|
| S-Prod | 2000 | 2¹¹ = 2048 | /21 | 2048 |
| S-Pre | 800 | 2¹⁰ = 1024 | /22 | 1024 |
| S-Test | 300 | 2⁹ = 512 | /23 | 512 |
| S-Dev | 100 | 2⁷ = 128 | /25 | 128 |
| S-WAN1 | 2 | 2² = 4 | /30 | 4 |
| S-WAN2 | 2 | 2² = 4 | /30 | 4 |

#### 2.2 — ¿WAN1 y WAN2 son contiguas?

**Sí.** S-WAN1 termina en broadcast `10.0.206.131` y S-WAN2 arranca en `10.0.206.132`. No hay direcciones perdidas entre ellas.

#### 2.3 — Espacio libre en el bloque de Sistemas

El bloque `10.0.192.0/18` abarca de `10.0.192.0` a `10.0.255.255` (16,384 direcciones).

Última dirección usada: broadcast de S-WAN2 = `10.0.206.135`.
Espacio libre: `10.0.206.136` – `10.0.255.255`.

```
(255 − 206 + 1) × 256 − 136 = 50 × 256 − 136 = 12,800 − 136 = 12,664 direcciones
```

En /24: `12,664 ÷ 256 ≈ 49.47` → **49 subredes /24 completas** (más 120 direcciones sueltas).

#### 2.4 — ¿Alcanza el bloque?

| Concepto | Valor |
|----------|-------|
| Capacidad del /18 | 16,384 direcciones |
| Total usado | 2,048 + 1,024 + 512 + 128 + 4 + 4 = **3,720** |
| Libre | 16,384 − 3,720 = **12,664** |
| % libre | 12,664 ÷ 16,384 ≈ **77.3 %** |

Sobra ampliamente.

---

### Preguntas Integradoras

#### 3.1 — 20 subredes /24 adicionales

Del **bloque 8 (Reserva: `10.1.192.0/18`)** que está intacto y fue designado para crecimiento.

#### 3.2 — Ruta resumida de toda la Fase 1

Los 8 bloques abarcan `10.0.0.0` – `10.1.255.255`. La mejor ruta agregada:

```
10.0.0.0/15  → 255.254.0.0
```

Cubre exactamente `10.0.0.0` – `10.1.255.255` sin espacio extra.

#### 3.3 — Resumir S-Prod y S-Pre

| Subred | Rango |
|--------|-------|
| S-Prod | 10.0.192.0 – 10.0.199.255 (/21) |
| S-Pre | 10.0.200.0 – 10.0.203.255 (/22) |

Ambas caben dentro de `10.0.192.0/20` (10.0.192.0 – 10.0.207.255), pero ese /20 también incluye S-Test, S-Dev y las WAN.

**No es posible resumir exclusivamente S-Prod + S-Pre** en un solo prefijo sin incluir otras subredes, porque no caen en un bloque alineado a potencia de 2 que excluya al resto. La máscara /20 cubre todo el rango `192.0 – 207.255` que contiene a las 6 subredes del VLSM.

Para resumir **todo** el espacio VLSM de Sistemas: `10.0.192.0/20`.
