function chunkArray(arr, size) {
  let arrCollection = [];
  for (let i = 0; i < arr.length; i+= size) {
    arrCollection.push(arr.slice(i, i + size));
  }
  return arrCollection;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6], 3));