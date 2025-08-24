import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import EscapeRooms from './EscapeRooms'

jest.mock('../../data/escape-rooms.json', () => [
  {
    id: 1,
    datePlayed: '10/11/2017',
    location: 'Southampton',
    country: 'UK',
    company: 'Elusion',
    name: 'Pandora Heist',
    theme: 'Heist',
    duration: 60,
    price: '£48',
    theming: 10,
    puzzles: 10,
    gamesMaster: 10,
    value: 10,
    fun: 10,
    total: '100%',
    escaped: 'Y',
    photo: 'N',
    timeRemaining: null,
    teamSize: 2,
    gamesMasterName: null,
    description: 'A mysterious employer has hired your crack team of thieves',
    link: 'https://www.elusionrooms.com/pandora-heist',
    languages: 'English',
    status: 'Currently open',
    difficulty: 3,
    minPlayers: 2,
    maxPlayers: 8,
    minAge: null,
    escapePercentage: '89%',
    review: 'Perfect escape room experience',
  },
  {
    id: 2,
    datePlayed: '15/12/2017',
    location: 'London',
    country: 'UK',
    company: 'Escape Hunt',
    name: 'The Lost Tomb',
    theme: 'Adventure',
    duration: 45,
    price: '£35',
    theming: 8,
    puzzles: 7,
    gamesMaster: 9,
    value: 8,
    fun: 8,
    total: '80%',
    escaped: 'N',
    photo: 'Y',
    timeRemaining: 0,
    teamSize: 4,
    gamesMasterName: 'Sarah',
    description: 'Explore an ancient tomb',
    link: 'https://www.escapehunt.com/tomb',
    languages: 'English',
    status: 'Currently open',
    difficulty: 4,
    minPlayers: 3,
    maxPlayers: 6,
    minAge: 12,
    escapePercentage: '65%',
    review: 'Challenging but fun',
  },
])

describe('EscapeRooms Page', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<EscapeRooms />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders page title and room count', () => {
    render(<EscapeRooms />)

    expect(screen.getByText('Escape Rooms')).toBeInTheDocument()
    expect(screen.getByText('2 escape rooms played')).toBeInTheDocument()
  })

  it('displays escape room data', () => {
    render(<EscapeRooms />)

    expect(screen.getByText('Pandora Heist')).toBeInTheDocument()
    expect(screen.getByText('The Lost Tomb')).toBeInTheDocument()
  })

  it('includes multiple filter and sort options', () => {
    render(<EscapeRooms />)

    expect(
      screen.getByRole('combobox', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('combobox', { name: /filter by country/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('combobox', { name: /filter by duration/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('combobox', { name: /filter by min players/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('combobox', { name: /filter by max players/i })
    ).toBeInTheDocument()
  })

  it('includes view toggle functionality', () => {
    render(<EscapeRooms />)

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })

  it('filters rooms by duration', () => {
    render(<EscapeRooms />)

    const durationSelector = screen.getByRole('combobox', {
      name: /filter by duration/i,
    })
    fireEvent.change(durationSelector, { target: { value: '60' } })

    expect(screen.getByText('Pandora Heist')).toBeInTheDocument()
    expect(screen.queryByText('The Lost Tomb')).not.toBeInTheDocument()
  })

  it('sorts rooms by rating', () => {
    render(<EscapeRooms />)

    const sortSelector = screen.getByRole('combobox', { name: /sort by/i })
    fireEvent.change(sortSelector, { target: { value: 'highest' } })

    const rooms = screen.getAllByText(/Pandora Heist|The Lost Tomb/)
    expect(rooms[0]).toHaveTextContent('Pandora Heist')
  })

  it('switches to list view and shows table structure', () => {
    render(<EscapeRooms />)

    const listViewButton = screen.getByRole('radio', { name: /list view/i })
    fireEvent.click(listViewButton)

    expect(screen.getByRole('table')).toBeInTheDocument()
  })
})
