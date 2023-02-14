// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html

interface NameLabel {
  name: string
}

interface IdLabel {
  id: number
}

export type NameOrId<T extends string | number> = T extends string 
  ? NameLabel
  : IdLabel

/*
  function createLabel(id: number): IdLabel
  function createLabel(name: string): NameLabel
  function createLabel(nameOrId: string | number): IdLabel | NameLabel {
    throw "unimplemented"
  }

  Instead:
*/

const createLabel = <T extends string | number>(nameOrId: T): NameOrId<T> => {
  throw "No implementation"
}

/* Examples

  const a = createLabel("typescript") // const a: NameLabel
  
  const b = createLabel(2.8) // const b: IdLabel
  
  const c = createLabel(Math.random() ? "hello" : 42) // const c: NameLabel | IdLabel
*/

// ---------------------------------------------------------------------------------------

// Conditional Type Constraints

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never
 
interface Email {
  message: string
}
 
interface Dog {
  bark(): void
}
 
type EmailMessageContents = MessageOf<Email>
 
type DogMessageContents = MessageOf<Dog> // does not have message property

// ---------------------------------------------------------------------------------------

// infer keyword — Inferring Within Conditional Types

/* type Flatten<T> = T extends any[] ? T[number] : T;

  We can also:
*/

type Flatten<T> = T extends Array<infer Item> ? Item : T

type Str = Flatten<string[]>
type Num = Flatten<number>
