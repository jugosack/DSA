/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = sumOfSquares(n);
    }
    return n === 1;
};

function sumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}
//Test cases
console.log(isHappy(2));
console.log(isHappy(19));
//link: https://leetcode.com/problems/happy-number/