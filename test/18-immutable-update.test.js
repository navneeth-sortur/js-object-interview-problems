const { immutableUpdate } = require("../problems/18-immutable-update");

describe("Immutable object update utility", () => {
  test("should return new object with updated key", () => {
    const obj = { a: 1, b: 2 };
    const result = immutableUpdate(obj, "b", 3);
    expect(result).toEqual({ a: 1, b: 3 });
  });

  test("should not mutate original object", () => {
    const obj = { a: 1 };
    const result = immutableUpdate(obj, "a", 2);
    expect(obj.a).toBe(1);
    expect(result.a).toBe(2);
  });
});
