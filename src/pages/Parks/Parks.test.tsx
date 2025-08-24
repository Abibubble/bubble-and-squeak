import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import Parks from './Parks'

jest.mock('../../data/parks.json', () => [
  {
    name: 'Phantasialand',
    location: 'North Rhine-Westphalia',
    country: 'Germany',
    link: 'https://www.phantasialand.de/en/',
    yearOpened: 1967,
  },
  {
    name: 'Efteling',
    location: 'North Brabant',
    country: 'Netherlands',
    link: 'https://www.efteling.com/en',
    yearOpened: 1952,
  },
])

describe('Parks Page', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Parks />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders the main content with proper structure', () => {
    render(<Parks />)

    expect(screen.getByText('Theme Parks')).toBeInTheDocument()
    expect(screen.getByText('View:')).toBeInTheDocument()
  })

  it('includes view toggle functionality', () => {
    render(<Parks />)

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'List view' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Card view' })).toBeInTheDocument()
  })

  it('includes country filter selector', () => {
    render(<Parks />)

    expect(
      screen.getByRole('combobox', { name: 'Filter by Country selection' })
    ).toBeInTheDocument()
  })

  it('switches between list and card views', () => {
    render(<Parks />)

    const listViewButton = screen.getByRole('radio', { name: 'List view' })
    fireEvent.click(listViewButton)

    expect(screen.getByText('Park')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
  })

  it('filters parks by country', () => {
    render(<Parks />)

    const countrySelector = screen.getByRole('combobox', {
      name: 'Filter by Country selection',
    })
    fireEvent.change(countrySelector, { target: { value: 'Germany' } })

    expect(screen.getByText('Phantasialand')).toBeInTheDocument()
    expect(screen.queryByText('Efteling')).not.toBeInTheDocument()
  })
})
