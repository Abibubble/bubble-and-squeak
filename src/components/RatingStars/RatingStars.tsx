import * as Styled from './RatingStars.styled'
import { ScreenReaderOnly } from '../ScreenReaderOnly'

export type RatingStarsProps = {
  percentage: number
}

export default function RatingStars({ percentage }: RatingStarsProps) {
  const rating = Math.round((percentage / 100) * 5 * 10) / 10
  const ratingText = `${rating} out of 5 stars (${percentage}% rating)`

  const getStarsDisplay = (percentage: number) => {
    const clampedPercentage = Math.max(0, percentage)

    const hasSpecialStar = percentage > 100

    const regularPercentage = Math.min(100, clampedPercentage)

    const fullStars = Math.floor(regularPercentage / 20)

    const remainder = regularPercentage % 20
    const hasHalfStar = remainder >= 10

    const totalFilledStars = fullStars + (hasHalfStar ? 0.5 : 0)
    const emptyStars = 5 - Math.ceil(totalFilledStars)

    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Styled.FullStar key={`full-${i}`}>★</Styled.FullStar>)
    }

    if (hasHalfStar) {
      stars.push(
        <Styled.HalfStar key='half'>
          <Styled.HalfStarFilled>★</Styled.HalfStarFilled>
          <Styled.HalfStarEmpty>★</Styled.HalfStarEmpty>
        </Styled.HalfStar>
      )
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Styled.EmptyStar key={`empty-${i}`}>☆</Styled.EmptyStar>)
    }

    if (hasSpecialStar) {
      stars.push(<Styled.SpecialStar key='special'>★</Styled.SpecialStar>)
    }

    return stars
  }

  const ratingStars = getStarsDisplay(percentage)

  return (
    <Styled.Rating role='img' aria-label={ratingText} title={ratingText}>
      <span aria-hidden='true'>Rating: {ratingStars}</span>
      <ScreenReaderOnly>{ratingText}</ScreenReaderOnly>
    </Styled.Rating>
  )
}
