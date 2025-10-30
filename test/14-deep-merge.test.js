const { mergeDeep } = require("../problems/14-deep-merge");

describe("Deep merge two objects", () => {
  test("should merge nested objects correctly", () => {
    const a = { a: 1, b: { x: 2 } };
    const b = { b: { y: 3 }, c: 4 };
    expect(mergeDeep(a, b)).toEqual({ a: 1, b: { x: 2, y: 3 }, c: 4 });
  });

  test("should overwrite primitive values", () => {
    const a = { a: 1 };
    const b = { a: 2 };
    expect(mergeDeep(a, b)).toEqual({ a: 2 });
  });

  test("should not mutate inputs", () => {
    const a = { a: { x: 1 } };
    const b = { a: { y: 2 } };
    const res = mergeDeep(a, b);
    expect(a).toEqual({ a: { x: 1 } });
    expect(res).toEqual({ a: { x: 1, y: 2 } });
  });
});
