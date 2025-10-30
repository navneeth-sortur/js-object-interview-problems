const { removeFalsyKeys } = require("../problems/08-remove-falsy-keys");

describe("Remove keys with falsy or nullish values", () => {
  test("should remove falsy values", () => {
    const input = { a: 1, b: null, c: 0, d: "hello", e: undefined, f: "" };
    const output = { a: 1, d: "hello" };
    expect(removeFalsyKeys(input)).toEqual(output);
  });

  test("should return empty object if all values are falsy", () => {
    expect(removeFalsyKeys({ a: 0, b: false, c: null })).toEqual({});
  });

  test("should handle empty object", () => {
    expect(removeFalsyKeys({})).toEqual({});
  });
});
