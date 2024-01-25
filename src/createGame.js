import readlineSync from 'readline-sync';
import { DEFAULT_ROUNDS_COUNT } from './utils/constants.js';

const defaultTransform = (value) => value;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getAnswer = (message, transformAnswer = defaultTransform) => {
  console.log('Question:', message);
  const answer = readlineSync.question('Your answer: ');
  const transformedAnswer = transformAnswer(answer);

  return {
    answer,
    transformedAnswer,
  };
};

const repeat = (question, countGame) => {
  const result = question();

  if (result.success) {
    console.log('Correct!');
  } else {
    console.log(
      `"${result.answer}" is wrong answer ;(. Correct answer was "${result.correctAnswer}".`,
    );
  }

  if (result.success && countGame > 1) {
    return repeat(question, countGame - 1);
  }

  return result;
};

const handleComplete = (name, success) => {
  if (success) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export const createGame = (title, question) => {
  const game = (roundsCount = DEFAULT_ROUNDS_COUNT) => {
    const name = greeting();
    console.log(title);
    const result = repeat(question, roundsCount);
    handleComplete(name, result.success);
  };
  return game;
};

export default {
  createGame,
};
