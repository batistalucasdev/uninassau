import ItemSocialMedia from "../../../components/SocialMedia/ItemSocialMedia";
import Styles from "./SocialMedia.module.css"
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
    return (
        <div className={Styles.header_social_media}>
            <ul>
                <ItemSocialMedia icon={faFacebookF}/>
                <ItemSocialMedia icon={faTwitter}/>
                <ItemSocialMedia icon={faInstagram}/>
                <ItemSocialMedia icon={faYoutube}/>
            </ul>
        </div>
    )
}

export default SocialMedia