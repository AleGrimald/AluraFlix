import './App.css';
import Header from './componentes/Header/Header.jsx';
import Banner from './componentes/Banner/Banner.jsx';
import Formulario from './componentes/Formulario/Formulario';
import Seccion from "./componentes/Seccion/index.jsx";
import Footer from './componentes/Footer';
import { useState } from "react"; //el hook debe ser utilizado dentro de un componente

function App() {
  const [mostrarFormulario, actualizarFormulario] = useState(false);
  //Condicional rendering, react nos permite desidir que componenetes se van a mostrar y cuando.
  //Este state se encarga de capturar los datos del form y guardarlos en un arreglo vacio
  const [videos, actualizarVideos] = useState(
    [
    {
      opciones:"Front End",
      linkV:"https://www.youtube.com/embed/GJfOSoaXk4s",
    },
    {
      opciones:"Front End",
      linkV:"https://www.youtube.com/embed/rpvrLaBQwgg",
    },
    {
      opciones:"Front End",
      linkV:"https://www.youtube.com/embed/PztCEdIJITY",
    },
    {
      opciones:"Front End",
      linkV:"https://www.youtube.com/embed/UuAX5azcvDQ",
    },
    {
      opciones:"Back End",
      linkV:"https://www.youtube.com/embed/t-iqt1b2qqk"
    },
    {
      opciones:"Back End",
      linkV:"https://www.youtube.com/embed/cLLKVd5CNLc"
    },
    {
      opciones:"Back End",
      linkV:"https://www.youtube.com/embed/EoPvlE85XAQ"
    },
    {
      opciones:"Back End",
      linkV:"https://www.youtube.com/embed/Z024LSCMqFk"
    },
    {
      opciones:"Inovacion y Gestion",
      linkV:"https://www.youtube.com/embed/vhwspfvI52k"
    },
    {
      opciones:"Inovacion y Gestion",
      linkV:"https://www.youtube.com/embed/YhR7Zp8NUzE"
    },
    {
      opciones:"Inovacion y Gestion",
      linkV:"https://www.youtube.com/embed/6N3OkLCfK-0"
    },
    {
      opciones:"Inovacion y Gestion",
      linkV:"https://www.youtube.com/embed/DB71zt-KAVc"
    },
    {
      opciones:"Dev UX/UI",
      linkV:"https://www.youtube.com/embed/PHsVJhco6dY"
    },
    {
      opciones:"Dev UX/UI",
      linkV:"https://www.youtube.com/embed/D4NyQ5iOMF0"
    },
    {
      opciones:"Dev UX/UI",
      linkV:"https://www.youtube.com/embed/lYWOzxVCTao"
    },
    {
      opciones:"Dev UX/UI",
      linkV:"https://www.youtube.com/embed/yJOdW_P1oPQ"
    }
  ]);

  
  //Funcion para mostrar y ocultar el Formulario
  const cambiarForm = () =>{
    actualizarFormulario(!mostrarFormulario);
  }

  //obtenemos los datos que se ingresan en el formulario Nuevo video
  const registrarVideo = (video) => {
    //spread operator, es una copia
    actualizarVideos([...videos, video]);
  }

  //Lista de secciones
  const secciones = [
    {
      titulo:"Front End",
      colorFondo:"#6BD1FF",
      texto:"Formación Front End de Alura Latam",
    },
    {
      titulo:"Back End",
      colorFondo:"#00C86F",
      texto:"Formación Back End de Alura Latam",
    },
    {
      titulo:"Dev UX/UI",
      colorFondo:"#5d00c8",
      texto:"Formación UX/Design de Alura Latam",
    },
    {
      titulo:"Inovacion y Gestion",
      colorFondo:"#FE8C2A",
      texto:"Formación Innovación y Gestión de Alura Latam",
    }
  ]

  return (
    <div className="App">
      <Header cambiarForm={cambiarForm}/>

      {/*Ternario --> condicion ? si : no*/}
      { mostrarFormulario === true ? <Formulario
          opciones={secciones.map((opcion)=>opcion.titulo )}
          registrarVideo={registrarVideo}
        /> : <></>}
        
      <Banner/>

      {/*Vamos a recorrer nuestro objeto secciones para crear las secciones de html. Usamos .map*/
        secciones.map((seccionesParametro, index)=><Seccion 
        datos={seccionesParametro} 
        key={index}
        videos={videos.filter(video => video.opciones === seccionesParametro.titulo)}
        />)
      }

      <Footer/>
    </div>
  );
}
export default App;