import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import ListView from './ListView'
import { EscapeRoom } from '../../types'

describe('ListView', () => {
  const mockRooms: EscapeRoom[] = [
    {
      id: 1,
      name: 'Mystery Chamber',
      company: 'Escape Co',
      location: 'London',
      country: 'UK',
      total: '8.5',
      datePlayed: '2023-01-01',
      theme: 'Horror',
      duration: 60,
      price: '£25',
      theming: 9,
      puzzles: 8,
      gamesMaster: 9,
      value: 7,
      fun: 9,
      escaped: 'Y',
      photo: 'Y',
      timeRemaining: 5,
      teamSize: 4,
      gamesMasterName: 'John',
      description: 'A spooky room',
      link: 'https://example.com',
      languages: 'English',
      status: 'Open',
      difficulty: 7,
      minPlayers: 2,
      maxPlayers: 6,
      minAge: 16,
      escapePercentage: '60%',
      review: 'Great room!',
    },
  ]

  it('has no accessibility violations', async () => {
    const { container } = render(<ListView rooms={mockRooms} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders table with proper structure and data', () => {
    render(<ListView rooms={mockRooms} />)

    expect(
      screen.getByRole('table', { name: 'Escape rooms list' })
    ).toBeInTheDocument()
    expect(screen.getByText('Room')).toBeInTheDocument()
    expect(screen.getByText('Mystery Chamber')).toBeInTheDocument()
    expect(screen.getByText('London, UK')).toBeInTheDocument()
    expect(screen.getByText('8.5')).toBeInTheDocument()
  })

  it('renders room names as links with correct URLs', () => {
    render(<ListView rooms={mockRooms} />)

    const link = screen.getByRole('link', { name: 'Mystery Chamber' })
    expect(link).toHaveAttribute(
      'href',
      '/escape-rooms/room-info/mystery-chamber'
    )
  })

  it('handles missing data gracefully', () => {
    const roomWithMissingData: EscapeRoom[] = [
      { ...mockRooms[0], company: '', total: '' },
    ]

    render(<ListView rooms={roomWithMissingData} />)
    expect(screen.getByText('Unknown')).toBeInTheDocument()
    expect(screen.getByText('N/A')).toBeInTheDocument()
  })
})
