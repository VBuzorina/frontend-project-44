import { DEFAULT_ROUNDS_COUNT } from './constants.js';
import { greeting } from './greeting.js';
import { handleComplete } from './handleComplete.js';
import { repeat } from './repeat.js';

export const createGame = (title, question) => {
  const game = (roundsCount = DEFAULT_ROUNDS_COUNT) => {
    const name = greeting();

    console.log(title);

    const success = repeat(question, roundsCount);

    handleComplete(name, success);
  };

  return game;
};
