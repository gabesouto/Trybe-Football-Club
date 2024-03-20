// src/interfaces/books/IBookModel.ts

import Iteam from './Iteam';

export interface IteamModel {
  // ...
  findAll(): Promise<Iteam[]>,
  findById(id: Iteam['id']): Promise<Iteam | null>
}
