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

const categories = [
    { content: "Animais", tag: animais },
    { content: "Arquitetura", tag: arquitetura },
    { content: "Cidade", tag: cidade },
    { content: "Decoracao", tag: decoracao },
    { content: "Esportes", tag: esportes },
    { content: "Natureza", tag: natureza },
    { content: "Paisagem", tag: paisagem },
    { content: "Pessoas", tag: pessoas },
    { content: "Refeições", tag: refeicoes }
];

function Body() {
    return (
        <main className={Styles.Gallery}>
            {categories.map((category, index) => (
                <GalleryCard key={index} content={category.content} tag={category.tag} />
            ))}
        </main>
    )
}

export default Body