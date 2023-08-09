import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBellSlash } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { AppContext } from "../App"

/**
 * Ce composant gère une ligne de la liste d'article. Elle affiche l'identifiant et le titre de l'article
 * Elle affiche également deux boutons pour lire le détail de l'article, et pour le mettre en favoris
 * Concernant le détail, j'y accède en précisant l'url `articles/${props.id}` qui va faire varier le paramètre d'URL
 * Et me permettre d'avoir l'article que je veux
 * 
 * J'ai également un bouton pour une fonction callback getFavorite, qui récupère l'id de l'article
 * Et l'envoie dans App.js via la fonction getActualArticle envoyée via le useContext. Ce qui va me permettre de 
 * faire varier la notion de favoris dans le composant parent. 
 */
export const Article = (props) => {
    const { getActualArticle } = useContext(AppContext)

    const getFavorite = (id) => {
        getActualArticle(id)
    }

    return (
        <li className="p-5 even:bg-teal-50 flex justify-between">
            <span>
                {props.id} - {props.titre}
            </span>
            <span className='flex gap-3'>
                <Link to={`articles/${props.id}`}>
                    <button className="font-bold">Lire</button>
                </Link>

                <button onClick={() => getFavorite(props.id)}>
                    {
                        props.favorite === true ? <FontAwesomeIcon icon={faBellSlash} /> : <FontAwesomeIcon icon={faBell} />
                    }
                </button>
            </span>
        </li>
    )
}