function firstNonRepeatingChar(str){
    let string = str.toLowerCase();
    for(let i = 0; i< string.length; i++){
        let count = 0;
        for(let j = 0; j <string.length; j++){
            if(str[i] === str[j]){
                count++;
            }
        }
        if(count === 1){
            return string[i]
        }
    }
    return -1;
}

console.log(firstNonRepeat("aabccdb"));