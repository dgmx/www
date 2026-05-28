# Manual de Subnetting IPv4

## 1. Estructura de una dirección IPv4

Una dirección IPv4 tiene **32 bits**, divididos en **4 octetos** de 8 bits cada uno.

```
192 . 168 .   1  . 10
11000000 10101000 00000001 00001010
```

Cada octeto va de 0 a 255 en decimal (2⁸ = 256 valores posibles).

---

## 2. Máscara de red y notación CIDR

La máscara de red indica qué bits pertenecen a la **red** (1s) y cuáles al **host** (0s).

| CIDR | Máscara decimal | Bits host | Hosts totales | Hosts útiles |
|------|----------------|-----------|---------------|--------------|
| /24 | 255.255.255.0 | 8 | 256 | 254 |
| /25 | 255.255.255.128 | 7 | 128 | 126 |
| /26 | 255.255.255.192 | 6 | 64 | 62 |
| /27 | 255.255.255.224 | 5 | 32 | 30 |
| /28 | 255.255.255.240 | 4 | 16 | 14 |
| /29 | 255.255.255.248 | 3 | 8 | 6 |
| /30 | 255.255.255.252 | 2 | 4 | 2 |

**Hosts útiles** = (2^bits_host) - 2 (se resta la dirección de red y la de broadcast).

---

## 3. Dirección de red, broadcast y hosts

Dado un bloque de direcciones:

- **Dirección de red**: primera del bloque (todos los bits de host a 0)
- **Dirección de broadcast**: última del bloque (todos los bits de host a 1)
- **Hosts útiles**: las direcciones entre red y broadcast

---

## 4. El método del número mágico

Este método acelera muchísimo los cálculos. Solo necesitas saber el **tamaño del bloque**.

### Paso 1: Calcular el tamaño del bloque

```
Tamaño del bloque = 256 - máscara_del_último_octeto
```

O directamente: **2^(8 - CIDR)** cuando trabajamos en el último octeto (CIDR ≥ 24).

| CIDR | Máscara último octeto | Tamaño bloque |
|------|----------------------|--------------|
| /24 | 0 | 256 |
| /25 | 128 | 128 |
| /26 | 192 | 64 |
| /27 | 224 | 32 |
| /28 | 240 | 16 |
| /29 | 248 | 8 |
| /30 | 252 | 4 |

### Paso 2: Encontrar la dirección de red

Divide el último octeto de la IP entre el tamaño del bloque, trunca y vuelve a multiplicar.

```
red = truncar(último_octeto / tamaño_bloque) × tamaño_bloque
```

**Ejemplo:** IP `205.16.37.44/28`
- Bloque = 16
- 44 ÷ 16 = 2.75 → truncado = 2
- 2 × 16 = **32**
- Dirección de red: `205.16.37.32`

### Paso 3: Calcular el broadcast

```
broadcast = dirección_de_red + tamaño_bloque - 1
```

Siguiendo el ejemplo:
- Broadcast = 32 + 16 - 1 = **47**
- Broadcast: `205.16.37.47`

### Paso 4: Primer y último host útil

```
Primer host útil = dirección_de_red + 1
Último host útil = broadcast - 1
```

Siguiendo el ejemplo:
- Primer host: `205.16.37.33`
- Último host: `205.16.37.46`

---

## 5. Tabla rápida de CIDR comunes

| CIDR | Máscara | Bloque | Redes posibles | Múltiplos en último octeto | Hosts útiles |
|------|---------|--------|---------------|---------------------------|--------------|
| /24 | 255.255.255.0 | 256 | 1 | 0 | 254 |
| /25 | 255.255.255.128 | 128 | 2 | 0, 128 | 126 |
| /26 | 255.255.255.192 | 64 | 4 | 0, 64, 128, 192 | 62 |
| /27 | 255.255.255.224 | 32 | 8 | 0, 32, 64, 96, 128, 160, 192, 224 | 30 |
| /28 | 255.255.255.240 | 16 | 16 | 0, 16, 32, 48...240 | 14 |
| /29 | 255.255.255.248 | 8 | 32 | 0, 8, 16, 24...248 | 6 |
| /30 | 255.255.255.252 | 4 | 64 | 0, 4, 8, 12...252 | 2 |

---

## 6. Consejos prácticos para acelerar cálculos

### Consejo 1: Memoriza las potencias de 2

```
128, 64, 32, 16, 8, 4, 2, 1
```

Son la base de todos los cálculos de subnetting.

### Consejo 2: Aprende la secuencia de CIDR

Cada vez que aumentas CIDR en 1, divides el bloque a la mitad:

```
/24 = 256
/25 = 128
/26 = 64
/27 = 32
/28 = 16
/29 = 8
/30 = 4
```

No necesitas calcular nada, es dividir entre 2 sucesivamente.

### Consejo 3: Relaciona CIDR con máscara rápidamente

Resta 256 menos el tamaño del bloque para obtener el valor del último octeto de la máscara:

- Bloque 128 → máscara 128
- Bloque 64 → máscara 192
- Bloque 32 → máscara 224
- Bloque 16 → máscara 240
- Bloque 8 → máscara 248
- Bloque 4 → máscara 252

O viceversa: si ves máscara 240, sabes que bloque = 256 - 240 = 16.

### Consejo 4: Para saber si una IP es dirección de red

Pregunta: ¿el último octeto es múltiplo del tamaño del bloque?

```
190.16.42.44/28 → ¿44 es múltiplo de 16? → No → no es dirección de red
17.17.33.80/28  → ¿80 es múltiplo de 16? → Sí → es dirección de red
```

### Consejo 5: Para CIDR < 24

Cuando el CIDR es menor que 24, los cálculos se desplazan a octetos anteriores. El principio es el mismo, pero el "número mágico" se aplica en otro octeto.

**Ejemplo:** `10.0.0.0/16`
- Bloque = 2^(24-16) = 2^8 = 256 en el **tercer octeto**
- Redes: 10.0.0.0, 10.1.0.0, 10.2.0.0... hasta 10.255.0.0

Otro ejemplo: `172.16.0.0/20`
- 32 - 20 = 12 bits para hosts → 2^12 = 4096 direcciones
- Trabaja en el **tercer octeto**: bloque en ese octeto = 2^(24-20) = 16
- Redes: 172.16.0.0, 172.16.16.0, 172.16.32.0... hasta 172.16.240.0

### Consejo 6: Atajo mental

Cuando te den una IP y un CIDR, dibuja mentalmente la tabla:

```
CIDR: /28
Bloque: 16
Múltiplos: 0, 16, 32, 48, 64...
Máscara: 255.255.255.240
```

Luego busca entre qué múltiplos cae el último octeto de tu IP.

---

## 7. Ejemplos resueltos paso a paso

### Ejemplo 1: /28

IP: `192.168.1.45/28`

| Concepto | Cálculo | Resultado |
|----------|---------|-----------|
| Máscara | 255.255.255.240 | - |
| Bloque | 256 - 240 = 16 | - |
| Red | truncar(45÷16)×16 = 2×16 | **192.168.1.32** |
| Broadcast | 32 + 16 - 1 = 47 | **192.168.1.47** |
| 1er host útil | 32 + 1 | **192.168.1.33** |
| Último host útil | 47 - 1 | **192.168.1.46** |

### Ejemplo 2: /26

IP: `10.50.100.135/26`

| Concepto | Cálculo | Resultado |
|----------|---------|-----------|
| Máscara | 255.255.255.192 | - |
| Bloque | 256 - 192 = 64 | - |
| Red | truncar(135÷64)×64 = 2×64 | **10.50.100.128** |
| Broadcast | 128 + 64 - 1 = 191 | **10.50.100.191** |
| 1er host útil | 128 + 1 | **10.50.100.129** |
| Último host útil | 191 - 1 | **10.50.100.190** |

### Ejemplo 3: /30 (típico en enlaces punto a punto)

IP: `172.16.0.9/30`

| Concepto | Cálculo | Resultado |
|----------|---------|-----------|
| Máscara | 255.255.255.252 | - |
| Bloque | 256 - 252 = 4 | - |
| Red | truncar(9÷4)×4 = 2×4 | **172.16.0.8** |
| Broadcast | 8 + 4 - 1 = 11 | **172.16.0.11** |
| 1er host útil | 8 + 1 | **172.16.0.9** |
| Último host útil | 11 - 1 | **172.16.0.10** |

### Ejemplo 4: /27

IP: `192.168.10.85/27`

| Concepto | Cálculo | Resultado |
|----------|---------|-----------|
| Máscara | 255.255.255.224 | - |
| Bloque | 256 - 224 = 32 | - |
| Red | truncar(85÷32)×32 = 2×32 | **192.168.10.64** |
| Broadcast | 64 + 32 - 1 = 95 | **192.168.10.95** |
| 1er host útil | 64 + 1 | **192.168.10.65** |
| Último host útil | 95 - 1 | **192.168.10.94** |

---

## 8. Ejercicios propuestos

Calcula red, broadcast, primer y último host útil para cada IP:

1. `192.168.1.130/25`
2. `10.0.0.45/27`
3. `172.16.5.200/26`
4. `192.168.50.17/28`
5. `10.10.10.10/30`
6. `203.0.113.75/29`
7. `198.51.100.150/27`

<details>
<summary>Soluciones</summary>

1. **192.168.1.128/25** — Red: .128, Broadcast: .255, Hosts: .129–.254
2. **10.0.0.32/27** — Red: .32, Broadcast: .63, Hosts: .33–.62
3. **172.16.5.192/26** — Red: .192, Broadcast: .255, Hosts: .193–.254
4. **192.168.50.16/28** — Red: .16, Broadcast: .31, Hosts: .17–.30
5. **10.10.10.8/30** — Red: .8, Broadcast: .11, Hosts: .9–.10
6. **203.0.113.72/29** — Red: .72, Broadcast: .79, Hosts: .73–.78
7. **198.51.100.128/27** — Red: .128, Broadcast: .159, Hosts: .129–.158

</details>

---

🔗 **Calculadora IP:** [/ipcalc/](https://diegojgonzalez.org/ipcalc/index.html)
