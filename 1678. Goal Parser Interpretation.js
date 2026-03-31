var interpret = function (command) {
  let str = command.replaceAll('(al)', 'al');
  let str2 = str.replaceAll('()', 'o');
  return str2;
};
