import { Request, Response, NextFunction } from 'express';

import jwtUtil from '../utils/jwt.util';

export default function validateToken(req: Request, res:Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  // Verifique se o token começa com 'Bearer '
  if (!token.startsWith('Bearer')) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  // Obtenha o token excluindo o prefixo 'Bearer 'as
  const authToken = token.split(' ')[1];
  console.log('token', token);

  try {
    res.locals.user = jwtUtil.decodedToken(authToken);
    return next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({ message: 'invalid token' });
  }
}
