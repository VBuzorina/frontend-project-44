import { createGame } from '../createGame.js';
import { getAnswer } from '../getAnswer.js';
import { getRandom } from '../random.js';

const getDivisor = (numA, numB) => {
  const stack = [];
  let divisor = 1;
  while (divisor <= numA && divisor <= numB) {
    if (numA % divisor === 0 && numB % divisor === 0) {
      stack.push(divisor);
    }
    divisor += 1;
  }
  return stack.pop();
};

const question = () => {
  const randomNumA = getRandom(1, 100);
  const randomNumB = getRandom(1, 100);

  const correctAnswer = getDivisor(randomNumA, randomNumB);

  const message = `${randomNumA} ${randomNumB}`;

  const { answer, transformedAnswer } = getAnswer(message, (input) => parseInt(input, 10));

  return {
    success: correctAnswer === transformedAnswer,
    answer,
    correctAnswer,
  };
};

export const gcd = createGame(
  'Find the greatest common divisor of given numbers.',
  question,
);

export default gcd;
