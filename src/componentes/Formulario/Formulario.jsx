import "./Formulario.css"
import Campo from "../CampoInp";
import SelectInp from "../SelectInp";
import Textarea from "../Textarea";
import { useState } from "react";
import Boton from "../Boton";
import Formulario2 from "../Categorias";

const Formulario = (props) =>{

    //para evitar que el formulario recargue la pagina ante un evento submit,
    //usamos una funcion que controle el preventDefault que viene en los navegadores
    //de esta forma evitamos que el navegador se encargue del funcionamiento del formulario
    //y pasamos a controlarlo nosotros
    
//States del primer FORM
    const [titulo, setTitulo] = useState("");
    const [linkV, setLinkV] = useState("");
    const [linkF, setLinkF] = useState("");
    const [opciones, setOpciones] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [codigo, setCodigo] = useState("");
    const {registrarVideo, crearCategoria}=props;

    const manejarEnvio = (event) => {
        event.preventDefault();
        //creo un objeto que guarde todos los datos del formulario
        let datosAEnviar = {
            titulo: titulo,
            linkV: linkV,
            linkF: linkF,
            opciones: opciones,
            descripcion: descripcion,
            codigo: codigo
        }
        registrarVideo(datosAEnviar);
    }
    const limpiarInputs = (event) =>{
        event.preventDefault();
        setTitulo("");
        setLinkV("");
        setLinkF("");
        setOpciones("")
        setDescripcion("");
        setCodigo("");
    }
//Form2 
    const [activarForm2, setForm2]=useState(false);
    const controlarForm2 = (e)=>{
        e.preventDefault();
        setForm2(!activarForm2);
    }

    return(
        <section className="contenedor">
            <form onReset={limpiarInputs} onSubmit={manejarEnvio} className="form">
                <h2 className="form__titulo">Nuevo Video</h2>
                <Campo 
                    className="form__inp" 
                    type="text" 
                    placeholder="Titulo" 
                    required={true} 
                    valor={titulo} 
                    actualizarValor={setTitulo}
                />

                <Campo 
                    className="form__inp" 
                    type="url" 
                    placeholder="Link del video" 
                    required={true}
                    valor={linkV} 
                    actualizarValor ={setLinkV}
                />

                <Campo
                    className="form__inp" 
                    type="url" 
                    placeholder="Link imagen del video"
                    valor={linkF} 
                    actualizarValor ={setLinkF}
                />

                <SelectInp 
                    className="form__inp" 
                    required={true}
                    valor={opciones} 
                    actualizarValor ={setOpciones}
                    opcion={props.opciones}
                    // categoria={categorias}
                />

                <Textarea 
                    className="form__txtarea" 
                    placeholder="Descripcion"
                    valor={descripcion} 
                    actualizarValor ={setDescripcion}
                />

                <Campo 
                    className="form__inp" 
                    type="text" 
                    placeholder="Codigo de seguridad" 
                    required={true}
                    valor={codigo} 
                    actualizarValor ={setCodigo}
                />

                <div className="contenedor__botones">
                    <div className="contenedor__btnizq">
                        <Boton className="form__guardar" type="submit" value="Guardar"/>
                        <Boton className="form__limpiar" type="reset" value="Limpiar"/>
                    </div>
                    <div className="contenedor__btderecha">
                        <button 
                            className="form__crear" 
                            type="button" 
                            onClick={controlarForm2}>
                            Nueva Categoria
                        </button>
                    </div>
                </div>
            </form>
            
            { activarForm2 === true ? <Formulario2
                crearCategoria={crearCategoria}
                /> : <></>
            }
        </section>
    )
}

export default Formulario;