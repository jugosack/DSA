/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let index1 = m - 1; // Index for the last element in nums1
    let index2 = n - 1; // Index for the last element in nums2
    let currentIndex = m + n - 1; // Index for the last position in nums1
    
     // Merge the arrays in descending order
     while (index1 >= 0 && index2 >= 0) {
        if (nums1[index1] > nums2[index2]) {
            nums1[currentIndex] = nums1[index1];
            index1--;
        } else {
            nums1[currentIndex] = nums2[index2];
            index2--;
        }
        currentIndex--;
    }
     // If there are remaining elements in nums2, copy them to nums1
     while (index2 >= 0) {
        nums1[currentIndex] = nums2[index2];
        index2--;
        currentIndex--;
    }
  
 };
 //test cases
 // Example 1
let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1,2,2,3,5,6]

// Example 2
nums1 = [1];
m = 1;
nums2 = [];
n = 0;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1]

// Example 3
nums1 = [0];
m = 0;
nums2 = [1];
n = 1;
merge(nums1, m, nums2, n);
console.log(nums1); // Output: [1]

//link: https://leetcode.com/problems/merge-sorted-array/