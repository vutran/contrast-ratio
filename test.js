const ratio = require("./index");

// this returns the same number to the specified significant digit
function precise(num) {
  return parseFloat(num.toPrecision(3));
}

describe("contrast-ratio", () => {
  it("should return 21", () => {
    expect(precise(ratio([255, 255, 255], [0, 0, 0]))).toBe(21);
  });

  it("should return 1", () => {
    expect(precise(ratio([255, 255, 255], [255, 255, 255]))).toBe(1);
  });

  it("should return 8.59", () => {
    expect(precise(ratio([0, 0, 255], [255, 255, 255]))).toBe(8.59);
  });

  it("should return 2.89", () => {
    expect(precise(ratio([35, 72, 9], [42, 147, 162]))).toBe(2.89);
  });
});
