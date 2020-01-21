const array = [1, 2, 3, 4, 5]
const nRotations = 2;

function rotLeft(array, rotation) {
  const rotationArray = array.concat()

  for (let i = 0; i < rotation; i++) {
    const shiftItem = rotationArray.shift()
    rotationArray.push(shiftItem)
  }

  return rotationArray
}

console.log(rotLeft(array, nRotations))
