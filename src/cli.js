import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const question = () => {
  const randomNum = Math.round(Math.random() * 100);
  const isNumEven = randomNum % 2 === 0;
  console.log('Question:', randomNum);
  const answer = readlineSync.question('Your answer: ').toLowerCase() === 'yes';
  if (isNumEven === answer) {
    console.log('Correct!');
  } else {
    console.log('Incorrect!');
  }
};

export const main = () => {
  greeting();
  question();
};
