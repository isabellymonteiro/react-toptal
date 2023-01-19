import { render, screen } from '@testing-library/react'
import Tile, { TestId } from '../Tile/Tile'

describe('Tile', () => {
  it('renders without color prop', () => {
    render(<Tile />)

    expect(screen.getByTestId(TestId.Root)).toBeInTheDocument()
  })

  it('renders with color prop', () => {
    render(<Tile color='#5FBFCA' />)

    expect(screen.getByTestId(TestId.Root)).toBeInTheDocument()
  })
})