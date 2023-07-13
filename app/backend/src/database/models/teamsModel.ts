// src/models/BookModel.ts
import SequelizeTeams from './SequelizeTeamsModel';
import Iteam, { IteamModel } from '../../Interfaces';

export default class TeamsModel implements IteamModel {
  private model = SequelizeTeams;

  async findAll(): Promise<Iteam[]> {
    const dbData = await this.model.findAll();
    return dbData.map(({ id, teamName }) => (
      { id, teamName }
    ));
  }

  async findById(id: Iteam['id']): Promise<Iteam | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData == null) return null;

    const { teamName }: Iteam = dbData;
    return { id, teamName };
  }
}
