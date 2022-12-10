import User from './../users/service.js';
import { checkPass } from '../../services/password.js';
const user = new User();

export const login = async (req, res) => {
  const { email, password } = req.body;
  const userDB = await user.findOne(email);
  if (!userDB[0]) {
    res.status(404).json({ message: 'User not found' });
  } else {
    const isMatch = await checkPass(password, userDB[0].password);
    if (isMatch) {
      res.status(200).json({ message: 'Verified user' });
    } else {
      res.status(401).json({ message: 'Invalid credencial' });
    }
  }
};
