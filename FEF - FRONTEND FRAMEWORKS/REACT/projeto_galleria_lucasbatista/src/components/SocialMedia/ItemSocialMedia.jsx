import Styles from "./ItemSocialMedia.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ItemSocialMedia({ icon }) {
    return (
        <li className={Styles.ItemSocialMedia}>
            <a href="#">
                <FontAwesomeIcon icon={icon} />
            </a>
        </li>
    )
}

export default ItemSocialMedia