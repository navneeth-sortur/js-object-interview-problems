const { flattenObject } = require("../problems/11-flatten-object");

describe("Flatten a deeply nested object", () => {
  test("should flatten nested object keys", () => {
    const input = { a: { b: { c: 2 } } };
    const expected = { "a.b.c": 2 };
    expect(flattenObject(input)).toEqual(expected);
  });

  test("should handle multiple nested branches", () => {
    const input = { a: { b: 1 }, x: { y: { z: 3 } }, m: 5 };
    const expected = { "a.b": 1, "x.y.z": 3, m: 5 };
    expect(flattenObject(input)).toEqual(expected);
  });

  test("should include array indices in keys", () => {
    const input = { a: [{ b: 1 }, { b: 2 }], c: [1, 2] };
    const expected = { "a.0.b": 1, "a.1.b": 2, "c.0": 1, "c.1": 2 };
    expect(flattenObject(input)).toEqual(expected);
  });

  test("should handle empty object", () => {
    expect(flattenObject({})).toEqual({});
  });

  test("should handle primitives at root (returns empty if no key)", () => {
    // our implementation doesn't create a key-less root primitive; result stays empty
    expect(flattenObject(42)).toEqual({});
  });

  test("should handle null values correctly (null is treated as value)", () => {
    const input = { a: { b: null } };
    const expected = { "a.b": null };
    expect(flattenObject(input)).toEqual(expected);
  });
});
