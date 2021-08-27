import Article  from '../components/Article'

const BoxingArticles = ({boxingArticles}) => {
  return(
    <div>
      {
        boxingArticles.map(article => (
          <Article key={article.id} article={article}/>
        ))
      }
    </div>
  )
}

export default BoxingArticles