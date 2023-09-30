/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++; // Add one to the current digit.
            return digits; // Return the updated array.
        } else {
            digits[i] = 0; // Set the current digit to 0 and continue to the next digit.
        }
    }
    
    // If we reach this point, it means all digits were 9, so we need to add a new digit at the beginning.
    digits.unshift(1);
    
    return digits; // Return the updated array.
    
};
// Test cases