function isValid(string: string): boolean {
  let brackets: string = "()[]{}";
  let indexes: number[] = [];

  // get index of first character
  for (let char of string) {
    let charIdx: number = brackets.indexOf(char);

    // if even(opening bracket), push corresponding closing idx onto indexes
    // if odd(closing bracket), pop indexes
    // if pop doesn't match charIdx, return false
    if (charIdx % 2 === 0) {
      indexes.push(charIdx + 1);
    } else {
      if (indexes.pop() !== charIdx) return false;
    }
  }
  // at end of iteration, return false if indexes not empty & true if empty
  return indexes.length === 0;
}

isValid("([])");
isValid("([{}()]())");
isValid("())");
