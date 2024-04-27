// controllers/userController.js
const { User, users } = require('../models/user');

const getAllUsers = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  const id = users.length + 1;
  const newUser = new User(id, name, email);
  users.push(newUser);
  res.status(201).json(newUser);
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(user => user.id === id);
  if (user) {
    const { name, email } = req.body;
    user.name = name;
    user.email = email;
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
};

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser };
