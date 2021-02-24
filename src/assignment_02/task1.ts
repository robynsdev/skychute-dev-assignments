function isSubSequence(
  sequence: number[],
  targetNum: number
): number[] | string {
  // sliding window variable algorithm
  let startIdx: number = 0;
  let total: number = 0;

  for (let endIdx = 0; endIdx < sequence.length; endIdx++) {
    total += sequence[endIdx];
    while (total > targetNum) {
      total -= sequence[startIdx];
      startIdx++;
    }
    if (total === targetNum) {
      return [startIdx, endIdx];
    }
  }
  return "Subsequence not found";
}

isSubSequence([2, 5, 7, 8, 3], 18); // [ 2, 4]
isSubSequence([2, 5, 7, 8], 18); // "Subsequence not found"
