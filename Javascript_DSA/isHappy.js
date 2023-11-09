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
};
//Test cases
console.log(isHappy(2));
console.log(isHappy(19));
//link: https://leetcode.com/problems/happy-number/