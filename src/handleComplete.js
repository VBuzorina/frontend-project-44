export const handleComplete = (name, success) => {
  if (success) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default handleComplete;
