import { TeamsModel } from '../database/models';
import Iteam, { IteamModel, ServiceResponse } from '../Interfaces';

// src/services/BookService.ts

// import BookModel from '../models/BookModel';
// import { IBook } from '../interfaces/books/IBook';
// import { IBookModel } from '../interfaces/books/IBookModel';
// import { ServiceResponse } from '../interfaces/ServiceResponse';

export default class TeamsService {
  constructor(
    private teamModel: IteamModel = new TeamsModel(),
  ) { }

  public async getAllBooks(): Promise<ServiceResponse<Iteam[]>> {
    const allTeams = await this.teamModel.findAll();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async getBookById(id: number): Promise<ServiceResponse<Iteam>> {
    const team = await this.teamModel.findById(id);
    if (!team) return { status: 'NOT_FOUND', data: { message: `team ${id} not found` } };
    return { status: 'SUCCESSFUL', data: team };
  }
}
