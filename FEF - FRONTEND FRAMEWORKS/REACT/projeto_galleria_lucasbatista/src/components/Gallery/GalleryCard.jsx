import Styles from "./GalleryCard.module.css"

function GalleryCard({tag, content}) {
    return (
        <div className={Styles.GalleryCard} style={{backgroundImage: `url(${tag})`}}> 
            <h2 className={Styles.GalleryCard_title}>{content}</h2>
            <a className={Styles.GalleryCard_btn} href="">Mais fotos</a>
        </div>
    )
}

export default GalleryCard