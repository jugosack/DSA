var strStr = function(haystack, needle) {
    if (needle === "") {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
};

//Test case
console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1

//https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/