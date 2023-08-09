import { useEffect, useState } from 'react';
import './App.css';
import { ListArticles } from './components/ListArticles';
import { Details } from './components/Details';
import { Add } from './components/Add';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * Le coeur de l'application, je gère tout ici 
 */
function App() {
  /** Une constante pour les articles sous forme de tableau
   * Chaque ligne du tableau contiendra un objet "article"
   */
  const [articles, setArticles] = useState([])
  
  /**
   * La fonction getActualArticle est une fonction dont l'objectif est d'être envoyé en props
   * Lorsqu'elle reçoit un id en paramètres, elle déclenche la fonction updateArticle juste en bas
   * 
   * @param {<ListArticles /> - Identifiant d'un article} id 
   */
  const getActualArticle = (id) => {
    updateArticle(id)
  }
  
  /**
   * Cette fonction gère le système de favoris. Dans un premier temps, elle fait une boucle parmis la liste d'articles.
   * Lorsqu'un article à un identifiant identique à l'identifiant en paramètres, c'est qu'on est sur le bon
   * Dans ce cas, on inverse le favoris de l'article grâce à l'opérateur "!" (si c'est true, ça devient false et inversement)
   * Pour finir, on met à jour le tableau d'articles avec setArticles
   */
  const updateArticle = (id) => {
    const updateArticleList = articles.map((article) => {
      if(article.id === id){
          /* J'utilise le principe de déconstruction {...article} pour garder mon tableau tout en modifiant le favoris */
          return {...article, favorite: !article.favorite}
      } else {
        return article
      }
    })

    setArticles(updateArticleList)
  }


  /**
   * La fonction getValues est envoyé en props dans le composant Add.
   * Son objectif est de récupérer le titre et le contenu de l'article créé dans le composant
   * Il va ensuite créer une constante newArticle avec les valeurs, en définissant un identifiant, le titre, le contenu et le favoris d'un article
   * Il va ensuite ajouter cet article au tableau d'articles déjà créé, en utilisant avec la déstructuration pour conserver les valeurs déjà présentes
   * 
   * @param {<Add /> - Input title} title 
   * @param {<Add /> - Input content} content 
   */
  const getValues = (title, content) => {
    const newArticle = {
      id: articles.length === 0 ? 1 : articles[articles.length - 1].id + 1,
      titre: title,
      contenu: content,
      favorite: false
    }

    setArticles([...articles, newArticle])
  }

  /**
   * Dans le return, je crée mon routeur pour gérer les changements de page. 
   * J'y ajoute la liste d'article dans la page de base (avec en props le tableau d'articles et la fonction pour récupérer un article)
   * Le chemin pour afficher un article précis avec le composant lié, là encore avec le tableau d'articles
   * Le chemin pour accéder au composant Add qui permet d'ajouter un article, là aussi avec la fonction getValues pour les récupérer ensuite
   */
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<ListArticles getActualArticle={getActualArticle} articles={articles} />} />
        <Route path="/articles/:id" element={<Details articles={articles} />} />
        <Route path="/add" element={<Add getValues={getValues} />} />
      </Routes>
    </Router>

  );
}

export default App;
