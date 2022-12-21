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