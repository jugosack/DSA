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

//EXPLANATION

// s.split(''): This part takes the input string s and splits it into an array of individual characters. For example, if s is 'IX', s.split('') would result in ['I', 'X'].

// .forEach((num, i) => { ... }): This is a forEach loop that iterates over each element in the array. In this case, it iterates over each character in the string.

// (num, i): Within the forEach loop, (num, i) is a parameter list for the loop's callback function. num represents the current character being processed, and i represents the index of that character in the array.

// if (Map[num] < Map[s[i + 1]]): This line checks if the numeric value of the current character (Map[num]) is less than the numeric value of the next character (Map[s[i + 1]]).

// Map[num] retrieves the numeric value of the current character from the Map object. For example, if num is 'I', Map[num] would be 1.

// s[i + 1] retrieves the next character in the string. For example, if s[i] is 'I', then s[i + 1] would be 'X'.

// So, the if statement checks if the numeric value of the current character is less than the numeric value of the next character. This comparison is essential in Roman numeral conversion because, in Roman numerals, values like 'IV' represent 4 (one less than 5), and 'IX' represents 9 (one less than 10). When a smaller value appears before a larger value, it means subtraction, and that's why you subtract in these cases.

// If the condition Map[num] < Map[s[i + 1]] is true, it means subtraction is needed, so res (the result) is decremented by the value of the current character. Otherwise, it means addition is needed, so res is incremented by the value of the current character.