import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import Coasters from './Coasters'

jest.mock('../../data/Coasters.json', () => [
  {
    name: 'Toutatis',
    park: 'Parc Astérix',
    manufacturer: 'Intamin',
    model: 'Launch Coaster',
    level: 'Extreme',
    car: '2 x 12',
    ridability: 'Average wait',
    type: 'Sitting',
    material: 'Steel',
    height: '51 m',
    dropHeight: '',
    length: '1365 m',
    speed: '107 km/h',
    duration: '2:30',
    inversions: 3,
    yearOpened: 2023,
    yearClosed: null,
    heightRequirement: '1.25 m',
    fastPassAvailable: 'Yes',
    capacity: 1200,
    previousNames: '',
    description: 'A launched coaster with three inversions',
    review: 'Incredible launch and smooth inversions',
  },
  {
    name: 'Hyperia',
    park: 'Thorpe Park',
    manufacturer: 'Mack Coasters',
    model: 'Hyper Coaster',
    level: 'Extreme',
    car: '3 x 8',
    ridability: 'Long wait',
    type: 'Sitting',
    material: 'Steel',
    height: '72 m',
    dropHeight: '68 m',
    length: '995 m',
    speed: '129 km/h',
    duration: '1:45',
    inversions: 0,
    yearOpened: 2024,
    yearClosed: null,
    heightRequirement: '1.40 m',
    fastPassAvailable: 'Yes',
    capacity: 1440,
    previousNames: '',
    description: "UK's tallest and fastest roller coaster",
    review: 'Absolutely incredible airtime',
  },
])

describe('Coasters Page', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<Coasters />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders page title and ride data', () => {
    render(<Coasters />)

    expect(screen.getByText('Coasters')).toBeInTheDocument()
    expect(screen.getByText('Toutatis')).toBeInTheDocument()
    expect(screen.getByText('Hyperia')).toBeInTheDocument()
  })

  it('includes view toggle functionality', () => {
    render(<Coasters />)

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'List view' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Card view' })).toBeInTheDocument()
  })

  it('includes multiple filter and sort options', () => {
    render(<Coasters />)

    expect(
      screen.getByRole('combobox', { name: 'Sort by selection' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('combobox', { name: 'Filter by Location selection' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('combobox', {
        name: 'Filter by Height Requirement selection',
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('combobox', { name: 'Filter by Manufacturer selection' })
    ).toBeInTheDocument()
  })

  it('filters Coasters by park location', () => {
    render(<Coasters />)

    const locationSelector = screen.getByRole('combobox', {
      name: 'Filter by Location selection',
    })
    fireEvent.change(locationSelector, { target: { value: 'Thorpe Park' } })

    expect(screen.getByText('Hyperia')).toBeInTheDocument()
    expect(screen.queryByText('Toutatis')).not.toBeInTheDocument()
  })

  it('filters Coasters by manufacturer', () => {
    render(<Coasters />)

    const manufacturerSelector = screen.getByRole('combobox', {
      name: 'Filter by Manufacturer selection',
    })
    fireEvent.change(manufacturerSelector, { target: { value: 'Intamin' } })

    expect(screen.getByText('Toutatis')).toBeInTheDocument()
    expect(screen.queryByText('Hyperia')).not.toBeInTheDocument()
  })

  it('sorts Coasters by name alphabetically', () => {
    render(<Coasters />)

    const sortSelector = screen.getByRole('combobox', {
      name: 'Sort by selection',
    })
    fireEvent.change(sortSelector, { target: { value: 'name-asc' } })

    const rideLinks = screen.getAllByRole('link')
    const rideNames = rideLinks.map(link => link.textContent)
    expect(rideNames.indexOf('Hyperia')).toBeLessThanOrEqual(
      rideNames.indexOf('Toutatis')
    )
  })

  it('switches to list view and shows table structure', () => {
    render(<Coasters />)

    const listViewButton = screen.getByRole('radio', { name: 'List view' })
    fireEvent.click(listViewButton)

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Ride')).toBeInTheDocument()
    expect(screen.getByText('Park')).toBeInTheDocument()
  })

  it('displays ride statistics in card view', () => {
    render(<Coasters />)

    expect(screen.getByText(': 107 km/h', { exact: false })).toBeInTheDocument()
    expect(screen.getByText(': 129 km/h', { exact: false })).toBeInTheDocument()
  })
})
