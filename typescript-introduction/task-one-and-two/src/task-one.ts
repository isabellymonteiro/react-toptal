export type Topping = {
  name: string,
  isHot: boolean,
  quantity: number
}

export enum BakingDuration {
  Fast = 10,
  Medium = 20,
  Slow = 30
}

export type CreatePizza = {
  name: string,
  size: 'S' | 'M' | 'L'
  crust: 'thin' | 'thick'
  toppings: Topping[]
  bakingDuration: BakingDuration,
  price: number
}

export type Pizza =  CreatePizza & {
  id: string,
  createdAt: string
}

type ApiResult = {
  success: true,
  data: Pizza[]
}

type ApiError = {
  success: false,
  error: { message: string } // Error or string (object with message)
}

type ApiResponse = ApiResult | ApiError

// function whose return type is a type predicate
const isApiError = (response: ApiResponse): response is ApiError => {
  return (response as ApiError).error !== undefined
}

/* 
example of narrowing using 'in'

const handleResponse = (response: ApiResponse) => {
  if ('error' in response) {
    console.error(response.error.message)
    return
  }
 
  console.log(response.data)
}
*/

// Date type suggestion (I'm not using but good for the future)

// You can use template literals to define types

// mm/dd/yyy
type CustomDate = `${number}/${number}/${number}`

const myDate: CustomDate = '12/12/2000' // valid
// const myDate2: CustomDate = '12-12-2000' // invalid
const myDate3: CustomDate = '123123/123123123/123123123' // valid


// more specific types
type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31
type CustomSpecificDate = `${Month}/${Day}/${number}`

const myOtherDate: CustomSpecificDate = '12/12/2000' // valid
// const myOtherDate2: CustomSpecificDate = '12-12-2000' // invalid
// const myOtherDate3: CustomSpecificDate = '123123/123123123/123123123' // invalid

// we still have problems in cases like
const myOtherDate4: CustomSpecificDate = '11/31/2000' // there's no 31th in november, but is still valid
const myOtherDate5: CustomSpecificDate = '11/30/-2000' // -2000 it's a valid number

// there's no perfect approach.
// one thing you can do is to use one of these types and check the format in runtime
