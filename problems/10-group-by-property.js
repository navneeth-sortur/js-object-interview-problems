/**
 * 🧩 Problem 10: Group array of objects by property
 *
 * Given an array of objects, group them by a specific property.
 *
 * Example:
 * const data = [
 *   { name: "Alice", role: "admin" },
 *   { name: "Bob", role: "user" },
 *   { name: "Eve", role: "admin" }
 * ];
 * groupBy(data, "role") ➜ { admin: [...], user: [...] }
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

// ✅ Optimized Functional Solution
const groupBy = (arr, key) =>
  arr.reduce((acc, obj) => {
    const val = obj[key];
    return { ...acc, [val]: [...(acc[val] || []), obj] };
  }, {});

module.exports = { groupBy };
