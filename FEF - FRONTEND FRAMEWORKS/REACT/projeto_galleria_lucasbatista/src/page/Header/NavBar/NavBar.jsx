import Styles from "./NavBar.module.css"
import Item from "../../../components/NavBar/Item"

function NavBar() {
    return (
        <nav className={Styles.header_navbar}>
            <ul>
               <Item content="Home" flag={true}/>
               <Item content="Fotos"/>
               <Item content="Serviços"/>
               <Item content="Sobre"/>
               <Item content="Contato"/>
            </ul>
        </nav>
    )
}

export default NavBar