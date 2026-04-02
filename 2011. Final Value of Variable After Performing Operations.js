var finalValueAfterOperations = function (operations) {
  let total = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] == '--X' || operations[i] == 'X--') {
      total = total - 1;
    }
    if (operations[i] == 'X++' || operations[i] == '++X') {
      total += 1;
    }
  }

  return total;
};
