const { getUniqueValues } = require("../problems/19-unique-values");

describe("Get all unique values from object properties", () => {
  test("should return unique combined values", () => {
    const obj = { a: [1, 2], b: [2, 3, 4], c: [4, 5] };
    expect(getUniqueValues(obj)).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle empty object", () => {
    expect(getUniqueValues({})).toEqual([]);
  });
});
