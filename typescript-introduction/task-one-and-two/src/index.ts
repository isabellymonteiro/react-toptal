import { menuMethods } from './task-two'
import { pepperoniPizza, mushroomPizza, chickenPizza, veggiePizza } from './pizzas'

console.log('Initial menu:')
console.table(menuMethods.getMenu())

const pepperoni = menuMethods.addPizza(pepperoniPizza)
menuMethods.addPizza(chickenPizza)
menuMethods.addPizza(veggiePizza)
const mushroom = menuMethods.addPizza(mushroomPizza)

console.log('Menu after adding data:')
console.table(menuMethods.getMenu())

console.log(menuMethods.getPizza(pepperoni.id))
console.log(menuMethods.getPizza(mushroom.id))

console.log('Hot pizzas:')
console.table(menuMethods.getHotPizzas())

console.log('Sorted by name:')
console.table(menuMethods.sortPizzas('name'))
console.log('Sorted by desc size:')
console.table(menuMethods.sortPizzas('size', 'desc'))
console.log('Sorted by desc baking duration:')
console.table(menuMethods.sortPizzas('bakingDuration', 'desc'))

console.log('Menu:')
console.table(menuMethods.getMenu())