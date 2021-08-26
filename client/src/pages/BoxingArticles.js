import Article  from '../components/Article'

const BoxingArticles = ({boxingArticles}) => {
  return(
    <div>
      {
        boxingArticles.map(article => (
          <Article {...article}/>
        ))
      }
    </div>
  )
}

export default BoxingArticles