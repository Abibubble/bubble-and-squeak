import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import ViewToggle from './ViewToggle'

describe('ViewToggle Component', () => {
  it('has no accessibility violations', async () => {
    const handleViewChange = jest.fn()
    const { container } = render(
      <ViewToggle viewMode='list' onViewChange={handleViewChange} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders both view options', () => {
    const handleViewChange = jest.fn()
    render(<ViewToggle viewMode='list' onViewChange={handleViewChange} />)

    expect(screen.getByRole('radio', { name: 'List view' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Card view' })).toBeInTheDocument()
    expect(screen.getByText('View:')).toBeInTheDocument()
  })

  it('shows correct active state for list view', () => {
    const handleViewChange = jest.fn()
    render(<ViewToggle viewMode='list' onViewChange={handleViewChange} />)

    const listButton = screen.getByRole('radio', { name: 'List view' })
    const cardButton = screen.getByRole('radio', { name: 'Card view' })

    expect(listButton).toHaveAttribute('aria-checked', 'true')
    expect(cardButton).toHaveAttribute('aria-checked', 'false')
  })

  it('shows correct active state for blog view', () => {
    const handleViewChange = jest.fn()
    render(<ViewToggle viewMode='blog' onViewChange={handleViewChange} />)

    const listButton = screen.getByRole('radio', { name: 'List view' })
    const cardButton = screen.getByRole('radio', { name: 'Card view' })

    expect(listButton).toHaveAttribute('aria-checked', 'false')
    expect(cardButton).toHaveAttribute('aria-checked', 'true')
  })

  it('calls onViewChange with "list" when list button is clicked', () => {
    const handleViewChange = jest.fn()
    render(<ViewToggle viewMode='blog' onViewChange={handleViewChange} />)

    const listButton = screen.getByRole('radio', { name: 'List view' })
    fireEvent.click(listButton)

    expect(handleViewChange).toHaveBeenCalledWith('list')
  })

  it('calls onViewChange with "blog" when card button is clicked', () => {
    const handleViewChange = jest.fn()
    render(<ViewToggle viewMode='list' onViewChange={handleViewChange} />)

    const cardButton = screen.getByRole('radio', { name: 'Card view' })
    fireEvent.click(cardButton)

    expect(handleViewChange).toHaveBeenCalledWith('blog')
  })

  it('has correct accessibility structure', () => {
    const handleViewChange = jest.fn()
    render(<ViewToggle viewMode='list' onViewChange={handleViewChange} />)

    const radioGroup = screen.getByRole('radiogroup')
    expect(radioGroup).toHaveAttribute('aria-labelledby', 'view-toggle-label')

    const label = screen.getByText('View:')
    expect(label).toHaveAttribute('id', 'view-toggle-label')
  })

  it('displays icons for both options', () => {
    const handleViewChange = jest.fn()
    render(<ViewToggle viewMode='list' onViewChange={handleViewChange} />)

    expect(screen.getByText('☰')).toBeInTheDocument()
    expect(screen.getByText('⚏')).toBeInTheDocument()
  })

  it('displays text labels for both options', () => {
    const handleViewChange = jest.fn()
    render(<ViewToggle viewMode='list' onViewChange={handleViewChange} />)

    expect(screen.getByText('List')).toBeInTheDocument()
    expect(screen.getByText('Cards')).toBeInTheDocument()
  })

  it('maintains radio group behavior', () => {
    const handleViewChange = jest.fn()
    render(<ViewToggle viewMode='list' onViewChange={handleViewChange} />)

    const radios = screen.getAllByRole('radio')
    expect(radios).toHaveLength(2)

    const checkedRadios = radios.filter(
      radio => radio.getAttribute('aria-checked') === 'true'
    )
    expect(checkedRadios).toHaveLength(1)
  })
})
