/**
 * 🧩 Problem 12: Convert array of key-value pairs into an object
 *
 * Example:
 * Input: [['a', 1], ['b', 2]]
 * Output: { a: 1, b: 2 }
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

// ✅ Declarative Solution
const arrayToObject = arr => Object.fromEntries(arr);

/*
// Alternative (reduce-based)
const arrayToObject = (arr) =>
  arr.reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
*/

module.exports = { arrayToObject };
