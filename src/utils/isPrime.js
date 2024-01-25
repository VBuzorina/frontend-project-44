function isPrime(number) {
  let i = 2;
  while (i < number) {
    if (number === 1) {
      return true;
    }
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
}

export default isPrime;
