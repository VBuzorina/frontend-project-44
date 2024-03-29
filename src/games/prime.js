import { createGame } from '../utils/createGame.js';
import { getAnswer } from '../utils/getAnswer.js';
import { getRandom } from '../utils/getRandom.js';

const isPrime = (number) => {
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
};

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
