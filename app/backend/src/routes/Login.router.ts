// src/routes/book.routes.ts

import { Router, Request, Response } from 'express';
import LoginController from '../controller/LoginController';
import loginValidation from '../middlewares/loginValidation';

const loginController = new LoginController();

const loginRouter = Router();

loginRouter.post(
  '/login',
  loginValidation,
  (req: Request, res: Response) => loginController.login(req, res),
);

export default loginRouter;
