import { Router } from 'express';
import {
  getUsers,
  getUser,
  createUser,
  /*updateUsers,
  updateUser,
  deleteUser, */
} from './controller.js';
const router = Router();

// localhost:3000/
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/users', createUser);
router.put('/users' /* updateUsers */);
router.patch('/user/:id' /* updateUser */);
router.delete('/user/:id' /* deleteUser */);

export default router;
