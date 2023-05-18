import "./Campo.css"

const Campo = (props) =>{
    const manejarCambio = (event) =>{
        props.actualizarValor(event.target.value);
    }

    return(
        <section className="contenedorInp">
                <input 
                type={props.type} 
                className={props.className} 
                placeholder={props.placeholder} 
                required = {props.required}
                value={props.valor}
                onChange={manejarCambio}
            />            
        </section>
    );
}

export default Campo;