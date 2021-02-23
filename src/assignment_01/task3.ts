function validate(input: any) {
  let tmp = 0;
  for (let c of input) {
    if (c === "(") tmp++;
    else if (c === ")" && --tmp < 0) return false; // Unexpected  ')'
  }
  return tmp === 0; // False if unbalanced
}

const goodBrackets = "(((())(())))";
const badBrackets = "(()())))";
const veryBadBrackets = "(()())()))";

console.log(validate(goodBrackets));
console.log(validate(badBrackets));
console.log(validate(veryBadBrackets));
