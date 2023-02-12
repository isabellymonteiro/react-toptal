// Generic Types example
export const filterByValue = <T, KEY extends keyof T>(
  array: T[],
  property: KEY,
  valueToFilter: T[KEY]
) => {
  return array.filter(item => item[property] === valueToFilter)
}

// call examples
/*
  filterByValue([{ city: "Lisboa" }, { city: "Havana" }, { city: "Luanda" }], 'country', 'Luanda') // does not work
  filterByValue([{ city: "Lisboa" }, { city: "Havana" }, { city: "Luanda" }], 'city', 'Luanda') // works
*/

// ---------------------------------------------------------------------------------------------------------------------

// Generic Constraints example
type HasLength = {
  length: number
}

export const getLength = <T extends HasLength>(arg: T) => {
  return arg.length
}

// call examples
/* 
  getLength(4) // does not work
  getLength(true) // does not work
  getLength([1, 2, 3]) // works
  getLength('ja') // works
*/
