// src/routes/book.routes.ts

import { Router, Request, Response } from 'express';
import TeamController from '../controller';

const TeamsController = new TeamController();

const teamRouter = Router();

teamRouter.get('/teams', (req: Request, res: Response) => TeamsController.findAll(req, res));
teamRouter.get('/teams/:id', (req: Request, res: Response) => TeamsController.findById(req, res));

export default teamRouter;
