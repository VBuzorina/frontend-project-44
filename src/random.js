// eslint-disable-next-line max-len
export const getRandom = (from, to) => Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1)) + Math.ceil(from);
