const { customAssign } = require("../problems/13-object-assign");

describe("Implement custom Object.assign()", () => {
  test("should merge multiple source objects", () => {
    const result = customAssign({}, { a: 1 }, { b: 2 });
    expect(result).toEqual({ a: 1, b: 2 });
  });

  test("should override keys from later sources", () => {
    const result = customAssign({}, { a: 1 }, { a: 2 });
    expect(result).toEqual({ a: 2 });
  });

  test("should mutate target and return it", () => {
    const target = {};
    const result = customAssign(target, { x: 10 });
    expect(result).toBe(target);
    expect(result).toEqual({ x: 10 });
  });
});
