function maxSubSequence(sequence: number[]): number[] {
  // Kadane's algorithm
  let l: number = 0;
  let r: number = 0;
  let maxTotal: number = sequence[0];
  let currentTotal: number[] = [0, sequence[0]];

  for (let i = 1; i < sequence.length; i++) {
    currentTotal[1] += sequence[i];
    if (sequence[i] > currentTotal[1]) {
      currentTotal[1] = sequence[i];
      currentTotal[0] = i;
    }
    if (currentTotal[1] > maxTotal) {
      maxTotal = currentTotal[1];
      l = currentTotal[0];
      r = i;
    }
  }
  return [l + 1, r + 1];
}

maxSubSequence([-2, 2, 5, -11, 6]); //[2, 3]
maxSubSequence([-2, 2, 5, -11, 6, 20]); //[5, 6]
maxSubSequence([-2, 2, 5, -11, 6, 20, -1, 5]); //[5, 8]
