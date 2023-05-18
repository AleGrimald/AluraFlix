import Fila from "../Filas";

const Tabla = (props) =>{
    const secciones = [
        {
            titulo:"Front End",
            colorFondo:"#6BD1FF",
            texto:"Formación Front End de Alura Latam",
        },
        {
            titulo:"Back End",
            colorFondo:"#00C86F",
            texto:"Formación Back End de Alura Latam",
        },
        {
            titulo:"Dev UX/UI",
            colorFondo:"#5d00c8",
            texto:"Formación UX/Design de Alura Latam",
        },
        {
            titulo:"Inovacion y Gestion",
            colorFondo:"#FE8C2A",
            texto:"Formación Innovación y Gestión de Alura Latam",
        }
    ]
    return <table className="tabla">
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
        {/* {secciones.map((seccionDatos, index)=><Fila
        datos={seccionDatos}
        key={index}
        />)} */}
    </table>
}

export default Tabla;