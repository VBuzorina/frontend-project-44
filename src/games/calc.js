import { createGame } from '../createGame.js';
import { getAnswer } from '../getAnswer.js';

const question = () => {
  const randomNumA = Math.round(Math.random() * 100);
  const randomNumB = Math.round(Math.random() * 100);
  const symbols = ['+', '-', '*'];
  const randomOperator = symbols[Math.floor(Math.random() * 3)];
  let correctAnswer = 0;

  if (randomOperator === '+') {
    correctAnswer = randomNumA + randomNumB;
  } else if (randomOperator === '-') {
    correctAnswer = randomNumA - randomNumB;
  } else {
    correctAnswer = randomNumA * randomNumB;
  }
  const message = `${randomNumA} ${randomOperator} ${randomNumB}`;

  const { answer, transformedAnswer } = getAnswer(message, (input) => parseInt(input, 10));

  return {
    success: correctAnswer === transformedAnswer,
    answer,
    correctAnswer,
  };
};

export const calc = createGame(
  'What is the result of the expression?',
  question,
);
