import "./Celdas.css"
const Celdas = (props)=>{
    return <section className="celdas">
        <td className="titulo">{props.valor.titulo}</td>
        <td className="texto">{props.valor.texto}</td>
        <td><a className="editar" href="/#">{props.valor.editar}</a></td>
        <td><a className="remover" href="/#">{props.valor.remover}</a></td>
    </section>
}

export default Celdas;