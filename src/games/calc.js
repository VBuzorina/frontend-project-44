import readlineSync from 'readline-sync';
import { greeting } from '../greeting.js';
import { DEFAULT_ROUNDS_COUNT } from '../constants.js';

const question = (name, countGame) => {
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

  const answer = parseInt(readlineSync.question('Your answer: '), 10);

  if (resultAoB === answer) {
    console.log('Correct!');

    if (countGame > 1) {
      return question(name, countGame - 1);
    }

    return true;
  }
  console.log(
    `"${answer}" is wrong answer ;(. Correct answer was "${resultAoB}".`
  );
  return false;
};

export const calc = (roundsCount = DEFAULT_ROUNDS_COUNT) => {
  const name = greeting();
  console.log('What is the result of the expression?');

  const success = question(name, roundsCount);

  if (success) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
