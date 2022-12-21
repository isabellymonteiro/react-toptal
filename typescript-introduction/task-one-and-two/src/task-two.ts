import { CreatePizza, Pizza } from './task-one'
import { v4 as uuidv4 } from 'uuid'

type Criterion = keyof Pick<Pizza, 'name' | 'size' | 'bakingDuration' | 'price' | 'createdAt'>

export const menu: Pizza[] = []

interface MenuMethods {
  addPizza: (pizza: CreatePizza) => Pizza
  getPizza: (id: string) => Pizza | undefined
  getHotPizzas: () => Pizza[]
  sortPizzas: (criterion: Criterion, direction?: 'asc' | 'desc') => Pizza[]
  getMenu: () => Pizza[]
}

export const menuMethods: MenuMethods = {
  addPizza: (pizza) => {
    const newPizza = {
      ...pizza,
      id: uuidv4(),
      createdAt: ((new Date()).toISOString())
    }

    menu.push(newPizza)
    return newPizza
  },
  getPizza: (id) => {
    return menu.find(pizza => pizza.id === id)
  },
  getHotPizzas: () => {
    return menu.filter(pizza => pizza.toppings.find(topping => topping.isHot) !== undefined)
  },
  sortPizzas: (criterion, direction = 'asc') => {
    const menuCopy = [...menu]
    let isAsc: boolean

    // size S, M, L are alphabetically in reverse order
    if (criterion === 'size') {
      isAsc = direction === 'desc'
    } else {
      isAsc = direction === 'asc'
    }

    const compareString = (a: Pizza, b: Pizza) => {
      const currentPizza = a[criterion].toString().toLowerCase()
      const nextPizza =  b[criterion].toString().toLowerCase()

      if (currentPizza < nextPizza) {
        return isAsc ? -1 : 1
      } else if (currentPizza > nextPizza) {
        return isAsc ? 1 : -1
      } else {
        return 0
      }
    }

    const compareNumber = (a: Pizza, b: Pizza) => {
      return isAsc ? +a[criterion] - +b[criterion] : +b[criterion] - +a[criterion]
    }

    if (criterion === 'size' || criterion === 'name' || criterion === 'createdAt') {
      return menuCopy.sort(compareString) 
    }

    if (criterion === 'bakingDuration' || criterion === 'price') {
      return menuCopy.sort(compareNumber) 
    }
    
    // return menu copy if criterion is not available
    return menuCopy
  },
  getMenu: () => menu
}