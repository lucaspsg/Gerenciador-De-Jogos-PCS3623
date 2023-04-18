import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';

import AppError from '@shared/errors/AppError';
import authConfig from '@config/auth';

import UserSchema from '@modules/users/infra/database/schemas/Users';
import UserRepository from '@modules/users/infra/database/repositories/Users';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
    email: string;
    senha: string;
}

export default class AuthenticateUserService {
    private userRepository : IUsersRepository = new UserRepository();

    public async execute({ email, senha}: IRequest): Promise<{ user: UserSchema, token: string }> {
      const user = (await this.userRepository.findByEmail(email))[0];

      if (!user) {
        throw new AppError('Incorrect email/password combination', 401);
      }

      const passwordMatched = await compare(senha, user.senha);

      if (!passwordMatched) {
        throw new AppError('Incorrect email/password combination', 401);
      }

      const { secret, expiresIn } = authConfig.jwt;

      const token = sign({}, secret, {
        subject: user.conta_id,
        expiresIn,
      });

      return {
        user,
        token,
      };
    }
}
