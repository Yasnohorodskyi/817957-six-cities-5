export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomElement = (element) => {
  const randomIndex = getRandomInteger(0, element.length - 1);

  return element[randomIndex];
};

export const getRandomList = (counter, list) => {
  const randomList = [];
  for (let i = 0; i < counter; i++) {
    randomList.push(getRandomElement(list));
  }
  return randomList;
};

export const humanizeDate = (tripDate) => {
  const dateDay = new Date(tripDate);
  return dateDay.toLocaleString(`en-US`, {month: `long`, year: `numeric`});
};

