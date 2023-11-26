const isValidNumberSet = (input) => {
  return input.every((value) => {
    const parsedValue = Number(value);
    return !Number.isNaN(parsedValue) && Number.isInteger(parsedValue);
  });
};

export default isValidNumberSet;
