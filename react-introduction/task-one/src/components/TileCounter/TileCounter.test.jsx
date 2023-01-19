import { fireEvent, render, screen } from '@testing-library/react'
import TileCounter, { TestId } from './TileCounter'

const tileCounterMock = {
  tileCount: 0,
  onIncrement: jest.fn(),
  onDecrement: jest.fn()
}

const renderComponent = () => render(<TileCounter {...tileCounterMock} />)

describe('TileCounter', () => {
  describe('when the page loads', () => {
    it('renders with props', () => {
      renderComponent()
  
      expect(screen.getByTestId(TestId.Root)).toBeInTheDocument()
    })
  
    it('renders the correct count', () => {
      renderComponent()
  
      const count = screen.getByTestId(TestId.Count)
  
      expect(count).toBeInTheDocument()
      expect(count).toHaveTextContent(tileCounterMock.tileCount)
    })
  })

  /* how to do it? 
  describe('when the counter buttons are clicked', () => {
    it('increments the counter by 1 if the increment button is clicked', () => {
      renderComponent()
      
      const incrementButton = screen.getByText('-')
      fireEvent.click(incrementButton)

      const count = screen.getByTestId(TestId.Count)

      expect(count).toHaveTextContent(`${tileCounterMock.tileCount + 1}`)
    })

    it('decrements the counter by 1 if the decrement button is clicked', () => {
      
    })
  }) */
})