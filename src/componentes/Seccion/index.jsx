import "./Seccion.css";
import Video from "../Iframe";
const Seccion = (props) =>{

    //Destructuracion
    const {colorFondo, texto, titulo} = props.datos;
    const {videos}=props;
    const estiloTitulo={backgroundColor: colorFondo}
    const scrollbar = {WebkitScrollSnapType: colorFondo}

    return( videos.length > 0 &&
        <section className="seccion">
            <div className="contenedor__titulo">
                <h3 className="titulo__h3" style={estiloTitulo}>{titulo}</h3>
                <p className="titulo__p">{texto}</p>
            </div>
            <div className="contenedor__videos" style={scrollbar}>
                {
                    videos.map((video, index)=><Video datos={video} key={index} colorBorde={colorFondo}/>)
                }
            </div>
        </section>
    )
}

export default Seccion;