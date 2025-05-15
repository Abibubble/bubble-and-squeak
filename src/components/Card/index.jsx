import * as Styled from './Card.styled.js'

export default function Card({ children, imgSrc, rating, title }) {
  return (
    <Styled.Card>
      <Styled.Image src={imgSrc} alt={title} />
      <h2>{title}</h2>
      {rating && <p>Rating: {rating}</p>}
      <p>{children}</p>
    </Styled.Card>
  )
}
