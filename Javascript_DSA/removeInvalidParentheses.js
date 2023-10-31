var removeInvalidParentheses = function(s) {
    const queue = [s];
    const visited = new Set();
    const result = [];

    while (queue.length > 0) {
        const current = queue.shift();

        if (isValid(current)) {
            result.push(current);
            // You can continue searching for more valid expressions
        }

        if (result.length === 0) {
            // If no valid expressions found yet, generate new expressions
            for (let i = 0; i < current.length; i++) {
                if (current[i] !== '(' && current[i] !== ')') continue;
                const next = current.slice(0, i) + current.slice(i + 1);
                if (!visited.has(next)) {
                    queue.push(next);
                    visited.add(next);
                }
            }
        }
    }

    return result;
};

function isValid(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++;
        } else if (s[i] === ')') {
            count--;
        }
        if (count < 0) return false;
    }
    return count === 0;
}

console.log(removeInvalidParentheses("()())()"));
// Expected output: ["(())()", "()()()"]

console.log(removeInvalidParentheses("(a)())()"));
// Expected output: ["(a())()", "(a)()()"]

console.log(removeInvalidParentheses(")("));
// Expected output: [""]

console.log(removeInvalidParentheses("()"));
// Expected output: ["()"]

console.log(removeInvalidParentheses("()("));
// Expected output: ["()"]

console.log(removeInvalidParentheses("((()"));
// Expected output: ["()"]

console.log(removeInvalidParentheses(")))"));
// Expected output: [""]

console.log(removeInvalidParentheses("()())()(()("));
// Expected output: ["(())()()", "(()())()"]

console.log(removeInvalidParentheses("()())(a)(()("));
// Expected output: ["(())(a)()", "()()()"]

console.log(removeInvalidParentheses("((()())(a(()"));
// Expected output: ["(())(a())", "(())(a)()", "(()())(a())", "(()())(a)"]

//Test cases
console.log(removeInvalidParentheses("()())()"));
// Expected output: ["(())()", "()()()"]

console.log(removeInvalidParentheses("(a)())()"));
// Expected output: ["(a())()", "(a)()()"]

console.log(removeInvalidParentheses(")("));
// Expected output: [""]

console.log(removeInvalidParentheses("()"));
// Expected output: ["()"]

console.log(removeInvalidParentheses("()("));
// Expected output: ["()"]

console.log(removeInvalidParentheses("((()"));
// Expected output: ["()"]

console.log(removeInvalidParentheses(")))"));
// Expected output: [""]

console.log(removeInvalidParentheses("()())()(()("));
// Expected output: ["(())()()", "(()())()"]

console.log(removeInvalidParentheses("()())(a)(()("));
// Expected output: ["(())(a)()", "()()()"]

console.log(removeInvalidParentheses("((()())(a(()"));
// Expected output: ["(())(a())", "(())(a)()", "(()())(a())", "(()())(a)"]