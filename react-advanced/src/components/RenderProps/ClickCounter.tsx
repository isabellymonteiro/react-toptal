
interface ClickCounterProps {
  count: number
  incrementCount: () => void
}

const ClickCounter = ({ count, incrementCount }: ClickCounterProps) => (
  <h2 onClick={incrementCount}>
    You clicked {count} times
  </h2>
)

export default ClickCounter