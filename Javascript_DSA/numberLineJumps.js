function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    if (v1 == v2) {
        if (x1 == x2) {
            return 'YES'; // Kangaroos start at the same position and have the same velocity.
        } else {
            return 'NO'; // Kangaroos have the same velocity but different starting positions.
        }
    }

    // The following formula checks if the kangaroos will ever land on the same position.
    // We subtract x2 from x1 and check if the result is divisible evenly by the difference in velocities.
    // If yes, they will meet at the same position.
    if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) >= 0) {
        return 'YES';
    } else {
        return 'NO';
    }
}

//Test cases
console.log(kangaroo(0, 3, 4, 2)); // Output: 'YES'
console.log(kangaroo(0, 2, 5, 3)); // Output: 'NO'