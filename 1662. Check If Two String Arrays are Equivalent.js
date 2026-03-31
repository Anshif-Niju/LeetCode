var arrayStringsAreEqual = function (word1, word2) {
  const a = word1.join('');
  const b = word2.join('');
  console.log(a);
  console.log(b);
  if (a == b) {
    return true;
  }
  return false;
};
