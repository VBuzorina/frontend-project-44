import { createGame, getAnswer } from '../createGame.js';
import isPrime from '../utils/isPrime.js';
import { getRandom } from '../utils/random.js';

const question = () => {
  const randomNum = getRandom(1, 100);
  const isNumPrime = isPrime(randomNum);
  const message = randomNum;

  const { answer, transformedAnswer } = getAnswer(
    message,
    (input) => input.toLocaleLowerCase() === 'yes',
  );

  const correctAnswer = transformedAnswer ? 'no' : 'yes';

  return {
    success: isNumPrime === transformedAnswer,
    answer,
    correctAnswer,
  };
};

export const prime = createGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  question,
);

export default prime;
