/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    let index =0
    while (index !== -1) {
        index = haystack.indexOf(needle);
        return index
    }

};

//Test cases
console.log(strStr("hello", "ll")); // Expected output: 2
console.log(strStr("aaaaa", "bba")); // Expected output: -1 (not found)
console.log(strStr("", "a")); // Expected output: -1 (empty haystack)
console.log(strStr("a", "")); // Expected output: 0 (empty needle)
console.log(strStr("abcdef", "xyz")); // Expected output: -1 (not found)
console.log(strStr("aaaaaa", "a")); // Expected output: 0 (found at the beginning)
console.log(strStr("mississippi", "issip")); // Expected output: 4