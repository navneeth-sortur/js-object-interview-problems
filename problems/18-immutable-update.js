/**
 * 🧩 Problem 18: Immutable object update utility
 *
 * Given an object, key, and new value, return a new object with the updated key
 * (without mutating the original).
 *
 * Example:
 * immutableUpdate({ a: 1, b: 2 }, "b", 3) ➜ { a: 1, b: 3 }
 *
 * 🕒 Time Complexity: O(1)
 * 💾 Space Complexity: O(n)
 */

const immutableUpdate = (obj, key, value) => ({ ...obj, [key]: value });

module.exports = { immutableUpdate };
