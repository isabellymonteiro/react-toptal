import React from 'react'
import { render, screen } from '@testing-library/react'
import App, { TestId } from './App'

const renderComponent = () => {
  render(<App />)
}

describe('App', () => {
  it('renders', () => {
    renderComponent()

    expect(screen.getByTestId(TestId.Root)).toBeInTheDocument()
  })
})
