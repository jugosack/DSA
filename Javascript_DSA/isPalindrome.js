/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0) {
        return false; // Negative numbers are not palindromes
    }
    
    // Convert the number to a string
    const numStr = x.toString();
    
    // Use two pointers approach to check if it's a palindrome
    let left = 0;
    let right = numStr.length - 1;
    
    while (left < right) {
        if (numStr[left] !== numStr[right]) {
            return false; // Characters don't match, not a palindrome
        }
        left++;
        right--;
    }
    
    return true; // If the loop completes, it's a palindrome
};
// Call the isPalindrome function and provide a number to check
const inputNumber = -121;
const result = isPalindrome(inputNumber);

// Print the result
console.log(result);