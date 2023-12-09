const isValidNumber = (input) => {
  const rNumeric = /^\d+$/;

  return rNumeric.test(input) && Number(input) > 0;
};

export default isValidNumber;
