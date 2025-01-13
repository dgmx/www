class Coche:
    def __init__(self, marca, modelo, velocidad_maxima, color):
        self.marca = marca
        self. modelo = modelo
        self.velocidad_maxima = velocidad_maxima
        self.color = color
        self.velocidad_actual = 0
    def acelerar(self):
        if self.velocidad_actual < self.velocidad_maxima:
            self.velocidad_actual += 10
            print ("Acelerando ...")
            print ("Velocidad actual:", self .velocidad_actual, "km/h") 
        else:
            print ("Ya has alcanzado la velocidad máxima.")
    def frenar(self):
        self.velocidad_actual -= 10
        print ("Frenando...")
        print ("Velocidad actual:", self.velocidad_actual, "km/h")
    def girar(self, direccion):
        print("Girando hacia", direccion)