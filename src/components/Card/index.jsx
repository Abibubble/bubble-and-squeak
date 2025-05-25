import * as Styled from './Card.styled.js'

export default function Card({ children, imgSrc, title }) {
  return (
    <Styled.Card>
      <Styled.Image src={imgSrc} alt={title} />
      <Styled.CardContent>
        <Styled.CardTitle>{title}</Styled.CardTitle>
        <p>{children}</p>
      </Styled.CardContent>
    </Styled.Card>
  )
}
