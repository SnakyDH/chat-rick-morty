import Router from 'express';
import usersRoutes from '../api/users/routes.js';
import authRoutes from '../api/auth/routes.js';
const router = Router();
router.use('/api/', usersRoutes);
router.use('/auth/', authRoutes);
export default router;
