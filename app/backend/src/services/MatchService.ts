import MatchModel from '../models/MatchModel';
import { ServiceResponse } from '../Interfaces';
import { IMatch } from '../Interfaces/IMatch';

export default class MatchService {
  constructor(
    private model: MatchModel = new MatchModel(),
  ) { }

  public async findAll(): Promise<ServiceResponse<IMatch[]>> {
    const allMatches = await this.model.findAll();
    console.log('SERVICE', allMatches);

    return { status: 'SUCCESSFUL', data: allMatches };
  }

  // public async findById(id: number): Promise<ServiceResponse<Iteam>> {
  //   const team = await this.teamModel.findById(id);
  //   if (!team) return { status: 'NOT_FOUND', data: { message: `team ${id} not found` } };
  //   return { status: 'SUCCESSFUL', data: team };
  // }
}
