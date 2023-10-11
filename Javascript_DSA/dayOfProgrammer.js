function dayOfProgrammer(year){
    let day = 256;
    let month = 0;
    let isLeap = false;
  
    // Handle the transition year, 1918.
    if (year === 1918) {
      day += 13; // 13 days were skipped during the transition (from January 14 to February 1).
    } else if ((year < 1918 && year % 4 === 0) || // Julian leap year.
               (year > 1918 && ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)))) { // Gregorian leap year.
      isLeap = true;
    }
  
    // Define the number of days in each month (taking into account the leap year).
    const daysInMonth = [31, (isLeap ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // Find the month in which the 256th day falls.
    for (let i = 0; i < daysInMonth.length; i++) {
      if (day <= daysInMonth[i]) {
        month = i + 1;
        break;
      }
      day -= daysInMonth[i];
    }
  
    // Format the date and year.
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;
  
    return `${formattedDay}.${formattedMonth}.${year}`;
  }
//Test cases
const year = 1984;
console.log(dayOfProgrammer(year)); // Output: "12.09.1984"