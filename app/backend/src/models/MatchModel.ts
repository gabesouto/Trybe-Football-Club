import SequelizeTeams from '../database/models/SequelizeTeamsModel';
import SequelizeMatches from '../database/models/SequelizeMatchesModel';
import { IMatch, IMatchModel } from '../Interfaces';

export default class MatchModel implements IMatchModel {
  private model = SequelizeMatches;

  public async findAll(): Promise<IMatch[]> {
    const allMatches = await this.model.findAll({
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
      include: [
        { model: SequelizeTeams, association: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: SequelizeTeams, association: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });

    return allMatches;
  }
}
