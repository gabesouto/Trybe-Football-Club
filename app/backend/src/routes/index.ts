import { Router } from 'express';
import teamRouter from './Team.route';

const router = Router();

router.use(teamRouter);

export default router;
