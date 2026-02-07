
# Laboratorio Kubernetes en AWS - Conversación completa

## 1. Introducción
A continuación se guía paso a paso cómo crear un cluster Kubernetes en AWS usando instancias EC2 con Ubuntu Server, optimizado para la capa gratuita (AWS Academy). Se incluyen versiones básicas y avanzadas, scripts de automatización y Terraform profesional.

---

## 2. Manual Básico Kubernetes en EC2

### 2.1 Objetivos
- Crear instancias EC2 en AWS
- Configurar nodos Linux para Kubernetes
- Inicializar cluster Kubernetes con kubeadm
- Integrar nodos worker al cluster
- Verificar el funcionamiento mediante despliegue de aplicaciones

### 2.2 Arquitectura
Cluster mínimo:

| Nodo | Rol | Tipo EC2 |
|------|----|----|
| k8s-master | Control Plane | t3.micro |
| k8s-worker1 | Worker | t3.micro |

Red: VPC por defecto de AWS

### 2.3 Creación de instancias EC2
1. Crear dos instancias Ubuntu 22.04 LTS
2. Configuración:
   - Instance type: t3.micro
   - Storage: 10GB
   - Security Group: permitir puertos 22, 6443, 10250, 30000-32767, 8472 UDP
3. Nombrar: k8s-master y k8s-worker1

### 2.4 Preparación de nodos (TODOS)
```bash
sudo apt update && sudo apt upgrade -y
sudo swapoff -a
sudo sed -i '/ swap / s/^/#/' /etc/fstab
sudo apt install -y containerd
sudo systemctl enable containerd
sudo systemctl start containerd

sudo modprobe overlay
sudo modprobe br_netfilter

cat <<EOF | sudo tee /etc/sysctl.d/kubernetes.conf
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
net.bridge.bridge-nf-call-ip6tables = 1
EOF

sudo sysctl --system
```

### 2.5 Instalación Kubernetes (TODOS)
```bash
sudo apt install -y apt-transport-https ca-certificates curl

curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.29/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg

echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.29/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes.list

sudo apt update
sudo apt install -y kubelet kubeadm kubectl
sudo apt-mark hold kubelet kubeadm kubectl
```

### 2.6 Inicialización master
```bash
sudo kubeadm init --pod-network-cidr=10.244.0.0/16
mkdir -p $HOME/.kube
sudo cp /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
kubectl apply -f https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml
```

### 2.7 Unir worker
Ejecutar comando `kubeadm join` que muestra el master en los nodos worker.

### 2.8 Verificación
```bash
kubectl get nodes
```

### 2.9 Despliegue de prueba
```bash
kubectl create deployment nginx --image=nginx
kubectl expose deployment nginx --type=NodePort --port=80
kubectl get svc
```

---

## 3. Laboratorio Avanzado – Terraform + cloud-init

### 3.1 Objetivos
- Provisión de infraestructura en AWS mediante Terraform
- Automatización de nodos Kubernetes con cloud-init
- Cluster reproducible y automatizado
- Preparación para escalado y DevOps real

### 3.2 Estructura del proyecto
```
k8s-terraform-lab/
├── main.tf
├── variables.tf
├── outputs.tf
├── networking.tf
├── compute.tf
├── security.tf
└── scripts/
      ├── master.sh
      └── worker.sh
```

### 3.3 Scripts cloud-init

#### master.sh
```bash
#!/bin/bash
apt update -y
apt install -y containerd apt-transport-https curl
swapoff -a
sed -i '/ swap / s/^/#/' /etc/fstab
modprobe overlay
modprobe br_netfilter
cat <<EOF | tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
EOF
sysctl --system
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.29/deb/Release.key | gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.29/deb/ /" > /etc/apt/sources.list.d/kubernetes.list
apt update
apt install -y kubelet kubeadm kubectl
apt-mark hold kubelet kubeadm kubectl
kubeadm init --pod-network-cidr=10.244.0.0/16 > /home/ubuntu/kubeinit.log
```

#### worker.sh
```bash
#!/bin/bash
apt update -y
apt install -y containerd apt-transport-https curl
swapoff -a
sed -i '/ swap / s/^/#/' /etc/fstab
modprobe overlay
modprobe br_netfilter
```

### 3.4 Terraform ejemplos

#### networking.tf
```hcl
resource "aws_vpc" "k8s" { cidr_block = "10.0.0.0/16" }
resource "aws_subnet" "public" { vpc_id = aws_vpc.k8s.id, cidr_block = "10.0.1.0/24", map_public_ip_on_launch = true }
resource "aws_subnet" "private" { vpc_id = aws_vpc.k8s.id, cidr_block = "10.0.2.0/24" }
resource "aws_internet_gateway" "igw" { vpc_id = aws_vpc.k8s.id }
```

#### security.tf
```hcl
resource "aws_security_group" "k8s" {
  vpc_id = aws_vpc.k8s.id
  ingress { from_port = 0, to_port = 65535, protocol = "tcp", cidr_blocks = ["10.0.0.0/16"] }
  ingress { from_port = 8472, to_port = 8472, protocol = "udp", cidr_blocks = ["10.0.0.0/16"] }
  egress { from_port = 0, to_port = 0, protocol = "-1", cidr_blocks = ["0.0.0.0/0"] }
}
```

#### compute.tf
```hcl
resource "aws_instance" "master" { ami = var.ami, instance_type = "t3.micro", subnet_id = aws_subnet.private.id, key_name = var.key, vpc_security_group_ids = [aws_security_group.k8s.id], user_data = file("scripts/master.sh") }
resource "aws_instance" "worker" { ami = var.ami, instance_type = "t3.micro", subnet_id = aws_subnet.private.id, key_name = var.key, vpc_security_group_ids = [aws_security_group.k8s.id], user_data = file("scripts/worker.sh") }
```

#### variables.tf
```hcl
variable "region" { default = "us-east-1" }
variable "ami" {}
variable "key" {}
```

#### outputs.tf
```hcl
output "master_private_ip" { value = aws_instance.master.private_ip }
output "worker_private_ip" { value = aws_instance.worker.private_ip }
```

### 3.5 Despliegue Terraform
```bash
terraform init
terraform plan
terraform apply
```

SSH al master → verificar nodos y unir workers con `kubeadm join`.

---

## 4. Buenas prácticas

- Separación de subred pública/privada
- Uso de Security Groups internos
- Automatización reproducible con Terraform
- Preparación para AutoScaling y Load Balancers
- Documentación clara de arquitectura (ideal para memoria de proyecto)

---

## 5. Resumen final

Este documento incluye **manual básico**, **lab avanzado con scripts**, y **plantilla profesional Terraform** para Kubernetes en AWS, optimizado para entornos académicos y prácticas DevOps.

