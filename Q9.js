function deepEqual(obj1, obj2){
    if(JSON.stringify(obj1) === JSON.stringify(obj2)){
        return true;
    }
    return false
}

console.log(deepEqual(
  { a: 1, b: { c: 2 } },
  { a: 1, b: { c: 2 } }
));
