function isSubSequence(
  sequence: number[],
  targetNum: number
): number[] | string {
  // sliding window variable algorithm
  let l: number = 0;
  let total: number = 0;

  for (let r = 0; r < sequence.length; r++) {
    total += sequence[r];
    while (total > targetNum) {
      total -= sequence[l];
      l++;
    }
    if (total === targetNum) {
      return [l, r];
    }
  }
  return "Subsequence not found";
}

isSubSequence([2, 5, 7, 8, 3], 18); // [2, 4]
isSubSequence([2, 5, 7, 8], 18); // "Subsequence not found"
