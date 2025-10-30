const { groupBy } = require("../problems/10-group-by-property");

describe("Group array of objects by property", () => {
  const data = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" },
    { name: "Eve", role: "admin" }
  ];

  test("should group by property correctly", () => {
    const grouped = groupBy(data, "role");
    expect(Object.keys(grouped)).toEqual(["admin", "user"]);
    expect(grouped.admin.length).toBe(2);
    expect(grouped.user.length).toBe(1);
  });

  test("should return empty object for empty input", () => {
    expect(groupBy([], "role")).toEqual({});
  });
});
