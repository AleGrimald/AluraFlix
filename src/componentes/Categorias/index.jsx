import { useState } from "react";
import Campo from "../CampoInp";
import Textarea from "../Textarea";
import Boton from "../Boton";
import Tabla from "../Tabla";

const Formulario2 =(props)=>{
    const {crearCategoria}=props;
    const [tituloC, setTituloC]=useState("");
    const [descripcionC, setDescripcionC] = useState("");
    const [colorC, setColor]= useState("#000FFF");
    const [codigoC, setCodigoC] = useState("");
    
    const manejarNuevaCategoria = (event)=>{
        event.preventDefault();
        const categoriaNueva ={
            titulo:tituloC,
            texto:descripcionC,
            colorFondo:colorC,
        }
        crearCategoria(categoriaNueva);
    }
    const limpiarInputs = (event) =>{
        event.preventDefault();
        setTituloC("");
        setDescripcionC("");
        setCodigoC("");
        setColor("#000FFF");
    }

    return(
        <form onReset={limpiarInputs} onSubmit={manejarNuevaCategoria} className="form" >
            <h2 className="form__titulo">Nueva Categoria</h2>
            <Campo 
                className="form__inp" 
                type="text" 
                placeholder="Nombre" 
                required={true} 
                valor={tituloC} 
                actualizarValor={setTituloC}
            />
            
            <Textarea 
                className="form__txtarea" 
                placeholder="Descripcion"
                valor={descripcionC} 
                actualizarValor ={setDescripcionC}
            />
            <input 
                className="form__color" 
                type="color" 
                value={colorC} 
                actualizarValor={setColor}
                onChange={(event)=>{
                    setColor(event.target.value)
                }}
            />
            <Campo 
                className="form__inp" 
                type="text" 
                placeholder="Codigo de seguridad" 
                required={true} 
                valor={codigoC} 
                actualizarValor ={setCodigoC}
            />
            
            <div className="contenedor__btnizq">
                <Boton className="form__guardar" type="submit" value="Guardar"/>
                <Boton className="form__limpiar" type="reset" value="Limpiar"/>
            </div>
            
            <Tabla/>
        </form>
    )
}

export default Formulario2;