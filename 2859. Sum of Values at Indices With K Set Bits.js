var sumIndicesWithKSetBits = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let binary = i.toString(2);
    let split = binary.split('1').length - 1;
    if (split == k) {
      sum += nums[i];
    }
  }
  return sum;
};
