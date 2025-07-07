function isValidParentheses(s) {
  let openArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      openArr.push(s[i]);
    } else {
      let lastValue = openArr.pop();
      if (
        (s[i] === ")" && lastValue !== "(") ||
        (s[i] === "}" && lastValue !== "{") ||
        (s[i] === "]" && lastValue !== "[")
      ) {
        return false;
      }
    }
  }
  return true;
}

console.log(isValidParentheses("([{}])"));
console.log(isValidParentheses("[(])"));
