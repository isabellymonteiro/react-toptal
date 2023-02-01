import { useCallback, useEffect, useState } from "react"

/*
  Notice how adding 1 to number doesn't recreate the function "greet" since it implements useCallback.

  Note: this code is for demonstration purposes. Performance wise, useCallback is not needed here.
*/

const UseCallbackExample = () => {
  const [isArriving, setIsArriving] = useState(true)
  const [number, setNumber] = useState(0)

  const greet = useCallback(() => {
    return isArriving ? "Welcome!" : "See you!"
  }, [isArriving])

  useEffect(() => {
    console.log('greet function was recreated')
  }, [greet])

  return (
    <div className="flex-column large-gap">
      <h1>useCallback</h1>
      <div className="flex-column small-gap">
        <button onClick={() => setIsArriving(prev => !prev)}>
          Say {isArriving ? 'Bye' : 'Hello'}
        </button>
        <span>— {isArriving ? 'Hello' : 'Bye'}</span>
        <span className={isArriving ? 'yellow' : 'blue'}>— {greet()}</span>
      </div>
      <div className="flex-column small-gap">
        <button onClick={() => setNumber(prev => prev + 1)}>
          Add 1 to number
        </button>
        <span>{number}</span>
      </div>
    </div>
  )
}

export default UseCallbackExample