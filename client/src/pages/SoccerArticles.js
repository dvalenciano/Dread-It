import Article  from '../components/Article'

const SoccerArticles = ({soccerArticles}) => {
  return(
    <div>
      {
        soccerArticles.map(article => (
          <Article key={article.id} article={article}/>
        ))
      }
    </div>
  )
}

export default SoccerArticles