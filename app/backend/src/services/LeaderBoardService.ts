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
}
