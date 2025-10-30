const { arrayToObject } = require("../problems/12-array-to-object");

describe("Convert array of key-value pairs into an object", () => {
  test("should convert array to object", () => {
    expect(
      arrayToObject([
        ["a", 1],
        ["b", 2]
      ])
    ).toEqual({ a: 1, b: 2 });
  });

  test("should handle empty array", () => {
    expect(arrayToObject([])).toEqual({});
  });
});
