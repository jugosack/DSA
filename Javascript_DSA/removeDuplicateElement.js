/**
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates = function(nums) {
   if (nums.length === 0) {
       return 0; // If the array is empty, there are no duplicates.
   }

   let uniqueIndex = 0; // Index for the unique elements.

   for (let i = 1; i < nums.length; i++) {
       if (nums[i] !== nums[uniqueIndex]) {
           uniqueIndex++;
           nums[uniqueIndex] = nums[i];
       }
   }

   // The unique elements are now in the subarray nums[0] to nums[uniqueIndex].
   // The length of the array with duplicates removed is uniqueIndex + 1.
   return uniqueIndex + 1;
};

//Test cases
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Expected output: 1


