/**
 * 🧩 Problem 7: Compare two objects for deep equality
 *
 * Check if two objects contain the same keys and values, including nested ones.
 *
 * Example:
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { a: 1, b: { c: 2 } };
 * deepEqual(obj1, obj2) ➜ true
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

// ✅ Optimized Recursive Functional Solution
const deepEqual = (a, b) => {
  if (a === b) return true;
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  )
    return false;

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  return keysA.every(key => deepEqual(a[key], b[key]));
};

/*
  // Alternative: JSON stringify method (simple but fails with functions/undefined)
  const deepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  */

module.exports = { deepEqual };
