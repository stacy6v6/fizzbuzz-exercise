const fizzbuzz = (integer) => {
  if (!(Number.isInteger(integer))) {
    throw new TypeError('Invalid input type! Must be a positive integer.')
  }
  if (integer <= 0) {
    throw new RangeError('Invalid integer range! Must be a positive integer.')
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
