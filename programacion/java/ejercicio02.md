# 02 - Ejercicio 02. Electrodomésticos.

_Práctica con clases básicas y herencia de clases_

**Electrodomésticos**

Suponga que debe programar una aplicación para una empresa dedicada a la venta y montaje de electrodomésticos. Esta aplicación necesitará controlar las características que definen un electrodoméstico y que vendrán dada por la clase Electrodoméstico que se específica a continuación.

## Clase Electrodoméstico

Programe la clase Electrodoméstico teniendo en cuenta que tiene las siguientes propiedades:

- Tipo. Cadena de texto que indica el tipo de electrodoméstico que es (una nevera, un horno, una lavadora, etc.)
- Marca. Cadena de texto que indica la marca.
- Potencia. Número con decimales que indica la potencia de consumoen kW por hora.

**Constructor**

Programe un constructor que reciba como parámetro un tipo, marca y potencia y los asigne a cada propiedad.

**Métodos get y set**

Programe métodos set y get para cada propiedad.

**Método toString**

Programe el método toString de forma que devuelva una cadena con todas las características del electrodoméstico.


**Método getConsumo(int horas)**

Este método recibirá una cantidad de horas de funcionamiento y devolverá el total de kW consumido por el electrodoméstico en ese tiempo.

**Método getCosteConsumo(int horas, double costeHora)**

Este método recibirá una cantidad de horas así como el precio del kW/hora
y devolverá el coste total por el consumo del electrodoméstico en ese
tiempo.

**NOTA. Pruebe los diferentes métodos de la clase en un programa de prueba.**


## Clase Lavadora

Supongamos que necesita programar una clase Lavadora para una nueva aplicación. Ya que una lavadora es un electrodoméstico, tendrá que usar la herencia para aprovechar las características de la clase Electrodoméstico.

**Propiedades**

La clase Lavadora tendrá todas las propiedades de un electrodoméstico y además:


- Precio. Es el precio correspondiente al precio de la lavadora.
- aguaCaliente. Booleano que indica que la lavadora está funcionando con agua caliente (true) o fría (false)

**Constructores**

La clase Lavadora tendrá dos constructores.


- El primer constructor recibirá como parámetro la marca de la lavadora y su potencia. Además, este constructor inicializará el modo de funcionamiento a agua fría.
- El segundo constructor recibirá como parámetros la marca de la lavadora, su precio, su potencia y su modo de funcionamiento (agua fría o caliente)


**Métodos set y get**

La clase Lavadora tendrá los mismos set y get que la clase Electrodoméstico, y además tendrá un set y get para las propiedades Precio y aguaCaliente.

**Método toString**

La clase Lavadora tendrá un método toString que devuelva una cadena con todas las características de la lavadora.


**Método getConsumo(int horas)**

Este método debe reprogramarse, ya que el cálculo del consumo de una lavadora depende no solo de las horas de funcionamiento, sino también del modo de funcionamiento. Así pues:

- Si la lavadora está funcionando con agua fría, el consumo es Horas * Potencia.
- Si la lavadora está funcionando con agua caliente, el consumo es Horas * (Potencia + Potencia * 0,20)

**Método getCosteConsumo(int horas, double costeHora)**

Este método no necesita ser sobreescrito, por lo que debería funcionar correctamente.

**NOTA. Compruebe el funcionamiento de la clase Lavadora en un programa de prueba.**

## Solución propuesta

### Clase Electrodomestico

```java
public class Electrodomestico {
    protected String tipo;
    protected String marca;
    protected double potencia;

    public Electrodomestico(String tipo, String marca, double potencia) {
        this.tipo = tipo;
        this.marca = marca;
        this.potencia = potencia;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public double getPotencia() {
        return potencia;
    }

    public void setPotencia(double potencia) {
        this.potencia = potencia;
    }

    @Override
    public String toString() {
        return "Electrodomestico{" + "tipo=" + tipo + ", marca=" + marca + ", potencia=" + potencia + " kW" + '}';
    }
    
    public double getConsumo(int horas) {
        return potencia * horas;
    }
    
    public double getCosteConsumo(int horas, double costeHora) {
        return getConsumo(horas) * costeHora;
    }
    
}
```


### Clase Lavadora

```java
public class Lavadora extends Electrodomestico {
    
    private double precio;
    private boolean aguaCaliente;
    
    public Lavadora(String marca, double potencia) {
        super("Lavadora",marca,potencia);
        precio = 0;
        aguaCaliente = false;
    }
    
    public Lavadora(String marca, double precio, double potencia, boolean aguaCaliente) {
        super("Lavadora",marca,potencia);
        this.precio = precio;
        this.aguaCaliente = aguaCaliente;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public boolean isAguaCaliente() {
        return aguaCaliente;
    }

    public void setAguaCaliente(boolean aguaCaliente) {
        this.aguaCaliente = aguaCaliente;
    }

    @Override
    public String toString() {
        return "Lavadora{" + "marca=" + marca + ", potencia=" + potencia +
                ", precio=" + precio + ", aguaCaliente=" + aguaCaliente + '}';
    }
    
    @Override
    public double getConsumo(int horas) {
        if(aguaCaliente) {
            return (potencia + potencia*0.20) * horas;
        } else {
            return potencia * horas;
        }
    }
    
}
```

### Clase ProgramaPrueba 
```java
public class ProgramaPrueba {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        Electrodomestico e1 = new Electrodomestico("nevera","elpolo",0.58);
        
        e1.setPotencia(0.67);
        e1.setMarca("frigo");
        
        System.out.println(e1);
        
        int horas = 10;
        double consum = e1.getConsumo(horas);
        double preciokwh = 0.5;
        double coste = e1.getCosteConsumo(horas, preciokwh);
        System.out.println("Ha consumido: "+consum+" kW en "+horas+" horas");
        System.out.println("Debe pagar: "+coste+" €");
        
        
        Lavadora lava1 = new Lavadora("lavinchi",400,0.5,false);
        
        System.out.println(lava1);
        lava1.setAguaCaliente(true);
        System.out.println("Consumo de la lavadora en 10 horas: "+lava1.getConsumo(10));
        System.out.println("Coste del consumo en 10 horas: "+lava1.getCosteConsumo(10, 2));
        
    }
    
}
```
