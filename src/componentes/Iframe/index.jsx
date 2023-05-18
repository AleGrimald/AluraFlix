import "./Video.css"

const Video = (props) =>{
    const {linkV} = props.datos;
    const {colorBorde} = props;
    return(
    <div className="contenedor_videos" style={{borderColor: colorBorde}}>
        <iframe
            width={560}
            height={259} 
            src={linkV}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            >
        </iframe>
    </div>
    )
}

export default Video;