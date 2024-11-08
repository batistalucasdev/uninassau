import Styles from "./Body.module.css"
import GalleryCard from "../../components/Gallery/GalleryCard"
import animais from "../../assets/img/animais.jpg"
import arquitetura from "../../assets/img/arquitetura.jpg"
import cidade from "../../assets/img/cidade.jpg"
import decoracao from "../../assets/img/decoracao.jpg"
import esportes from "../../assets/img/esportes.jpg"
import natureza from "../../assets/img/natureza.jpg"
import paisagem from "../../assets/img/paisagem.jpg"
import pessoas from "../../assets/img/pessoas.jpg"
import refeicoes from "../../assets/img/refeicoes.jpg"

function Body() {
    return (
        <main className={Styles.Gallery}>
            <GalleryCard content="animais" tag={animais} />
            <GalleryCard content="arquitetura" tag={arquitetura} />
            <GalleryCard content="cidade" tag={cidade} />
            <GalleryCard content="decoracao" tag={decoracao} />
            <GalleryCard content="esportes" tag={esportes} />
            <GalleryCard content="natureza" tag={natureza} />
            <GalleryCard content="paisagem" tag={paisagem} />
            <GalleryCard content="pessoas" tag={pessoas} />
            <GalleryCard content="refeicoes" tag={refeicoes} />
        </main>
    )
}

export default Body