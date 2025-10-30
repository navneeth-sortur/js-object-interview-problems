/**
 * 🧩 Problem 11: Flatten a Deeply Nested Object
 *
 * Given a deeply nested object (which may contain arrays), return a new object
 * where nested keys are joined by dots ('.'). Array indices are included as keys.
 *
 * Example:
 * Input: { a: { b: { c: 2 } } }
 * Output: { "a.b.c": 2 }
 *
 * Example with array:
 * Input: { a: [ { b: 1 }, { b: 2 } ] }
 * Output: { "a.0.b": 1, "a.1.b": 2 }
 *
 * 🕒 Time Complexity: O(n) where n = number of nodes (keys + array items)
 * 💾 Space Complexity: O(n) - result object size + recursion stack
 */

// ✅ Optimized Recursive, Functional Solution
const flattenObject = (obj, parentKey = "", result = {}) => {
  // If it's not an object (primitive), set value directly
  if (typeof obj !== "object" || obj === null) {
    const key = parentKey || ""; // root primitive (rare), but keep consistent
    if (key) result[key] = obj;
    return result;
  }

  // Handle arrays and objects uniformly by iterating indices or keys
  const entries = Array.isArray(obj)
    ? obj.map((v, i) => [String(i), v])
    : Object.entries(obj);

  entries.forEach(([key, value]) => {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  });

  return result;
};

/*
  // Alternative (iterative stack approach)
  const flattenObject = (obj) => {
    const result = {};
    const stack = [{ value: obj, prefix: "" }];
  
    while (stack.length) {
      const { value, prefix } = stack.pop();
      if (typeof value !== "object" || value === null) {
        if (prefix) result[prefix] = value;
        continue;
      }
  
      const entries = Array.isArray(value)
        ? value.map((v, i) => [String(i), v])
        : Object.entries(value);
  
      entries.forEach(([k, v]) => {
        const newKey = prefix ? `${prefix}.${k}` : k;
        stack.push({ value: v, prefix: newKey });
      });
    }
  
    return result;
  };
  */

module.exports = { flattenObject };
