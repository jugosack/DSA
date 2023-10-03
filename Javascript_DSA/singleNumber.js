/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let result = 0;
    
    for (let i = 0; i < nums.length; i++) {
        // XOR the current number with the result
        //nums = [2,2,1]
        result ^= nums[i]; //res=0| 0 XOR 4=4 | 4 XOR 1=5 | 5 XOR 2=7 | 1 XOR 7=6 | 6 XOR 2=4 
    }
    
    return result; // result = 1
    
};
   
//Test cases
console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(singleNumber([1])); // Output: 1