import { render, screen } from "@testing-library/react"
import PageWrapper, { TestId } from "./PageWrapper"

const TestIdMock = {
  ChildComponent: 'child-component-root'
}

const ChildComponent = () => <div data-testid={TestIdMock.ChildComponent}>Child</div>

describe('PageWrapper', () => {
  it('renders correctly', () => {
    render(<PageWrapper />)

    expect(screen.getByTestId(TestId.Root)).toBeInTheDocument()
  })

  it('renders correctly with width prop', () => {
    render(<PageWrapper children={<ChildComponent />} />)

    expect(screen.getByTestId(TestIdMock.ChildComponent)).toBeInTheDocument()
  })
})
