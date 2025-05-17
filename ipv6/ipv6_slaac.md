---
title: "2. Cálculo de Dirección IPv6 Link-local"
parent: "IPv6"
---

# 🌐 Cálculo de Dirección IPv6 Link-local usando SLAAC + EUI-64

Vamos a calcular la dirección IPv6 de enlace local (`link-local`) a partir de una dirección MAC, usando **SLAAC** y el método **EUI-64**.

---

## Dirección MAC de ejemplo

```
D2:4F:23:1A:5B:9C
```

---

## Paso 1: Separar en dos mitades

Primera mitad: `D2:4F:23`  
Segunda mitad: `1A:5B:9C`

---

## Paso 2: Insertar la secuencia EUI-64 `FF:FE` en el medio

```
D2:4F:23:FF:FE:1A:5B:9C
```

---

## Paso 3: Invertir el bit U/L del primer byte (Explicación al final)

- Primer byte: `D2` → binario: `11010010`
- Invertimos el 7.º bit (U/L): `11010010` → `11010000` → `D0`

Nueva secuencia:

```
D0:4F:23:FF:FE:1A:5B:9C
```

---

## Paso 4: Añadir el prefijo de enlace local `fe80::/64`

La dirección IPv6 completa:

```
fe80::d04f:23ff:fe1a:5b9c
```

---

## Resultado final

**Dirección IPv6 link-local**:

```
fe80::d04f:23ff:fe1a:5b9c
```



# ❓ ¿Por qué el bit U/L está invertido en EUI-64?

## 🧩 ¿Qué es el bit U/L?

El bit **U/L (Universal/Local)** es el **7º bit del primer byte** de una dirección MAC o del identificador de interfaz en IPv6.

- `0` → **Universal**: dirección asignada por el fabricante (única globalmente)
- `1` → **Local**: dirección creada localmente (por software o manualmente)

Por ejemplo:  
`E4:7C:F9:...`  
→ Primer byte `E4` = `11100100`  
→ 7º bit es `0` → **Universal**

---

## 🔄 ¿Por qué se invierte este bit al usar EUI-64?

Cuando se construye una dirección IPv6 mediante **SLAAC y EUI-64**, se **invierte el bit U/L** para indicar que la dirección fue **generada automáticamente** y **no asignada universalmente**.

Esto es parte del estándar IPv6 para diferenciar entre:

- Direcciones generadas automáticamente (con U/L = `1`)
- Direcciones MAC originales (con U/L = `0` si eran universales)

---

## 🛠 Ejemplo paso a paso

1. MAC original: `e4:7c:f9:db:b0:14`  
   → Primer byte: `e4` = `11100100`  (Pasamos de HEX a BIN)

2. Invertimos el **7º bit** (de izquierda a derecha):     
   `11100100` → `11100110` = `e6`  (Pasamos de BIN a HEX)

3. Insertamos `ff:fe` en el medio para formar el identificador de interfaz:  
   Resultado: `e6:7c:f9:ff:fe:db:b0:14`

---

## 🧠 ¿Por qué se hace esto?

- Cumple con los estándares IPv6 de autoconfiguración.
- Permite **distinguir direcciones generadas automáticamente** de las asignadas manualmente.
- **Evita colisiones** y facilita la gestión de direcciones en redes IPv6.

---

✅ **Resumen**: El bit U/L se invierte al generar direcciones IPv6 con EUI-64 para indicar que se trata de una dirección localmente generada, no una dirección de hardware original.
