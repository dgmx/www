# 04 - Ejercicio de Programación Java - Servicios

## Práctica con Clases Abstractas

### Empresa de Mantenimiento

Se va a realizar una aplicación que controle los servicios que realiza una empresa de mantenimiento. Estos servicios son muy variados, pero todos ellos comparten una serie de características comunes.

Así pues, se pide que programe una clase abstracta llamada **Servicio** que especificará esas características comunes y que servirá para crear, a través de herencia, las distintas clases de servicios que ofrece la empresa.

---

## Clase Abstracta Servicio

Un servicio siempre tendrá las siguientes propiedades:

- **Trabajador** (String) – nombre y apellidos del trabajador que realiza el servicio.
- **FechaInicio** (LocalDate) – fecha de inicio del servicio.
- **Cliente** (String) – Es el nombre y apellidos del cliente (o nombre de la empresa cliente)

### Constructor

Debe haber un constructor que reciba las tres propiedades anteriores.

### Métodos set y get

Debe haber métodos set y get para estas dos propiedades.

### Métodos abstractos

Además, un servicio siempre debe tener programados los siguientes métodos:

- `double costeMaterial();` - Este método calculará el total gastado en material.
- `double costeManoObra();` - Este método calculará el total gastado en mano de obra.
- `double costeTotal();` - Este método calculará el coste total del servicio.
- `String detalleServicio();` - Este método devolverá una cadena con información detallada de lo que ha costado el Servicio.

---

## Clase TrabajoPintura

Esta clase describirá un trabajo de pintura (pintar una casa, una habitación, etc…) Heredará de la clase Servicio y tendrá las siguientes características:

### Propiedades

- **Superficie** (double) – Es la superficie a pintar (metros cuadrados).
- **PrecioPintura** (double) – Es el precio de un litro de pintura.

### Constructor

Crear un constructor que reciba: el trabajador que hace el servicio, la fecha de inicio, el cliente, la superficie y el precio del litro de pintura.

### Métodos get y set

Programe un método get y set para las propiedades de la clase.

### Métodos sobrescritos

Se sobreescribirán los métodos abstractos, dándoles un significado según la siguiente especificación:

- `double costeMaterial()` – Según nos indica el cliente, el coste de material se calcula con la siguiente fórmula: `Coste_material = (Superficie / 7.8) * PrecioPintura`

- `double costeManoObra()` – Según nos indica el cliente, el coste de mano de obra se calcula con la siguiente fórmula: `Coste_mano_obra = (Superficie / 10) * 9.5`

- `double costeTotal()` – Según nos indica el cliente, el coste total del servicio se calcula así: `Coste_total = coste_material + coste_mano_obra`. Hay que tener en cuenta que cuando la superficie a pintar es de menos de 50 metros cuadrados se añade un coste adicional del 15% sobre el anterior coste.

- `String detalleServicio()` – Este método devolverá un resumen del servicio con la siguiente estructura:

```
TRABAJO DE PINTURA
Cliente: (cliente)
Fecha de inicio: (fecha)
----------------------------------
Pintor: (pintor)
Coste Material ..... (coste material)
Coste Mano Obra .... (coste mano de obra)
Coste Adicional .... (coste adicional)
TOTAL: ............  (total coste servicio)
----------------------------------
```

---

## Clase RevisionAlarma

Uno de los servicios que realiza la empresa es la revisión de las alarmas contraincendios. Para definir este tipo de trabajo programe la clase RevisionAlarma, heredándola de Servicio, con las siguientes características:

### Propiedades

Solo tendrá una: el número de alarmas a revisar (int).

### Constructor

Un constructor que reciba: la fecha de la revisión, el nombre del cliente y el número de alarmas. Este constructor inicializará el nombre del trabajador a "Revisor Especialista Contraincendios".

### Métodos get y set

Un get y set para el número de alarmas.

### Métodos sobrescritos

- `double costeMaterial()` – El coste de material en este tipo de trabajo es 0.

- `double costeManoObra()` – El coste de mano de obra dependerá del número de alarmas a revisar y se calculará de la siguiente forma: `Coste_mano_obra = (número_alarmas / 3) * 40`

- `double costeTotal()` – El coste total es igual al coste de mano de obra.

- `String detalleServicio()` – Este método devolverá un resumen del servicio con la siguiente estructura:

```
REVISIÓN PERIÓDICA ALARMAS CONTRAINCENDIOS
Cliente: (cliente)
Fecha revisión: (fecha)
----------------------------------------
TOTAL: ....... (total coste servicio)
----------------------------------------
```

---

## Programa de Prueba

Realice un programa de prueba en el que se creen varios trabajos de pintura y revisiones de alarmas.

Pruebe el concepto de polimorfismo almacenando todos estos trabajos dentro de un ArrayList de Servicio. Pruebe a calcular la suma de los costes de todos los trabajos. Calcule también lo que se tiene que pagar en total en sueldos por esos trabajos realizados.

Muestre en pantalla el resumen detallado de cada uno de esos trabajos.

---

## Archivos del Proyecto

### Servicio.java (Clase Abstracta Base)

```java
package Servicios;

import java.time.LocalDate;

public abstract class Servicio {
    protected String trabajador;
    protected LocalDate fechaInicio;
    protected String cliente;

    public Servicio(String trabajador, LocalDate fechaInicio, String cliente) {
        this.trabajador = trabajador;
        this.fechaInicio = fechaInicio;
        this.cliente = cliente;
    }

    public String getTrabajador() {
        return trabajador;
    }

    public void setTrabajador(String trabajador) {
        this.trabajador = trabajador;
    }

    public LocalDate getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(LocalDate fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }
    
    public abstract double costeMaterial();
    
    public abstract double costeManoObra();
    
    public abstract double costeTotal();
    
    public abstract String detalleServicio();
}
```

### TrabajoPintura.java

```java
package Servicios;

import java.time.LocalDate;

public class TrabajoPintura extends Servicio {

    protected double superficie;
    protected double precioPintura;

    public TrabajoPintura(String trabajador, LocalDate fechaInicio, String cliente, 
                          double superficie, double precioPintura) {
        super(trabajador, fechaInicio, cliente);
        this.superficie = superficie;
        this.precioPintura = precioPintura;
    }

    public double getSuperficie() {
        return superficie;
    }

    public void setSuperficie(double superficie) {
        this.superficie = superficie;
    }

    public double getPrecioPintura() {
        return precioPintura;
    }

    public void setPrecioPintura(double precioPintura) {
        this.precioPintura = precioPintura;
    }
    
    @Override
    public double costeMaterial() {
        return (superficie/7.8)*precioPintura;
    }

    @Override
    public double costeManoObra() {
       return (superficie/10.0)*9.5;
    }

    @Override
    public double costeTotal() {
       return costeMaterial() + costeManoObra() + costeAdicional(); 
    }
    
    private double costeAdicional() {
        if(superficie<50) {
            return (costeMaterial()+costeManoObra()) * 0.15;
        } else {
            return 0;
        }
    }

    @Override
    public String detalleServicio() {
        String cadena = "";
        
        cadena += "TRABAJO DE PINTURA\n";
        cadena += "Cliente: "+cliente+"\n";
        cadena += "Fecha de Inicio: "+fechaInicio+"\n";
        cadena += "------------------\n";
        cadena += "Pintor: "+trabajador+"\n";
        cadena += "Coste Material: "+costeMaterial()+"\n";
        cadena += "Coste Mano Obra: "+costeManoObra()+"\n";
        cadena += "Coste Adicional: "+costeAdicional()+"\n";
        cadena += "TOTAL: "+costeTotal()+"\n";
        cadena += "------------------\n";
        return cadena;
    }
}
```

### RevisionAlarma.java

```java
package Servicios;

import java.time.LocalDate;

public class RevisionAlarma extends Servicio {

    protected int numeroAlarmas;

    public RevisionAlarma(LocalDate fechaInicio, String cliente, int numeroAlarmas) {
        super("Revisor Especialista Contraincendios", fechaInicio, cliente);
        this.numeroAlarmas = numeroAlarmas;
    }

    public int getNumeroAlarmas() {
        return numeroAlarmas;
    }

    public void setNumeroAlarmas(int numeroAlarmas) {
        this.numeroAlarmas = numeroAlarmas;
    }
    
    @Override
    public double costeMaterial() {
        return 0;
    }

    @Override
    public double costeManoObra() {
        return (numeroAlarmas/3.0)*40;
    }

    @Override
    public double costeTotal() {
        return costeManoObra();
    }

    @Override
    public String detalleServicio() {
        String cadena = "";
        
        cadena += "REVISIÓN PERIÓDICA ALARMAS CONTRAINCENDIOS\n";
        cadena += "Cliente: "+cliente+"\n";
        cadena += "Fecha: "+fechaInicio+"\n";
        cadena += "----------------------\n";
        cadena += "TOTAL: "+costeTotal()+"\n";
        cadena += "----------------------\n";
        return cadena;
    }
}
```

### ProgramaPrueba.java (Programa Principal)

```java
package Principal;

import Servicios.*;
import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;

public class ProgramaPrueba {

    public static void main(String[] args) {
        TrabajoPintura tp1 = new TrabajoPintura("Antonio",LocalDate.of(2022,9,10), "Seguros Martínez", 20,4);
        
        RevisionAlarma ra1 = new RevisionAlarma(LocalDate.of(2022,8,6),"Colegio Santa Maria",34);
        
        TrabajoPintura tp2 = new TrabajoPintura("Ana",LocalDate.of(2022,8,8),"Fruteria La Pera", 10, 3);
        TrabajoPintura tp3 = new TrabajoPintura("Juan",LocalDate.of(2022,9,30),"Restaurante El Boqueron", 200, 2.5);
        RevisionAlarma ra2 = new RevisionAlarma(LocalDate.of(2022,10,1),"Hotel Las Palmeras",70);
        
        ArrayList<Servicio> trabajos = new ArrayList<>();
        trabajos.add(tp1);
        trabajos.add(ra1);
        trabajos.add(tp2);
        trabajos.add(tp3);
        trabajos.add(ra2);
        
        double ct = 0;
        double cmo = 0;
        
        for(Servicio t: trabajos) {
            ct += t.costeTotal();
            cmo += t.costeManoObra();
            
            System.out.println(t.detalleServicio()+"\n\n");
        }
        System.out.println("Coste total de todos los trabajos: "+ct);
        System.out.println("Coste total de mano de obra: "+cmo);
    }
}
```

---

## Resultado Esperado

Al ejecutar el programa de prueba, se obtiene la siguiente salida:

```
TRABAJO DE PINTURA
Cliente: Seguros Martínez
Fecha de Inicio: 2022-09-10
------------------
Pintor: Antonio
Coste Material: 10.256410256410255
Coste Mano Obra: 19.0
Coste Adicional: 4.388461538461538
TOTAL: 33.64487179487179
------------------


REVISIÓN PERIÓDICA ALARMAS CONTRAINCENDIOS
Cliente: Colegio Santa Maria
Fecha: 2022-08-06
----------------------
TOTAL: 453.3333333333333
----------------------


TRABAJO DE PINTURA
Cliente: Fruteria La Pera
Fecha de Inicio: 2022-08-08
------------------
Pintor: Ana
Coste Material: 3.8461538461538463
Coste Mano Obra: 9.5
Coste Adicional: 2.0
TOTAL: 15.346153846153847
------------------


TRABAJO DE PINTURA
Cliente: Restaurante El Boqueron
Fecha de Inicio: 2022-09-30
------------------
Pintor: Juan
Coste Material: 64.1025641025641
Coste Mano Obra: 190.0
Coste Adicional: 0
TOTAL: 254.1025641025641
------------------


REVISIÓN PERIÓDICA ALARMAS CONTRAINCENDIOS
Cliente: Hotel Las Palmeras
Fecha: 2022-10-01
----------------------
TOTAL: 933.3333333333334
----------------------

Coste total de todos los trabajos: 1689.426923076923
Coste total de mano de obra: 725.8333333333333
```