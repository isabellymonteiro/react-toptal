import { render, screen } from '@testing-library/react'
import TileList, { TestId } from './TileList'
import Tile from '../Tile/Tile'

jest.mock('../Tile/Tile', () => jest.fn(() => null))

const listMock = [
  "#5FBFCA",
  "#B037A6",
  "#E77059",
  "#E1776F",
  "#69A66D",
  "#CE7EC5"
]

const renderComponent = () => render(<TileList colorList={listMock} />)

describe('TileList', () => {
  it('renders with props', () => {
    renderComponent()

    expect(screen.getByTestId(TestId.Root)).toBeInTheDocument()
  })

  it('renders its items', () => {
    renderComponent()

    expect(Tile).toHaveBeenCalledTimes(listMock.length)
  })
})