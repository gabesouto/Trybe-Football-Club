import { Router } from 'express';
import teamRouter from './Team.router';
import loginRouter from './Login.router';

const router = Router();

router.use(teamRouter);

router.use(loginRouter);

export default router;
