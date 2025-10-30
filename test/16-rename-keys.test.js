const { renameKeys } = require("../problems/16-rename-keys");

describe("Rename object keys based on mapping", () => {
  test("should rename keys according to key map", () => {
    const obj = { fname: "John", lname: "Doe" };
    const map = { fname: "firstName", lname: "lastName" };
    expect(renameKeys(obj, map)).toEqual({
      firstName: "John",
      lastName: "Doe"
    });
  });

  test("should retain keys not in map", () => {
    const obj = { name: "Alice", age: 25 };
    const map = { name: "fullName" };
    expect(renameKeys(obj, map)).toEqual({ fullName: "Alice", age: 25 });
  });
});
