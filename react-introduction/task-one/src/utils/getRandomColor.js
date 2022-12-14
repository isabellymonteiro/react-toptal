// based on https://www.educative.io/answers/how-to-generate-a-random-color-in-javascript
const generateRandomColor = () => {
  const maxValue = 0xFFFFFF // 16777215
  const randomNumber = Math.random() * maxValue
  let randomColor = Math.floor(randomNumber).toString(16)

  // in case randomColor is less than 6 digits (e.g. 123b)
  // add 0 to the start of the color
  if (randomColor.length < 6) {
    randomColor = randomColor.padStart(6, 0)
  }

  return `#${randomColor.toUpperCase()}`
}

// check if color exists in array, if so, get another one
export const getRandomColor = (colorsArray) => {
  const newRandomColor = generateRandomColor()

  if (colorsArray.find(randomColor => randomColor === newRandomColor)) {
    getRandomColor()
  } else {
    return newRandomColor
  }
}