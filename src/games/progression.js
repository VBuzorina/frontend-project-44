import { createGame } from '../utils/createGame.js';
import { getAnswer } from '../utils/getAnswer.js';
import { getRandom } from '../utils/getRandom.js';

const getProgression = (number, interval, index) => {
  const numbers = [];
  let member = number;
  while (numbers.length <= index * 2) {
    member += interval;
    numbers.push(member);
  }
  return numbers;
};

const question = () => {
  const firstNumber = getRandom(0, 10);
  const interval = getRandom(1, 5);
  const index = getRandom(2, 5);
  const arrProgression = getProgression(firstNumber, interval, index);
  const correctAnswer = arrProgression[index];
  arrProgression[index] = '..';
  const message = arrProgression.join(' ');

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

export default progression;
