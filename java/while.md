---
title: "16. Bucle While"
parent: "Java"
---

While en Java
=============

Tabla de contenidos

- [While en Java](#while-en-java)
  - [¿Qué es while en Java?](#qué-es-while-en-java)
  - [Más Ejemplos](#más-ejemplos)

¿Qué es while en Java?
----------------------

La sentencia **while en Java** es una estructura de control de ciclo que se utiliza para ejecutar un bloque de código mientras se cumpla una determinada condición.

La sintaxis básica de la sentencia **while en Java** es:

```java
while (condición) {     
// bloque de código a ejecutar mientras se cumpla la condición }
```

La condición es una expresión booleana que se evalúa antes de cada iteración del ciclo. Si la condición es verdadera, se ejecuta el bloque de código dentro del ciclo y luego se vuelve a evaluar la condición. Si la condición es falsa, el ciclo se detiene y se continúa con la ejecución del código después del ciclo.

Es importante asegurarse de que la condición finalice en algún momento, para evitar un ciclo infinito. El cuerpo del ciclo debe modificar alguna variable que afecte a la condición de la forma que terminara en algún momento.

```java 
int i = 0; 
while (i < 10) {     
    System.out.println(i);    
    i++; }
```


Este código imprimirá los números del 0 al 9. La variable **i** se inicializa con 0 antes del ciclo y se incrementa en 1 dentro del ciclo, por lo que después de 10 iteraciones la condición **i < 10** será falsa y el ciclo se detendrá.

Más Ejemplos
------------

**Ejemplo 1:** Imprimir los números del 1 al 10
```java
int i = 1; 
while (i <= 10) {     
    System.out.println(i);    
    i++; }
```



**Ejemplo 2:** Sumar los números ingresados por el usuario hasta que ingrese un número negativo
```java
Scanner sc = new Scanner(System.in);
int sum = 0;
int num;
while (true) {
    System.out.print("Ingresa un número: ");
    num = sc.nextInt();
    if (num < 0) {
        break;
    }
    sum += num;
}
System.out.println("La suma de los números ingresados es: " + sum);
```


**Ejemplo 3:** Imprimir los números pares del 2 al 20

```java
int j = 2; 
while (j <= 20) {     
    System.out.println(j);    
    j += 2; }
```

