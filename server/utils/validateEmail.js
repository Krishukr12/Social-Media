const isValidEmail = (email) => {
  const regexPattern = /\S+@\S+\.\S+/;
  return regexPattern.test(email);
};

module.exports = { isValidEmail };
