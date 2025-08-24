import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import Header from './Header'

describe('Header', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders navigation', () => {
    render(<Header />)

    expect(screen.getByText('Bubble & Squeak')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Theme Parks')).toBeInTheDocument()
  })

  it('toggles mobile menu', () => {
    render(<Header />)

    const burgerButton = screen.getByLabelText('Toggle navigation menu')
    expect(burgerButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(burgerButton)
    expect(burgerButton).toHaveAttribute('aria-expanded', 'true')
  })
})
