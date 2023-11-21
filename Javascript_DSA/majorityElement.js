/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let candidate = null;
  let count = 0;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }
    
};

//test cases
console.log(majorityElement([3, 3, 4, 2, 4, 4, 2, 4, 4])); // Example test case
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Example test case

//link: https://leetcode.com/problems/majority-element/