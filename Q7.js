function findDuplicates(nums){
    let numArr = nums
    let duplcateArr = []
    numArr.sort();
    for(let i = 0; i < numArr.length; i++){
        if(numArr[i] === numArr[i+1] & !duplcateArr.includes(numArr[i])){
            duplcateArr.push(numArr[i])
        }
    }
    return duplcateArr
}

console.log(findDuplicates([4,3,2,7,8,2,3,1]));