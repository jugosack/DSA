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