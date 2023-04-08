const createUser = (req, res, next) => {
  res.send("user created");
};

const getUser = (req, res) => {
  res.send("user by id");
};

const updateUser = (req, res) => {
  res.send("user updated");
};

const deleteUser = (req, res) => {
  res.send("user deleted");
};
module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
