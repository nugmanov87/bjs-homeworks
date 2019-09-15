"use strict";
function getSolutions(a, b, c) {
  let D = b ** 2 - 4 * a * c;
  if (D < 0) {
    return D;
  } else if (D == 0) {
    let x1 = (-b / 2) * a;
    return {
      roots: [x1],
      D
    };
  } else if (D > 0) {
    let x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
    return {
      roots: [x1, x2],
      D
    };
  }
}
