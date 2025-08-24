import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Home from './Home'

describe('Home Page', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Home />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders the main title and subtitle', () => {
    render(<Home />)

    expect(screen.getByText('Bubble & Squeak')).toBeInTheDocument()
    expect(screen.getByText('Escapes and Thrills')).toBeInTheDocument()
  })

  it('renders the main content with proper structure', () => {
    render(<Home />)

    expect(screen.getByText('Bubble & Squeak')).toBeInTheDocument()
    expect(screen.getByText('Escapes and Thrills')).toBeInTheDocument()
  })
})
