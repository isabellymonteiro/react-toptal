import { render, screen } from '@testing-library/react'
import ControlButton, { TestId } from './ControlButton'

const controlButtonMock = {
  children: '-',
  onClick: jest.fn(),
  disabled: false
}

const controlButtonDisabledMock = {
  ...controlButtonMock,
  disabled: true
}

describe('ControlButton', () => {
  it('renders enabled', () => {
    render(<ControlButton {...controlButtonMock} />)

    const controlButton = screen.getByTestId(TestId.Root)

    expect(controlButton).toBeInTheDocument()
    expect(controlButton).not.toBeDisabled()
  })

  it('renders disabled', () => {
    render(<ControlButton {...controlButtonDisabledMock} />)

    const controlButton = screen.getByTestId(TestId.Root)
    
    expect(controlButton).toBeInTheDocument()
    expect(controlButton).toBeDisabled()
  })
})