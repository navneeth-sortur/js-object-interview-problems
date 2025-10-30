/**
 * 🧩 Problem 3: Merge multiple objects without mutation
 *
 * Given multiple objects, merge them into a new object.
 * If keys overlap, later objects override earlier ones.
 *
 * Example:
 * mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })
 * => { a: 1, b: 3, c: 4 }
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

const mergeObjects = (...objs) => Object.assign({}, ...objs);

module.exports = { mergeObjects };
