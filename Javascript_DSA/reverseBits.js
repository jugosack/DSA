/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer with bits reversed
 */
 var reverseBits = function(n) {
    var result = 0;
    
    // Perform 32 iterations for each bit
    for (var i = 0; i < 32; i++) {
        // Shift the result to the left by 1 (to make room for the next bit)
        result <<= 1;
        
        // Get the least significant bit of n and add it to the result
        result |= n & 1;
        
        // Shift n to the right by 1 to process the next bit
        n >>>= 1; // Use unsigned right shift to ensure n is treated as unsigned
    }
    
    return result >>> 0; // Ensure the result is treated as unsigned
};

//Test case
var n = 43261596; // Example input
var reversed = reverseBits(n);
console.log(reversed); // Output should be the integer with reversed bits