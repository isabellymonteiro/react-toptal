import { useMemo, useEffect, useState } from "react"

/*
  Notice how adding 1 to number doesn't recreate the const "greeting" since it implements useMemo.

  Note: this code is for demonstration purposes. Performance wise, useMemo is not needed here.
*/

const UseMemoExample = () => {
  const [isArriving, setIsArriving] = useState(true)
  const [number, setNumber] = useState(0)

  const greeting = useMemo(() => {
    return isArriving ? "Welcome!" : "See you!"
  }, [isArriving])

  useEffect(() => {
    console.log('greet variable was recreated')
  }, [greeting])

  return (
    <div className="flex-column large-gap">
      <h1>useMemo</h1>
      <div className="flex-column small-gap">
        <button onClick={() => setIsArriving(prev => !prev)}>
          Say {isArriving ? 'Bye' : 'Hello'}
        </button>
        <span>— {isArriving ? 'Hello' : 'Bye'}</span>
        <span className={isArriving ? 'yellow' : 'blue'}>— {greeting}</span>
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

export default UseMemoExample