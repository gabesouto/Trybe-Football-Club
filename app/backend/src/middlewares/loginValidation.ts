import { Request, Response, NextFunction } from 'express';

export default function loginValidation(req: Request, res: Response, next: NextFunction) {
  const payload = req.body;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRequiredLength = 6;
  if (!payload.email || !payload.password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (!emailRegex.test(payload.email) || payload.password.length < passwordRequiredLength) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
}
