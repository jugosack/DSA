function modifyArray(nums) {
    let arr=[];
    for (let i=0;i<nums.length; i++){
        if (nums[i]%2==0){
            let z=nums[i]*2;
            arr.push(z)
        }else{
            let z=nums[i]*3;
            arr.push(z)
        }
    }
    return arr;
}
//Test cases
console.log(modifyArray(1,2,3,4,5,6,7));
console.log(modifyArray(5,4,3,6,8,9));