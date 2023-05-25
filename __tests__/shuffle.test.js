const shuffle = require("../src/shuffle.js");

describe("shuffle should...", () => {
  test("shuffle returns with an array", () => {
    const arr = [1, 2, 3, 4]
    const result = shuffle(arr)
    expect(result.length).not.toBe(0)
  })

  test('the array has been shuffled', () => {
    const arr = [1, 2, 3, 4]
    let count = 0
    for(let i = 0; i < 50; i++) {
      const result = shuffle(arr)
      if(JSON.stringify(result) !== JSON.stringify(arr)) {
        count++
      }
    }
    expect(count).toBeGreaterThan(25)
  })

  test('the array has the same amount as the argument', () => {
    const arr = [1, 2, 3, 4]
    const result = shuffle(arr)
    expect(result.length).toEqual(arr.length)
  })
});
