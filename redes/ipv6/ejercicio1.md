
# 🧪 Ejercicio Práctico: Generación de dirección IPv6 de enlace local con SLAAC y EUI-64

## Dirección MAC de ejemplo

```
58:8A:5A:2B:3C:4D
```

---

## 🔧 Paso 1: Separar en dos mitades

Dividimos la dirección MAC en dos partes de 3 bytes:

- Primera mitad: `58:8A:5A`
- Segunda mitad: `2B:3C:4D`

---

## 🔧 Paso 2: Insertar `FF:FE` en el medio

Resultado:

```
58:8A:5A:FF:FE:2B:3C:4D
```

---

## 🔧 Paso 3: Invertir el bit U/L (7º bit del primer byte)

- Primer byte original: `58` = `01011000` (binario)
- Invertimos el **7º bit** (de izquierda a derecha, posición 2):  
  `01011000` → `01011010` = `5A` (hex)

Nueva secuencia EUI-64:

```
5A:8A:5A:FF:FE:2B:3C:4D
```

---

## 🛜 Paso 4: Añadir prefijo de enlace local (`fe80::/64`)

Combinamos el prefijo con el identificador de interfaz EUI-64:

### ✅ Dirección IPv6 de enlace local final:

```
fe80::5a8a:5aff:fe2b:3c4d
```

---

## 🧠 Notas importantes

- Esta dirección es válida **solo dentro del enlace local**.
- Se genera automáticamente con **SLAAC + EUI-64**, sin usar DHCPv6.
- El bit U/L invertido indica que es una dirección **localmente administrada**.


🌐 [Descargar Ejercicio PDF](ejercicio1.pdf)