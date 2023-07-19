import { loginPayload } from '../types/loginPayload';
import { ILoginModel, IUser } from '../Interfaces';
import SequelizeUsers from '../database/models/SequelizeUsersModel';

export default class LoginModel implements ILoginModel {
  private model = SequelizeUsers;

  public async login(LoginPayload: loginPayload): Promise<IUser | null> {
    const user = await this.model.findOne({
      where: { email: LoginPayload.email,
      },
    });

    return user;
  }
}
