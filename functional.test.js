const add = (a, b) => {
  return a + b
}

const getAdd = () => {
  return add
}

test('getAdd should return the add function', () => {
  expect(getAdd()(2, 3)).toBe(5)
})