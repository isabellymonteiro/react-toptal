import { ComponentType, useState } from "react"

/* HOC = pattern in which a function accepts a component and returns an enhanced component.
It is used to share common functionality between components without having to repeat the code */
function withCounter<T>(WrappedComponent: ComponentType<T>) {
  const ComponentWithCounter = (props: Omit<T, "count" | "incrementCount">) => {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
      setCount(prev => prev + 1)
    }

    return (
      <WrappedComponent
        { ...(props as T)}
        count={count} 
        incrementCount={incrementCount}
      />
    )   
  }

  return ComponentWithCounter
}

export default withCounter