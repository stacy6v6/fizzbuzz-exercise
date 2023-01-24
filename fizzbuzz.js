const fizzbuzz = (integer) => {
  if (!(Number.isInteger(integer)) || integer <= 0) {
    throw new TypeError('Invalid input!')
  }
  if (integer % 3 === 0 && integer % 5 === 0) {
    return 'fizzbuzz'
  } if (integer % 3 === 0) {
    return 'fizz'
  } if (integer % 5 === 0) {
    return 'buzz'
  }
  return ''
}

export default fizzbuzz
