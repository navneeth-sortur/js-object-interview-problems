/**
 * 🧩 Problem 8: Remove keys with falsy or nullish values
 *
 * Given an object, return a new one with all falsy (false, 0, '', null, undefined, NaN) values removed.
 *
 * Example:
 * Input: { a: 1, b: null, c: 0, d: "hello" }
 * Output: { a: 1, d: "hello" }
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

// ✅ Optimized Declarative Solution
const removeFalsyKeys = obj =>
  Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => Boolean(value))
  );

/*
// Alternative (loop-based)
const removeFalsyKeys = (obj) => {
  const result = {};
  for (const key in obj) {
    if (obj[key]) result[key] = obj[key];
  }
  return result;
};
*/

module.exports = { removeFalsyKeys };
