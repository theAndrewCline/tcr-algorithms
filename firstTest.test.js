const { firstTest, add } = require('./firstTest')

describe('firstTest', () => {
  it('should return true', () => {
    expect(firstTest()).toBe(true)
  })
})

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })
})
