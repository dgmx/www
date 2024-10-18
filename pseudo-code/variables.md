---
title: "2. Variables"
parent: "Pseudo-Codigo"

---

# Variables en PSeInt

### ¿Qué son las Variables en Programación?

En programación, una **variable** es un espacio en la memoria del computador donde se almacena un dato o valor que puede cambiar durante la ejecución de un programa. Las variables permiten que los programas sean más flexibles y se puedan adaptar a diferentes situaciones, ya que los valores almacenados en ellas pueden ser modificados según las necesidades del algoritmo.

Las variables se utilizan para guardar datos como números, textos o valores lógicos, que luego pueden ser utilizados en cálculos, comparaciones o para mostrar información al usuario.

### Concepto de Variables en PSeInt

En PSeInt, una variable funciona de la misma manera que en otros lenguajes de programación. Es un nombre que asignamos a un valor que queremos almacenar y usar más adelante en nuestro algoritmo. Por ejemplo, si quieres almacenar la edad de una persona, puedes crear una variable llamada `edad`.

### Declaración de Variables en PSeInt

Antes de utilizar una variable en PSeInt, es necesario **declararla**, es decir, definir su nombre y el tipo de dato que va a almacenar. El tipo de dato nos dice qué clase de valor puede contener esa variable, como por ejemplo:

- **Entero**: Para números enteros (sin decimales), como 5, 10, -3.
- **Real**: Para números con decimales, como 3.14, -0.75.
- **Cadena**: Para texto, como "Hola", "Bachillerato".
- **Lógico**: Para valores booleanos (verdadero o falso).

La declaración de una variable en PSeInt sigue una estructura simple:

```plaintext
Definir nombre_de_variable Como TipoDeDato
```

Por ejemplo:
```plaintext
Definir edad Como Entero
Definir nombre Como Cadena
Definir temperatura Como Real
Definir esMayorDeEdad Como Logico
```

### Uso de Variables en un Algoritmo

Una vez que la variable está declarada, puedes asignarle valores y usarla en cálculos o para mostrar resultados. Veamos un ejemplo sencillo de cómo se utilizan las variables en un algoritmo que calcula el área de un rectángulo:

```plaintext
Algoritmo CalcularAreaRectangulo
    Definir base, altura, area Como Real
    Escribir "Ingrese la base del rectángulo: "
    Leer base
    Escribir "Ingrese la altura del rectángulo: "
    Leer altura
    area = base * altura
    Escribir "El área del rectángulo es: ", area
FinAlgoritmo
```

### Explicación del Algoritmo

1. **Declaración de Variables:** Primero declaramos tres variables `base`, `altura` y `area` como `Real`, porque necesitamos trabajar con números que pueden tener decimales.
2. **Leer Valores:** Solicitamos al usuario que ingrese los valores para la base y la altura, y almacenamos esos valores en las variables `base` y `altura`.
3. **Cálculo:** Usamos la fórmula del área del rectángulo (`base * altura`) y almacenamos el resultado en la variable `area`.
4. **Mostrar Resultado:** Finalmente, mostramos el resultado al usuario.

### Buenas Prácticas al Usar Variables

- **Nombres Claros y Descriptivos:** Utiliza nombres de variables que sean claros y describan su propósito. Por ejemplo, usa `edad` en lugar de `x` para almacenar la edad de una persona.
- **Evita Espacios y Caracteres Especiales:** Los nombres de las variables no deben tener espacios ni caracteres especiales. Usa guiones bajos si es necesario, como `nombre_completo`.
- **Consistencia en el Tipo de Dato:** Asegúrate de que las variables se declaren con el tipo de dato adecuado para evitar errores en el programa.

### Conclusión

Las variables son una parte esencial de la programación y del pseudocódigo en PSeInt. Nos permiten almacenar y manipular datos de manera eficiente, facilitando la creación de algoritmos flexibles y dinámicos. Al comprender cómo declarar y usar variables, los estudiantes estarán mejor preparados para escribir programas más complejos y resolver problemas de manera lógica.
