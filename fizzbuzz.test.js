import { expect, test } from '@jest/globals'
import fizzbuzz from './fizzbuzz.js'

test('Returns empty string for invalid input', () => {
  expect(fizzbuzz('hello')).toBe('')
})
test('Returns empty string for number not divisible by 3 and 5', () => {
  expect(fizzbuzz(2)).toBe('')
})
test('Returns fizzbuzz for number divisible by 3 and 5', () => {
  expect(fizzbuzz(15)).toBe('fizzbuzz')
})
test('Returns fizz for number divisible by 3', () => {
  expect(fizzbuzz(33)).toBe('fizz')
})
test('Returns buzz for number divisible by 5', () => {
  expect(fizzbuzz(50)).toBe('buzz')
})
