import { Router } from 'express';
import { verifyCookie } from './controller.js';
const router = Router();

// localhost:3000/

router.post('/chat', verifyCookie);

export default router;
