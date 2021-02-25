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
      return [l + 1, r + 1];
    }
  }
  return "Subsequence not found";
}

isSubSequence([2, 5, 7, 8, 3], 18); // [3, 5]
isSubSequence([2, 5, 7, 8], 18); // "Subsequence not found"
