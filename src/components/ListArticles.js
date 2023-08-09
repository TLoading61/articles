import { Link } from 'react-router-dom'
import { Article } from './Article'

/**
 * Ici est géré la liste d'articles présents sur l'app
 */
export const ListArticles = (props) => {

    /**
     * Ce composant retourne une liste stylisée qui affiche les différents articles
     * Tout en bas, j'ajoute un bouton pour aller sur la page d'ajout.
     */
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="w-96 h-128 shadow-lg">
                <h2 className="text-center text-lg font-bold uppercase">Articles React -</h2>

                <ul className="mt-20">
                    {
                        /**
                         * J'utilise la fonction map pour boucler sur la props envoyée depuis App.js qui est mon tableau d'article
                         * Pour chaque article dedans, je crée un sous-composant Article avec toute mes valeurs
                         * Attention, j'inclue également la fonction getActualArticle qui était également en props depuis App.js
                         * Pour qu'elle soit utilisée dans le sous-composant, et alimente la fonction dans App.js, je fais un pont entre
                         * élément parent et élément enfant d'un enfant
                         */
                        props.articles.map((article, key) => {
                            return (
                                <Article getActualArticle={props.getActualArticle} key={key} id={article.id} titre={article.titre} favorite={article.favorite}/>
                            )
                        })
                    }
                </ul>

                <div className='text-center mt-10'>
                    <Link to='/add'>
                        <button className="font-bold border py-2 px-4 border-cyan-800">Ajouter un article</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}