import "./Banner.css"

function Banner() {
    return(
        <section className="banner">
            <div className="contenedor__izq">
                <a className="banner__boton" href=".banner">Front End</a>
                <h2 className="banner__titulo">Challenge React</h2>
                <p className="banner__parrafo">
                    Este challenge es una forma de
                    aprendizaje. Es un mecanismo
                    donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                </p>
            </div>
            <div className="contenedor__derecha">
                <iframe
                    className="banner__video"
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/ov7vA5HFe6w" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    >
                </iframe>
            </div>
        </section>
    )
}

export default Banner;