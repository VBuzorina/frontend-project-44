import { createGame, getAnswer } from '../createGame.js';
import Calculate from '../utils/calculate.js';
import { OPERATION_SYMBOLS } from '../utils/constants.js';
import { getRandom } from '../utils/random.js';

const question = () => {
  const randomNumA = getRandom(1, 100);
  const randomNumB = getRandom(1, 100);
  const randomOperator = OPERATION_SYMBOLS[getRandom(0, 2)];
  const correctAnswer = Calculate(randomOperator, randomNumA, randomNumB);
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
