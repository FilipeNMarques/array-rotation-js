let array = [1, 2, 3, 4, 5]


function rotLeft() {
  array.reverse()
  console.log(array)
}


function rotation(rep) {
  while (!(rep === 0)) {
    rotLeft()
    rep--
  }
}

rotation(1000)

