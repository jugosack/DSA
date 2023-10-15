function miniMaxSum(arr) {
   
var sum1=0
var sum2=0
for(let i=0; i<arr.length-1; i++ ){
    sum1+=arr[i]
    }
 
    for(let z=arr.length-1; z>01; z--){
        sum2+=arr[z]
        }
        console.log(sum1,sum2)
}

//Test cases
const arr=[1,3,5,7,9]
console.log(miniMaxSum(arr));        // Output: 16 21
const arr1=[1,2,3,4,5]
console.log(miniMaxSum(arr1));        // Output: 10 12