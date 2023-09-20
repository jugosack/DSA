/**
* @param {string} s
* @return {number}
*/
var romanToInt = function (s) {
 const Map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
 let res = 0;
 s.split('').forEach((num, i) => {
   if (Map[num] < Map[s[i + 1]]) res -= Map[num];
   else res += Map[num];
 });
 return res;
};

// Test cases
console.log(romanToInt('III')); // Output: 3
console.log(romanToInt('V')); // Output: 5
console.log(romanToInt('X')); // Output: 10
console.log(romanToInt('L')); // Output: 50