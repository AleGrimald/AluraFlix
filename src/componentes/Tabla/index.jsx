import Fila from "../Filas";
import "./Tabla.css"
const Tabla = (props) =>{ 
    
    return <table className="tabla"> 
        {props.ot.map((opcion, index) => <Fila fila={opcion} key={index}/>)}
    </table>
}

export default Tabla;