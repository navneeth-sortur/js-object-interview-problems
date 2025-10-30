/**
 * 🧩 Problem 16: Rename keys in an object based on a key map
 *
 * Example:
 * renameKeys({ fname: "John", lname: "Doe" }, { fname: "firstName", lname: "lastName" })
 * ➜ { firstName: "John", lastName: "Doe" }
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(n)
 */

const renameKeys = (obj, keyMap) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [keyMap[k] || k, v]));

module.exports = { renameKeys };
