var containsDuplicate = function (nums) {
  const hasDuplicate = nums.length !== new Set(nums).size;

  if (hasDuplicate) {
    return true;
  } else {
    return false;
  }
};
