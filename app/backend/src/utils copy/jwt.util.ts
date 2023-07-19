// src/utils/jwt.util.ts
import { sign, verify } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  email: string,
  password: string,
};

function enter(payload: TokenPayload): string {
  const token = sign(payload, secret);
  return token;
}

function decodedToken(token: string): TokenPayload {
  const data = verify(token, secret);
  return data as TokenPayload;
}

export default {
  enter,
  decodedToken,
};
