var hammingWeight = function (n) {
  let num = n.toString(2).split('').map(Number);
  let num1 = num.reduce((acc, n) => acc + n, 0);

  return num1;
};
