const { mergeObjects } = require("../problems/03-merge-objects");

describe("Merge multiple objects without mutation", () => {
  test("should merge multiple objects correctly", () => {
    const result = mergeObjects({ a: 1 }, { b: 2 }, { c: 3 });
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  test("should override keys from later objects", () => {
    const result = mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 });
    expect(result).toEqual({ a: 1, b: 3, c: 4 });
  });

  test("should not mutate original objects", () => {
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    mergeObjects(obj1, obj2);
    expect(obj1).toEqual({ a: 1 });
  });
});
