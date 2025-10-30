const { camelCaseKeys } = require("../problems/17-camelcase-keys");

describe("Convert object keys to camelCase", () => {
  test("should convert snake_case to camelCase", () => {
    const obj = { first_name: "John", last_name: "Doe" };
    expect(camelCaseKeys(obj)).toEqual({ firstName: "John", lastName: "Doe" });
  });

  test("should convert kebab-case to camelCase", () => {
    const obj = { "user-id": 123, "user-name": "Alice" };
    expect(camelCaseKeys(obj)).toEqual({ userId: 123, userName: "Alice" });
  });
});
