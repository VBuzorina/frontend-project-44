import readlineSync from 'readline-sync';

const defaultParser = (value) => value;

export const getAnswer = (parser = defaultParser) => {
  const answer = readlineSync.question('Your answer: ');
  const parsedAnswer = parser(answer);

  return {
    answer,
    parsedAnswer,
  };
};
