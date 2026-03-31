var defangIPaddr = function (address) {
  arr = address.replaceAll('.', '[.]');
  return arr;
};
