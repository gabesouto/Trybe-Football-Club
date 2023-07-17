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

function check(token: string): TokenPayload {
  /* Ao utilizarmos Type Assertion para `TokenPayload` aqui, estamos garantindo que
  a função `jwt.verify` sempre retornará o `id` e o `email`. Nesse caso, irá, mas
  vale lembrar que, se não retornar, perdemos a proteção da tipagem aqui. Usamos
  a ferramenta com responsabilidade! */
  const data = verify(token, secret) as TokenPayload;
  return data;
}

export default {
  enter,
  check,
};
