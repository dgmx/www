from personaje import Personaje

class Mago(Personaje):
    def __init__(self, nombre, tipo_hechizo):
        super()._init__(nombre)
        self.tipo_hechizo = tipo_hechizo
def lanzar_hechizo(self):
    if self.energia > 10:
        print(self.nombre, "lanza un hechizo de", self.tipo_hechizo)
        self.energia -= 10 
    else:
        print(self.nombre, "no tiene energía para lanzar el hechizo.")