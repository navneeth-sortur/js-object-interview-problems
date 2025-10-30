/**
 * 🧩 Problem 15: Demonstrate Object.freeze() and Object.seal()
 *
 * Return info on whether an object is frozen or sealed after operations.
 *
 * 🕒 Time Complexity: O(1)
 * 💾 Space Complexity: O(1)
 */

// ✅ Simple Demonstration Function
const freezeAndSealDemo = obj => {
  const frozen = Object.freeze({ ...obj });
  const sealed = Object.seal({ ...obj });
  return {
    frozen,
    sealed,
    isFrozen: Object.isFrozen(frozen),
    isSealed: Object.isSealed(sealed)
  };
};

module.exports = { freezeAndSealDemo };
