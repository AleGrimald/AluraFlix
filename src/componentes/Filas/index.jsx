import Celdas from "../Celdas";
const Fila = (props)=>{
    const {nombre,descripcion,editar,remover}=props.datos
    return <tr className="fila">
        <Celdas datos={nombre}/>
        <Celdas datos={descripcion}/>
        <Celdas datos={editar}/>
        <Celdas datos={remover}/>
    </tr>
}

export default Fila;