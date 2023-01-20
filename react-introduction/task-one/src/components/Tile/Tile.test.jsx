import { fireEvent, render, screen } from '@testing-library/react'
import Tile, { TestId } from '../Tile/Tile'

describe('Tile', () => {
  describe('when it renders', () => {
    it('without color prop', () => {
      render(<Tile />)

      expect(screen.getByTestId(TestId.Root)).toBeInTheDocument()
    })
  
    it('with color prop', () => {
      render(<Tile color='#5FBFCA' />)

      expect(screen.getByTestId(TestId.Root)).toBeInTheDocument()
    })
  })

  describe('when it is clicked', () => {
    it('shows the color if the color was hidden', () => {
      render(<Tile color='#5FBFCA' />)

      const tile = screen.getByTestId(TestId.Root)

      expect(tile).not.toHaveTextContent('#5FBFCA')

      fireEvent.click(tile)
      expect(tile).toHaveTextContent('#5FBFCA')
    })
  
    it('hides the color if it was shown', () => {
      render(<Tile color='#5FBFCA' />)

      const tile = screen.getByTestId(TestId.Root)

      expect(tile).not.toHaveTextContent('#5FBFCA')

      fireEvent.click(tile)
      expect(tile).toHaveTextContent('#5FBFCA')

      fireEvent.click(tile)
      expect(tile).not.toHaveTextContent('#5FBFCA')
    })
  })
})