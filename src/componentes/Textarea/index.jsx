const Textarea= (props) =>{

    const manejarCambio = (event) =>{
        props.actualizarValor(event.target.value);
    }
    return(
        <textarea
            className={props.className} 
            placeholder={props.placeholder}
            valor = {props.valor}
            onChange={manejarCambio}
        ></textarea>
    )
}

export default Textarea;