import { createGame, getAnswer } from '../createGame.js';
import getDivisor from '../utils/getDivisor.js';
import { getRandom } from '../utils/random.js';

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
