/**
 * 🧩 Problem 2: Clone an object (shallow vs deep)
 *
 * Implement two functions:
 * 1. shallowClone() - performs a shallow copy using spread/rest syntax
 * 2. deepClone() - performs a deep copy without using structuredClone or lodash
 *
 * Example:
 * const obj = { a: 1, b: { c: 2 } };
 * shallowClone(obj) => { a: 1, b: { c: 2 } } (same nested reference)
 * deepClone(obj) => completely new object
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

const shallowClone = obj => ({ ...obj });

const deepClone = obj =>
  typeof obj !== "object" || obj === null
    ? obj
    : Array.isArray(obj)
    ? obj.map(deepClone)
    : Object.fromEntries(
        Object.entries(obj).map(([k, v]) => [k, deepClone(v)])
      );

module.exports = { shallowClone, deepClone };
