import "./selectinp.css"
const SelectInp = (props) =>{
    //para recorrer este arreglo utilizaremos el metodo 
    //.map --> arreglo.map( (opcion, i) => {
    // return <option> </option>
    // } )
    //map recibe por parametro una funcion, a esta funcion le pasamos un elemento(nombre cualquiera)
    //y un index que es el indice del array. Tambien nos retornara algo, en este caso una etiqueta <optio>
    //y dentro el elemento del array

    const manejarCambio = (event) =>{
        props.actualizarValor(event.target.value);
    }


    return(
    <section className="contenedor_select">
        <select value={props.valor} onChange={manejarCambio} className={props.className}>
            <option value="" disabled defaultValue="" hidden>Seleccionar una categoria</option>
            {props.opcion.map((opcion, index) => 
            {
                return <option key={index} className={props.className}>{opcion}</option>
            })}
        </select>
    </section>
    );
}

export default SelectInp;