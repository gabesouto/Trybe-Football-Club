// src/interfaces/books/IBookModel.ts
import { loginPayload } from '../types/loginPayload';
import IUser from './IUser';

export interface ILoginModel {
  // ...
  login(loginPayload: loginPayload): Promise<IUser | null>,

  signUp(loginPayload: loginPayload): Promise<IUser | null>,

}
