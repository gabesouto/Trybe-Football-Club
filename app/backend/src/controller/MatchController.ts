import { Request, Response } from 'express';
import MatchService from '../services/MatchService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchController {
  constructor(
    private matchService: MatchService = new MatchService(),
  ) { }

  public async findMatches(req: Request, res: Response) {
    const { inProgress } = req.query;

    if (inProgress === 'true') {
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
}
