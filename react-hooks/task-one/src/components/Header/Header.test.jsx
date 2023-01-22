import { render, screen } from "@testing-library/react"
import Header from "./Header"

const headerMock = {
  title: 'Test',
  subtitle: 'A new test'
}

describe('Header', () => {
  it('renders correctly with title and subtitle', () => {
    render(<Header {...headerMock} />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(headerMock.title)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(headerMock.subtitle)
  })
})