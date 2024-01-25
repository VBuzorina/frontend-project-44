import { createGame, getAnswer } from '../createGame.js';
import { getRandom } from '../utils/random.js';

const question = () => {
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

export const even = createGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  question,
);

export default even;
