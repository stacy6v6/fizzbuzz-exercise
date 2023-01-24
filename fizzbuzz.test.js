import { describe, expect, test } from '@jest/globals'
import fizzbuzz from './fizzbuzz.js'

describe('Unit testing for fizzbuzz', () => {
  test('Throws for invalid input (string)', () => {
    expect(() => fizzbuzz('hello')).toThrow('Invalid input type! Must be a positive integer.')
  })
  test('Throws for invalid input (non-positive integer)', () => {
    expect(() => fizzbuzz(-1)).toThrow('Invalid integer range! Must be a positive integer.')
    expect(() => fizzbuzz(0)).toThrow('Invalid integer range! Must be a positive integer.')
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
})
