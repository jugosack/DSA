function gradingStudents(grades) {

    let arr = [];

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38) {
            let remainder = grades[i] % 5; // remaider=38/5=7 ostatok 3// ostotok <3 ako e 2
            if (remainder >= 3) { //3=3
                arr.push(grades[i] + (5 - remainder)); // arr=[38+(5-3)]=40
            } else {
                arr.push(grades[i]);
            }
        } else {
            arr.push(grades[i]);
        }
    }

    return arr;
}
// Test case 1: Grades that need rounding up
const testInput1 = [73, 67, 38, 33];
const expectedOutput1 = [75, 67, 40, 33];

// Test case 2: Grades already at a multiple of 5
const testInput2 = [80, 85, 90];
const expectedOutput2 = [80, 85, 90];

// Test case 3: Grades below the passing grade (no rounding)
const testInput3 = [28, 35, 17];
const expectedOutput3 = [28, 35, 17];

// Test case 4: Grades with remainders less than 3 (no rounding)
const testInput4 = [42, 57, 68];
const expectedOutput4 = [42, 57, 68];

// Test case 5: Empty input array
const testInput5 = [];
const expectedOutput5 = [];

// Test case 6: Negative grades (no rounding)
const testInput6 = [-42, -57, -68];
const expectedOutput6 = [-42, -57, -68];

// Test case 7: Grades with remainders equal to 3 (round up)
const testInput7 = [43, 58, 69];
const expectedOutput7 = [45, 60, 70];

// Test case 8: Grades very close to the next multiple of 5 (round up)
const testInput8 = [47, 62, 73];
const expectedOutput8 = [47, 62, 75];

// Test case 9: Large grades (round up)
const testInput9 = [98, 99, 100];
const expectedOutput9 = [100, 100, 100];

// Test case 10: All grades need rounding up
const testInput10 = [41, 42, 43, 44];
const expectedOutput10 = [45, 42, 45, 45];

// Test case 11: All grades below passing grade (no rounding)
const testInput11 = [10, 20, 30, 35];
const expectedOutput11 = [10, 20, 30, 35];

// Test case 12: All grades already at a multiple of 5
const testInput12 = [50, 55, 60, 70];
const expectedOutput12 = [50, 55, 60, 70];

// Test case 13: Large input array
const testInput13 = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 100) + 1);
const expectedOutput13 = testInput13.map((grade) => {
    if (grade >= 38) {
        const remainder = grade % 5;
        return remainder >= 3 ? grade + (5 - remainder) : grade;
    }
    return grade;
});

// Test case 14: Large input array with all grades below passing grade (no rounding)
const testInput14 = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 37) + 1);
const expectedOutput14 = testInput14;

console.log(gradingStudents(testInput1)); // Should match expectedOutput1
console.log(gradingStudents(testInput2)); // Should match expectedOutput2
console.log(gradingStudents(testInput3)); // Should match expectedOutput3
console.log(gradingStudents(testInput4)); // Should match expectedOutput4
console.log(gradingStudents(testInput5)); // Should match expectedOutput5
console.log(gradingStudents(testInput6)); // Should match expectedOutput6
console.log(gradingStudents(testInput7)); // Should match expectedOutput7
console.log(gradingStudents(testInput8)); // Should match expectedOutput8
console.log(gradingStudents(testInput9)); // Should match expectedOutput9
console.log(gradingStudents(testInput10)); // Should match expectedOutput10
console.log(gradingStudents(testInput11)); // Should match expectedOutput11
console.log(gradingStudents(testInput12)); // Should match expectedOutput12
console.log(gradingStudents(testInput13)); // Should match expectedOutput13
console.log(gradingStudents(testInput14)); // Should match expectedOutput14
