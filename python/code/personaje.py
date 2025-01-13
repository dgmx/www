class Personaje:
    def __init__(self, nombre):
        self.nombre = nombre
        self. salud = 100
        self.energia = 100
    def moverse(self, direccion):
        print(self.nombre, "se mueve hacia", direccion)