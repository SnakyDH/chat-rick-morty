import User from './service.js';
import bcrypt from 'bcrypt';

const user = new User();

export const getUsers = async (req, res) => {
  const allUsers = await user.findAll();
  res.status(200).json(allUsers);
};
export const getUser = async (req, res) => {
  const { id } = req.params;
  const userDB = user.findOne(id);
  if (!userDB[0]) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.status(200).json(userDB[0]);
  }
};

export const createUser = async (req, res) => {
  const { username, type, email, password } = req.body;
  const userDB = await user.findOne(email);
  console.log(userDB[0]);
  if (!userDB[0]) {
    const pass = await bcrypt.hash(password, 10);
    user.create(username, type, email, pass);
    res.status(201).json({ message: 'User successfully created' });
  } else {
    res.status(403).json({ message: 'User not created' });
  }
};
