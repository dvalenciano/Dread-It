import Article  from '../components/Article'

const FootballArticles = ({footballArticles}) => {
  return(
    <div>
      {
        footballArticles.map(article => (
          <Article article={article}/>
        ))
      }
    </div>
  )
}

export default FootballArticles