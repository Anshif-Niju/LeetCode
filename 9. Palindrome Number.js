var isPalindrome = function (x) {
  let reverse = String(x).split('').reverse().join('');
  if (x < 0) {
    return false;
  }

  if (x == reverse) {
    return true;
  }
  return false;
};
