import "./Formulario2.css"
import Campo from "../CampoInp";
import Boton from "../Boton";
import Textarea from "../Textarea"
import { useState } from "react";

const Formulario2 = (props)=>{
    const [titulo, setTitulo] = useState("");
    const [codigo, setCodigo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const {registrarVideo}=props;

    const manejarEnvio = (event) => {
        event.preventDefault();
        //creo un objeto que guarde todos los datos del formulario
        let datosAEnviar = {
            titulo: titulo,
            codigo: codigo,
            descripcion: descripcion
        }
        registrarVideo(datosAEnviar);
    }

    const limpiarInputs = (event) =>{
        event.preventDefault();
        setTitulo("");
        setCodigo("");
        setDescripcion("");
    }

    return(
        <section>
            <form onReset={limpiarInputs} onSubmit={manejarEnvio} className="form">
                <h2 className="form__titulo">Nueva Categoria</h2>
                <Campo 
                    className="form__inp" 
                    type="text" 
                    placeholder="Nombre" 
                    required={true} 
                    valor={titulo} 
                    actualizarValor={setTitulo}
                />

                <Textarea 
                    className="form__txtarea" 
                    placeholder="Descripcion"
                    valor={descripcion} 
                    actualizarValor ={setDescripcion}
                />

                <input className="form__color" type="color"/>

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
                </div>

                <table>
                    <tr>
                        <td className="td__head">Nombre</td>
                        <td className="td__head">Descripcion</td>
                        <td className="td__head">Editar</td>
                        <td className="td__head">Remover</td>
                    </tr>
                    
                    <tr>
                        <td>Back End</td>
                        <td>Todos los video que estoy usando para estudiar Back End </td>
                        <td>Editar</td>
                        <td>Remover</td>
                    </tr>
                    <tr>
                        <td>Mobile</td>
                        <td>Contenido que vengo estudiando sobre React Native y Flutter</td>
                        <td>Editar</td>
                        <td>Remover</td>
                    </tr>
                    <tr>
                        <td>Infraestrutura</td>
                        <td>Todo lo que estoy aprendiendo sobre Docker y mucho mas</td>
                        <td>Editar</td>
                        <td>Remover</td>
                    </tr>
                    <tr>
                        <td>Data Science</td>
                        <td>Cosas de React y Python que vengo aprendiendo</td>
                        <td>Editar</td>
                        <td>Remover</td>
                    </tr>
                    <tr>
                        <td>Design & UX</td>
                        <td>Herramientas y técnicas que estudio sobre UX y Design</td>
                        <td>Editar</td>
                        <td>Remover</td>
                    </tr>
                    <tr>
                        <td>Marketing Digital</td>
                        <td>La forma de vender y monetizar mis ideas</td>
                        <td>Editar</td>
                        <td>Remover</td>
                    </tr>
                    <tr>
                        <td>Inovação & Gestão</td>
                        <td>Como mantener el equipo felíz y mucho mas</td>
                        <td>Editar</td>
                        <td>Remover</td>
                    </tr>
                </table>
            </form>
        </section>
    )
}

export default Formulario2;