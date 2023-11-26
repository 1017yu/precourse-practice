const isValidNumberSet = (input) => {
  return ![...input].some((value) => Number.isNaN(Number(value)));
};

export default isValidNumberSet;
