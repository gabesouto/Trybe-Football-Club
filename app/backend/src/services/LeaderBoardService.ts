import MatchModel from '../models/MatchModel';
import { ILeaderboard, ServiceResponse } from '../Interfaces';

export default class LeaderBoardService {
  constructor(
    private model: MatchModel = new MatchModel(),
  ) { }

  public async findHomeTeams(): Promise<ServiceResponse<ILeaderboard | string>> {
    const [allMatches] = await this.model.findHomeTeams();

    return { status: 'SUCCESSFUL', data: allMatches };
  }

  // public async findById(id: number): Promise<ServiceResponse<Iteam>> {
  //   const team = await this.teamModel.findById(id);
  //   if (!team) return { status: 'NOT_FOUND', data: { message: `team ${id} not found` } };
  //   return { status: 'SUCCESSFUL', data: team };
  // }
}
