const { sortByKey } = require("../problems/09-sort-by-key");

describe("Sort array of objects by a property", () => {
  const arr = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Adam", age: 28 }
  ];

  test("should sort by numeric key", () => {
    const sorted = sortByKey(arr, "age");
    expect(sorted.map(o => o.age)).toEqual([25, 28, 30]);
  });

  test("should sort by string key", () => {
    const sorted = sortByKey(arr, "name");
    expect(sorted.map(o => o.name)).toEqual(["Adam", "Jane", "John"]);
  });

  test("should not mutate original array", () => {
    const copy = [...arr];
    sortByKey(arr, "age");
    expect(arr).toEqual(copy);
  });
});
