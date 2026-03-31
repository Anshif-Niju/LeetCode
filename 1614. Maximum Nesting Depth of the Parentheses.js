var maxDepth = function (s) {
  let count = 0;
  let countMax = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      count++;
      if (countMax <= count) {
        countMax = count;
      }
    } else if (s[i] == ')') {
      count--;
    }
  }
  return countMax;
};
