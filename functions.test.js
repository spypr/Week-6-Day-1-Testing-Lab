const myFunctions = require('./functions')

test('Return Two Test', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test('Greeting Test', () => {
    expect(myFunctions.greeting("Steve")).toBe('Hello, Steve.')
})

test('Addition Test', () => {
    expect(myFunctions.add(1,2)).toBe(3)
})

test('Multiply Test', () => {
    expect(myFunctions.multiply(1,2)).toBe(2)
})

test('Divide Test', () => {
    expect(myFunctions.divide(10,2)).toBe(5)
})

test('Subtract Test', () => {
    expect(myFunctions.subtract(5,2)).toBe(3)
})
