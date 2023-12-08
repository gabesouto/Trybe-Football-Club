import { compareSync, hash } from 'bcryptjs';
import { SignUpPayload } from '../types/signUpPayload';
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
    console.log('aaaaaaaaaaaaaaaaaaaaa', user?.email);

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

  public async signUp(signUpPayload: SignUpPayload): Promise<ServiceResponse<string>> {
    try {
      // Hash the user's password before saving it to the database
      const hashedPassword = await hash(signUpPayload.password, 10); // Adjust the saltRounds as needed

      // Update the SignUpPayload with the hashed password
      const signUpPayloadWithHashedPassword = { ...signUpPayload, password: hashedPassword };

      const user = await this.model.signUp(signUpPayloadWithHashedPassword);

      if (!user) {
        throw new Error('User Not Found ');
      }

      const { email } = user;
      const token = jwtUtil.enter({ email, password: hashedPassword });

      return {
        status: 'SUCCESSFUL',
        data: token,
      };
    } catch (error) {
      console.error('Error during signup:', error);

      return {
        status: 'INVALID_DATA',
        data: { message: 'An error occurred during signup' },
      };
    }
  }
}
