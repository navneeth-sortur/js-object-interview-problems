const { freezeAndSealDemo } = require("../problems/15-freeze-seal");

describe("Freeze and seal object demo", () => {
  test("should return frozen and sealed versions", () => {
    const obj = { a: 1 };
    const result = freezeAndSealDemo(obj);

    expect(result.isFrozen).toBe(true);
    expect(result.isSealed).toBe(true);
    expect(Object.isFrozen(result.frozen)).toBe(true);
    expect(Object.isSealed(result.sealed)).toBe(true);
  });

  test("frozen object should not be mutable", () => {
    const { frozen } = freezeAndSealDemo({ x: 1 });
    expect(() => (frozen.x = 10)).not.toThrow(); // silent fail in non-strict mode
    expect(frozen.x).toBe(1);
  });
});
