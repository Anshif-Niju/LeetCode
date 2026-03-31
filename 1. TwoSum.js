var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    if (map.has(target - currentNum)) {
      return [i, map.get(target - currentNum)];
    }
    map.set(currentNum, i);
  }
};
