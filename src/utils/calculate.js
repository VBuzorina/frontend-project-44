function Calculate(operator, numA, numB) {
  switch (operator) {
    case '+':
      return numA + numB;
    case '-':
      return numA - numB;
    case '*':
      return numA * numB;
    default:
  }
}

export default Calculate;
