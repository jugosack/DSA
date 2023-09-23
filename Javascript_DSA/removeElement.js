/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
z=[]
    for  (let i=0; i<nums.length; i++){
        if(num[i]!==val){
        num[i].push(z)  
        }
    }
    return z
};

// Test cases
console.log(removeElement([2, 7, 11, 15], 7)); // Expected output: [2,11,15] = nums, k=3
console.log(removeElement([3, 2, 4, 6],6));      
console.log(removeElement([3, 3, 4], 4));          

