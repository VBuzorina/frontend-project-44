import readlineSync from 'readline-sync';

const defaultTransform = (value) => value;

export const getAnswer = (message, transformAnswer = defaultTransform) => {
  console.log('Question:', message);
  const answer = readlineSync.question('Your answer: ');
  const transformedAnswer = transformAnswer(answer);

  return {
    answer,
    transformedAnswer,
  };
};
