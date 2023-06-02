// Implement a function clamp(number, lower, upper) to clamp a number within the inclusive lower and upper bounds.

// Arguments
// value (number): The number to clamp.
// lower (number): The lower bound.
// upper (number): The upper bound.
// Returns
// (number): Returns the clamped number.

// Example
// clamp(-10, -5, 5); // => -5
// clamp(10, -5, 5); // => 5

// My solution:
// /**
//  * @param {number} value The number to clamp.
//  * @param {number} lower The lower bound.
//  * @param {number} upper The upper bound.
//  * @returns {number} Returns the clamped number.
//  */
export default function clamp(value, lower, upper) {
    if (value < lower) 
      return lower;
    else if (value > upper) 
      return upper;
    return value
  }

//   Best Practice / Simple Solution:
// /**
//  * @param {number} value The number to clamp.
//  * @param {number} lower The lower bound.
//  * @param {number} upper The upper bound.
//  * @returns {number} Returns the clamped number.
//  */
export default function clamp(value, lower, upper) {
    return Math.min(upper, Math.max(lower, value));
  }
