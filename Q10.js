function findMissingNumber(arr) {
  let sum = 0;
  let max = Math.max(...arr);
  let actualSum = (max * (max + 1)) / 2;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let missingNum = actualSum - sum;
  console.log(missingNum);
}

findMissingNumber([1,2,4,5,6]);
