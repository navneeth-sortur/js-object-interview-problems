/**
 * 🧩 Problem 17: Convert all object keys to camelCase
 *
 * Example:
 * Input: { "first_name": "John", "last_name": "Doe" }
 * Output: { firstName: "John", lastName: "Doe" }
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

const toCamel = str =>
  str.replace(/([-_][a-z])/gi, group =>
    group.toUpperCase().replace(/[-_]/, "")
  );

const camelCaseKeys = obj =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [toCamel(k), v]));

module.exports = { camelCaseKeys };
