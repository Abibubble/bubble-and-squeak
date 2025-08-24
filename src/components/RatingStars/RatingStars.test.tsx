import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import RatingStars from './RatingStars'

describe('RatingStars', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<RatingStars percentage={90} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders rating with accessibility text', () => {
    render(<RatingStars percentage={90} />)

    expect(screen.getByRole('img')).toHaveAttribute(
      'aria-label',
      '4.5 out of 5 stars (90% rating)'
    )
  })

  it('handles 100% rating', () => {
    render(<RatingStars percentage={100} />)

    expect(screen.getByRole('img')).toHaveAttribute(
      'aria-label',
      '5 out of 5 stars (100% rating)'
    )
  })

  it('handles over 100% rating', () => {
    render(<RatingStars percentage={105} />)

    expect(screen.getByRole('img')).toHaveAttribute(
      'aria-label',
      '5.3 out of 5 stars (105% rating)'
    )
  })
})
