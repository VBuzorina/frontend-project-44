import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  return name;
};

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

export const main = () => {
  const name = greeting();

  const success = question(name, 3);

  if (success) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
