var findFinalValue = function (nums, original) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = true;
    if (hash[original] == true) {
      original *= 2;
    }
  }
  return original;
};
