# Bienvenido a la aplicación Corebiz
Para iniciar la aplicación puede ejecutar los siguientes comandos en la terminal de su SO

    git clone https://github.com/MatataFerra/corebiz-frontend-challenge.git
    cd corebiz-frontend-challenge
    yarn start
  
  La aplicación empezará a desplegarse en su entorno local y por lo general se abrirá en su navegador en el puerto 3000.

Para utilizar la aplicación vaya a su navegador y escriba en la barra de direcciones http://localhost:3000

## ¿Qué debe visualizar?

 - Debe visualizar una app e-commerce, puede ver los productos que son
   traidos de una API y puede comprar. Al pulsar comprar el carrito de
   compras aumenta.
     
  - Puede suscribirse al newsletter, en caso de que introduzca un dato
   incorrecto la aplicación se lo informará

## Consideraciones finales

La aplicación está desarrollada con React. Para conectarse a la APi se usó fetch. La app es responsive en todos sus breakpoints.

useContext con useReducer para el manejo del estado de la aplicación.

Cada componente está implementado de manera independiente pensando en su reutilización.

Se utilizaron helpers, para hacer peticiones fetch y expresiones regulares

Se creó un custom hook para el manejo del formulario

La lógica está basada en ES6+

