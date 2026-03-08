# Manual de Programación Java — Diagramas de Clases UML

> **Guía Completa para Modelado Orientado a Objetos**  
> Versión: Java 17+ | UML 2.5 | Nivel: Principiante a Intermedio

---

## Tabla de Contenidos

1. [Introducción al Diagrama de Clases UML](#1-introducción-al-diagrama-de-clases-uml)
2. [Estructura de una Clase en UML](#2-estructura-de-una-clase-en-uml)
3. [Herencia — extends](#3-herencia--extends)
4. [Interfaces y Clases Abstractas](#4-interfaces-y-clases-abstractas)
5. [Relaciones entre Clases](#5-relaciones-entre-clases)
6. [Patrones de Diseño en UML](#6-patrones-de-diseño-en-uml)
7. [Generics y Colecciones en UML](#7-generics-y-colecciones-en-uml)
8. [Caso de Estudio Completo — Sistema Biblioteca](#8-caso-de-estudio-completo--sistema-biblioteca)
9. [Referencia Rápida UML → Java](#9-referencia-rápida-uml--java)
10. [Buenas Prácticas y Errores Comunes](#10-buenas-prácticas-y-errores-comunes)
11. [Apéndice — Símbolos UML de Referencia](#apéndice--símbolos-uml-de-referencia)

---

## 1. Introducción al Diagrama de Clases UML

UML (**Unified Modeling Language**) es un lenguaje estándar de modelado para sistemas orientados a objetos. El Diagrama de Clases es el diagrama más fundamental y sirve como plano estructural de cualquier sistema de software.

### 1.1 ¿Qué es un Diagrama de Clases?

Un Diagrama de Clases representa la **estructura estática** de un sistema, mostrando sus clases, atributos, métodos y las relaciones entre ellos. Es la base para escribir código Java orientado a objetos.

> 💡 **Regla de Oro:** Un Diagrama de Clases bien construido se traduce directamente a código Java. Cada caja representa una clase, cada línea representa código de relación.

### 1.2 Componentes Fundamentales

| Elemento | Descripción |
|---|---|
| **Clase** | Rectángulo dividido en 3 secciones: nombre, atributos y métodos |
| **Atributo** | Variable de instancia con visibilidad, nombre y tipo |
| **Método** | Operación con visibilidad, nombre, parámetros y tipo de retorno |
| **Relación** | Línea o flecha que conecta dos clases con semántica específica |
| **Multiplicidad** | Cardinalidad de la relación: `1`, `0..*`, `1..*`, etc. |

---

## 2. Estructura de una Clase en UML

### 2.1 Sintaxis de Atributos y Métodos

La notación UML para miembros de una clase sigue estas reglas:

| Notación | Significado |
|---|---|
| `visibilidad nombre: Tipo` | Formato general de atributo |
| `visibilidad nombre(params): ReturnType` | Formato general de método |
| `+` | **public** — accesible desde cualquier clase |
| `-` | **private** — accesible solo dentro de la clase |
| `#` | **protected** — accesible en la clase y sus subclases |
| `~` | **package** — accesible dentro del mismo paquete |
| `{abstract}` | El método no tiene implementación |
| `{static}` | Miembro pertenece a la clase, no a instancias (subrayado en UML) |

### 2.2 Representación de una Clase

```
┌─────────────────────────┐
│        Persona          │  ← Nombre de la clase
├─────────────────────────┤
│ - nombre: String        │  ← Atributos (privados)
│ - edad: int             │
│ - correo: String        │
├─────────────────────────┤
│ + getNombre(): String   │  ← Métodos (públicos)
│ + setNombre(s: String)  │
│ + getEdad(): int        │
│ + toString(): String    │
└─────────────────────────┘
```

### 2.3 Código Java Equivalente

```java
public class Persona {
    // Atributos privados (- en UML)
    private String nombre;
    private int    edad;
    private String correo;

    // Constructor
    public Persona(String nombre, int edad, String correo) {
        this.nombre = nombre;
        this.edad   = edad;
        this.correo = correo;
    }

    // Métodos públicos (+ en UML)
    public String getNombre() { return nombre; }
    public void   setNombre(String s) { this.nombre = s; }
    public int    getEdad() { return edad; }

    @Override
    public String toString() {
        return "Persona{nombre='" + nombre + "', edad=" + edad + "}";
    }
}
```

---

## 3. Herencia — extends

La herencia permite que una clase (**subclase**) adquiera propiedades y comportamientos de otra (**superclase**). En UML se representa con una **flecha de punta triangular hueca** apuntando hacia la superclase.

### 3.1 Notación UML

```
        ┌───────────────────┐
        │      Animal       │
        ├───────────────────┤
        │ - nombre: String  │
        │ - edad: int       │
        ├───────────────────┤
        │ + getNombre()     │
        │ + hacerSonido()   │
        └────────┬──────────┘
                 △  ← flecha hueca = herencia
        ┌────────┴────────┐
        │                 │
┌───────┴──────┐   ┌──────┴────────┐
│    Perro     │   │     Gato      │
├──────────────┤   ├───────────────┤
│ - raza:String│   │-esIndoor:bool │
├──────────────┤   ├───────────────┤
│+hacerSonido()│   │+hacerSonido() │
│+buscarPelota │   │+ronronear()   │
└──────────────┘   └───────────────┘
```

> ⚠️ **Regla UML:** La flecha apunta **siempre hacia la superclase**. Se lee: "Perro **extends** Animal".

### 3.2 Código Java

**Superclase Animal:**

```java
public class Animal {
    private String nombre;
    private int    edad;

    public Animal(String nombre, int edad) {
        this.nombre = nombre;
        this.edad   = edad;
    }

    public String getNombre() { return nombre; }

    public void hacerSonido() {
        System.out.println("El animal hace un sonido");
    }
}
```

**Subclase Perro:**

```java
public class Perro extends Animal {
    private String raza;

    public Perro(String nombre, int edad, String raza) {
        super(nombre, edad);  // llama al constructor padre
        this.raza = raza;
    }

    @Override
    public void hacerSonido() {
        System.out.println("¡Guau guau!");
    }

    public void buscarPelota() {
        System.out.println(getNombre() + " busca la pelota");
    }
}
```

**Subclase Gato:**

```java
public class Gato extends Animal {
    private boolean esIndoor;

    public Gato(String nombre, int edad, boolean esIndoor) {
        super(nombre, edad);
        this.esIndoor = esIndoor;
    }

    @Override
    public void hacerSonido() {
        System.out.println("¡Miau!");
    }

    public void ronronear() {
        System.out.println(getNombre() + " ronronea...");
    }
}
```

---

## 4. Interfaces y Clases Abstractas

### 4.1 Diferencias Clave

| Característica | `interface` | Clase `abstract` |
|---|---|---|
| Notación UML | `«interface»` | `«abstract»` |
| Flecha UML | Línea **discontinua** con triángulo | Línea **sólida** con triángulo |
| Keyword Java | `implements` | `extends` |
| Herencia múltiple | ✅ Una clase puede implementar N interfaces | ❌ Solo extiende 1 clase abstracta |
| Atributos | Solo constantes (`static final`) | Atributos normales |
| Métodos `default` | ✅ Desde Java 8 | ✅ Siempre |

### 4.2 Notación UML

```
«interface»                    «abstract»
┌──────────────┐              ┌─────────────────────────┐
│   Volable    │              │         Figura          │
├──────────────┤              ├─────────────────────────┤
│              │              │ # color: String         │
├──────────────┤              ├─────────────────────────┤
│+volar(): void│              │ + getColor(): String    │
│+aterrizar()  │              │ + calcularArea(): double│
└──────┬───────┘              │   {abstract}            │
       △ (línea discontinua)  └───────────┬─────────────┘
  ┌────┴────┐                             △ (línea sólida)
  │         │                             │
┌─┴──────┐ ┌┴──────┐               ┌─────┴──────┐
│ Aguila │ │ Avion │               │  Circulo   │
└────────┘ └───────┘               └────────────┘
```

### 4.3 Código Java

**Interface Volable:**

```java
public interface Volable {
    void volar();       // implícitamente public abstract
    void aterrizar();

    // Método default (Java 8+)
    default void despegar() {
        System.out.println("Preparando despegue...");
        volar();
    }
}
```

**Clase Abstracta Figura:**

```java
public abstract class Figura {
    protected String color;   // # en UML = protected

    public Figura(String color) {
        this.color = color;
    }

    public String getColor() { return color; }

    // Método abstracto — las subclases DEBEN implementarlo
    public abstract double calcularArea();
}
```

**Clase Circulo (extends + implements):**

```java
public class Circulo extends Figura {
    private double radio;

    public Circulo(String color, double radio) {
        super(color);
        this.radio = radio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * radio * radio;
    }
}
```

**Clase Aguila (implements interface):**

```java
public class Aguila implements Volable {
    private double envergadura;

    public Aguila(double envergadura) {
        this.envergadura = envergadura;
    }

    @Override public void volar()     { System.out.println("El águila planea"); }
    @Override public void aterrizar() { System.out.println("El águila aterriza"); }
}
```

---

## 5. Relaciones entre Clases

### 5.1 Tipos de Relaciones

| Relación | Símbolo UML | Descripción |
|---|---|---|
| **Herencia** | `──────▷` (sólida, triángulo hueco) | "Es un" — `extends` |
| **Realización** | `- - - ▷` (discontinua, triángulo hueco) | Implementa interface — `implements` |
| **Asociación** | `──────>` (sólida, flecha abierta) | "Conoce a" — campo de referencia |
| **Agregación** | `──────◇` (rombo hueco) | "Tiene un" — ciclo de vida independiente |
| **Composición** | `──────◆` (rombo sólido) | "Compuesto por" — vida dependiente del todo |
| **Dependencia** | `- - - ->` (discontinua, flecha) | Uso temporal — parámetro o variable local |

### 5.2 Diagrama de Relaciones

```
┌──────────────┐  1    1..* ┌──────────────┐  1    1..* ┌──────────────┐
│  Universidad │◆───────────│ Departamento │────────────│   Profesor   │
└──────────────┘ composición└──────────────┘ asociación └──────────────┘

┌──────────────┐  0..*  0..* ┌──────────────┐
│  Estudiante  │─────────────│    Curso     │
└──────────────┘ asociación  └──────────────┘
```

### 5.3 Multiplicidades

| Notación | Significado |
|---|---|
| `1` | Exactamente uno |
| `0..1` | Cero o uno (opcional) |
| `*` o `0..*` | Cero o muchos |
| `1..*` | Uno o muchos (al menos uno) |
| `2..5` | Entre dos y cinco |
| `n` | Exactamente n |

### 5.4 Código Java para cada Relación

**Asociación** — una clase referencia a otra:

```java
// Departamento ───> Profesor  (asociación)
public class Departamento {
    private String         nombre;
    private List<Profesor> profesores;  // 1..* profesores

    public void agregarProfesor(Profesor p) {
        profesores.add(p);
    }
}
```

**Composición** — la parte no puede existir sin el todo:

```java
// Universidad ◆─── Departamento  (composición)
public class Universidad {
    private final List<Departamento> departamentos = new ArrayList<>();

    public void agregarDepto(String nombre) {
        // El Departamento se crea AQUÍ — su vida depende de Universidad
        departamentos.add(new Departamento(nombre));
    }
}
```

**Agregación** — la parte puede existir de forma independiente:

```java
// Equipo ◇─── Jugador  (agregación)
public class Equipo {
    private List<Jugador> jugadores;  // los jugadores existen fuera del equipo

    public Equipo(List<Jugador> jugadores) {
        this.jugadores = jugadores;  // recibe referencias externas
    }
}
```

**Dependencia** — uso temporal en un método:

```java
// Reporte - - -> Formatter  (dependencia)
public class Reporte {
    public void generar(Formatter formatter) {  // uso temporal
        String contenido = formatter.formatear(this);
        System.out.println(contenido);
    }
}
```

---

## 6. Patrones de Diseño en UML

### 6.1 Patrón Singleton

Garantiza que una clase tenga **una única instancia** y proporciona un punto de acceso global. En UML el atributo y método estáticos se representan **subrayados**.

```
┌──────────────────────────────────────┐
│           ConfiguracionApp           │
├──────────────────────────────────────┤
│ - instancia: ConfiguracionApp {static}│
│ - idioma: String                     │
│ - tema: String                       │
├──────────────────────────────────────┤
│ - ConfiguracionApp()                 │
│ + getInstance(): ConfiguracionApp    │
│   {static}                           │
│ + getIdioma(): String                │
│ + setIdioma(s: String): void         │
└──────────────────────────────────────┘
```

```java
public class ConfiguracionApp {
    private static ConfiguracionApp instancia;  // {static} en UML
    private String idioma;
    private String tema;

    private ConfiguracionApp() {   // constructor privado (- en UML)
        this.idioma = "es";
        this.tema   = "claro";
    }

    public static ConfiguracionApp getInstance() {
        if (instancia == null) {
            instancia = new ConfiguracionApp();
        }
        return instancia;
    }

    public String getIdioma() { return idioma; }
    public void   setIdioma(String idioma) { this.idioma = idioma; }
}

// Uso
ConfiguracionApp config = ConfiguracionApp.getInstance();
config.setIdioma("en");
```

### 6.2 Patrón Factory Method

Define una interfaz para crear objetos, pero deja que las subclases o una factory decidan qué clase instanciar.

```
«interface»
┌────────────────────┐
│    Notificacion    │
├────────────────────┤
│ + enviar(s:String) │
└──────────┬─────────┘
           △
    ┌──────┴──────┐
    │             │
┌───┴────────┐ ┌──┴──────────────┐
│Notificacion│ │ NotificacionSMS │
│   Email    │ ├─────────────────┤
├────────────┤ │+enviar(s:String)│
│+enviar(s)  │ └─────────────────┘
└────────────┘

┌───────────────────────────┐
│   NotificacionFactory     │
├───────────────────────────┤
│+crear(tipo:String):       │
│  Notificacion {static}    │
└───────────────────────────┘
```

```java
public interface Notificacion {
    void enviar(String mensaje);
}

public class NotificacionEmail implements Notificacion {
    @Override
    public void enviar(String mensaje) {
        System.out.println("Email: " + mensaje);
    }
}

public class NotificacionSMS implements Notificacion {
    @Override
    public void enviar(String mensaje) {
        System.out.println("SMS: " + mensaje);
    }
}

public class NotificacionFactory {
    public static Notificacion crear(String tipo) {
        return switch (tipo) {
            case "email" -> new NotificacionEmail();
            case "sms"   -> new NotificacionSMS();
            default -> throw new IllegalArgumentException("Tipo desconocido: " + tipo);
        };
    }
}

// Uso
Notificacion n = NotificacionFactory.crear("email");
n.enviar("¡Bienvenido al sistema!");
```

---

## 7. Generics y Colecciones en UML

Los genéricos se representan en UML con parámetros de tipo entre corchetes angulares: `Repositorio<T>`.

### 7.1 Clase Genérica

```
┌──────────────────────────┐
│      Repositorio<T>      │
├──────────────────────────┤
│ - elementos: List<T>     │
├──────────────────────────┤
│ + agregar(e: T): void    │
│ + obtener(i: int): T     │
│ + obtenerTodos(): List<T>│
│ + contar(): int          │
└──────────────────────────┘
```

```java
public class Repositorio<T> {
    private List<T> elementos = new ArrayList<>();

    public void   agregar(T elemento)    { elementos.add(elemento); }
    public T      obtener(int indice)    { return elementos.get(indice); }
    public List<T> obtenerTodos()        { return Collections.unmodifiableList(elementos); }
    public int    contar()               { return elementos.size(); }
}

// Uso tipado
Repositorio<Persona> repo = new Repositorio<>();
repo.agregar(new Persona("Ana", 22, "ana@uni.edu"));
System.out.println(repo.contar());  // 1
```

### 7.2 Bounded Generics

```java
// <T extends Figura> — T debe ser Figura o alguna subclase
public class LienzoDibujo<T extends Figura> {
    private List<T> figuras = new ArrayList<>();

    public void agregar(T figura) { figuras.add(figura); }

    public double areaTotal() {
        return figuras.stream()
                      .mapToDouble(Figura::calcularArea)
                      .sum();
    }
}

// Uso
LienzoDibujo<Circulo> lienzo = new LienzoDibujo<>();
lienzo.agregar(new Circulo("rojo", 5.0));
lienzo.agregar(new Circulo("azul", 3.0));
System.out.println("Área total: " + lienzo.areaTotal());
```

---

## 8. Caso de Estudio Completo — Sistema Biblioteca

Aplicamos todos los conceptos en un sistema de gestión de biblioteca que integra herencia, interfaces, composición y multiplicidad.

### 8.1 Descripción del Sistema

- La biblioteca **contiene** muchos libros y tiene socios registrados (composición).
- Los libros pueden ser **físicos** o **digitales** (herencia).
- Los socios realizan **préstamos** (asociación).
- Existe una **interface** `Prestable` que implementan los libros.

### 8.2 Diagrama UML del Sistema

```
«interface»
┌──────────────────┐
│    Prestable     │
├──────────────────┤
│+estaDisponible() │
│+prestar(s:Socio) │
│+devolver()       │
└────────┬─────────┘
         △ (implements, línea discontinua)
         │
┌────────┴───────────┐
│    Libro           │ «abstract»
├────────────────────┤
│ - isbn: String     │
│ - titulo: String   │
│ - autor: String    │
│ - disponible: bool │
├────────────────────┤
│+getTitulo():String │
│+getTipo():String   │
│  {abstract}        │
└──────┬─────────────┘
       △
  ┌────┴────────┐
  │             │
┌─┴──────────┐ ┌┴────────────┐
│ LibroFisico│ │ LibroDigital│
└────────────┘ └─────────────┘

┌──────────────────┐   1    0..* ┌───────────────┐
│   Biblioteca     │◆────────────│     Libro     │
├──────────────────┤             └───────────────┘
│ - nombre: String │   1    0..* ┌───────────────┐
│                  │◆────────────│    Socio      │
│+realizarPrestamo │             └───────┬───────┘
│+prestamosActivos │                     │ 0..*
└──────────────────┘                     │
                                  ┌──────┴──────┐
                                  │   Prestamo  │
                                  └─────────────┘
```

### 8.3 Código Completo

**Interface Prestable:**

```java
public interface Prestable {
    boolean estaDisponible();
    void    prestar(Socio socio);
    void    devolver();
}
```

**Clase abstracta Libro:**

```java
public abstract class Libro implements Prestable {
    private final String  isbn;
    private final String  titulo;
    private final String  autor;
    private       boolean disponible = true;

    public Libro(String isbn, String titulo, String autor) {
        this.isbn   = isbn;
        this.titulo = titulo;
        this.autor  = autor;
    }

    public String getIsbn()   { return isbn;   }
    public String getTitulo() { return titulo; }
    public String getAutor()  { return autor;  }

    @Override public boolean estaDisponible() { return disponible; }
    @Override public void    devolver()        { disponible = true; }

    @Override
    public void prestar(Socio socio) {
        if (!disponible) throw new IllegalStateException("Libro no disponible");
        disponible = false;
    }

    // Método abstracto — subclases deben implementarlo
    public abstract String getTipo();
}
```

**Clase LibroFisico:**

```java
public class LibroFisico extends Libro {
    private int    numeroPaginas;
    private String ubicacionEstante;

    public LibroFisico(String isbn, String titulo, String autor,
                       int paginas, String estante) {
        super(isbn, titulo, autor);
        this.numeroPaginas    = paginas;
        this.ubicacionEstante = estante;
    }

    @Override public String getTipo()      { return "Físico"; }
    public String            getUbicacion() { return ubicacionEstante; }
}
```

**Clase LibroDigital:**

```java
public class LibroDigital extends Libro {
    private String urlDescarga;
    private double tamanoMB;

    public LibroDigital(String isbn, String titulo, String autor,
                        String url, double tamanoMB) {
        super(isbn, titulo, autor);
        this.urlDescarga = url;
        this.tamanoMB    = tamanoMB;
    }

    @Override public String getTipo()      { return "Digital"; }
    public String            getUrl()       { return urlDescarga; }
}
```

**Clase Socio:**

```java
public class Socio {
    private final String          id;
    private       String          nombre;
    private final List<Prestamo>  historialPrestamos = new ArrayList<>();

    public Socio(String id, String nombre) {
        this.id     = id;
        this.nombre = nombre;
    }

    public String getId()     { return id;     }
    public String getNombre() { return nombre; }

    public void registrarPrestamo(Prestamo p) {
        historialPrestamos.add(p);
    }

    public List<Prestamo> getHistorial() {
        return Collections.unmodifiableList(historialPrestamos);
    }
}
```

**Clase Prestamo:**

```java
import java.time.LocalDate;

public class Prestamo {
    private final Libro     libro;
    private final Socio     socio;
    private final LocalDate fechaPrestamo;
    private       LocalDate fechaDevolucion;
    private       boolean   activo = true;

    public Prestamo(Libro libro, Socio socio) {
        this.libro         = libro;
        this.socio         = socio;
        this.fechaPrestamo = LocalDate.now();
        libro.prestar(socio);
        socio.registrarPrestamo(this);
    }

    public void cerrar() {
        libro.devolver();
        this.fechaDevolucion = LocalDate.now();
        this.activo          = false;
    }

    public boolean   isActivo()           { return activo;           }
    public Libro     getLibro()           { return libro;            }
    public LocalDate getFechaPrestamo()   { return fechaPrestamo;    }
    public LocalDate getFechaDevolucion() { return fechaDevolucion;  }
}
```

**Clase Biblioteca (composición central):**

```java
public class Biblioteca {
    private final String         nombre;
    private final List<Libro>    catalogo  = new ArrayList<>();
    private final List<Socio>    socios    = new ArrayList<>();
    private final List<Prestamo> prestamos = new ArrayList<>();

    public Biblioteca(String nombre) { this.nombre = nombre; }

    public void agregarLibro(Libro libro) { catalogo.add(libro); }
    public void registrarSocio(Socio s)   { socios.add(s); }

    public Prestamo realizarPrestamo(String isbn, String idSocio) {
        Libro libro = catalogo.stream()
            .filter(l -> l.getIsbn().equals(isbn) && l.estaDisponible())
            .findFirst()
            .orElseThrow(() -> new RuntimeException("Libro no disponible: " + isbn));

        Socio socio = socios.stream()
            .filter(s -> s.getId().equals(idSocio))
            .findFirst()
            .orElseThrow(() -> new RuntimeException("Socio no encontrado: " + idSocio));

        Prestamo p = new Prestamo(libro, socio);
        prestamos.add(p);
        return p;
    }

    public long prestamosActivos() {
        return prestamos.stream().filter(Prestamo::isActivo).count();
    }
}
```

**Programa principal de prueba:**

```java
public class Main {
    public static void main(String[] args) {
        Biblioteca biblioteca = new Biblioteca("Biblioteca Central");

        // Agregar libros
        biblioteca.agregarLibro(new LibroFisico("978-0-13-468599-1",
            "Clean Code", "Robert C. Martin", 431, "A-12"));
        biblioteca.agregarLibro(new LibroDigital("978-0-596-51774-8",
            "Head First Java", "Kathy Sierra", "http://ejemplo.com/hfj.pdf", 45.2));

        // Registrar socios
        biblioteca.registrarSocio(new Socio("S001", "María García"));
        biblioteca.registrarSocio(new Socio("S002", "Carlos López"));

        // Realizar préstamo
        Prestamo p = biblioteca.realizarPrestamo("978-0-13-468599-1", "S001");
        System.out.println("Préstamos activos: " + biblioteca.prestamosActivos());  // 1

        // Devolver
        p.cerrar();
        System.out.println("Préstamos activos: " + biblioteca.prestamosActivos());  // 0
    }
}
```

---

## 9. Referencia Rápida UML → Java

| Notación UML | Código Java |
|---|---|
| `+ atributo: Tipo` | `public Tipo atributo;` |
| `- atributo: Tipo` | `private Tipo atributo;` |
| `# atributo: Tipo` | `protected Tipo atributo;` |
| `+ metodo(): void` | `public void metodo() {}` |
| `+ metodo(): Tipo {abstract}` | `public abstract Tipo metodo();` |
| `+ metodo(): Tipo {static}` | `public static Tipo metodo() {}` |
| `ClaseA ──▷ ClaseB` (herencia) | `class ClaseA extends ClaseB` |
| `ClaseA - - ▷ InterfazB` (realización) | `class ClaseA implements InterfazB` |
| `ClaseA ──── ClaseB` (asociación) | ClaseA tiene un campo de tipo ClaseB |
| `ClaseA ◆─── ClaseB` (composición) | ClaseA crea instancias de ClaseB internamente |
| `ClaseA ◇─── ClaseB` (agregación) | ClaseA recibe referencias externas a ClaseB |
| `Clase<T>` | `class Clase<T> { ... }` |
| `«interface»` | `public interface Nombre` |
| `«abstract»` | `public abstract class Nombre` |
| `1..*` | `List<Tipo>` (al menos un elemento) |
| `0..1` | `Optional<Tipo>` o campo nullable |

---

## 10. Buenas Prácticas y Errores Comunes

### 10.1 Buenas Prácticas

- **Modelar antes de codificar:** el diagrama es el contrato del sistema.
- **Nombres en singular** para clases: `Persona`, no `Personas`.
- **Encapsulación siempre:** atributos privados (`-`), acceso mediante métodos públicos.
- **Preferir composición sobre herencia** cuando no existe una relación "es un".
- **Limitar la herencia** a 2–3 niveles máximo para mantener legibilidad.
- **Documentar multiplicidades:** definen reglas de negocio directamente en el diagrama.
- **Interfaces para contratos**, clases abstractas para comportamiento parcial compartido.
- **Principio de responsabilidad única (SRP):** cada clase debe tener un único motivo para cambiar.

### 10.2 Errores Comunes

| Error | Corrección |
|---|---|
| Clase con demasiados atributos/métodos | Aplicar SRP: dividir en clases con responsabilidades únicas |
| Herencia usada solo para reutilizar código | Usar composición o interfaces con `default` methods |
| Olvidar multiplicidades en relaciones | Anotar siempre la cardinalidad en ambos extremos |
| Confundir agregación con composición | Composición: la parte no existe sin el todo; en agregación sí |
| Ciclos de dependencia entre paquetes | Introducir una interface para romper el ciclo |
| Clase con múltiples herencias | Java no lo permite; usar múltiples interfaces en su lugar |

---

## Apéndice — Símbolos UML de Referencia

| Símbolo | Nombre | Uso |
|---|---|---|
| `──────▷` | Herencia / Generalización | `extends` — flecha sólida, triángulo hueco |
| `- - - ▷` | Realización | `implements` — flecha discontinua, triángulo hueco |
| `──────>` | Asociación | Referencia directa entre clases |
| `──────◇` | Agregación | "Tiene un", ciclo de vida independiente (rombo hueco) |
| `──────◆` | Composición | "Compuesto por", vida dependiente (rombo sólido) |
| `- - - ->` | Dependencia | Uso temporal: parámetro o variable local |
| `«interface»` | Estereotipo de interfaz | Clase que define un contrato |
| `«abstract»` | Estereotipo de clase abstracta | Clase que no puede instanciarse directamente |
| `{abstract}` | Restricción de método | El método no tiene implementación en esta clase |
| `{static}` | Restricción estática | Miembro de clase, no de instancia (subrayado en UML) |
| `1, 0..1, *, 1..*` | Multiplicidades | Cardinalidad en los extremos de una relación |

---

> 📚 **Referencias:**
> - Especificación oficial UML 2.5: [omg.org](https://www.omg.org/spec/UML/)
> - Oracle Java Documentation: [docs.oracle.com](https://docs.oracle.com/en/java/)
> - *Design Patterns* — Gamma, Helm, Johnson, Vlissides (Gang of Four)
> - *Clean Code* — Robert C. Martin
