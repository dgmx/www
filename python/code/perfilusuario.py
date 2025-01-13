class PerfilUsuario:
    def __init__(self, nombre, fecha_nacimiento, correo_electronico, foto_perfil="default.jpg") :
        self.nombre = nombre
        self.fecha_nacimiento = fecha_nacimiento
        self.correo_electronico = correo_electronico
        self.foto_perfil = foto_perfil
        self.amigos = []
        self.publicaciones = []
def agregar_amigo(self, amigo):
    self.amigos.append(amigo)
def publicar(self, texto):
    self.publicaciones.append(texto)