function maxPossibleNum(n: number, k: number): number {
  const str: string[] = String(n).split(".");
  let stack: string[] | null = null;
  let digits: number = k;
  let maximum: number = 0;

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
