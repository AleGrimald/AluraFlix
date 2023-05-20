import Fila from "../Filas";
import "./Tabla.css"
const Tabla = (props) =>{   
    const filasDatos=[
        {
            nombre:"Nombre",
            descripcion:"Descripcion",
            editar:"Editar",
            remover:"Remover"
        },
        {
            nombre:"Back End",
            descripcion:"Todos los video que estoy usando para estudiar Back End ",
            editar:"Editar",
            remover:"Remover"
        },
        {
            nombre:"Mobile",
            descripcion:"Contenido que vengo estudiando sobre React Native y Flutter",
            editar:"Editar",
            remover:"Remover"
        },
        {
            nombre:"Infraestrutura",
            descripcion:"Todo lo que estoy aprendiendo sobre Docker y mucho mas",
            editar:"Editar",
            remover:"Remover"
        },
        {
            nombre:"Data Science",
            descripcion:"Cosas de React y Python que vengo aprendiendo",
            editar:"Editar",
            remover:"Remover"
        },
        {
            nombre:"Design & UX",
            descripcion:"Herramientas y técnicas que estudio sobre UX y Design",
            editar:"Editar",
            remover:"Remover"
        },
        {
            nombre:"Marketing Digital",
            descripcion:"La forma de vender y monetizar mis ideas",
            editar:"Editar",
            remover:"Remover"
        },
        {
            nombre:"Inovacion & Gestion",
            descripcion:"Como mantener el equipo felíz y mucho mas",
            editar:"Editar",
            remover:"Remover"
        },
    ]
    
    return <table className="tabla"> 
        {filasDatos.map((fila, index)=><Fila
        datos={fila} 
        key={index}
        />)
        }
    </table>
}

export default Tabla;