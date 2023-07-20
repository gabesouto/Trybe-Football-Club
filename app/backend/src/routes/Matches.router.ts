// src/routes/book.routes.ts

import { Router, Request, Response } from 'express';
import validateToken from '../middlewares/tokenValidation';
import MatchController from '../controller/MatchController';

const MatchesController = new MatchController();

const matchesRouter = Router();

matchesRouter.get(
  '/matches',
  (req: Request, res: Response) => MatchesController.findMatches(req, res),
);

matchesRouter.patch(
  '/matches/:id/finish',
  validateToken,
  (req: Request, res: Response) => MatchesController.finishMatches(req, res),
);

// teamRouter.get('/teams/:id', (req: Request, res: Response) => TeamsController.findById(req, res));

export default matchesRouter;
