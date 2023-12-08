import {
  leaderboardQueryAway,
  leaderboardQueryHome,
  leaderboardQueryOverall } from '../utils/leaderBoardUtils';
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
      ?.query(leaderboardQueryHome);

    return homeTeamLeaderBoard as unknown as ILeaderboard[];
  }

  public async findAwayTeams(): Promise<ILeaderboard[]> {
    const awayTeamLeaderBoard = await this.model.sequelize
      ?.query(leaderboardQueryAway);

    return awayTeamLeaderBoard as unknown as ILeaderboard[];
  }

  public async findAllLeaderboard(): Promise<ILeaderboard[]> {
    const Overall = await this.model.sequelize
      ?.query(leaderboardQueryOverall);

    return Overall as unknown as ILeaderboard[];
  }
}
