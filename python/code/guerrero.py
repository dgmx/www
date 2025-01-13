from personaje import Personaje

class Guerrero(Personaje):
    def __init__(self, nombre, tipo_arma):
        super().__init__(nombre)
        self.tipo_arma = tipo_arma
    def atacar (self):
        print (self.nombre, "ataca con", self.tipo_arma)