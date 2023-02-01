import { Component, ComponentType, ReactNode, useState } from "react"

interface CounterWrapperProps {
  render(count: number, incrementCount: () => void): JSX.Element
}

const CounterWrapper = (props: CounterWrapperProps) => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(prev => prev + 1)
  }

  return props.render(count, incrementCount)
}

export default CounterWrapper