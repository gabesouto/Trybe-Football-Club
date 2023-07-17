// src/routes/book.routes.ts

import { Router, Request, Response } from 'express';
import LoginController from '../controller/LoginController';

const loginController = new LoginController();

const loginRouter = Router();

loginRouter.post('/login', (req: Request, res: Response) => loginController.login(req, res));

export default loginRouter;
