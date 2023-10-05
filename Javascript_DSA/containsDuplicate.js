/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const duplicateSet = new Set();

    for (const num of nums) {
        if (duplicateSet.has(num)) {
            return true; // Found a duplicate
        }
        duplicateSet.add(num);
    }

    return false; // No duplicates found
   
};
// Test cases
console.log(containsDuplicate([1, 2, 3, 4])); // Should print false (no duplicates)
console.log(containsDuplicate([1, 2, 2, 4])); // Should print true (2 is duplicated)
console.log(containsDuplicate([])); // Should print false (empty array)
console.log(containsDuplicate([1, 1])); // Should print true (1 is duplicated)
