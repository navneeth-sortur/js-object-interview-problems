/**
 * 🧩 Problem 19: Get all unique values from object properties
 *
 * Given an object whose values are arrays, return all unique values across them.
 *
 * Example:
 * Input: { a: [1, 2], b: [2, 3, 4] }
 * Output: [1, 2, 3, 4]
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

const getUniqueValues = obj => [...new Set(Object.values(obj).flat())];

module.exports = { getUniqueValues };
