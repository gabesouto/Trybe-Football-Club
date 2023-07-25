import { compareSync } from 'bcryptjs';
import LoginModel from '../models/LoginModel';
import { loginPayload } from '../types/loginPayload';
import jwtUtil from '../utils/jwt.util';
import { ServiceResponse, ILoginModel } from '../Interfaces';

export default class LoginService {
  constructor(
    private model: ILoginModel = new LoginModel(),
  ) { }

  public async login(LoginPayload: loginPayload): Promise<ServiceResponse<string>> {
    const user = await this.model.login(LoginPayload);
    if (!user) {
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'All fields must be filled' },
      };
    }

    const { email, password } = user;
    const Token = jwtUtil.enter({ email, password });
    return { status: 'SUCCESSFUL', data: Token };
  }

  public async loginValidation(LoginPayload: loginPayload): Promise<ServiceResponse<string>> {
    const user = await this.model.login(LoginPayload);

    if (!user || !compareSync(LoginPayload.password, user.password)) {
      return {
        status: 'INVALID_DATA',
        data: { message: 'Invalid email or password' },
      };
    }

    return this.login(LoginPayload);
  }

  public async getRole(LoginPayload: loginPayload): Promise<ServiceResponse<string>> {
    const user = await this.model.login(LoginPayload);
    if (!user) {
      return {
        status: 'UNAUTHORIZED',
        data: { message: 'All fields must be filled' },
      };
    }

    return {
      status: 'SUCCESSFUL',
      data: user.role,
    };
  }
}
