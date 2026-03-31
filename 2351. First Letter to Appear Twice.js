var repeatedCharacter = function (s) {
  let a = s.split('');
  let b = a.find((item, index, arr) => {
    let prev = arr[index - 1];
    return item == prev;
  });

  let c = a.filter((item, index) => {
    return a.indexOf(item) !== index;
  });
  return c[0];
};
