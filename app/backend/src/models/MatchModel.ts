import SequelizeMatches from '../database/models/SequelizeMatchesModel';
import { IMatch, IMatchModel } from '../Interfaces';

export default class MatchModel implements IMatchModel {
  private model = SequelizeMatches;

  public async findAll(): Promise<IMatch[]> {
    const allMatches = await this.model.findAll();

    return allMatches;
  }
}
