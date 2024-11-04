import SocialMedia from "../page/Header/SocialMedia/SocialMedia"
import NavBar from "../page/Header/NavBar/NavBar"

export default function Header() {
   
    return (
        <header className="header">
            <a href="" className="header_brand">Galleria</a>
            <NavBar/>
            <SocialMedia/>
        </header>
    )
}