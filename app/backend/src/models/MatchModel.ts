import leaderboardQuery from '../utils/leaderBoardUtils';
import SequelizeTeams from '../database/models/SequelizeTeamsModel';
import SequelizeMatches from '../database/models/SequelizeMatchesModel';
import { ILeaderboard, IMatch, IMatchModel } from '../Interfaces';

export default class MatchModel implements IMatchModel {
  private model = SequelizeMatches;

  public async findAll(): Promise<IMatch[]> {
    const allMatches = await this.model.findAll({
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
      include: [
        { model: SequelizeTeams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: SequelizeTeams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });

    return allMatches;
  }

  public async findInProgress(inProgress: string | string[]): Promise<IMatch[]> {
    const inProgressValue = inProgress === 'true';
    const inProgressMatches = await this.model.findAll({
      attributes: { exclude: ['home_team_id', 'away_team_id'] },
      include: [
        { model: SequelizeTeams, association: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: SequelizeTeams, association: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
      where: { inProgress: inProgressValue },
    });

    return inProgressMatches;
  }

  public async finishMatches(id: number): Promise<boolean> {
    const data = await this.model.update(
      {
        inProgress: false,
      },
      {
        where: { id },
      },
    );

    if (data) return true;
    return false;
  }

  public async updateMatches(id: number, homeTeamGoals: number, awayTeamGoals: number):
  Promise<boolean> {
    const data = await this.model.update(
      {
        homeTeamGoals,
        awayTeamGoals,
      },
      {
        where: { id },
      },
    );

    if (data) return true;
    return false;
  }

  public async setMatches(
    homeTeamId: number,
    awayTeamId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ):
    Promise<IMatch> {
    const data = await this.model.create({
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });

    return data;
  }

  public async verifyTeamExistence(homeTeamId: number, awayTeamId: number)
    :Promise<{ message : string }> {
    const verifyHomeTeam = await this.model.findByPk(homeTeamId);
    console.log(verifyHomeTeam);

    const verifyAwayTeam = await this.model.findByPk(awayTeamId);
    if (verifyAwayTeam && verifyHomeTeam) {
      return { message: 'team found' };
    }
    return { message: 'team not found' };
  }

  public async findHomeTeams(): Promise <ILeaderboard[]> {
    const homeTeamLeaderBoard = await this.model.sequelize
      ?.query(leaderboardQuery);

    return homeTeamLeaderBoard as unknown as ILeaderboard[];
  }
}
