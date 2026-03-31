var numberGame = function (nums) {
  nums.sort((a, b) => a - b);
  let out = [];
  for (let i = 0; i < nums.length; i = i + 2) {
    let a = nums[i];
    let b = nums[i + 1];
    out.push(b);
    out.push(a);
  }

  return out;
};
