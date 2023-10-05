import { Router } from 'express';
import teamRouter from './Team.router';
import loginRouter from './Login.router';
import matchesRouter from './Matches.router';
import leaderboardRouter from './Leaderboard.router';

const router = Router();

router.use(teamRouter);

router.use(loginRouter);

router.use(matchesRouter);

router.use(leaderboardRouter);

export default router;
