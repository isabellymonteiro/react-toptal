// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions

// instead of enum's
export const Colors = {
  red: "RED",
  blue: "BLUE",
  green: "GREEN",
} as const

/* 
  // Error: A 'const' assertion can only be applied to a 
  // string, number, boolean, array, or object literal.
  const trueOrFalseIncorrect = (Math.random() < 0.5 ? 0 : 1) as const
  const totalIncorrect = (60 * 60 * 1000) as const
*/

// Works
const trueOrFalse = Math.random() < 0.5 ? (0 as const) : (1 as const)
const total = 3_600_000 as const
