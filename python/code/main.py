from personaje import Personaje
from mago import Mago
from guerrero import Guerrero

alicia = Mago("Alicia","fuego")
javier = Guerrero("Javier", "espada")

alicia.moverse ("norte")
alicia.lanzar_hechizo()

javier.moverse ("sur")
javier.atacar()