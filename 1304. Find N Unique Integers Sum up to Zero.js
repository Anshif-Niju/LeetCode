var sumZero = function (n) {
  let res = [];
  let count = 1;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    res.push(count);
    res.push(-count);
    count++;
  }
  if (n % 2 !== 0) {
    res.push(0);
  }
  return res;
};
