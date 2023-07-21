import { Request, Response } from 'express';
import MatchService from '../services/MatchService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchController {
  constructor(
    private matchService: MatchService = new MatchService(),
  ) { }

  public async findMatches(req: Request, res: Response) {
    const { inProgress } = req.query;

    if (inProgress) {
      return this.findInProgress(req, res);
    }
    return this.findAll(req, res);
  }

  public async findAll(_req: Request, res: Response) {
    const serviceResponse = await this.matchService.findAll();

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }

  public async findInProgress(req: Request, res: Response) {
    const inProgress = req.query.inProgress as string;

    const serviceResponse = await this.matchService.findInProgress(inProgress);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    res.status(200).json(serviceResponse.data);
  }

  public async finishMatches(req: Request, res: Response) {
    const id = req.params.id as unknown as number;

    const serviceResponse = await this.matchService.finishMatches(id);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    res.status(200).json(serviceResponse.data);
  }

  public async updateMatches(req: Request, res: Response) {
    const id = req.params.id as unknown as number;
    // "homeTeamGoals": 3,
    // "awayTeamGoals": 1
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const serviceResponse = await this.matchService.updateMatches(id, homeTeamGoals, awayTeamGoals);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    res.status(200).json(serviceResponse.data);
  }

  public async setMatches(req: Request, res: Response) {
    const {
      homeTeamGoals,
      awayTeamGoals,
      homeTeamId,
      awayTeamId,
    } = req.body;

    const serviceResponse = await this.matchService.setMatches(
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
    );

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }

    res.status(201).json(serviceResponse.data);
  }
}
// "homeTeamId": 16, // O valor deve ser o id do time
// "awayTeamId": 8, // O valor deve ser o id do time
// "homeTeamGoals": 2,
// "awayTeamGoals": 2,
