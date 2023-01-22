import { render, screen } from "@testing-library/react"
import Error from "./Error"

describe('Error', () => {
  it('renders with props', () => {
    render(<Error errorMessage='Something went wrong' />)

    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })
})