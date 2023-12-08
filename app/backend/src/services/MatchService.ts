import MatchModel from '../models/MatchModel';
import { ServiceResponse } from '../Interfaces';
import { IMatch } from '../Interfaces/IMatch';

export default class MatchService {
   constructor(
      private model: MatchModel = new MatchModel(),
   ) { }

   public async findAll(): Promise<ServiceResponse<IMatch[]>> {
      const allMatches = await this.model.findAll();

      return { status: 'SUCCESSFUL', data: allMatches };
   }

   public async findInProgress(inProgress: string | string[]): Promise<ServiceResponse<IMatch[]>> {
      const matches = await this.model.findInProgress(inProgress);
      if (!matches) return { status: 'NOT_FOUND', data: { message: 'request as not found' } };
      return { status: 'SUCCESSFUL', data: matches };
   }

   public async finishMatches(id: number): Promise<ServiceResponse<string>> {
      const data = await this.model.finishMatches(id);
      if (!data) return { status: 'NOT_FOUND', data: { message: 'request  not found' } };
      return { status: 'SUCCESSFUL', data: 'Finished' };
   }

   public async updateMatches(id: number, homeTeamGoals: number, awayTeamGoals: number):
      Promise<ServiceResponse<string>> {
      const data = await this.model.updateMatches(id, homeTeamGoals, awayTeamGoals);
      if (!data) return { status: 'NOT_FOUND', data: { message: 'request  not found' } };
      return { status: 'SUCCESSFUL', data: 'updated' };
   }

   public async setMatches(
      homeTeamId: number,
      awayTeamId: number,
      homeTeamGoals: number,
      awayTeamGoals: number,

   ):
      Promise<ServiceResponse<IMatch>> {
      const verifyId = await this.model.verifyTeamExistence(homeTeamId, awayTeamId);
      if (verifyId.message === 'team not found') {
         return { status: 'NOT_FOUND', data: { message: 'There is no team with such id!' } };
      }

      const data = await this.model.setMatches(homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals);
      if (!data) return { status: 'NOT_FOUND', data: { message: 'set data failed' } };
      return { status: 'SUCCESSFUL', data };
   }

}



