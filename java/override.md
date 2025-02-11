---
title: "21. Override"
parent: "Java"
---


¿Qué es `@Override` en Java?
==========================

La anotación `@Override` en Java se usa para indicar que un método en una subclase está sobrescribiendo un método de su clase base (superclase o interfaz).

### ¿Por qué usar `@Override`?
1. Evita errores de sintaxis: Si el método no coincide exactamente con el de la superclase (por ejemplo, si el nombre o la firma son incorrectos), el compilador mostrará un error.
2. Mejora la legibilidad: Facilita identificar métodos que han sido sobrescritos.
3. Refuerza el principio de herencia: Asegura que una subclase está realmente redefiniendo un método en su superclase o interfaz.


Ejemplo 1: Sobrescribir un método de una superclase
---------------------------------------------------

```java
class Animal {
    void hacerSonido() {
        System.out.println("El animal hace un sonido");
    }
}

class Perro extends Animal {
    @Override
    void hacerSonido() {
        System.out.println("El perro ladra");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal miPerro = new Perro();
        miPerro.hacerSonido(); // Salida: El perro ladra
    }
}

```
**Explicación**

- La clase `Animal` tiene un método `hacerSonido()`.
- La clase `Perro` sobrescribe este método y usa `@Override`  para asegurarse de que la firma del método sea la correcta.
- En `main()`, cuando llamamos `hacerSonido()` en un objeto de Perro, se ejecuta la versión sobrescrita.


Ejemplo 2: Sobrescribir un método de una interfaz
-------------------------------------------------
```java
interface Figura {
    double calcularArea();
}

class Circulo implements Figura {
    private double radio;

    public Circulo(double radio) {
        this.radio = radio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * radio * radio;
    }
}
```
**Explicación**

- La interfaz `Figura` declara el método `calcularArea()`.
- La clase `Circulo` implementa `Figura` y sobrescribe el método, asegurando que la firma coincida con la de la interfaz.


Errores evitados con `@Override`
--------------------------------

Sin `@Override`, un error de escritura podría pasar desapercibido.

Ejemplo incorrecto (sin @Override)
```java
class Perro extends Animal {
    void hacersonido() {  // Error: el método no coincide con "hacerSonido()"
        System.out.println("El perro ladra");
    }
}
```

El compilador no detectaría el error si no se usa `@Override`. Pero al agregar `@Override`, el compilador advertiría que no hay un método `hacersonido()` en la superclase.

**Conclusión**

- Siempre usa `@Override` cuando sobrescribas métodos de una superclase o interfaz.
- Evita errores tipográficos y asegura que realmente estés sobrescribiendo un método existente.
- Hace el código más claro y mantenible.