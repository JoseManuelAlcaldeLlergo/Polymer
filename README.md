# Polymer

Este es un repositorio dedicado a una simple introducción a los Web Components con Polymer. En él expondremos una serie de ejemplos con la finalidad de mostrar el potencial de esta herramienta y enseñar un poco cómo funciona.
Este proyecto ha sido realizado por José Manuel Alcalde Llergo (JoseManuelAlcaldeLlergo) y Tomás Fernández Urbano (TomasFdez5), estudiantes del Grado en Ingeniería Informática de la Universidad de Córdoba.

# Instalar tutorial

Para desarrollar nuestro tutorial, ¿qué mejor que hacerlo en el propio Polymer?. En primer lugar veamos como podemos instalar Polymer en nuestro equipo, para después poder desplegar nuestro tutorial personalizado de Polymer.

## 1 ¿Cómo instalar Polymer?

Existen una serie de prerrequisitos para instalar la versión 3.0 de Polymer:

* Instalar Git.

* Instalar npm y Node.js

### 1.1 Instalar Git

Para instalar Git en nuestra máquina tendremos que utilizar los siguientes comandos:

Actualizamos la lista de paquetes disponibles, así como sus versiones, y instalamos Git propiamente dicho.
```sh
$ sudo apt update
$ sudo apt install git
```

### 1.2 Instalar npm

Node Package Manager ([npm]) es el sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript. 
Para instalarlo debemos utilizar el siguiente comando: 
```sh
sudo apt install npm
```
Pudiendo verificar que la instalación ha sido correcta con el comando:
```sh
npm -v
```

### 1.3 Instalar Node.js

[Node.js] es un entorno de ejecución de JavaScript pensado para construir aplicaciones en red escalables. 
Para instalarlo emplearemos el comando:
```sh
sudo apt install nodejs
```

### 1.4 Instalar Polymer-CLI

Como último paso vamos a instalar la interfaz por línea de comandos de Polymer (Polymer-CLI). Para ello lo haremos con el gestor de paquetes instalado previamente npm y realizaremos la instalación de manera global mediante la opción -g:
```sh
sudo npm install -g polymer-cli
```
## 2 Desplegar el tutorial

Ahora que ya tenemos instalado Polymer en nuestro equipo vamos a ver cómo desplegar el tutorial que hemos desarrolado a partir del starter-kit de Polymer en el cual explicamos qué es Polymer, cómo comenzar a desarrollar componentes del mismo, cómo utilizar diferentes componentes para nuestros propios proyectos, así como qué ventajas e inconvenientes tiene frente a otras librerías. 

[W3C]: https://www.w3c.es 

[desarrollo declarativo]: https://prezi.com/7vcuauwjiqzf/programacion-declarativa-vs-programacion-imperativa/

[npm]: https://devcode.la/blog/que-es-npm/

[Node.js]: https://nodejs.org/es/about/
