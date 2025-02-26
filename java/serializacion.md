---
title: 22. Serialización 
parent: Java
---

Serialización de Objetos en Java
================================

La **serialización** es el proceso mediante el cual un objeto en Java se convierte en una secuencia de bytes para poder ser almacenado en un archivo, transmitido por una red o guardado en una base de datos. El proceso inverso, llamado **deserialización**, restaura el objeto desde esa secuencia de bytes.

En este artículo, exploraremos cómo funciona la serialización en Java, los conceptos básicos, las clases involucradas y cómo implementarla de manera eficiente.

Tabla de contenidos


- [Serialización de Objetos en Java](#serialización-de-objetos-en-java)
  - [¿Qué es la Serialización?](#qué-es-la-serialización)
    - [Propósito de la Serialización](#propósito-de-la-serialización)
  - [Cómo Funciona la Serialización en Java](#cómo-funciona-la-serialización-en-java)
    - [Ejemplo de Clase Serializable](#ejemplo-de-clase-serializable)
    - [Explicación](#explicación)
  - [Serialización de un Objeto](#serialización-de-un-objeto)
    - [Ejemplo de Serialización](#ejemplo-de-serialización)
      - [Explicación](#explicación-1)
  - [Deserialización de un Objeto](#deserialización-de-un-objeto)
    - [Ejemplo de Deserialización](#ejemplo-de-deserialización)
      - [Explicación](#explicación-2)
  - [serialVersionUID y su Importancia](#serialversionuid-y-su-importancia)
    - [Ejemplo de serialVersionUID](#ejemplo-de-serialversionuid)
  - [Serialización de Objetos Complejos](#serialización-de-objetos-complejos)
    - [Ejemplo de Serialización de Objetos Complejos](#ejemplo-de-serialización-de-objetos-complejos)
  - [Modificadores Transient y Static](#modificadores-transient-y-static)
    - [Ejemplo de Campo Transient](#ejemplo-de-campo-transient)
  - [Serialización Personalizada](#serialización-personalizada)
    - [Ejemplo de Serialización Personalizada](#ejemplo-de-serialización-personalizada)
  - [Conclusión](#conclusión)

¿Qué es la Serialización?
-------------------------

En Java, la serialización se implementa a través de la interfaz **`Serializable`**. Un objeto serializable es aquel que puede ser convertido en bytes y transferido o almacenado para su posterior deserialización. Esta característica es útil para persistir el estado de un objeto o para enviar objetos a través de una red.

### Propósito de la Serialización

*   **Persistencia**: Guardar el estado de un objeto en un archivo o base de datos.
*   **Comunicación**: Transmitir objetos a través de una red (por ejemplo, entre clientes y servidores).
*   **Clonación profunda**: Crear una copia profunda de un objeto al serializarlo y deserializarlo.


Cómo Funciona la Serialización en Java
--------------------------------------

Para que un objeto sea serializable en Java, su clase debe implementar la interfaz **`Serializable`** del paquete `java.io`. Esta interfaz es una marca (marker interface), lo que significa que no contiene ningún método, pero le indica al sistema que los objetos de esa clase pueden ser serializados.

### Ejemplo de Clase Serializable
```java
    import java.io.Serializable;

    public class Persona implements Serializable {
        private static final long serialVersionUID = 1L;

        private String nombre;
        private int edad;

        public Persona(String nombre, int edad) {
            this.nombre = nombre;
            this.edad = edad;
        }

        // Getters y Setters
        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public int getEdad() {
            return edad;
        }

        public void setEdad(int edad) {
            this.edad = edad;
        }
    }
```

### Explicación

*   **`Serializable`**: Indica que la clase `Persona` es serializable.
*   **`serialVersionUID`**: Este identificador único asegura que las versiones deserializadas de un objeto son compatibles con la versión serializada. Si este valor cambia, se generará una excepción `InvalidClassException`.

Serialización de un Objeto
--------------------------

Para serializar un objeto, se utiliza la clase **`ObjectOutputStream`** que se encuentra en el paquete `java.io`. Esta clase permite escribir objetos en una secuencia de bytes, que puede ser almacenada en un archivo.

### Ejemplo de Serialización
```java

    import java.io.FileOutputStream;
    import java.io.ObjectOutputStream;
    import java.io.IOException;

    public class SerializacionEjemplo {
        public static void main(String[] args) {
            Persona persona = new Persona("Juan", 30);

            try (FileOutputStream archivo = new FileOutputStream("persona.ser");
                ObjectOutputStream salida = new ObjectOutputStream(archivo)) {
                salida.writeObject(persona);
                System.out.println("Objeto serializado correctamente.");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
```

#### Explicación

*   **`FileOutputStream`**: Especifica el archivo en el que se va a escribir el objeto.
*   **`ObjectOutputStream`**: Convierte el objeto en bytes y los escribe en el archivo.

Deserialización de un Objeto
----------------------------

El proceso inverso de la serialización es la deserialización, que convierte una secuencia de bytes en un objeto en memoria. Esto se hace usando la clase **`ObjectInputStream`**.

### Ejemplo de Deserialización
```java
    import java.io.FileInputStream;
    import java.io.ObjectInputStream;
    import java.io.IOException;

    public class DeserializacionEjemplo {
        public static void main(String[] args) {
            try (FileInputStream archivo = new FileInputStream("persona.ser");
                ObjectInputStream entrada = new ObjectInputStream(archivo)) {
                Persona persona = (Persona) entrada.readObject();
                System.out.println("Nombre: " + persona.getNombre());
                System.out.println("Edad: " + persona.getEdad());
            } catch (IOException | ClassNotFoundException e) {
                e.printStackTrace();
            }
        }
    }
```
#### Explicación

*   **`FileInputStream`**: Especifica el archivo desde el que se va a leer el objeto.
*   **`ObjectInputStream`**: Convierte la secuencia de bytes de vuelta a un objeto.
*   **`ClassNotFoundException`**: Esta excepción se lanza si la clase del objeto serializado no se encuentra en el classpath durante la deserialización.

serialVersionUID y su Importancia
---------------------------------

El **`serialVersionUID`** es un número único que identifica la versión de la clase serializable. Si no se declara, Java genera uno automáticamente basado en la estructura de la clase. Sin embargo, esto puede llevar a inconsistencias si la clase se modifica y no coincide con la versión deserializada. Es recomendable declararlo explícitamente para evitar problemas al deserializar objetos cuando la clase ha cambiado.

### Ejemplo de serialVersionUID

`private static final long serialVersionUID = 1L;`


Si no se declara un `serialVersionUID` y la clase cambia después de serializar el objeto, se lanzará una excepción `InvalidClassException` durante la deserialización.

Serialización de Objetos Complejos
----------------------------------

La serialización no se limita a objetos simples. Los objetos que contienen referencias a otros objetos también pueden ser serializados, siempre y cuando las clases de los objetos referenciados implementen la interfaz `Serializable`.

### Ejemplo de Serialización de Objetos Complejos
```java
    import java.io.Serializable;

    public class Empresa implements Serializable {
        private static final long serialVersionUID = 1L;

        private String nombre;
        private Persona director;

        public Empresa(String nombre, Persona director) {
            this.nombre = nombre;
            this.director = director;
        }

        // Getters y Setters
    }
```

En este ejemplo, la clase `Empresa` contiene una referencia a un objeto de tipo `Persona`, que también debe implementar `Serializable`.

Modificadores Transient y Static
--------------------------------

No todos los campos de una clase deben ser serializados. Puedes usar el modificador **`transient`** para indicar que un campo no debe ser incluido en el proceso de serialización. Los campos estáticos (**`static`**) tampoco son serializados, ya que pertenecen a la clase, no a una instancia de la clase.

### Ejemplo de Campo Transient
```java
    import java.io.Serializable;

    public class TarjetaCredito implements Serializable {
        private static final long serialVersionUID = 1L;

        private String numero;
        private transient int codigoSeguridad; // No se serializa

        public TarjetaCredito(String numero, int codigoSeguridad) {
            this.numero = numero;
            this.codigoSeguridad = codigoSeguridad;
        }

        // Getters y Setters
    }
```
En este ejemplo, el campo `codigoSeguridad` no será serializado porque está marcado con `transient`.

Serialización Personalizada
---------------------------

En algunas situaciones, es posible que quieras personalizar el proceso de serialización o deserialización. Esto se puede lograr implementando los métodos **`writeObject`** y **`readObject`** dentro de la clase.

### Ejemplo de Serialización Personalizada
```java
    import java.io.IOException;
    import java.io.ObjectInputStream;
    import java.io.ObjectOutputStream;
    import java.io.Serializable;

    public class Usuario implements Serializable {
        private static final long serialVersionUID = 1L;

        private String nombre;
        private transient String password;

        public Usuario(String nombre, String password) {
            this.nombre = nombre;
            this.password = password;
        }

        private void writeObject(ObjectOutputStream oos) throws IOException {
            oos.defaultWriteObject(); // Serializa los campos no transientes
            oos.writeObject(password != null ? "ENCRIPTADO" : null);
        }

        private void readObject(ObjectInputStream ois) throws IOException, ClassNotFoundException {
            ois.defaultReadObject(); // Deserializa los campos no transientes
            this.password = (String) ois.readObject();
        }
    }
```
En este ejemplo, se personaliza la serialización del campo `password` para encriptarlo durante la escritura y restaurarlo durante la lectura.

Conclusión
----------

La serialización es una poderosa herramienta en Java que permite almacenar y transferir el estado de objetos de manera eficiente. Sin embargo, es importante utilizarla de manera correcta, implementando buenas prácticas como el uso del **`serialVersionUID`**, marcando campos transitorios cuando sea necesario y considerando la personalización del proceso de serialización en situaciones avanzadas.