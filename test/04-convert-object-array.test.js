const {
  objectToArray,
  arrayToObject
} = require("../problems/04-convert-object-array");

describe("Convert object to array and vice versa", () => {
  test("should convert object to array", () => {
    const obj = { a: 1, b: 2 };
    expect(objectToArray(obj)).toEqual([
      ["a", 1],
      ["b", 2]
    ]);
  });

  test("should convert array to object", () => {
    const arr = [
      ["a", 1],
      ["b", 2]
    ];
    expect(arrayToObject(arr)).toEqual({ a: 1, b: 2 });
  });

  test("should handle empty object and array", () => {
    expect(objectToArray({})).toEqual([]);
    expect(arrayToObject([])).toEqual({});
  });
});
