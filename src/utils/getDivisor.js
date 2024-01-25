function getDivisor(numA, numB) {
  const stack = [];
  let divisor = 1;
  while (divisor <= numA && divisor <= numB) {
    if (numA % divisor === 0 && numB % divisor === 0) {
      stack.push(divisor);
    }
    divisor += 1;
  }
  return stack.pop();
}

export default getDivisor;
