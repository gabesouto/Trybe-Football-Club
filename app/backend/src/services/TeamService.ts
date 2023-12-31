import TeamModel from '../models/TeamModel';
import Iteam, { IteamModel, ServiceResponse } from '../Interfaces';

export default class TeamService {
  constructor(
    private teamModel: IteamModel = new TeamModel(),
  ) { }

  public async findAll(): Promise<ServiceResponse<Iteam[]>> {
    const allTeams = await this.teamModel.findAll();
    console.log('SERVICE', allTeams);

    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async findById(id: number): Promise<ServiceResponse<Iteam>> {
    const team = await this.teamModel.findById(id);
    if (!team) return { status: 'NOT_FOUND', data: { message: `team ${id} not found` } };
    return { status: 'SUCCESSFUL', data: team };
  }
}
