# 03 - Ejercicio 3. Supermercado.

_Práctica con interfaces y polimorfismo_

**Supermercado. Creación de Interfaces**

Suponga que debe crear distintas clases Java para describir los productos que vende un supermercado.

Para unificar el código de los distintos programadores del equipo debe crear las siguientes Interfaces Java para describir algunas características de los productos.

## Interfaz EsLiquido

Esta interfaz indica que los objetos creados a partir de la clase serán líquidos, y tendrá los siguientes métodos:

```java
public void setVolumen(double v);
public double getVolumen();
public void setTipoEnvase(String env);
public String getTipoEnvase();
```

## Interfaz EsAlimento

Esta interfaz indica que los objetos creados a partir de la clase serán alimentos, y tendrá los siguientes métodos:

```java
public void setCaducidad(LocalDate fc);
public LocalDate getCaducidad();
public int getCalorias();
```

## Interfaz ConDescuento

Esta interfaz indicará que el producto tiene descuento e incluirá los siguientes métodos:

```java
public void setDescuento(double des);
public double getDescuento();
public double getPrecioDescuento();
```

**Creación de clases de productos**

Se pide que programe las siguientes clases de productos, implementando las interfaces que sean necesarias

## Clase Detergente

Define una botella de detergente (debe tener en cuenta que este producto puede tener descuento)

Sus propiedades principales serán:

`Marca (String)` y `Precio (double)`

Incluya otras propiedades según sea necesario a la hora de implementar las
interfaces.

_Constructor_

Programe un constructor que reciba como parámetros una marca y un precio.

_Métodos set y get_

Programe métodos set y get para la marca y el precio.


_Métodos de las interfaces_

Programe los métodos de las interfaces.

_Método toString_

Programe el método toString con todas las características del producto.

## Clase Cereales

Define el producto caja de cereales. (Este producto no tiene descuentos)

Las propiedades del producto serán `Marca`, `Precio` y `Tipo` de cereal `(String)`

Programe un constructor que reciba como parámetros las tres propiedades anteriores.

Programe los métodos set y get para dichas propiedades.

Programe los métodos de las interfaces implementadas. (Si es necesario añada más propiedades a la clase)

A tener en cuenta: las calorías serán las siguientes: 5 si el cereal es espelta, 8 si es maíz, 12 si es trigo, y 15 en los demás casos.

Programe el método toString para devolver una cadena con todas las características del producto.

## Clase Vino

Esta clase describirá el producto botella de vino. (Este producto es susceptible de tener descuento)

El producto tendrá como propiedades la marca, el tipo de vino, los grados de alcohol y el precio.


Programe al igual que los productos anteriores un constructor con estas cuatro propiedades como parámetros.

Programe también los métodos set, get, toString y los métodos de las interfaces. Añada nuevas propiedades si es necesario.

A tener en cuenta: las calorías se calcularán multiplicando por 10 la graduación alcohólica.

## Programa de prueba

Realice un programa de prueba dónde cree varios productos de cada clase. Haga un ejemplo de polimorfismo creando un ArrayList de productos alimenticios y calculando la suma de sus calorías.


## Solución propuesta

### Interfaz EsLiquido
```java
public interface EsLiquido {
    public void setVolumen(double v);
    public double getVolumen();
    public void setTipoEnvase(String env);
    public String getTipoEnvase();
}
```


### Interfaz EsAlimento

```java
public interface EsAlimento {
    public void setCaducidad(LocalDate fc);
    public LocalDate getCaducidad();
    public int getCalorias();
}
```

### Interfaz ConDescuento

```java
public interface ConDescuento {
    public void setDescuento(double des);
    public double getDescuento();
    public double getPrecioDescuento();
}
```

### Clase Detergente

```java
public class Detergente implements EsLiquido, ConDescuento {

    private String marca;
    private double precio;
    private double volumen;
    private String tipoEnvase;
    private double descuento;

    public Detergente(String marca, double precio) {
        this.marca = marca;
        this.precio = precio;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }
    
    @Override
    public void setVolumen(double v) {
        volumen = v;
    }

    @Override
    public double getVolumen() {
        return volumen;
    }

    @Override
    public void setTipoEnvase(String env) {
       tipoEnvase = env; 
    }

    @Override
    public String getTipoEnvase() {
       return tipoEnvase;
    }

    @Override
    public void setDescuento(double des) {
       descuento = des;
    }

    @Override
    public double getDescuento() {
       return descuento;
    }

    @Override
    public double getPrecioDescuento() {
       return precio - (precio * (descuento/100.0));
    }

    @Override
    public String toString() {
        return "Detergente{" + "marca=" + marca + ", precio=" + precio + 
                ", volumen=" + volumen + ", tipoEnvase=" + tipoEnvase + 
                ", descuento=" + descuento + 
                ", precio con descuento=" + getPrecioDescuento() + '}';
    }
}
```


### Clase Cereales
```java
public class Cereales implements EsAlimento {

    private String marca;
    private String tipoCereal;
    private double precio;
    private LocalDate caducidad;

    public Cereales(String marca, String tipoCereal, double precio) {
        this.marca = marca;
        this.tipoCereal = tipoCereal;
        this.precio = precio;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getTipoCereal() {
        return tipoCereal;
    }

    public void setTipoCereal(String tipoCereal) {
        this.tipoCereal = tipoCereal;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }
    
    
    
    @Override
    public void setCaducidad(LocalDate fc) {
        caducidad = fc;     
    }

    @Override
    public LocalDate getCaducidad() {
        return caducidad;
    }

    @Override
    public int getCalorias() {
        if(tipoCereal.equalsIgnoreCase("espelta")) {
            return 5;
        } else if(tipoCereal.equalsIgnoreCase("maíz")) {
            return 8;
        } else if(tipoCereal.equalsIgnoreCase("trigo")) {
            return 12;
        } else {
            return 15;
        }
    }

    @Override
    public String toString() {
        return "Cereales{" + "marca=" + marca + ", tipoCereal=" + tipoCereal + ", precio=" + precio +
                ", caducidad=" + caducidad.format(DateTimeFormatter.ofPattern("dd/MM/yyyy")) +
                ", calorías=" + getCalorias() + '}';
    }
}
```
### Clase Vino
```java
public class Vino implements EsLiquido, EsAlimento, ConDescuento {

    private String marca;
    private String tipoVino;
    private double grados;
    private double precio;
    private double volumen;
    private String tipoEnvase;
    private LocalDate caducidad;
    private double descuento;

    public Vino(String marca, String tipoVino, double grados, double precio) {
        this.marca = marca;
        this.tipoVino = tipoVino;
        this.grados = grados;
        this.precio = precio;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getTipoVino() {
        return tipoVino;
    }

    public void setTipoVino(String tipoVino) {
        this.tipoVino = tipoVino;
    }

    public double getGrados() {
        return grados;
    }

    public void setGrados(double grados) {
        this.grados = grados;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }
    
    
    
    @Override
    public void setVolumen(double v) {
        volumen = v;
    }

    @Override
    public double getVolumen() {
        return volumen;
    }

    @Override
    public void setTipoEnvase(String env) {
        tipoEnvase = env;
    }

    @Override
    public String getTipoEnvase() {
        return tipoEnvase;
    }

    @Override
    public void setCaducidad(LocalDate fc) {
        caducidad = fc;
    }

    @Override
    public LocalDate getCaducidad() {
        return caducidad;
    }

    @Override
    public int getCalorias() {
        return (int) (grados*10);
    }

    @Override
    public void setDescuento(double des) {
        descuento = des;
    }

    @Override
    public double getDescuento() {
        return descuento;
    }

    @Override
    public double getPrecioDescuento() {
        return precio - (precio * (descuento/100.0));
    }

    @Override
    public String toString() {
        return "Vino{" + "marca=" + marca + ", tipoVino=" + tipoVino + 
                ", grados=" + grados + ", precio=" + precio + "\nvolumen=" + volumen + 
                ", tipoEnvase=" + tipoEnvase + 
                ", caducidad=" + caducidad.format(DateTimeFormatter.ofPattern("dd/MM/yyyy")) + 
                "\ndescuento=" + descuento + 
                ", precio con descuento=" + getPrecioDescuento() +
                ", calorías=" + getCalorias() + '}';
    }

}
```


## Programa de prueba

```java
public class ProgramaPrueba {

    public static void main(String[] args) {
        
        Detergente det1 = new Detergente("limpiamas",2.5);
        det1.setVolumen(33);
        det1.setDescuento(2);
        det1.setTipoEnvase("Botella de plástico pequeña");
        
        System.out.println(det1);
        
        Cereales cer1 = new Cereales("crunchy","Espelta",3);
        cer1.setCaducidad(LocalDate.of(2022, 8, 2));
        System.out.println("Calorías: "+cer1.getCalorias());
        
        System.out.println(cer1);
        
        Vino vin1 = new Vino("plimplar","tinto",12,8);
        vin1.setVolumen(330);
        vin1.setTipoEnvase("botella de cristal");
        vin1.setCaducidad(LocalDate.of(2023, 7, 12));
        vin1.setDescuento(5);
        
        System.out.println(vin1);
        
        
        ArrayList<EsAlimento> lista = new ArrayList<>();
        lista.add(vin1);
        lista.add(cer1);
        
        int totalcalorias = 0;
        for(EsAlimento alimento: lista) {
            totalcalorias += alimento.getCalorias();
        }
        
        System.out.println("Total calorias: "+totalcalorias);
    }
}
```