var findGCD = function (nums) {
  nums.sort((a, b) => a - b);
  let last = nums[nums.length - 1];
  let first = nums[0];
  let gcd = 1;

  for (let i = 1; i <= last; i++) {
    if (first % i == 0 && last % i == 0) {
      gcd = i;
    }
  }
  return gcd;
};
