import Styles from "./Header.module.css"
import NavBar from "./NavBar/NavBar"
import SocialMedia from "./SocialMedia/SocialMedia"

function Header() {
    return (
        <header className={Styles.header}>
            <a href="" className={Styles.header_brand}>Galleria</a>
            <NavBar />
            <SocialMedia />
        </header>
    )
}

export default Header