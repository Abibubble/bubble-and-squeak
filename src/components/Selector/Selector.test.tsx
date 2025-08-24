import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import Selector from './Selector'

describe('Selector', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ]

  const mockOnChange = jest.fn()

  beforeEach(() => {
    mockOnChange.mockClear()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Selector
        label='Test Selector'
        value=''
        options={mockOptions}
        onChange={mockOnChange}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders label, select, and options correctly', () => {
    render(
      <Selector
        label='Test Selector'
        value='option1'
        options={mockOptions}
        onChange={mockOnChange}
      />
    )

    expect(screen.getByText('Test Selector:')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toHaveValue('option1')
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('calls onChange when option is selected', () => {
    render(
      <Selector
        label='Test Selector'
        value=''
        options={mockOptions}
        onChange={mockOnChange}
      />
    )

    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: 'option1' } })

    expect(mockOnChange).toHaveBeenCalledWith('option1')
  })

  it('uses custom placeholder when provided', () => {
    render(
      <Selector
        label='Test Selector'
        value=''
        options={mockOptions}
        onChange={mockOnChange}
        placeholder='Choose an option'
      />
    )

    expect(screen.getByText('Choose an option')).toBeInTheDocument()
  })
})
