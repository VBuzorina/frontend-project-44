import { createGame } from '../utils/createGame.js';
import { getAnswer } from '../utils/getAnswer.js';
import { getRandom } from '../utils/getRandom.js';

const OPERATION_SYMBOLS = ['+', '-', '*'];

const calculate = (operator, numA, numB) => {
  switch (operator) {
    case '+':
      return numA + numB;
    case '-':
      return numA - numB;
    case '*':
      return numA * numB;
    default:
      throw new Error(`Unknown math operator: '${operator}'!`);
  }
};

const question = () => {
  const randomNumA = getRandom(1, 100);
  const randomNumB = getRandom(1, 100);
  const randomOperator = OPERATION_SYMBOLS[getRandom(0, 2)];
  const correctAnswer = calculate(randomOperator, randomNumA, randomNumB);
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

export default calc;
