/**
 * 🧩 Problem 9: Sort array of objects by a property
 *
 * Sort an array of objects based on a given key.
 *
 * Example:
 * const arr = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
 * sortByKey(arr, "age") ➜ [{ name: "Jane", age: 25 }, { name: "John", age: 30 }]
 *
 * 🕒 Time Complexity: O(n log n)
 * 💾 Space Complexity: O(n)
 */

// ✅ Optimized Declarative Solution (non-mutating)
const sortByKey = (arr, key) =>
  [...arr].sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

module.exports = { sortByKey };
