import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import CardStat from './CardStat'

describe('CardStat', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<CardStat stat='Rating' value='85%' />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders stat and value', () => {
    render(<CardStat stat='Rating' value='85%' />)

    expect(screen.getByText('Rating')).toBeInTheDocument()
    expect(screen.getByText(/85%/)).toBeInTheDocument()
  })
})
