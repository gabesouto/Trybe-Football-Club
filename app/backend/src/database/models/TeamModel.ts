import Iteam, { IteamModel } from '../../Interfaces';
import SequelizeTeams from './SequelizeTeamsModel';

export default class TeamModel implements IteamModel {
  private model = SequelizeTeams;

  public async findAll(): Promise<Iteam[]> {
    const allTeams = await this.model.findAll();
    console.log(typeof allTeams);

    return allTeams;
  }

  async findById(id: Iteam['id']): Promise<Iteam | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData == null) return null;

    return dbData;
  }
}
