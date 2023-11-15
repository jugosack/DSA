/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    while (num >= 10) {
        num = String(num).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
};
//Test cases
console.log(addDigits(38)); // Output: 2
console.log(addDigits(9875)); // Output: 2
console.log(addDigits(45)); // Output: 2

//link: https://leetcode.com/problems/add-digits/