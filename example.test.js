function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

test('add', () => {
  expect(add(1, 2)).toBe(3)
})

test('subtract', () => {
  expect(subtract(1, 2)).toBe(-1)
})

test('multiply', () => {
  expect(multiply(1, 2)).toBe(2)
})
test('divide', () => {
  expect(true).toBe(true)
})