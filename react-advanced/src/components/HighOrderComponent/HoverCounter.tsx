import withCounter from "./withCounter"

interface HoverCounterProps {
  count: number
  incrementCount: () => void
}

const HoverCounter = ({ count, incrementCount }: HoverCounterProps) => (
  <h2 onMouseOver={incrementCount}>
    You hovered {count} times
  </h2>
)

export default withCounter(HoverCounter)