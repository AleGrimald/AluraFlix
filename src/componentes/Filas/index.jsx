import Celdas from "../Celdas";
const Fila = (props)=>{

    return <tr className="fila">
        <Celdas valor={props.fila}/>        
    </tr>    
}

export default Fila;