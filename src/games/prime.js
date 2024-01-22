import { createGame } from '../createGame.js';
import { getAnswer } from '../getAnswer.js';
import { getRandom } from '../random.js';

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
  console.log('простое ли число', isNumPrime);

  const message = `${randomNum}`;

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
