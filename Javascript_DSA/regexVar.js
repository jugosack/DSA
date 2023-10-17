function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
   
    var re = /^(a|e|i|o|u).*\1$/i;
    /*
     * Do not remove the return statement
     */
    return re;
}
//Test cases
console.log(regexVar().test('apple'));
console.log(regexVar().test('banana'));
console.log(regexVar().test('123abc123'));
console.log(regexVar().test('abcda'));

//EXPLANATION

// The regular expression ^(a|e|i|o|u).*\1$ is used to match a string that starts and ends with the same vowel (a, e, i, o, or u) while being case-insensitive due to the i flag. Let's break down the components of this regular expression:

// ^: This symbol asserts the start of the string, meaning that the pattern must begin matching from the beginning of the string.

// (a|e|i|o|u): This part is a character class enclosed in parentheses. It matches any single character that is one of the specified vowels (a, e, i, o, or u). The | symbol acts as an "OR" operator, allowing any of these vowels to match. So, it looks for the first vowel at the start of the string.

// .*: This part matches any character (.) zero or more times (*). It allows for any characters (or none) to appear in between the starting and ending vowel.

// \1: The backreference \1 is used to match the same character that was captured by the character class (a|e|i|o|u) at the start of the string. It ensures that the string ends with the same character as it started with.

// $: This symbol asserts the end of the string, ensuring that the pattern must match until the end of the string.

// The i flag at the end makes the regular expression case-insensitive, allowing it to match both uppercase and lowercase vowels.