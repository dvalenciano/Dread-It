import Article  from '../components/Article'

const SoccerArticles = ({soccerArticles}) => {
  return(
    <div>
      {
        soccerArticles.map(article => (
          <Article {...article}/>
        ))
      }
    </div>
  )
}

export default SoccerArticles