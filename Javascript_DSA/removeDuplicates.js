var removeDuplicates = function(nums) {
    if(nums.length==0){
        return 0;
    }
    uniqueIndex=0;
    for(let i=1; i<nums.length; i++){
        if(nums[i] != nums[uniqueIndex]){
            uniqueIndex++;
        }
    }
};
//Test cases
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Expected output: 1


//link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/