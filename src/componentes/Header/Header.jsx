import "./Header.css"
import Boton from "../Boton";

function Header(props) {
    const {cambiarForm}=props;
    return(
    <header  className="header">
        <img className="header__logo" src="/header.svg" alt="logo de aluraflix"/>
        <Boton cambiarForm={cambiarForm}  className="header__boton" value="Nuevo Video"/>
    </header>
    )
}

export default Header;