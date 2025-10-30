/**
 * 🧩 Problem 14: Deep Merge Two Objects
 *
 * Merge two objects recursively. Nested objects should merge, not overwrite.
 *
 * Example:
 * mergeDeep({ a: 1, b: { x: 2 } }, { b: { y: 3 }, c: 4 })
 * ➜ { a: 1, b: { x: 2, y: 3 }, c: 4 }
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

// ✅ Optimized Recursive Functional Solution
const mergeDeep = (target, source) => {
  if (
    typeof target !== "object" ||
    typeof source !== "object" ||
    target === null ||
    source === null
  )
    return source;

  return Object.keys({ ...target, ...source }).reduce((acc, key) => {
    const tVal = target[key];
    const sVal = source[key];
    acc[key] =
      typeof tVal === "object" && typeof sVal === "object"
        ? mergeDeep(tVal, sVal)
        : sVal ?? tVal;
    return acc;
  }, {});
};

/*
  // Alternative: Using structuredClone() (Node 17+)
  const mergeDeep = (a, b) => {
    const result = structuredClone(a);
    Object.entries(b).forEach(([k, v]) => {
      if (typeof v === "object" && v !== null && result[k]) {
        result[k] = mergeDeep(result[k], v);
      } else {
        result[k] = v;
      }
    });
    return result;
  };
  */

module.exports = { mergeDeep };
