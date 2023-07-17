import { Request, Response } from 'express';
import { LoginService } from '../services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class loginController {
  constructor(
    private loginService: LoginService = new LoginService(),
  ) { }

  public login = async (req: Request, res: Response): Promise <Response> => {
    const serviceResponse = await this.loginService.loginValidation(req.body);

    if (serviceResponse.status === 'INVALID_DATA') {
      return res.status(401).json(serviceResponse.data);
    }
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    }

    return res.status(mapStatusHTTP(serviceResponse.status)).json({ token: serviceResponse.data });
  };
}
