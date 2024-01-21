import { createGame } from '../createGame.js';
import { getAnswer } from '../getAnswer.js';

const question = () => {
  const randomNumA = Math.round(Math.random() * 100);
  const randomNumB = Math.round(Math.random() * 100);
  const symbols = ['+', '-', '*'];
  const randomOperator = symbols[Math.floor(Math.random() * 3)];
  let resultAoB = 0;

  if (randomOperator === '+') {
    resultAoB = randomNumA + randomNumB;
  } else if (randomOperator === '-') {
    resultAoB = randomNumA - randomNumB;
  } else {
    resultAoB = randomNumA * randomNumB;
  }

  console.log(`Question: ${randomNumA} ${randomOperator} ${randomNumB}`);

  const { answer, transformedAnswer } = getAnswer((input) => parseInt(input, 10));

  if (resultAoB === transformedAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `"${answer}" is wrong answer ;(. Correct answer was "${resultAoB}".`,
  );
  return false;
};

export const calc = createGame(
  'What is the result of the expression?',
  question,
);
