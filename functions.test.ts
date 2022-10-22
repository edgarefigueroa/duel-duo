const {shuffleArray} = require('./utils')
let colors = ['black', 'blue', 'green', 'yellow']
//let testA = shuffleArray(colors);

describe('shuffleArray should', () => {
    // CODE HERE
    test("check that shuffleArray returns an array",() =>{
        expect(Array.isArray (shuffleArray(colors))).toBeTruthy()
      })

    test("check that it returns an array of the same length as the argument sent in",() =>{
        expect(shuffleArray(colors).length).toBe(colors.length)
      })
})