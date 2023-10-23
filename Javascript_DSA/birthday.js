// function birthday(s,d,m){
//     let arr=[];
//     if(s.length==1){
//         for (let i=0; i<s.length; i++){
//             let z=s[i];
//             if(z==d){
//                 arr.push(z)
//             }  
//         }  

//     } else{
//            for (let i=0; i<s.length; i++){
//              let z=s[i]+s[i+1];
//                if(z==d){
//                arr.push(z)
//                }    
//            }
//         }
//     return arr.length
// }
function birthday(s, d, m) {
    let count = 0;
  
    if (s.length < m) {
      return 0; // If there are not enough elements to make a segment of length m, return 0.
    }
  
    for (let i = 0; i <= s.length - m; i++) {
      let segmentSum = 0;
  
      // Calculate the sum of the current segment of length m.
      for (let j = i; j < i + m; j++) {
        segmentSum += s[j];
      }
  
      if (segmentSum === d) {
        count++;
      }
    }
  
    return count;
  }

//Test cases
 console.log(birthday([1],1,4));