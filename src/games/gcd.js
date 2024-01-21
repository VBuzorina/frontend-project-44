import { createGame } from '../createGame.js';
import { getAnswer } from '../getAnswer.js';

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
  const randomNumA = Math.round(Math.random() * 100);
  const randomNumB = Math.round(Math.random() * 100);

  const correctAnswer = getDivisor(randomNumA, randomNumB);

  console.log(`Question: ${randomNumA} ${randomNumB}`);

  const { answer, transformedAnswer } = getAnswer((input) => parseInt(input, 10));

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
