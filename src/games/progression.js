import { createGame } from '../createGame.js';
import { getAnswer } from '../getAnswer.js';
import { getRandom } from '../random.js';

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

export const progression = createGame(
  'What number is missing in the progression?',
  question,
);
