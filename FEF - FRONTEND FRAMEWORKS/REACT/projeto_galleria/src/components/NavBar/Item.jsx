import Styles from "./Item.module.css"

function Item({ content, flag }) {
    return (
        <li>
            <a href="#" class={Styles.active}>{content}</a>
        </li>
    )
}

export default Item