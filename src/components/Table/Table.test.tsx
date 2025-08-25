import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Table, { TableColumn } from './Table'
import { Park, Coaster } from '../../types'

describe('Table', () => {
  const mockParks: Park[] = [
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
  ]

  const mockCoasters: Coaster[] = [
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
      yearClosed: '',
      heightRequirement: '1.25 m',
      fastPassAvailable: 'Yes',
      capacity: 1200,
      previousNames: '',
      description: 'A launched coaster with three inversions',
      review: 'Incredible launch and smooth inversions',
    } as Coaster,
  ]

  const parkColumns: TableColumn<Park>[] = [
    { key: 'name', header: 'Park Name' },
    { key: 'country', header: 'Country' },
    { key: 'yearOpened', header: 'Year Opened' },
  ]

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Table data={mockParks} columns={parkColumns} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders theme park data correctly', () => {
    render(<Table data={mockParks} columns={parkColumns} />)

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'Park Name' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('columnheader', { name: 'Country' })
    ).toBeInTheDocument()
    expect(screen.getByText('Phantasialand')).toBeInTheDocument()
    expect(screen.getByText('Germany')).toBeInTheDocument()
    expect(screen.getByText('1967')).toBeInTheDocument()
  })

  it('uses custom render function for ride data', () => {
    const rideColumns: TableColumn<Coaster>[] = [
      { key: 'name', header: 'Ride Name' },
      {
        key: 'speed',
        header: 'Top Speed',
        render: ride => ride.speed || 'Unknown',
      },
      {
        key: 'inversions',
        header: 'Inversions',
        render: ride =>
          ride.inversions ? `${ride.inversions} inversions` : 'None',
      },
    ]

    render(<Table data={mockCoasters} columns={rideColumns} />)

    expect(screen.getByText('Toutatis')).toBeInTheDocument()
    expect(screen.getByText('107 km/h')).toBeInTheDocument()
    expect(screen.getByText('3 inversions')).toBeInTheDocument()
  })

  it('handles empty theme park data', () => {
    render(<Table data={[]} columns={parkColumns} />)

    expect(
      screen.getByRole('columnheader', { name: 'Park Name' })
    ).toBeInTheDocument()
    expect(screen.queryByText('Phantasialand')).not.toBeInTheDocument()
  })
})
