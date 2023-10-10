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
//Test cases
