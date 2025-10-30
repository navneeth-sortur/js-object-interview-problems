/**
 * 🧩 Problem 4: Convert an object to an array and vice versa
 *
 * Implement:
 * 1. objectToArray() -> Converts { a: 1, b: 2 } to [['a', 1], ['b', 2]]
 * 2. arrayToObject() -> Converts [['a', 1], ['b', 2]] to { a: 1, b: 2 }
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

const objectToArray = obj => Object.entries(obj);

const arrayToObject = arr => Object.fromEntries(arr);

module.exports = { objectToArray, arrayToObject };
