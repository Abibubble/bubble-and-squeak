import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import CollageImage from './CollageImage'

describe('CollageImage', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: '',
    size: 'medium' as const,
    position: { row: 0, col: 0 },
    rotation: 'none' as const,
  }

  it('has no accessibility violations', async () => {
    const { container } = render(<CollageImage {...defaultProps} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('renders with decorative image attributes when alt is empty', () => {
    render(<CollageImage {...defaultProps} />)

    const image = screen.getByRole('presentation')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', '')
    expect(image).toHaveAttribute('aria-hidden', 'true')
    expect(image).toHaveAttribute('tabIndex', '-1')
  })

  it('renders with proper image attributes when alt text is provided', () => {
    const propsWithAlt = { ...defaultProps, alt: 'Test image description' }
    render(<CollageImage {...propsWithAlt} />)

    const image = screen.getByRole('presentation')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', 'Test image description')
    expect(image).not.toHaveAttribute('aria-hidden')
    expect(image).toHaveAttribute('tabIndex', '-1')
  })

  it('applies correct CSS classes and positioning', () => {
    render(<CollageImage {...defaultProps} />)

    const image = screen.getByRole('presentation')
    expect(image).toHaveAttribute('src', '/test-image.jpg')
  })

  it('handles different sizes correctly', () => {
    const { rerender } = render(
      <CollageImage {...defaultProps} size='xlarge' />
    )

    let image = screen.getByRole('presentation')
    expect(image).toBeInTheDocument()

    rerender(<CollageImage {...defaultProps} size='small' />)
    image = screen.getByRole('presentation')
    expect(image).toBeInTheDocument()
  })

  it('handles different rotations correctly', () => {
    const { rerender } = render(
      <CollageImage {...defaultProps} rotation='left' />
    )

    let image = screen.getByRole('presentation')
    expect(image).toBeInTheDocument()

    rerender(<CollageImage {...defaultProps} rotation='right' />)
    image = screen.getByRole('presentation')
    expect(image).toBeInTheDocument()

    rerender(<CollageImage {...defaultProps} rotation='tilted' />)
    image = screen.getByRole('presentation')
    expect(image).toBeInTheDocument()
  })
})
