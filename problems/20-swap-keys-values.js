/**
 * 🧩 Problem 20: Swap keys and values in an object
 *
 * Example:
 * Input: { a: "x", b: "y" }
 * Output: { x: "a", y: "b" }
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

const swapKeysAndValues = obj =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));

module.exports = { swapKeysAndValues };
