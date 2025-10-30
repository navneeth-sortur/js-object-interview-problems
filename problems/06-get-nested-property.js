/**
 * 🧩 Problem 6: Get nested property values safely
 *
 * Implement a function to safely access deeply nested properties.
 * If any property along the path doesn’t exist, return undefined.
 *
 * Example:
 * const obj = { a: { b: { c: 5 } } };
 * safeGet(obj, "a.b.c") ➜ 5
 * safeGet(obj, "a.x.c") ➜ undefined
 *
 * 🕒 Time Complexity: O(d) where d = depth of path
 * 💾 Space Complexity: O(1)
 */

// ✅ Optimized Functional Solution
const safeGet = (obj, path) =>
  path
    .split(".")
    .reduce(
      (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
      obj
    );

/*
// Alternative (optional chaining version)
const safeGet = (obj, path) => {
  try {
    return path.split(".").reduce((acc, key) => acc?.[key], obj);
  } catch {
    return undefined;
  }
};
*/

module.exports = { safeGet };
