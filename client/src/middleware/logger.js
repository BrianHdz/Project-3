const logger = (store) => (next) => (action) => {
  const returnValue = next(action);

  return returnValue;
};

export default logger;
