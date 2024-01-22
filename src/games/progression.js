import { createGame } from '../createGame.js';
import { getAnswer } from '../getAnswer.js';
import { getRandom } from '../random.js';

const getProgression = (number, interval) => {
  const numbers = [];
  let member = number;
  while (numbers.length <= 10) {
    member += interval;
    numbers.push(member);
  }
  return numbers;
};

const question = () => {
  const firstNumber = getRandom(0, 50);
  const interval = getRandom(2, 10);
  const index = getRandom(3, 9);
  const arrProgression = getProgression(firstNumber, interval);

  const correctAnswer = arrProgression[index].toString();
  console.log('правильный ответ', correctAnswer);
  arrProgression[index] = '..';

  const message = arrProgression.toString();

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
