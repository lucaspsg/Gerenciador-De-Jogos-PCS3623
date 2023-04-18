import { hash } from 'bcryptjs';
import path from 'path';

import UserSchema from "@modules/users/infra/database/schemas/Users";
import UserRepository from "@modules/users/infra/database/repositories/Users";
import IUsersRepository from "@modules/users/repositories/IUsersRepository";


import AppError from '@shared/errors/AppError';


interface IRequest {
  username: string;
  email: string;
  password: string;
  profile_pic: string;
}

export default class CreateUserService {

  private userRepository : IUsersRepository = new UserRepository();

  public async execute({
   username, email, password, profile_pic, 
  }: IRequest): Promise<UserSchema> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) throw new AppError('User with same name, phone or cpf already exists');

    const hashedPassword = await hash(password, 8);

    const user = this.userRepository.create({
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
      profile_pic,
    });

    return user;
  }
}
