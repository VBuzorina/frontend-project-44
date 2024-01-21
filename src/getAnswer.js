import readlineSync from 'readline-sync';

const defaultTransform = (value) => value;

export const getAnswer = (transformAnswer = defaultTransform) => {
  const answer = readlineSync.question('Your answer: ');
  const transformedAnswer = transformAnswer(answer);

  return {
    answer,
    transformedAnswer,
  };
};
