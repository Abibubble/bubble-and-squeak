import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Info from './Info'

describe('Info', () => {
  const mockItem = {
    name: 'Test Room',
    location: 'Test City',
    company: 'Test Company',
    emptyValue: '',
    nullValue: null,
  }

  const mockKeys = ['name', 'location', 'company', 'emptyValue', 'nullValue']

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Info item={mockItem} keys={mockKeys} type='escape-room' />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders formatted title and data', () => {
    render(<Info item={mockItem} keys={mockKeys} type='escape-room' />)

    expect(screen.getByText('Escape room')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Test Room')).toBeInTheDocument()
  })

  it('filters out empty values and respects keys array', () => {
    const limitedKeys = ['name', 'location']
    render(<Info item={mockItem} keys={limitedKeys} type='test-type' />)

    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.queryByText('Company')).not.toBeInTheDocument()
    expect(screen.queryByText('Empty Value')).not.toBeInTheDocument()
  })
})
