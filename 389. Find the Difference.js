var findTheDifference = function (s, t) {
  let hash1 = {};

  for (let ch of s) {
    hash1[ch] = (hash1[ch] || 0) + 1;
  }

  for (let ch of t) {
    if (hash1[ch] !== undefined && hash1[ch] > 0) {
      hash1[ch]--;
    } else {
      return ch;
    }
  }
};
