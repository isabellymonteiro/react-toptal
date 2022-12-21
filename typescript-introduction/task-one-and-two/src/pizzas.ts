import { BakingDuration, CreatePizza } from './task-one'

const pepperoniPizza: CreatePizza = {
  name: 'Pepperoni',
  size: 'M',
  crust: 'thin',
  toppings: [
    {
      name: 'Pepperoni',
      isHot: true,
      quantity: 200
    },
    {
      name: 'Cheese',
      isHot: false,
      quantity: 100
    }
  ],
  bakingDuration: BakingDuration.Medium,
  price: 25.5
}

const mushroomPizza: CreatePizza = {
  name: 'Mushroom',
  size: 'L',
  crust: 'thick',
  toppings: [
    {
      name: 'Mushroom',
      isHot: false,
      quantity: 200
    },
    {
      name: 'Cheese',
      isHot: false,
      quantity: 100
    }
  ],
  bakingDuration: BakingDuration.Fast,
  price: 30
}

const chickenPizza: CreatePizza = {
  name: 'Chicken',
  size: 'L',
  crust: 'thin',
  toppings: [
    {
      name: 'Chicken',
      isHot: true,
      quantity: 200
    },
    {
      name: 'Bacon',
      isHot: false,
      quantity: 100
    }
  ],
  bakingDuration: BakingDuration.Slow,
  price: 28.5
}

const veggiePizza: CreatePizza = {
  name: 'Veggie',
  size: 'S',
  crust: 'thick',
  toppings: [
    {
      name: 'Onion',
      isHot: false,
      quantity: 80
    },
    {
      name: 'Broccoli',
      isHot: false,
      quantity: 100
    },
    {
      name: 'Tomato Sauce',
      isHot: true,
      quantity: 300
    }
  ],
  bakingDuration: BakingDuration.Medium,
  price: 22.5
}

export {pepperoniPizza, mushroomPizza, chickenPizza, veggiePizza}