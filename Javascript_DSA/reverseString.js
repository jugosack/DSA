// function reverseString(s) {
//     const arr=[]
//   const niza=[]
//    for( const char of s){
//     arr.push(char)
//    }
  
//    for (let i = arr.length-1; i >= 0 ;i-- ) {
//     niza.push(arr[i])
//    }
//    return niza.join("");
// }
// // //Test cases
// const myString = "World!";
// const resultArray = reverseString(myString);
// console.log(resultArray);
function reverseString(s) {
    try{
        console.log( s.split("").reverse().join(""));
    }catch(err){
        console.log("s.split is not a function");
        console.log(s);
    }
}
// // //Test cases
const myString = "World!";
const resultArray = reverseString(myString);
console.log(resultArray);
