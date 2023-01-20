import { fireEvent, render, screen } from '@testing-library/react'
import TileCounter, { TestId } from './TileCounter'

const tileCounterMock = {
  tileCount: 0,
  onIncrement: jest.fn(),
  onDecrement: jest.fn()
}

const renderComponent = () => render(<TileCounter {...tileCounterMock} />)

describe('TileCounter', () => {
  it('renders with the correct props', () => {
    renderComponent()

    const count = screen.getByTestId(TestId.Count)

    expect(count).toBeInTheDocument()
    expect(count).toHaveTextContent(tileCounterMock.tileCount)
  }) 
})
