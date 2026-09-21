
## 9. Actividades Complementarias

### BLOQUE A: Cálculo y Conversión (Papel / Calculadora)

#### A1. Unidades - ¿Me estafan? [TICO.1.A.2.2]
> Compras un SSD de "1 TB" y Windows te dice 931 GB. Explica con cálculos por qué. ¿Cuántos bytes reales son 1 TB (SI) vs 1 TiB (IEC)? ¿Qué debería indicar el fabricante para ser honesto? Entregable: operación paso a paso.

#### A2. Maratón Binario-Hex [TICO.1.A.2.3 / 2.5]
> Convierte sin calculadora y verifica con `python3` o calculadora del SO en modo programador:
> a) 45₁₀ -> bin y hex  b) 101101₂ -> dec y hex  c) 3F₁₆ -> bin y dec  d) 255₁₀ -> hex
> Reto extra: 0xFF + 0x01 = ?

#### A3. Texto oculto [TICO.1.A.2.3]
> Decodifica: `01000011 01100001 01100110 01100101 00100000 01110100 01101001 01100011 01101111` ¿Es ASCII? Pásalo a texto. Ahora codifica tu nombre en UTF-8 binario usando https://www.convertstring.com/

### BLOQUE B: Prácticas con el Ordenador

#### B1. Hex Colors - Diseña tu paleta [TICO.1.A.2.5]
> En https://htmlcolorcodes.com/ crea una paleta para tu web:
> - Elige un rojo puro, un verde puro, un azul puro en hex.
> - Explica por qué `#FFFFFF` es blanco y `#000000` negro (24 bits RGB).
> - ¿Cuántos colores distintos permite 24 bits? Entregable: captura + explicación.

#### B2. Tamaño real de una foto [TICO.1.A.2.4]
> Con tu móvil haz una foto 12 MP. Mira en propiedades: resolución y tamaño en MB.
> Calcula tamaño teórico sin comprimir: ancho x alto x 24 /8 /1024/1024.
> Compara con tamaño real JPEG. Calcula ratio de compresión. ¿Con o sin pérdida?

#### B3. Compresión en acción [TICO.1.A.2.6]
> Crea una carpeta con 5 archivos: 1 txt (1000 palabras), 1 bmp/png, 1 wav, 1 docx.
> a) Comprímelos con ZIP (clic derecho > Comprimir) y anota % de reducción.
> b) Comprímelos con 7z y compara.
> c) Convierte el WAV a MP3 (https://convertio.co/) y compara tamaños.
> Conclusión: ¿Qué tipo de archivo se comprime mejor y por qué?

#### B4. Auditoría de archivos [TICO.1.A.2.7]
> En tu carpeta personal:
> 1. Muestra extensiones ocultas (Windows: Vista > Extensiones | macOS: Finder > Avanzado)
> 2. Lista 10 archivos con distinta extensión y clasifícalos (texto/imagen/ejecutable...)
> 3. Haz clic derecho > Propiedades: anota tamaño en bytes, KB y KiB, fecha, permisos.
> 4. Crea una ruta relativa y una absoluta a uno de ellos.

### BLOQUE C: Investigación y Reflexión

#### C1. ¿Por qué 44.1 kHz? [TICO.1.A.2.4]
> Investiga el Teorema de Nyquist-Shannon y por qué el CD se estandarizó en 44.100 Hz (pista: oído humano 20kHz + vídeo PAL/NTSC). Haz un esquema del proceso muestreo-cuantificación.

#### C2. El engaño del JPEG [TICO.1.A.2.6]
> Guarda la misma imagen en JPEG calidad 100%, 50% y 10%. Amplía al 300% y captura artefactos (bloques). Explica con pérdida vs sin pérdida. ¿Cuándo usarías PNG y cuándo JPEG?

#### C3. Sistemas de archivos [TICO.1.A.2.7]
> Investiga por qué un USB formateado en FAT32 no deja copiar un vídeo de 5 GB y qué solución propondrías (NTFS/exFAT). Tabla comparativa FAT32 vs NTFS vs ext4 vs APFS.

### BLOQUE D: Gamificación

#### D1. Binario con las manos
> Juego en grupos: cada dedo es un bit (arriba=1). Representad números del 0 al 31 y que el otro grupo los adivine. Competición a 10 rondas.

#### D2. Escape Room: "El disco corrupto"
> Reto en Genially/Forms: para recuperar el archivo necesitas: 1) Convertir hex a bin, 2) Calcular tamaño de imagen, 3) Identificar extensión correcta, 4) Elegir compresión adecuada.

---

### 📝 Banco de Preguntas para Test (para Kahoot)

1. 1 byte = ? -> 8 bits
2. 1 KiB = ? -> 1024 bytes
3. ¿Qué sistema usa 0-9 y A-F? -> Hexadecimal
4. 0xFF en decimal es -> 255
5. Binario 1010 es decimal -> 10
6. ASCII usa 7 bits (128 caracteres) V/F -> V
7. UTF-8 es compatible con ASCII V/F -> V
8. Imagen 800x600 24bpp sin comprimir ≈ -> 1,37 MB
9. ¿Formato vectorial escalable sin pérdida? -> SVG
10. Audio CD: 44.1 kHz, 16 bits, estéreo V/F -> V
11. 1 hex = 4 bits V/F -> V
12. ZIP es compresión con pérdida V/F -> F (sin pérdida)
13. JPEG es con pérdida V/F -> V
14. ¿Extensión de audio sin pérdida? -> FLAC/WAV
15. NTFS vs FAT32: ¿cuál permite >4GB por archivo? -> NTFS

---

## 10. Glosario

*   **Bit:** Dígito binario 0/1.
*   **Byte:** 8 bits.
*   **Binario:** Base 2.
*   **Hexadecimal:** Base 16, atajo de binario.
*   **ASCII/Unicode:** Tablas que asignan números a letras.
*   **Píxel:** Punto mínimo de una imagen raster.
*   **Muestreo:** Medir una onda a intervalos regulares.
*   **Códec:** Codificador-decodificador de audio/vídeo.
*   **Lossless/Lossy:** Sin / con pérdida.
*   **Extensión:** Sufijo (.jpg) que indica formato.
*   **Sistema de archivos:** Organización lógica del disco (NTFS, ext4).

## 11. Criterios de Evaluación LOMLOE

*   Explica cómo se almacena y transmite la información en binario.
*   Maneja unidades de información y convierte entre ellas (decimal/binario).
*   Codifica números y texto en distintos sistemas (bin, hex, ASCII, UTF-8).
*   Describe digitalización de imagen, audio y vídeo con parámetros (resolución, muestreo, FPS).
*   Convierte entre binario, decimal y hexadecimal.
*   Diferencia compresión con/sin pérdida y elige formato adecuado.
*   Gestiona archivos: identifica extensiones, rutas y sistemas de archivos.

---
> **Siguiente paso:** Importa el Kahoot de este tema desde `/tic1/` o pide la presentación .pptx.
