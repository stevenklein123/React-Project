import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('displays the "Change Name" heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Change Name')
  })

  it('renders an h1 element', () => {
    const { container } = render(<App />)
    const heading = container.querySelector('h1')
    expect(heading).toBeInTheDocument()
  })
})
