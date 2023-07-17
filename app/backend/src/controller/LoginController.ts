import { Request, Response } from 'express';
import { LoginService } from '../services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class loginController {
  constructor(
    private loginService: LoginService = new LoginService(),
  ) { }

  public login = async (req: Request, res: Response): Promise <Response> => {
    const serviceResponse = await this.loginService.login(req.body);

    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
    }
    return res.status(200).json({ token: serviceResponse.data });
  };
}
