function getGrade(score) {
    let grade;

    if (score > 25 && score <= 30) {
        grade = 'A';
    } else if (score > 20 && score <= 25) {
        grade = 'B';
    } else if (score > 15 && score <= 20) {
        grade = 'C';
    } else if (score > 10 && score <= 15) {
        grade = 'D';
    } else if (score > 5 && score <= 10) {
        grade = 'E';
    } else if (score >= 0 && score <= 5) {
        grade = 'F';
    } else {
        grade = 'Invalid score';
    }
    return grade;
}
//Test cases
console.log(getGrade(17)); // Expected output: 'C'
console.log(getGrade(28)); // Expected output: 'A'
console.log(getGrade(10)); // Expected output: 'F'
console.log(getGrade(3));  // Expected output: 'F'
