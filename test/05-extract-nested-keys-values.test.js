const {
  extractKeysAndValues
} = require("../problems/05-extract-nested-keys-values");

describe("Extract all keys and values from nested objects", () => {
  test("should extract all keys and values correctly", () => {
    const input = { a: 1, b: { c: 2, d: { e: 3 } } };
    const result = extractKeysAndValues(input);
    expect(result.allKeys.sort()).toEqual(["a", "b", "c", "d", "e"].sort());
    expect(result.allValues.sort()).toEqual([1, 2, 3].sort());
  });

  test("should handle flat objects", () => {
    const input = { x: 10, y: 20 };
    const result = extractKeysAndValues(input);
    expect(result).toEqual({ allKeys: ["x", "y"], allValues: [10, 20] });
  });

  test("should handle empty object", () => {
    expect(extractKeysAndValues({})).toEqual({ allKeys: [], allValues: [] });
  });
});
