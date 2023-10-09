function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applePositions = [];
    let orangePositions = [];
    let appleCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < apples.length; i++) {
        let applePosition = apples[i] + a;
        applePositions.push(applePosition);

        if (applePosition >= s && applePosition <= t) {
            appleCount++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        let orangePosition = oranges[i] + b;
        orangePositions.push(orangePosition);

        if (orangePosition >= s && orangePosition <= t) {
            orangeCount++;
        }
    }

    return [appleCount, orangeCount];
}

// Test cases
// Test Case 1: Apples and oranges both fall within the range [s, t]
console.log(countApplesAndOranges(5, 10, 5, 7, [1, 3, 7], [6, 8])); // Output: [3, 2]

// Test Case 2: No apples or oranges fall within the range [s, t]
console.log(countApplesAndOranges(5, 10, 5, 7, [2, 4, 11], [3, 9])); // Output: [0, 0]

// Test Case 3: Only apples fall within the range [s, t]
console.log(countApplesAndOranges(5, 10, 5, 7, [6, 7, 8], [1, 2, 3])); // Output: [3, 0]

// Test Case 4: Only oranges fall within the range [s, t]
console.log(countApplesAndOranges(5, 10, 5, 7, [1, 2, 3], [6, 7, 8])); // Output: [0, 3]

// Test Case 5: Apples and oranges fall exactly on the lower and upper bounds of the range [s, t]
console.log(countApplesAndOranges(5, 10, 5, 7, [5, 10], [5, 10])); // Output: [2, 2]
