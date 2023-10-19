function getDayName(dateString) {
    let dayName;
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const date = new Date(dateString);
    const dayIndex = date.getUTCDay();
    
    dayName = daysOfWeek[dayIndex];
    
    return dayName;
}
//Test cases
console.log(getDayName(10/11/2009)); 
console.log(getDayName(10/11/2000)); 