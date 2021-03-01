// You are given a set of n line segments [ai,bi]:a,bR. Implement a program that would
// a. Find x such that the number of segments that include x would be maximal possible.
// AIM: find smallest value of point with max segment intersections.

// b. Find the maximum length of joined segments.
// AIM: length of longest joined segment

function lineSegments(
  segments: number[][]
): { maxIntersect: number; maxlength: number } {
  let points: [number, boolean][] = [];
  let counter: number = 0;
  let result: number = 0;
  let maxIdx: number = 0; // index of part a answer
  let maxIntersect: number = 0; // part a answer
  let maxLength: number = 0; // part b answer
  let ans: { maxIntersect: number; maxlength: number } = {
    maxIntersect: maxIntersect,
    maxlength: maxLength,
  };

  points = buildPoints(segments);
  points = sortPoints(points);

  // Klee's algorithm
  for (let i = 0; i < points.length; i++) {
    if (counter > 0) {
      result += points[i][0] - points[i - 1][0];
      if (counter > maxIdx) {
        maxIdx = i - 1;
      }
    }
    points[i][1] ? (counter -= 1) : (counter += 1);
    if (counter === 0) {
      if (result > maxLength) {
        maxLength = result;
      }
      result = 0;
    }
  }

  maxIntersect = points[maxIdx][0];
  ans = {
    maxIntersect: maxIntersect,
    maxlength: maxLength,
  };
  return ans;
}

function buildPoints(segments: number[][]): [number, boolean][] {
  let points: [number, boolean][] = [];
  // change data structure to array of tuple of segment points
  // start point is paired with false, end point is paired with true.
  for (let segment of segments) {
    points.push([segment[0], false]);
    points.push([segment[1], true]);
  }
  return points;
}

function sortPoints(points: [number, boolean][]): [number, boolean][] {
  // sort points from small to large
  points.sort(function (a, b) {
    if (a[0] > b[0]) {
      return 1;
    }
    if (a[0] < b[0]) {
      return -1;
    }
    return 0;
  });
  return points;
}

lineSegments([
  [0, 7],
  [0, 1],
  [1, 3],
]);
// { maxIntersect: 1, maxlength: 7 }

lineSegments([
  [4, 6],
  [3, 5],
  [7, 9],
]);
// { maxIntersect: 4, maxlength: 3 }

lineSegments([
  [3, 6],
  [3, 5],
  [1, 4],
  [7, 9],
  [12, 22],
]);
// { maxIntersect: 3, maxlength: 10}

lineSegments([
  [0, 7.2],
  [0.5, 1],
  [0.3, 3.8],
]);
// { maxIntersect: 0.5, maxlength: 7 }
