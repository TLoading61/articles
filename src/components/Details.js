import { useParams, useNavigate } from "react-router-dom"

/**
 * Ce composant affiche un article sélectionné via un lien.
 */
export const Details = (props) => {
    /**
     * On utilise la destructuration pour récupérer un id. Je m'explique :
     * useParams() est un hook du routeur, sa fonction est de renvoyer un objet avec plein de valeurs dedans
     * Utiliser { id } va extraire la valeur de l'id et l'ajouter à une variable.
     * ça revient à faire les deux lignes de code : 
     * const params = useParams();
     * const id = params.id;
     */
    const { id } = useParams();

    /**
     * Le hook useNavigate va me permettre d'aller dans certaines pages au clic d'un bouton
     */
    const navigate = useNavigate();

    /**
     * Cette variable va rechercher parmis tout le tableau d'article si il y en a un dont l'id correspond à 
     * celui envoyé dans l'URL via la const id créée plus tôt, et stocke le tout
     * 
     * Peut être écrite plus proprement : const article = props.articles.find(article => article.id === parseInt(id));
     */
    const article = props.articles.find((article) => {
        return article.id === parseInt(id)
    })

    /**
     * On affiche le tout dans la page
     */
    return (
        <div className="w-3/5 m-auto p-10">
            <h1 className="text-5xl font-bold">{article.titre} - {article.favorite === true ? "Favoris" : ""}</h1>
            <hr className="w-2/5 mt-10" />
            <p className="mt-10">
                {article.contenu}
            </p>
            <div className="mt-10">
                <button onClick={() => navigate('/')} className="text-lg font-bold border border-sky-500  py-2 px-5 rounded bg-cyan-800 text-white">Retour</button>
            </div>
        </div>
        
    )
}