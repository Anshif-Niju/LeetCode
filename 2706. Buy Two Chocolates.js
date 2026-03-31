var buyChoco = function (prices, money) {
  prices.sort((a, b) => a - b);
  let cost = prices[0] + prices[1];

  if (cost > money) {
    return money;
  }
  return money - cost;
};
