import readlineSync from 'readline-sync';
import { greeting } from '../greeting.js';
import { DEFAULT_ROUNDS_COUNT } from '../constants.js';

const question = (name, countGame) => {
  const randomNum = Math.round(Math.random() * 100);
  const isNumEven = randomNum % 2 === 0;

  console.log('Question:', randomNum);

  const answer = readlineSync.question('Your answer: ');
  const answerBool = answer.toLocaleLowerCase() === 'yes';

  if (isNumEven === answerBool) {
    console.log('Correct!');

    if (countGame > 1) {
      return question(name, countGame - 1);
    }

    return true;
  }

  if (answerBool) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
  }

  return false;
};

export const even = (roundsCount = DEFAULT_ROUNDS_COUNT) => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const success = question(name, roundsCount);

  if (success) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
