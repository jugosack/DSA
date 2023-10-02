function addBinary(a, b) {
    let result = '';
    let carry = 0;
    
    // Start from the rightmost digit of both binary strings
    let i = a.length - 1;
    let j = b.length - 1;
    
    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;
        
        // Calculate the sum of current digits and carry
        const sum = digitA + digitB + carry;
        
        // Append the least significant bit of the sum to the result
        result = (sum % 2) + result;
        
        // Update the carry for the next iteration
        carry = Math.floor(sum / 2);
        
        // Move to the next digits
        i--;
        j--;
    }
    
    return result;
}

//Test cases
console.log(addBinary("11", "1")); // Expected output: 100
console.log(addBinary("1010", "1011")); // Expected output: 10101
