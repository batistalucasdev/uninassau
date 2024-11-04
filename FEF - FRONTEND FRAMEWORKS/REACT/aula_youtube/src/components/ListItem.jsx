export default function ListItem() {
    return (
        <li>
            <a
                target="_blank"
                rel="noreferrer"
                href={preprocessCSS.url}>
                <img 
                src={props.imageUrl}
                alt={props.alt}/>
            </a>
        </li>
    )
}