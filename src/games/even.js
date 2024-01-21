import { createGame } from '../createGame.js';
import { getAnswer } from '../getAnswer.js';

const question = () => {
  const randomNum = Math.round(Math.random() * 100);
  const isNumEven = randomNum % 2 === 0;

  console.log('Question:', randomNum);

  const { answer, transformedAnswer } = getAnswer(
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
