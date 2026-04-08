---
title: 11. Cuotas
parent: "Linux"
nav_exclude: true
---

## ✅ Cuotas en SAMBA
👉 Crear un filesystem independiente para /srv/samba/usuarios

1️⃣ Crear imagen o volumen

Ejemplo con archivo loop (20GB):

```bash
dd if=/dev/zero of=/quota_samba.img bs=1M count=20480
mkfs.ext4 /quota_samba.img
```

2️⃣ Mover datos actuales
  
```
mkdir /mnt/temp
mount -o loop /quota_samba.img /mnt/temp
rsync -av /srv/samba/usuarios/ /mnt/temp/
```

3️⃣ Montar con cuotas activadas y Desmontar temp:

```bash
umount /mnt/temp
```

Montar definitivo:

```bash
mount -o loop,usrquota,grpquota /quota_samba.img /srv/samba/usuarios
```

Si quieres persistencia, añade a `/etc/fstab:`

```bash
/quota_samba.img  /srv/samba/usuarios  ext4  loop,usrquota,grpquota  0 0
```

4️⃣ Inicializar cuotas

```bash
quotacheck -cugm /srv/samba/usuarios
quotaon /srv/samba/usuarios
```

5️⃣ Asignar cuota a cada usuario
  
    ```
    edquota usuario1
    edquota usuario2
    ``` 

Este comando inicia el archivo de configuración de cuotas:

```bash
Disk quotas for user usuario01 (uid 1002):
  Filesystem                   blocks       soft       hard     inodes     soft     hard
  /dev/loop0                       12          0          0          3        0        0
````

| Campo             | Significado                                           |
|------------------|-------------------------------------------------------|
| blocks           | Espacio usado actualmente                             |
| soft             | Límite blando (permite sobrepasar temporalmente)     |
| hard             | Límite duro (no se puede sobrepasar)                 |
| inodes           | Número de archivos                                    |
| soft/hard inodes | Límite de cantidad de archivos                       |


---

# 📌 Importante

Los valores están en **bloques de 1 KB**, no en MB o GB.

Ejemplo:

- 100000 bloques ≈ 100 MB  
- 1048576 bloques = 1 GB  

---

# 🎯 Ejemplo práctico: limitar a 1GB

Edita el archivo así:

```bash
dev/loop0 12 900000 1048576 3 0 0
```

Esto significa:

- Soft limit ≈ 900 MB  
- Hard limit = 1 GB  

Guarda y cierra Nano.

---

# 🔎 Qué ocurre después

- El usuario podrá superar 900MB temporalmente  
- No podrá superar 1GB bajo ninguna circunstancia  
- Si supera el soft limit, entra en periodo de gracia  

Puedes ver el periodo con:

```bash
quota -u usuario01
```

### Configurar periodo de gracia (opcional)

```bash
edquota -t
```

Ejemplo:

```bash
Grace period before enforcing soft limits for users:
Time units may be: days, hours, minutes, or seconds
  Filesystem             Block grace period     Inode grace period
  /dev/loop0                     7days                 7days
```

### Verificar que funciona

Desde el servidor:

```bash
repquota /srv/samba/usuarios
```
