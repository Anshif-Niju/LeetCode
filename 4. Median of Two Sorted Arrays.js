var findMedianSortedArrays = function (nums1, nums2) {
  let nums3 = [...nums1, ...nums2];
  let length = nums3.length;
  nums3.sort((a, b) => a - b);
  let mid = Math.floor(length / 2);

  if (length % 2 == 0) {
    return (nums3[mid - 1] + nums3[mid]) / 2;
  } else {
    return nums3[mid];
  }
};
