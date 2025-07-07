function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let long = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (long.length < word.length) {
      long = word;
    }
  }
  return long;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
