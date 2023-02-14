// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html

/* Note: JavaScript already has a typeof operator you can use in an expression context (runtime)
TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property. */

export const getUser = (id: string) => ({
  name: 'user',
  email: 'user@email.com'
})

type GetUserReturnType = ReturnType<typeof getUser>
// type GetUserReturnType = ReturnType<getUser> // does not work

type GetUserParamsType = Parameters<typeof getUser>

// -------------------------------------------------------------------

const user = {
  name: 'user',
  email: 'user@email.com',
  address: {
    street: 'street',
    city: 'city',
  },
  age: 30
}

type User = typeof user
type Address = User['address']
