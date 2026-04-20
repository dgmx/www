# 01 - EJERCICIO DE PROGRAMACIÓN. Figuras de Superhéroes.

_Práctica con clases básicas y composición de clases_

**Figuras de Superhéroes**

Se pide realizar una aplicación para una empresa que vende figuras de
superhéroes. Para ello, tendrá que modelar todos los datos relativos a
estas figuras. Así pues, se pide que programe las siguientes clases:

## Clase Superhéroe

Esta clase definirá las características de un superhéroe.

_Propiedades_

Sus propiedades serán:


- Nombre (nombre del superhéroe)
- Descripción (cadena para describir brevemente su aspecto)
- Capa (booleano que indica si el superhéroe lleva o no capa)


_Constructores_

Haga un constructor con parámetros que reciba solo el nombre del
superhéroe. La descripción se inicializará a vacío (cadena vacía) y la capa
se inicializará al valor false (sin capa)

_Métodos get y set_

Programe los get y set para cada propiedad de la clase.

_Método toString_

Programe el método `toString` de forma que devuelva una cadena con todas sus propiedades.


## Clase Dimensión

Define un grupo de medidas de un objeto.

_Propiedades_

Contiene las siguientes propiedades (todas ellas double):


- Alto. Medida correspondiente al alto del objeto.
- Ancho. Medida correspondiente al ancho del objeto.
- Profundidad. Medida correspondiente a la profundidad del objeto.

_Constructores_

Haga un constructor sin parámetros que inicialice todas las propiedades a 0.

Haga un constructor que reciba como parámetro un alto, un ancho y una profundidad y asigne los valores a sus respectivas propiedades.

_Métodos get y set_

Programe los get y set para cada propiedad.

_Métodos de cálculo_

Programe un método llamado `getVolumen()` que devuelva el volumen máximo que ocuparía el objeto (alto x ancho x profundidad)

_Método toString_

Programe el método `toString` de forma que devuelva una cadena con el alto, ancho, profundidad y volumen máximo del objeto.


## Clase Figura

Esta clase representará una figura de un superhéroe.

_Propiedades_

- Código. Cada figura tiene un código identificativo formado por letras y números. Dos  figuras distintas no tendrán el mismo código.
- Precio. Un double con el precio de la figura.

Además, puesto que la figura representa a un superhéroe, será necesario que la clase figura contenga un objeto de la clase Superhéroe que describa las características de este.

Por otro lado, para definir las dimensiones de la figura, la clase Figura contendrá un objeto de la clase Dimensión


- Un objeto dimensiones de la clase Dimensión que defina las dimensiones del figura.
- Un objeto superhéroe de la clase Superhéroe que defina las características del superhéroe representado.

_Constructores_

Programe un constructor que reciba como parámetro el código identificativo de la figura, su precio, un objeto Dimensión, un objeto Superhéroe. Estos valores se asignarán a cada propiedad.

_Métodos set y get_

Programe un set para cada propiedad (código, precio, superhéroe y dimensiones). Igualmente un get para cada propiedad.

_Método toString_

Programe el método `toString` de forma que devuelva una cadena con todas las características de la figura.


_Método modificador adicional_

Programe un método `subirPrecio(double cantidad)` que reciba una cantidad de dinero. Este método subirá el precio actual de la figura en la cantidad indicada como parámetro.

## Clase Colección

La empresa vende a veces colecciones de figuras, que básicamente son conjuntos de figuras con una temática relacionada. Por ejemplo una colección “El Hombre Murciélago” que consta de una serie de figuras relacionadas con Batman, o una colección “Marvel”, con figuras de
superhéroes de Marvel, etc...

_Propiedades_

Las colecciones estarán descritas por la clase Colección, que tiene las siguientes propiedades:


- `nombreColeccion` , que será el nombre de la colección (“El Hombre Murciélago”, “Marvel”, etc.) 
- Un objeto `listaFiguras` , que será un ArrayList que contendrá las distintas figuras que forman la colección.

_Constructor_

Programe un constructor que reciba como parámetro el nombre de la
colección. Este constructor construirá el ArrayList `listaFiguras`, (que estará
vacío inicialmente)

_Metodos get y set_

Programe un get y set para la propiedad `nombreColeccion`.


_Métodos modificadores_

Programe un método `añadirFigura(Figura fig)`, que reciba como parámetro
una figura y la añada al listado de figuras de la colección.

Programe un método `subirPrecio(double cantidad, String id)` que reciba
una cantidad de dinero y el identificador de una de las figuras de la
colección. El método subirá el precio de dicha figura en la cantidad pasada
como parámetro.

_Método toString y similares_

Programe el método toString, de forma que devuelva una cadena con el
listado de todas las figuras de la colección con todas las características de
cada uno.

Programe un método `conCapa()` que devuelva una cadena con el listado
de aquellas figuras de la colección que tengan capa.

_Otros métodos observadores_

Programe un método `masValioso()` que devuelva la figura que tenga el
precio mayor de la colección.

Programe un método `getValorColeccion()`, que devuelva un double con el
precio total de la colección (es la suma de los precios de cada figura de la
colección)

Programe un método `getVolumenColeccion()`, que devuelva un double con
el volumen aproximado que ocuparía toda la colección de figuras. Para
hacer este cálculo se deben sumar los volúmenes de cada figura, y
añadirle al resultado el valor 200.

## Programa de prueba

Compruebe el funcionamiento de todas estas clases a través de un
programa principal de prueba.

### Clase Superhéroe

```java
public class Superheroe {
    private String nombre;
    private String descripcion;
    private boolean capa;

    public Superheroe(String nombre) {
        this.nombre = nombre;
        this.descripcion = "";
        this.capa = false;
    }
    
    //Métodos set

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public void setCapa(boolean capa) {
        this.capa = capa;
    }
    
    //Métodos get

    public String getNombre() {
        return nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public boolean isCapa() {
        return capa;
    }

    @Override
    public String toString() {
        return "Superheroe{" + "nombre=" + nombre + ", descripcion=" + descripcion + ", capa=" + capa + '}';
    } 
}
```
### Clase Dimensión

```java
public class Dimension {
    private double alto;
    private double ancho;
    private double profundidad;

    public Dimension() {
        this.alto = 0;
        this.ancho = 0;
        this.profundidad = 0;
    }
    
    public Dimension(double alto, double ancho, double profundidad) {
        this.alto = alto;
        this.ancho = ancho;
        this.profundidad = profundidad;
    }
    

    public double getAlto() {
        return alto;
    }

    public void setAlto(double alto) {
        this.alto = alto;
    }

    public double getAncho() {
        return ancho;
    }

    public void setAncho(double ancho) {
        this.ancho = ancho;
    }

    public double getProfundidad() {
        return profundidad;
    }

    public void setProfundidad(double profundidad) {
        this.profundidad = profundidad;
    }

    @Override
    public String toString() {
        return "Dimension{" + "alto=" + alto + ", ancho=" + ancho + ", profundidad=" + profundidad +
                ", volumen=" + getVolumen() + '}';
    }

    
    public double getVolumen() {
        return alto*ancho*profundidad;
    }
}
```


### Clase Figura

```java
public class Figura {
    private String codigo;
    private double precio;
    private Superheroe superheroe;
    private Dimension dimensiones;

    public Figura(String codigo, double precio, Superheroe superheroe, Dimension dimensiones) {
        this.codigo = codigo;
        this.precio = precio;
        this.superheroe = superheroe;
        this.dimensiones = dimensiones;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public Superheroe getSuperheroe() {
        return superheroe;
    }

    public void setSuperheroe(Superheroe superheroe) {
        this.superheroe = superheroe;
    }

    public Dimension getDimensiones() {
        return dimensiones;
    }

    public void setDimensiones(Dimension dimensiones) {
        this.dimensiones = dimensiones;
    }

    @Override
    public String toString() {
        return "Figura:\n" + "codigo=" + codigo + ", precio=" + precio + "\n" + superheroe + "\n" + dimensiones;
    }
    
    public void subirPrecio(double cantidad) {
        precio += cantidad;
    } 
}
```

### Clase Colección

```java
import java.util.ArrayList;

public class Coleccion {
    private String nombreColeccion;
    private ArrayList<Figura> listaFiguras;

    public Coleccion(String nombreColeccion) {
        this.nombreColeccion = nombreColeccion;
        listaFiguras = new ArrayList<>();
    }

    public String getNombreColeccion() {
        return nombreColeccion;
    }

    public void setNombreColeccion(String nombreColeccion) {
        this.nombreColeccion = nombreColeccion;
    }
    
    public void añadirFigura(Figura fig){
        listaFiguras.add(fig);
    }
    
    public void subirPrecio(double cantidad, String id) {
        for(Figura f:listaFiguras) {  //for each
            if(f.getCodigo().equals(id)) {
                f.subirPrecio(cantidad);
            }
        }
    }

    @Override
    public String toString() {
        String cadena = "Colección "+nombreColeccion+"\n---------------\n";
        
        for(Figura f:listaFiguras) {
            cadena += f+"\n";
        }
        
        return cadena;
    }
    
    
    public String conCapa() {
        String cadena = "Figuras de superhéroes con capa\n---------------\n";
        for(Figura f:listaFiguras) {
            if(f.getSuperheroe().isCapa()) {
                cadena += f+"\n";
            }
        }
        
        return cadena;
    }
    
    public Figura masValioso() {
        double precioMayor = 0.0;
        Figura fMayor = null;
        
        for(Figura f:listaFiguras) {
            if(f.getPrecio()>precioMayor) {
                precioMayor = f.getPrecio();
                fMayor = f;
            }
        }
        
        return fMayor;
    }
    
    public double getValorColeccion() {
        double valor = 0;
        for(Figura f:listaFiguras) {
            valor += f.getPrecio();
        }
        return valor;
    }
    
    public double getVolumenColeccion() {
        double vol = 0;
        for(Figura f:listaFiguras) {
            vol += f.getDimensiones().getVolumen();
        }
        return vol+200;
    }
}
```

### Clase Principal

```java
public class Principal {

    public static void main(String[] args) {
        // TODO code application logic here
        
        Superheroe sup1 = new Superheroe("Spiderman");
        sup1.setNombre("Hombre Araña");
        sup1.setDescripcion("Lanza tela de araña y viste de rojo.");
        
        System.out.println(sup1.getNombre());
        System.out.println(sup1.getDescripcion());
        
        System.out.println(sup1.toString());
        
        Superheroe sup2 = new Superheroe("Batman");
        sup2.setDescripcion("Tiene los poderes de un murciélago.");
        sup2.setCapa(true);
        
        System.out.println(sup2.toString());
        
        Dimension dimPeq = new Dimension();  // alto = 0, ancho = 0, prof = 0
        Dimension dimGra = new Dimension(70,20,20); 
        
        dimPeq.setAlto(20);
        dimPeq.setAncho(5);
        dimPeq.setProfundidad(6);  
        //ahora dimPeq es:   alto = 20, ancho = 5, prof = 6
        
        System.out.println(dimPeq);
        System.out.println(dimGra);
        System.out.println("Volumen de la dimension pequeña: "+dimPeq.getVolumen());
        
        Figura figSpi = new Figura("spid-01",30,sup1,dimPeq);
        
        System.out.println(figSpi.toString());
        figSpi.subirPrecio(10);
        System.out.println(figSpi.toString());
        
        Coleccion col = new Coleccion("Super");
        
        col.añadirFigura(figSpi);
        
        Figura figBat = new Figura("bat-02",50,sup2,dimPeq);
        col.añadirFigura(figBat);
        
        Superheroe sup3 = new Superheroe("Ironman");
        sup3.setDescripcion("Superhéroe con traje de metal capaz de volar");
        Figura figIron = new Figura("iron-03",20,sup3,new Dimension(6,3,4));
        col.añadirFigura(figIron);
        
        System.out.println(col);
        
        System.out.println(col.conCapa());
     
        Figura fMasValiosa = col.masValioso();
        System.out.println("Figura de más valor: "+fMasValiosa);
        
        System.out.println("Valor de la coleccion: "+col.getValorColeccion());
        
        System.out.println("Volumen de la coleccion: "+col.getVolumenColeccion());
    }
}
```