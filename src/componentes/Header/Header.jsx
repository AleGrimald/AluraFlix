import "./Header.css"
import Boton from "../Boton";


function Header(props) {
    return(
    <header  className="header">
        <img className="header__logo" src="/header.svg" alt="logo de aluraflix"/>
        <Boton cambiarForm={props.cambiarForm}  className="header__boton" value="Nuevo Video"/>
    </header>
    )
}

export default Header;