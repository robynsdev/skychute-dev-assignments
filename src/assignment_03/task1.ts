function sqrt(n: number): string {
  const decimal: number = 6;
  let num: number = Math.abs(n);
  let l: number = 0;
  let r: number = num;
  let mid: number | null = null;
  let ans: number = 0;
  let strAns: string = "";

  if (n === 0 || n === 1) {
    strAns = String(n);
    return strAns;
  }

  // check integral using binary search
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (mid * mid === num) {
      ans = mid;
      if (n < 0) {
        strAns = String(ans) + "i";
        return strAns;
      }
      strAns = String(ans);
      return strAns;
    } else if (mid * mid < num) {
      l = mid + 1;
      ans = mid;
    } else {
      r = mid - 1;
    }
  }

  // check each decimal place by increments
  let increment: number = 0.1;
  for (let i = 0; i < decimal; i++) {
    while (ans * ans <= num) {
      ans += increment;
    }
    ans -= increment;
    increment = increment / 10;
  }

  ans = +ans.toFixed(decimal);
  if (n < 0) {
    strAns = String(ans) + "i";
    return strAns;
  }
  strAns = String(ans);
  return strAns;
}

sqrt(9); // 3
sqrt(11); // 3.316624
sqrt(-9); // 3i
sqrt(-11); // 3.316624i
