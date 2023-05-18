import React from 'react';//Libreria de react para interfases graficas
import ReactDOM from 'react-dom/client';//este paquete nos ayuda a trabajar con reat y el dom
import './index.css';//importamos los estilos css
import App from './App';//importamos nuestro archivo App
import reportWebVitals from './reportWebVitals';//es para hacer un reporte de nuestro proyecto

//creamos una variable que reciba el div con id root de index.html.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //render va a recibir unas etiquetas similares a html
//aqui se visualizan los componentes para la pagina
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();