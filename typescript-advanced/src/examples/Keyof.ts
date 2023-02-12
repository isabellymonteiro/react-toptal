export interface Point { 
  x: number
  y: number
}

type P = keyof Point

// examples
/*
  const P: P = 'p' // does not work
  const X: P = 'x' // works
  const Y: P = 'y' // works
*/

// ----------------------------------------

interface Arrayish { 
  [n: number]: unknown
}

type A = keyof Arrayish

// examples
/*
  const B: A = 'b' // does not work
  const bool: A = true // does not work
  const One: A = 1 // works
*/

// ----------------------------------------

type Mapish = { [k: string]: boolean }
type M = keyof Mapish // type M = string | number

/* Note that in this example, M is string | number — this is because JavaScript object keys
are always coerced to a string, so obj[0] is always the same as obj["0"]. */
