const { shallowClone, deepClone } = require("../problems/02-clone-object");

describe("Clone an object (shallow vs deep)", () => {
  const obj = { a: 1, b: { c: 2 } };

  test("should create a shallow copy", () => {
    const clone = shallowClone(obj);
    expect(clone).toEqual(obj);
    expect(clone.b).toBe(obj.b); // same reference
  });

  test("should create a deep copy", () => {
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone.b).not.toBe(obj.b); // different reference
  });

  test("should handle arrays in deep clone", () => {
    const arrObj = { x: [1, 2, { y: 3 }] };
    const clone = deepClone(arrObj);
    expect(clone).toEqual(arrObj);
    expect(clone.x[2]).not.toBe(arrObj.x[2]);
  });
});
