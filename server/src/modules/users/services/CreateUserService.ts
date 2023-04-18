import { hash } from 'bcryptjs';

import UserRepository from '@modules/users/infra/database/repositories/Users';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppError';

interface IRequest {
    nome_conta: string;
    email: string;
    senha: string;
    desenvolvedor: boolean;
    imagem: string;
}

export default class CreateUserService {
    private userRepository : IUsersRepository = new UserRepository();

    public async execute({
      nome_conta, email, senha, desenvolvedor, imagem,
    }: IRequest): Promise<void> {
      const userAlreadyExists = (await this.userRepository.findByEmail(email))[0];

      if (userAlreadyExists) throw new AppError('User with same name, phone or cpf already exists');

      const hashedPassword = await hash(senha, 8);

      await this.userRepository.create({
        nome_conta,
        email: email.toLowerCase(),
        senha: hashedPassword,
        desenvolvedor,
        imagem,
      });
    }
}
