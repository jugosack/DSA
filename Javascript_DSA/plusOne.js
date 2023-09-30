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
// Test Case 1: Regular increment, no carryover
console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]

// Test Case 2: Increment with carryover
console.log(plusOne([1, 2, 9])); // Output: [1, 3, 0]

// Test Case 3: All 9s with carryover
console.log(plusOne([9, 9, 9])); // Output: [1, 0, 0, 0]

// Test Case 4: Single-digit number
console.log(plusOne([9])); // Output: [1, 0]

// Test Case 5: Large number with no carryover
console.log(plusOne([1, 0, 0, 0, 0])); // Output: [1, 0, 0, 0, 1]
