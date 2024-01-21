import { createGame } from '../createGame.js';
import { getAnswer } from '../getAnswer.js';

const question = () => {
  const randomNum = Math.round(Math.random() * 100);
  const isNumEven = randomNum % 2 === 0;

  console.log('Question:', randomNum);

  const { answer, parsedAnswer } = getAnswer(
    (input) => input.toLocaleLowerCase() === 'yes',
  );

  if (isNumEven === parsedAnswer) {
    console.log('Correct!');

    return true;
  }

  if (parsedAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
  }

  return false;
};

export const even = createGame(
  'Answer "yes" if the number is even, otherwise answer "no".',
  question,
);
