import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import Card from './Card'

const mockItem = {
  id: '1',
  name: 'Test Park',
  country: 'Test Country',
  location: 'Test Location',
}

describe('Card', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(
      <Card item={mockItem} type='park'>
        <div>Stats content</div>
      </Card>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders park card', () => {
    render(
      <Card item={mockItem} type='park'>
        <div>Stats content</div>
      </Card>
    )

    expect(screen.getByText('Test Park')).toBeInTheDocument()
    expect(screen.getByText('Test Location, Test Country')).toBeInTheDocument()
    expect(screen.getByText('Stats content')).toBeInTheDocument()
  })
})
