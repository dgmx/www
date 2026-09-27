<script setup>
import AsciiTable from '../../.vitepress/theme/components/AsciiTable.vue'
</script>

# Tabla de códigos ASCII

Los **128 códigos ASCII** (American Standard Code for Information Interchange) con sus propiedades. Pasa el ratón por encima de cualquier carácter para ver su código decimal, octal, hexadecimal y binario, y haz clic para fijarlo en el panel de detalle.

<AsciiTable />

## Cómo se codifica un carácter

Cada carácter tiene un **número fijo** que lo identifica. Para el carácter `A`, ese número es `65`, y el mismo carácter se puede expresar en cuatro bases distintas:

| Base | Valor de `A` | Cómo se lee |
|---|---|---|
| Decimal | `65` | La base de la que usamos los números |
| Octal | `101` | Base 8, con dígitos del `0` al `7` |
| Hexadecimal | `41` | Base 16, con dígitos `0-9` y `A-F` |
| Binario | `1000001` | Base 2, con solo `0` y `1` |

Las cuatro expresiones valen lo mismo porque las cuatro son base 2 por dentro:

```text
A = 1000001₂ = 101₈ = 41₁₆ = 65₁₀
    7 bits      3 díg.    2 díg.    número
```

### Truco para pasar de binario a hexadecimal

Cada dígito hexadecimal equivale a **exactamente 4 bits**, así que basta con agrupar de cuatro en cuatro y sustituir:

```text
Binario:   0100 0001
Hexadecimal:  4    1        →  0x41
Decimal:     64 + 1  = 65
```

Si el número de bits no es múltiplo de 4, se completa con ceros a la izquierda:

```text
Binario:      101   →  0101 = 5
Hexadecimal:  0101  →  0x5
Decimal:      4 + 1  = 5
```

## Estructura de la tabla

El ASCII estándar tiene **128 códigos**, del `0` al `127`, y se divide en dos bloques muy distintos:

| Rango | Cantidad | Bloque | ¿Se ve? |
|---|---|---|---|
| `0` – `31` | 32 | Caracteres de control | No, dan órdenes al terminal |
| `32` – `126` | 95 | Caracteres imprimibles | Sí, tienen forma visible |
| `127` | 1 | `DEL` (borrar) | No |

### Los caracteres de control (0–31)

No producen ningún símbolo: **controlan el comportamiento del terminal**. Son los que hacen funcionar el salto de línea, el tabulador o el pitido.

| Dec | Nombre | Qué hace |
|---|---|---|
| `0` | `NUL` | No produce salida; en C marca el fin de una cadena |
| `7` | `BEL` | Emite un pitido audible |
| `8` | `BS` | Backspace: borra el carácter anterior |
| `9` | `TAB` | Avanza hasta la siguiente tabulación |
| `10` | `LF` | Salto de línea. Fin de línea en Unix y Linux |
| `13` | `CR` | Retorno de carro. Fin de línea en Windows |
| `27` | `ESC` | Inicia las secuencias de escape ANSI (los colores de la terminal) |
| `127` | `DEL` | Borrar. En Windows equivale a `CR` + `LF` |

::: warning El detalle de los fines de línea
`10` (LF) y `13` (CR) son códigos distintos aunque a simple vista parezca lo mismo:

- **Unix y Linux** usan solo `LF` (`0x0A`): un byte por salto de línea.
- **Windows** usa `CR` + `LF` (`0x0D 0x0A`): dos bytes por salto de línea.
- **Mac clásico** usaba solo `CR`.

Esto explica por qué un archivo de texto movido entre sistemas puede verse con saltos raros: son bytes que sobran o faltan.
:::

### Los caracteres imprimibles (32–126)

Sí tienen forma visible. Se pueden clasificar en:

| Categoría | Códigos | Cantidad |
|---|---|---|
| Espacio | `32` | 1 |
| Dígitos `0`–`9` | `48`–`57` | 10 |
| Mayúsculas `A`–`Z` | `65`–`90` | 26 |
| Minúsculas `a`–`z` | `97`–`122` | 26 |
| Puntuación y símbolos | resto de `33`–`126` | 32 |

Fíjate en que **las mayúsculas van antes que las minúsculas** en la tabla. La distancia entre `A` (`65`) y `a` (`97`) es de `32` posiciones, y ese `32` es exactamente el código del espacio.

## ASCII y su relación con el código binario

Un número de `7` bits tiene `2⁷ = 128` combinaciones posibles: `0` a `127`. Ese es exactamente el tamaño del ASCII, y por eso el bit más significativo (el de valor `128`) siempre vale `0`.

```text
Bit 7 (128)   Bit 6 (64)   Bit 5 (32)   Bit 4 (16)   Bit 3 (8)   Bit 2 (4)   Bit 1 (2)   Bit 0 (1)
     0            0           1            0           0          0          0          1     →  A = 65
```

Esto explica dos cosas que se ven en la tabla:

- El carácter `127` (`DEL`) es el **mayor valor posible** en 7 bits: `1111111₂`.
- Los caracteres imprimibles empiezan en el `32`, porque el `32` es el primer código que reserva un bit alto (`100000₂`). Los que van por debajo son de control.

## Expresar un carácter en cada lenguaje

El mismo carácter se escribe de forma distinta según el lenguaje. La tabla muestra estas formas al pasar el ratón por encima:

| Contexto | `A` (65) | `\n` (10) | `©` (169) |
|---|---|---|---|
| Decimal | `65` | `10` | `169` |
| Hexadecimal | `0x41` | `0x0A` | `0xA9` |
| Octal | `101` | `012` | `251` |
| Python | `chr(65)` | `"\n"` | `chr(169)` |
| HTML | `&#65;` | `&#10;` | `&#169;` |
| C / Java | `'\x41'` | `'\n'` | `'\xA9'` |
| URL | `%41` | `%0A` | `%A9` |

### Los atajos de escape más usados

No todos los caracteres de control se escriben con su número: existen nombres cortos que significan lo mismo.

| Escape | Número | Significado |
|---|---|---|
| `\0` | `0` | NUL, fin de cadena en C |
| `\a` | `7` | Alert (BEL): pitido |
| `\b` | `8` | Backspace |
| `\t` | `9` | Tabulación |
| `\n` | `10` | Salto de línea |
| `\v` | `11` | Tabulación vertical |
| `\f` | `12` | Salto de página |
| `\r` | `13` | Retorno de carro |
| `\x41` | `65` | Carácter por valor hexadecimal |
| `\101` | `65` | Carácter por valor octal |

::: tip Truco
El prefijo `0x` significa hexadecimal y el prefijo `0` en C significa octal. Por eso `0x41` es hexadecimal (`65` en decimal) y `041` sería octal (`33` en decimal), que no es lo mismo.
:::

## ASCII frente a Unicode

El ASCII se quedó corto en 1981, cuando un carácter ocupaba un byte y solo había lugar para 128. La respuesta fue **Unicode**, que reparte el trabajo:

- **ASCII** es un subconjunto de Unicode. Los 128 primeros códigos significan **exactamente lo mismo** en ambos.
- **Latin-1** (ISO-8859-1) añadió los 128 caracteres siguientes, hasta el `255`.
- **Unicode** permite más de un millón de caracteres, cada uno con su número. El emoji `😀` es el `128512`.
- **UTF-8** es la codificación que usa hoy casi todo: un carácter ASCII ocupa **1 byte**, y por eso todo el texto ASCII es también texto UTF-8 válido.

```text
A  (65)   → UTF-8: 0100 0001              → 1 byte
€  (8364) → UTF-8: 1110 0010 1000 0100    → 3 bytes
😀 (128512)→ UTF-8: 4 bytes
```

Que el carácter `A` ocupe siempre un solo byte es la razón por la que los protocolos de red y los ficheros de configuración de toda la vida han podido seguir funcionando durante décadas.

## Aplicaciones prácticas

* **Ficheros de texto y de configuración:** todo byte de un `.txt`, `.csv` o `.conf` con acentos normales es un código ASCII.
* **Protocolos de red:** las cabeceras HTTP, los comandos FTP y el Telnet viajan como texto ASCII legible.
* **Permisos en Linux:** `chmod 644` son tres números octales; en binario `110 100 100` significan `rw-r--r--`.
* **Bases de datos y lenguajes:** los delimitadores, comillas y operadores son siempre caracteres ASCII.
* **Depuración:** cuando un fichero «no se abre bien», la causa suele ser un `\r` de más o un salto de línea de Windows donde se esperaba de Unix.
