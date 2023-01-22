import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CityForm from "./CityForm"

const handleSubmit = jest.fn()

describe('CityForm', () => {
  it('renders with props', () => {
    render(<CityForm handleSubmit={handleSubmit} />)

    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it('has submit button disabled', () => {
    render(<CityForm handleSubmit={handleSubmit} />)

    expect(screen.getByRole("button")).toBeDisabled()
  })

  describe('when the user types', () => {
    it('changes input value', () => {
      render(<CityForm handleSubmit={handleSubmit} />)

      const input = screen.getByRole("textbox")

      userEvent.type(input, 'reykjavík')
      expect(input).toHaveDisplayValue('reykjavík')
    })

    it('enables submit button', () => {
      render(<CityForm handleSubmit={handleSubmit} />)

      userEvent.type(screen.getByRole("textbox"), 'reykjavík')
      expect(screen.getByRole("button")).not.toBeDisabled()
    })
  })

  describe('when the user submits form', () => {
    it('calls handleSubmit function with submit button click', () => {
      render(<CityForm handleSubmit={handleSubmit} />)

      userEvent.type(screen.getByRole("textbox"), 'reykjavík')
      userEvent.click(screen.getByRole('button'))

      expect(handleSubmit).toHaveBeenCalledTimes(1)
    })

    it('calls handleSubmit function with enter', () => {
      render(<CityForm handleSubmit={handleSubmit} />)

      userEvent.type(screen.getByRole("textbox"), 'reykjavík{enter}')

      expect(handleSubmit).toHaveBeenCalledTimes(1)
    })

    it('does not call handleSubmit function if no input is typed', () => {
      render(<CityForm handleSubmit={handleSubmit} />)

      userEvent.click(screen.getByRole('button'))

      expect(handleSubmit).not.toHaveBeenCalled()
    })
  })
})