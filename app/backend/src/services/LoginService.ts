import { compareSync } from 'bcryptjs';
import LoginModel from '../database/models/LoginModel';
import { loginPayload } from '../types/loginPayload';
import jwtUtil from '../utils copy/jwt.util';
import { ServiceResponse, ILoginModel } from '../Interfaces';

export default class LoginService {
  constructor(
    private loginModel: ILoginModel = new LoginModel(),
  ) { }

  public async login(LoginPayload: loginPayload): Promise<ServiceResponse<string>> {
    if (!LoginPayload.email || !LoginPayload.password) {
      return { status: 'UNAUTHORIZED', data: { message: 'All fields must be filled' } };
    }
    const user = await this.loginModel.login(LoginPayload);
    if (!user || !compareSync(LoginPayload.password, user.password)) {
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'All fields must be filled' },
      };
    }
    const { email, password } = user;
    const Token = jwtUtil.enter({ email, password });
    return { status: 'SUCCESSFUL', data: Token };
  }
}
