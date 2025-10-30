/**
 * 🧩 Problem 13: Implement custom Object.assign()
 *
 * Merge all enumerable properties of source objects into a target object.
 *
 * Example:
 * customAssign({}, { a: 1 }, { b: 2 }) ➜ { a: 1, b: 2 }
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(1)
 */

// ✅ Optimized Implementation
const customAssign = (target, ...sources) => {
  sources.forEach(src =>
    Object.entries(src).forEach(([key, value]) => (target[key] = value))
  );
  return target;
};

/*
  // Alternative (reduce + spread)
  const customAssign = (target, ...sources) =>
    sources.reduce((acc, src) => ({ ...acc, ...src }), target);
  */

module.exports = { customAssign };
