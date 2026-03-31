var differenceOfSum = function (nums) {
  let sum = nums.reduce((total, item) => total + item, 0);
  let digit = nums.join('').split('');
  console.log(digit);
  let digitSum = digit.reduce((total, item) => total + Number(item), 0);

  let finalSum = sum - digitSum;

  return finalSum;
};
