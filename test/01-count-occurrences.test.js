const { countOccurrences } = require("../problems/01-count-occurrences");

describe("Count occurrences of characters using an object", () => {
  test("should count each character correctly", () => {
    expect(countOccurrences("hello")).toEqual({ h: 1, e: 1, l: 2, o: 1 });
  });

  test("should return empty object for empty string", () => {
    expect(countOccurrences("")).toEqual({});
  });

  test("should handle repeated characters", () => {
    expect(countOccurrences("aabbccc")).toEqual({ a: 2, b: 2, c: 3 });
  });
});
