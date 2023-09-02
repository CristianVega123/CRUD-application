# Proyecto de CRUD

Este proyecto es un un CRUD sobre productos.

Para poder ejecutarlo necesitaras algunos pasos, lo repasaremos por cada archivo ( ./backend, ./frontend)

## Requerimientos previos 
Necesitas tener instalados: 

1. Node.js [✔](https://nodejs.org/es) **(Descargar la version LTS)**
``` bash 
   # Para comprobar que tienes npm y node descargados.
   npm --version  | npm -v  
   node --version | node -v
```
2. Typescript, para descargarlo tienes que haber hecho el requerimiento anterior.
``` bash 
    npm install -g typescript

    #Comprobar si tienes typescript descargado
    tsc -v
```
3. MySQL, acá un tutorial de como descargarlo [✔](https://www.youtube.com/watch?v=_K2nOYwOq1E)



## Requerimientos en Carpetas

### Backend
Son algunos pasos para tener lista la carpeta backend.

1. Crea tu archivo .env en la raíz de la carpeta. La carpeta debe contener parametros para que funcione la aplicación.

```env
    # Son claves importantes para que funcione la aplicación 
    #los datos que estan ahí son de ejemplo, coloque los suyos.

    PORT_SERVER=3014            #Debes colocar algún puerto disponible
    NAME_DATABASE=DbName        #El nombre de la base de datos que almacenará las tablas
    USERNAME_DATABASE=userDB    #El usuario de su base de datos 
    PASSWORD_DATABASE=xxxx      #La contraseña de su usuario en la base de datos
    HASH_SALTROUND=10           #Los saltos de hash, critico para la encriptación de datos, el default es 10
    SECRET_SESSION=Cat          #Una clave Secreta para sus sesiones.
```

Por favor no olvidarse de colocar estos datos en su archivo .env, sino por consiguiente, no funcionará la aplicación.

2. Colocarse dentro de la la carpeta backend e hacer 
```bash
    npm install  
```
Esto es para descargar las dependencias.


Cuando haya cumplido lo anterior, entonces en su consola, escribá lo siguiente: 

```bash
    npm run dev
```
Recuerde hacerlo dentro de la carpeta backend todo los requerimientos anteriores, con esto ya tiene corriendo el servidor.


### Frontend

Solo debe entrar a la carpeta frontend-react e instalar las dependencias:

```bash
    npm install
```

Luego corrar el servidor del frontend con 

```bash
    npm run dev 
```

Con esto, debería estar funcinando tanto el frontend como el backend.
