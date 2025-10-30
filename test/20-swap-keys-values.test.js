const { swapKeysAndValues } = require("../problems/20-swap-keys-values");

describe("Swap keys and values in an object", () => {
  test("should swap keys with values", () => {
    const input = { a: "x", b: "y" };
    expect(swapKeysAndValues(input)).toEqual({ x: "a", y: "b" });
  });

  test("should handle numeric and mixed values", () => {
    const input = { one: 1, two: 2 };
    expect(swapKeysAndValues(input)).toEqual({ 1: "one", 2: "two" });
  });
});
