/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {

    for(let i=0; i<nums.length; i++){
        if (nums[i]+nums[i+1]== target){
            return [i,i+1]
        }

    }

    // If no solution is found, return an empty array
  return [];
};

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Expected output: [1, 2]
console.log(twoSum([3, 3], 6));          // Expected output: [0, 1]
console.log(twoSum([1, 2, 3, 4, 5], 9)); // Expected output: [3, 4]
console.log(twoSum([1, 2, 3, 4], 10));    // Expected output: []


//EXPLANATION

// The code is only checks for adjacent elements. 