var hammingWeight = function(n) {
    let count = 0;
    
    while (n !== 0) {
        count += n & 1; // Add the least significant bit to the count
        n = n >>> 1;   // Right shift the number to check the next bit
    }
    
    return count;
};
//Test cases
console.log(hammingWeight(00000000000000000000000000001011)); //Excpected: 3
console.log(hammingWeight(00000000000000000000000010000000)); //Excpected: 1

//link: https://leetcode.com/problems/number-of-1-bits/description/