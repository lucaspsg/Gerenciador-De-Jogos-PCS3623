import UserSchema from '@modules/users/infra/database/schemas/Users'
import UserRepository from '@modules/users/infra/database/repositories/Users'
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
    nome_conta: string;
}

export default class FindByUsernameService {

    private userRepository : IUsersRepository = new UserRepository();

    public async execute({nome_conta}: IRequest): Promise<UserSchema | null> {
        const user = await this.userRepository.findByUsername(nome_conta);

        return user;
    }
}
