import Article  from '../components/Article'

const BoxingArticles = ({boxingArticles}) => {
  return(
    <div>
      {
        boxingArticles.map(article => (
          <Article article={article}/>
        ))
      }
    </div>
  )
}

export default BoxingArticles