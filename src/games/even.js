import readlineSync from 'readline-sync';
import { greeting } from '../greeting.js';
import { DEFAULT_ROUNDS_COUNT } from '../constants.js';
import { repeat } from '../repeat.js';

const question = () => {
  const randomNum = Math.round(Math.random() * 100);
  const isNumEven = randomNum % 2 === 0;

  console.log('Question:', randomNum);

  const answer = readlineSync.question('Your answer: ');
  const parsedAnswer = answer.toLocaleLowerCase() === 'yes';

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

export const even = (roundsCount = DEFAULT_ROUNDS_COUNT) => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const success = repeat(question, roundsCount);

  if (success) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
