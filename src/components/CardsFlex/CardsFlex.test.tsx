import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import CardsFlex from './CardsFlex'

describe('CardsFlex', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(
      <CardsFlex>
        <div>Card 1</div>
        <div>Card 2</div>
      </CardsFlex>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders children', () => {
    render(
      <CardsFlex>
        <div>Card 1</div>
        <div>Card 2</div>
      </CardsFlex>
    )

    expect(screen.getByText('Card 1')).toBeInTheDocument()
    expect(screen.getByText('Card 2')).toBeInTheDocument()
  })
})
