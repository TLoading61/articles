import { useState } from "react"
import { useNavigate } from "react-router-dom";

/**
 * Ce composant affiche un formulaire permettant d'ajouter un article
 */
export const Add = (props) => {
    const navigate = useNavigate();

    /**
     * Je crée deux constantes : title & content dont les valeurs s'actualisent
     * suivant ce qui est écrit dans leurs input respectif (les fonctions handleTitle/Content s'applique au onChange des input)
     */
    const [title, setTitle] = useState("");
    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const [content, setContent] = useState("");
    const handleContent = (event) => {
        setContent(event.target.value)
    }

    /**
     * Lorsque je soumet le formulaire, j'appelle la fonction getValues passée en props depuis App.js
     * Pour récupérer les valeurs de title et content, pour ensuite les traiter plus haut
     * Puis je reviens à la page d'accueil
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        props.getValues(title, content)
        navigate('/');
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="Titre">Titre</label>
                        <input className="border" onChange={handleTitle} value={title} type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Content">Contenu</label>
                        <textarea className="border" onChange={handleContent} value={content}></textarea>
                    </div>

                    <button className="mt-4 border">Ajouter un article</button>
                </form>
            </div>
        </div>

    )
}