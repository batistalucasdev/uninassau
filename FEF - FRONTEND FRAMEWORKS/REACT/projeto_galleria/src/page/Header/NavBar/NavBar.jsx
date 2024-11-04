import styles from "./NavBar.module.css"
import Item from "../../../components/Item/Item"

export default function NavBar() {
    return (
        <nav className = {styles.header_navbar}>
            <ul>
                <Item content="Home" flag = {true} />
                <Item content="Fotos" />
                <Item content="Serviços" />
                <Item content="Sobre" />
                <Item content="Contato" />
            </ul>
        </nav >
    )
}