# Manual de programación en Python con Visual Studio Code

## 1. Introducción

Este manual explica cómo preparar un entorno de desarrollo para Python utilizando Visual Studio Code (VS Code), qué extensiones instalar, cómo configurar un proyecto, crear entornos virtuales, ejecutar programas, depurarlos y organizar correctamente las dependencias.

El objetivo es terminar con un entorno adecuado tanto para aprender Python como para desarrollar proyectos más completos.

## 2. Programas necesarios

Para trabajar con Python en VS Code necesitamos:

1. Visual Studio Code.
2. Python.
3. La extensión Python para VS Code.

Instalar VS Code no instala Python automáticamente.

## 3. Instalar Visual Studio Code

Descarga e instala Visual Studio Code desde su página oficial:

https://code.visualstudio.com/

Durante la instalación se pueden mantener las opciones predeterminadas.

## 4. Instalar Python

Descarga Python desde:

https://www.python.org/downloads/

Se recomienda utilizar una versión de Python con soporte activo.

### Windows

Durante la instalación es recomendable activar **Add Python to PATH**.

Comprobar la instalación:

```text
python --version
```

En algunos Windows:

```text
py --version
```

En macOS/Linux:

```text
python3 --version
```

## 5. Extensiones necesarias

En VS Code abre **Extensions** (`Ctrl + Shift + X`) y busca la extensión oficial **Python** de Microsoft.

La extensión proporciona integración con Python, incluyendo ejecución, IntelliSense, depuración, pruebas y gestión de entornos.

### Extensiones complementarias

La extensión Python puede instalar automáticamente:

- Pylance.
- Python Debugger.
- Python Environments.

### Extensiones opcionales

- Jupyter.
- GitHub Copilot.
- GitLens.

No es recomendable instalar extensiones que no se necesiten.

## 6. Crear el primer proyecto

Una estructura mínima:

```text
Python/
└── mi_primer_proyecto/
    └── main.py
```

En VS Code utiliza **File → Open Folder** y abre la carpeta del proyecto.

## 7. Seleccionar el intérprete

Pulsa `Ctrl + Shift + P` y ejecuta:

```text
Python: Select Interpreter
```

Selecciona la instalación de Python que quieras utilizar.

## 8. Crear un entorno virtual

### Windows

```text
python -m venv .venv
.venv\Scripts\activate
```

### macOS/Linux

```text
python3 -m venv .venv
source .venv/bin/activate
```

La carpeta puede quedar así:

```text
mi_primer_proyecto/
├── .venv/
└── main.py
```

## 9. Comprobar el entorno

```text
python --version
```

Windows:

```text
where python
```

macOS/Linux:

```text
which python
```

## 10. Configuración de VS Code

Puede crearse:

```text
.vscode/settings.json
```

Ejemplo:

```json
{
    "editor.formatOnSave": true,
    "editor.insertSpaces": true,
    "editor.tabSize": 4
}
```

## 11. Primer programa

`main.py`:

```python
nombre = input("¿Cómo te llamas? ")
print(f"Hola, {nombre}!")
```

## 12. Ejecutar un programa

Desde VS Code:

- Botón **Run Python File**.
- Terminal integrada:

```text
python main.py
```

- Selección de código con `Shift + Enter`.

## 13. Terminal integrado

Abrir con:

**Terminal → New Terminal**

o:

```text
Ctrl + `
```

Permite ejecutar programas, crear entornos, instalar paquetes, ejecutar pruebas y trabajar con Git.

## 14. Instalar paquetes

```text
python -m pip install requests
```

Ver paquetes:

```text
python -m pip list
```

## 15. requirements.txt

Ejemplo:

```text
requests
pytest
```

Instalar dependencias:

```text
python -m pip install -r requirements.txt
```

Generar el archivo:

```text
python -m pip freeze > requirements.txt
```

## 16. .gitignore

La carpeta `.venv` normalmente no debe subirse a Git.

Ejemplo:

```text
.venv/
__pycache__/
*.pyc
```

## 17. Depuración

Coloca un breakpoint haciendo clic a la izquierda de una línea y pulsa `F5`.

Durante la depuración se pueden inspeccionar variables y ejecutar el programa paso a paso.

Controles principales:

- Continue.
- Step Over.
- Step Into.
- Step Out.
- Stop.

## 18. Pruebas automáticas

Se pueden utilizar `unittest` o `pytest`.

Instalar pytest:

```text
python -m pip install pytest
```

Ejemplo:

```python
def sumar(a, b):
    return a + b

def test_sumar():
    assert sumar(2, 3) == 5
```

## 19. Jupyter

Para datos, estadística, IA o ciencia de datos puede instalarse la extensión Jupyter para trabajar con archivos `.ipynb`.

No es imprescindible para aprender Python básico.

## 20. Estructura recomendada

Proyecto pequeño:

```text
mi_proyecto/
├── .venv/
├── main.py
├── requirements.txt
└── .gitignore
```

Proyecto mayor:

```text
mi_proyecto/
├── .venv/
├── .vscode/
│   └── settings.json
├── src/
│   └── main.py
├── tests/
│   └── test_main.py
├── .gitignore
├── requirements.txt
└── README.md
```

## 21. Comandos básicos

```text
python --version
python -m venv .venv
python -m pip install nombre_paquete
python -m pip list
python -m pip freeze > requirements.txt
python -m pip install -r requirements.txt
python main.py
```

## 22. Flujo de trabajo recomendado

1. Crear la carpeta del proyecto.
2. Abrirla en VS Code.
3. Crear `.venv`.
4. Seleccionar el intérprete.
5. Crear los archivos Python.
6. Programar.
7. Ejecutar.
8. Depurar.
9. Instalar únicamente las dependencias necesarias.
10. Actualizar `requirements.txt`.

## 23. Lista de comprobación

- [ ] VS Code instalado.
- [ ] Python instalado.
- [ ] `python --version` funciona.
- [ ] Extensión Python instalada.
- [ ] Pylance disponible.
- [ ] Python Debugger disponible.
- [ ] Intérprete seleccionado.
- [ ] Entorno virtual creado.
- [ ] Archivo `.py` ejecutable.
- [ ] Terminal disponible.
- [ ] Depurador funcionando.
- [ ] Instalación de paquetes funcionando.
- [ ] `requirements.txt` entendido.

## 24. Recursos oficiales

- Visual Studio Code: https://code.visualstudio.com/
- Python: https://www.python.org/
- Python en VS Code: https://code.visualstudio.com/docs/languages/python
- Python Quick Start: https://code.visualstudio.com/docs/python/python-quick-start
- Python Tutorial: https://code.visualstudio.com/docs/python/python-tutorial
