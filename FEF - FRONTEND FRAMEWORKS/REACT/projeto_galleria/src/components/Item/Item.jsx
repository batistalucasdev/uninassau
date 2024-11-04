import styles from "./Item.module.css"

export default function Item({content, flag}) {
    return (
        <li>
            <a href="#" className={flag?styles.active:styles.notactive}>{content}</a>
        </li>
    )
}