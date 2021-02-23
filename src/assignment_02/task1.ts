function isSubSequence(sequence: number[], targetNum: number) {
  // for each element in sequence check if start of subsequence
  for (const i of sequence.keys()) {
    let total: number = 0;
    // if subsequent elements total targetNum
    // return l & r index if there is a sub sequence
    // break if total is greater than targetNum
    for (let j = i; j < sequence.length; j++) {
      total += sequence[j];
      if (total === targetNum) {
        console.log([i, j]);
        return [i, j];
      } else if (total > targetNum) {
        break;
      }
    }
  }
  console.log("Sub sequence not found");
}

isSubSequence([2, 5, 7, 8, 3], 18);
isSubSequence([2, 5, 7, 8], 18);
