function maxPossibleNum(n: number, k: number): number {
  // seperate given decimal number (n) into 2 strings:
  // (before-decimal) str[0] & (after-decimal) str[1]
  const str: string[] = String(n).split(".");
  let stack: string[] | null = null;
  let digits: number = k;
  let maximum: number = 0;

  // if (after-decimal) is greater than (digits)
  // 1. run removeDigitsHelper function for (after-decimal)
  // 2. concat (before-decimal), ".", (stack) then change to number for (maximum)
  // else
  // 1. add the count of zeroes in (after-decimal) and add to (digits),
  // deduct the length of (after-decimal) from (digits)
  // 2. run removeDigitsHelper function for (before-decimal)
  // 3. change (stack) to number for (maximum)
  //
  // return the (maximum)

  if (str[1].length > digits) {
    stack = removeDigitsHelper(str[1], digits);
    maximum = Number(str[0] + "." + stack.join(""));
  } else {
    let zeroes: number = (str[1].match(/0/g) || []).length;
    digits -= str[1].length - zeroes;
    stack = removeDigitsHelper(str[0], digits);
    maximum = Number(stack.join(""));
  }
  return maximum;
}

function removeDigitsHelper(str: string, digits: number): string[] {
  let stack: string[] = [];

  // iterate through (str)
  // when 3 conditions met, (stack.pop) and decrease (digits):
  // 1) (stack) is not empty &
  // 2) (digits) to remove is > 0 &
  // 3) current char in (str) is greater than the last char in (stack)
  // else add the current char to (stack)
  //
  // return the (stack) when iteration is complete

  for (let c of str) {
    while (
      stack.length != 0 &&
      digits > 0 &&
      stack[stack.length - 1].charCodeAt(0) < c.charCodeAt(0)
    ) {
      stack.pop();
      digits -= 1;
    }
    stack.push(c);
  }
  return stack;
}

maxPossibleNum(1437.29, 4); //47
maxPossibleNum(140037.29, 2); //140037
maxPossibleNum(121198.121198, 2); //121198.2198
maxPossibleNum(121198.00001, 5); //98
