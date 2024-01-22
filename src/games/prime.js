import { createGame } from '../createGame.js';
import { getAnswer } from '../getAnswer.js';
import { getRandom } from '../random.js';

const question = () => {
  // const randomNum = Math.round(Math.random() * 100);
  const randomNum = getRandom(1, 100);
  const isNumEven = randomNum % 2 === 0;

  const message = `${randomNum}`;

  const { answer, transformedAnswer } = getAnswer(
    message,
    (input) => input.toLocaleLowerCase() === 'yes',
  );

  const correctAnswer = transformedAnswer ? 'no' : 'yes';

  return {
    success: isNumEven === transformedAnswer,
    answer,
    correctAnswer,
  };
};

export const prime = createGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  question,
);
