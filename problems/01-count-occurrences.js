/**
 * 🧩 Problem 1: Count occurrences of characters using an object
 *
 * Given a string, return an object where keys are characters and values are their counts.
 *
 * Example:
 * Input: "hello"
 * Output: { h: 1, e: 1, l: 2, o: 1 }
 *
 * 🕒 Time Complexity: O(n)
 * 💾 Space Complexity: O(k) where k = number of unique characters
 */

// ✅ Functional + Declarative Solution
const countOccurrences = str =>
  [...str].reduce(
    (acc, char) => ({ ...acc, [char]: (acc[char] || 0) + 1 }),
    {}
  );

module.exports = { countOccurrences };
