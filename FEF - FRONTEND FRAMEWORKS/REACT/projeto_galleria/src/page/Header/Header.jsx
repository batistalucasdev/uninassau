import Styles from "./Header.module.css"
import NavBar from "./NavBar/NavBar"

function Header() {
    return (
        <header className={Styles.header}>
            <a href="" className={Styles.header_brand}>Galleria</a>
            <NavBar />
        </header>
    )
}

export default Header