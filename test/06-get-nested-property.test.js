const { safeGet } = require("../problems/06-get-nested-property");

describe("Get nested property values safely", () => {
  const obj = { a: { b: { c: 5 } } };

  test("should return correct nested value", () => {
    expect(safeGet(obj, "a.b.c")).toBe(5);
  });

  test("should return undefined for invalid path", () => {
    expect(safeGet(obj, "a.x.c")).toBeUndefined();
  });

  test("should handle root level property", () => {
    expect(safeGet(obj, "a")).toEqual({ b: { c: 5 } });
  });

  test("should return undefined for empty object", () => {
    expect(safeGet({}, "a.b")).toBeUndefined();
  });
});
