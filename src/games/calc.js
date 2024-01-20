import readlineSync from 'readline-sync';
import { greeting } from '../greeting.js';
import { DEFAULT_ROUNDS_COUNT } from '../constants.js';

export const calc = (roundsCount = DEFAULT_ROUNDS_COUNT) => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};
