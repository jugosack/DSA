/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let k = 0; // Initialize a variable to count elements not equal to val
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Replace nums[k] with nums[i] if they are not equal
            k++; // Increment the count
        }
    }
    
    return k; // Return the count of elements not equal to val
};

// Test cases
console.log(removeElement([3, 2, 2, 3], 3));       // Expected output: 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Expected output: 5
       

