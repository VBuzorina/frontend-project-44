import readlineSync from 'readline-sync';
import { greeting } from '../greeting.js';
import { DEFAULT_ROUNDS_COUNT } from '../constants.js';

const question = (name, countGame) => {
  const randomNumA = Math.round(Math.random() * 100);
  const randomNumB = Math.round(Math.random() * 100);
  const divisorAB = (numA, numB) => {
    const stack = [];
    let divisor = 1;
    while (divisor <= numA && divisor <= numB) {
      if (numA % divisor === 0 && numB % divisor === 0) {
        stack.push(divisor);
      }
      divisor += 1;
    }
    return stack.pop();
  };
  const resultAoB = divisorAB(randomNumA, randomNumB);

  console.log(`Question: ${randomNumA} ${randomNumB}`);

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

export const gcd = (roundsCount = DEFAULT_ROUNDS_COUNT) => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  const success = question(name, roundsCount);

  if (success) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
