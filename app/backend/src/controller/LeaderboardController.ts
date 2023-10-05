import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoardService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LeaderboardController {
  constructor(
    private service: LeaderBoardService = new LeaderBoardService(),
  ) { }

  public async findAllHome(_req: Request, res: Response) {
    const serviceResponse = await this.service.findHomeTeams();
    console.log(' CONTROLLER', serviceResponse.data);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }

  public async findAllAway(_req: Request, res: Response) {
    const serviceResponse = await this.service.findAwayTeams();
    console.log(' CONTROLLER', serviceResponse.data);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }


  public async findAll(_req: Request, res: Response) {
    const serviceResponse = await this.service.findAll();
    console.log(' CONTROLLER', serviceResponse.data);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    res.status(200).json(serviceResponse.data);
  }
}

// ...
