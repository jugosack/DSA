/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }

      
    }

    return nums.length;
};


//Test cases
console.log(searchInsert([1,3,5],2));
console.log(searchInsert([1,3,5],5));

//link: https://leetcode.com/problems/search-insert-position/