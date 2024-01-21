export const repeat = (question, countGame) => {
  const success = question();

  if (success && countGame > 1) {
    return repeat(question, countGame - 1);
  }

  return success;
};
