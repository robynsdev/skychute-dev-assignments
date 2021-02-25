function sqrt(n: number): number {
  let l: number = 0;
  let r: number = n;
  let mid: number | null = null;
  let ans: number = 0;
  let decimal: number = 6;

  if (n === 0 || n === 1) {
    return n;
  }

  // check integral using binary search
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (mid * mid === n) {
      ans = mid;
      return ans;
    } else if (mid * mid < n) {
      l = mid + 1;
      ans = mid;
    } else {
      r = mid - 1;
    }
  }

  // check each decimal place by increments
  let increment: number = 0.1;
  for (let i = 0; i < decimal; i++) {
    while (ans * ans <= n) {
      ans += increment;
    }
    ans -= increment;
    increment = increment / 10;
  }

  ans = +ans.toFixed(decimal);
  return ans;
}

sqrt(9); // 3
sqrt(11); // 3.316624
