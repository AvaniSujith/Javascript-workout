function flattenArray(arr){
    let newArr = arr.flat(Infinity)
    console.log(newArr);
}

console.log(flattenArray([1, [2, [3, [4]], 5]]))