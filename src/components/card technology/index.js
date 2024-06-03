import './index.css'

const CardItem = props => {
  const { card } = props
  const { title, description, className, imgUrl } = card

  return (
    <li className={`${className} card-con`}>
      <div className="card-container">
         
        <h1 className="card-head">{title}</h1>
        <p className="card-desc">{description}</p>
        <img src={imgUrl} className="card-img" alt={title} />
      </div>
    </li>
  )
}

export default CardItem