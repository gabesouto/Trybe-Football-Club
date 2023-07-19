// src/routes/book.routes.ts

import { Router, Request, Response } from 'express';
import validateToken from '../middlewares/tokenValidation';
import LoginController from '../controller/LoginController';
import loginValidation from '../middlewares/loginValidation';

const loginController = new LoginController();

const loginRouter = Router();

loginRouter.post(
  '/login',
  loginValidation,
  (req: Request, res: Response) => loginController.login(req, res),
);
loginRouter.get(
  '/login/role',
  validateToken,
  (req: Request, res: Response) => loginController.getRole(req, res),
);

export default loginRouter;
