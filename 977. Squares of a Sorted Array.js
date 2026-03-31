var sortedSquares = function (nums) {
  const a = nums.map((value) => {
    return value * value;
  });
  a.sort((a, b) => a - b);
  return a;
};
