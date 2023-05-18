import "./Boton.css"
//Para usar los estados de react debemos importar las librerias
//import { useState } from "react";

const Boton = (props) =>{
    //Estados de REACT llamadas hooks, son funcionalidades que nos ayudan a trabajar con el comportamiento de REACT
    //useState, para usar esta funcion la debemos declarar. Esta funcion recibe por parametro dos elementos
    //useState(valorInicial), lo que esta entra parentecis es el estado inicial del state
    //debemos guardar el estado en una constante, la cual esta formada por una variable y una funcion
    //const [variable, actualizaFuncion] = useState(valor inicial);
    //const [formulario, actualizarFormulario] = useState(true);
    /*const manejarClick=()=>{
        //el valor de formulario es el que tiene useState como valor inicial
        actualizarFormulario(!formulario); //lo que coloquemos dentro de los () de la funcion seran el nuevo valor de formulario
        //al negar formulario, estamos cambiando el estado que se pasa a la funcion, si llega true se hace false y al reves
    
        
    }*/
    return (
    <div>
        <button cambiarForm={props.cambiarForm} type={props.type} className={props.className} onClick={props.cambiarForm} >{props.value}</button>
    </div>
)}

export default Boton;