export const repeat = (question, countGame) => {
  const result = question();

  if (result.success) {
    console.log('Correct!');
  } else {
    console.log(
      `"${result.answer}" is wrong answer ;(. Correct answer was "${result.correctAnswer}".`,
    );
  }

  if (result.success && countGame > 1) {
    return repeat(question, countGame - 1);
  }

  return result;
};
