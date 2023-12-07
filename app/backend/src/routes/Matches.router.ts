// src/routes/book.routes.ts

import { Router, Request, Response } from 'express';
import matchValidation from '../middlewares/matchValidation';
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

matchesRouter.patch(
   '/matches/:id/',
   validateToken,
   (req: Request, res: Response) => MatchesController.updateMatches(req, res),
);
matchesRouter.post(
   '/matches',
   validateToken,
   matchValidation,
   (req: Request, res: Response) => MatchesController.setMatches(req, res),
);



export default matchesRouter;
