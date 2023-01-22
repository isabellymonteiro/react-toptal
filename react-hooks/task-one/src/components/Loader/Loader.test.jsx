import { render, screen } from "@testing-library/react"
import Loader from "./Loader"

describe('Loader', () => {
  it('renders correctly', () => {
    render(<Loader />)

    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/hourglass.svg')
  })

  it('renders correctly with width prop', () => {
    render(<Loader width='100px'/>)

    expect(screen.getByRole('img')).toHaveStyle({ maxWidth: '100px' })
  })
})