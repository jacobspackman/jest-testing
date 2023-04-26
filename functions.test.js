let functions = require('./functions')

test('should return the number 2', () => {
    expect(functions.returnTwo()).toBe(2)
})

test("return the input name with a greeting saying 'hello name'", () => {
    expect(functions.greeting('James')).toBe("Hello, James.")
})

// test("return the input name with a greeting saying 'hello name'", () => {
//     expect(greeting('Jill')).toBe("Hello, Jill.")
// })

test("adds the two input numbers together and returns the sum", () => {
    expect(functions.add(1, 2)).toBe(3)
})

// test("adds the two input numbers together and returns the sum", () => {
//     expect(add(5, 9)).toBe(14)
// })