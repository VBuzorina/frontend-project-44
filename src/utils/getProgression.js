function getProgression(number, interval, index) {
  const numbers = [];
  let member = number;
  while (numbers.length <= index * 2) {
    member += interval;
    numbers.push(member);
  }
  return numbers;
}

export default getProgression;
