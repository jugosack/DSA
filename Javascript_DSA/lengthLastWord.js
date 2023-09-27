/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    s=s.trim()
    let z=0
    for (let i=s.length-1;i>=0; i--){ 
        if (s[i] ==' '){
            break
        }
        z++
    }

    return z
};

//Test cases
console.log(lengthOfLastWord("Hello World")); // Expected output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Expected output: 4
