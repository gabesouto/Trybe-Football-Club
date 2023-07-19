import { Router } from 'express';
import teamRouter from './Team.router';
import loginRouter from './Login.router';
import matchesRouter from './Matches.router';

const router = Router();

router.use(teamRouter);

router.use(loginRouter);

router.use(matchesRouter);
export default router;
