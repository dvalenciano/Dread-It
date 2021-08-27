import Article  from '../components/Article'

const SoccerArticles = ({soccerArticles}) => {
  return(
    <div>
      {
        soccerArticles.map(article => (
          <Article article={article}/>
        ))
      }
    </div>
  )
}

export default SoccerArticles