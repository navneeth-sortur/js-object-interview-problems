const { deepEqual } = require("../problems/07-deep-equal");

describe("Compare two objects for deep equality", () => {
  test("should return true for deeply equal objects", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(deepEqual(obj1, obj2)).toBe(true);
  });

  test("should return false for unequal nested values", () => {
    const obj1 = { a: 1, b: { c: 3 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(deepEqual(obj1, obj2)).toBe(false);
  });

  test("should handle null and primitives", () => {
    expect(deepEqual(null, null)).toBe(true);
    expect(deepEqual(null, {})).toBe(false);
  });
});
