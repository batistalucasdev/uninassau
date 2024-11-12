import Styles from "./Item.module.css"

function Item({ content, flag }) {
    return (
        <li>
            <a href="#" className={flag?Styles.active:Styles.notactive}>{content}</a>
        </li>
    )
}

export default Item