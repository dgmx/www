![Red](img/oposredes.png)

En el esquema, cada equipo de la empresa tiene identificadas sus tarjetas de red Gigabit Ethernet con su nombre, dirección MAC y dirección IP.

Tenga en cuenta las siguientes consideraciones:

- R0 es un router proporcionado por la compañía de telecomunicaciones, que ofrece conectividad a Internet mediante fibra óptica. Está configurado de la siguiente manera:
   - Realiza NAPT2 (masquerading) de LAN SALIDA hacia Internet.
   - Port Forwarding de 80.31.239.231:443 a 192.168.1.2:443.

- RTEL es un router de la compañía de telecomunicaciones, ubicado en Internet, que actúa como puerta de enlace de R0 para todo el tráfico con
destino a Internet.

- www.goodluck.es es un servidor web alojado en la DMZ de la empresa.
- PC1 es un equipo de usuario situado en la LAN PROTEGIDA de la empresa.
seneca.juntadeandalucia.es es un servidor web público ubicado en Internet.
- PCInternet es un PC conectado directamente a Internet, con IP pública.
- Se supone que el servidor DNS en Internet del dominio goodluck.es funciona
perfectamente, traduciendo www.goodluck.es por 80.31.239.231.
- Se supone que el servidor DNS interno de la organización funciona
perfectamente, traduciendo www.goodluck.es por 192.168.3.10.
- Cancervero es una máquina con Debian 12 (sin entorno gráfico) con el
pequete iptables correctamente instalado y operativo, que cumple todas las
funciones que se especifican a continuación:
  - El enrutamiento IP está activado.
  - La ruta por defecto es 192.168.1.1 a través de la interfaz enp1s0.
  - Realiza NAPT (masquerading) para la red DMZ hacia la red LAN SALIDA.
  - Realiza NAPT (masquerading) para la red LAN PROTEGIDA hacia la red LAN SALIDA.
  - Realiza Port Forwarding de 192.168.1.2:443 a 192.168.3.10:443.
  - Implementa una serie de reglas de filtrado que no vienen al caso para el presente ejercicio.