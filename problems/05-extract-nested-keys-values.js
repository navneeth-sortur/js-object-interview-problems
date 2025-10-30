/**
 * 🧩 Problem 5: Extract all keys and values from nested objects
 *
 * Given a deeply nested object, return an object containing two arrays:
 * - allKeys: list of all keys (including nested)
 * - allValues: list of all values (flattened)
 *
 * Example:
 * Input: { a: 1, b: { c: 2, d: { e: 3 } } }
 * Output: { allKeys: ['a', 'b', 'c', 'd', 'e'], allValues: [1, 2, 3] }
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

const extractKeysAndValues = obj => {
  const allKeys = [];
  const allValues = [];

  const traverse = o => {
    Object.entries(o).forEach(([k, v]) => {
      allKeys.push(k);
      if (v && typeof v === "object" && !Array.isArray(v)) traverse(v);
      else allValues.push(v);
    });
  };

  traverse(obj);
  return { allKeys, allValues };
};

module.exports = { extractKeysAndValues };
