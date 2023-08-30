var isValid = function(s) {
    const stack = []; // Initialize an empty stack
    const parenthesesMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char in parenthesesMap) {
            stack.push(char);
        } else {
            if (stack.length === 0 || parenthesesMap[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};

// Test cases
console.log(isValid("()"));        // Output: true
console.log(isValid("()[]{}"));    // Output: true
console.log(isValid("(]"));        // Output: false
