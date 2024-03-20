import { Router, Request, Response } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const leaderboardController = new LeaderboardController();

const leaderboardRouter = Router();

leaderboardRouter.get(
  '/leaderboard/home',
  (req: Request, res: Response) => leaderboardController.findAllHome(req, res),
);
leaderboardRouter.get(
  '/leaderboard/away',
  (req: Request, res: Response) => leaderboardController.findAllAway(req, res),
);
leaderboardRouter.get(
  '/leaderboard',
  (req: Request, res: Response) => leaderboardController.findAll(req, res),
);

export default leaderboardRouter;
