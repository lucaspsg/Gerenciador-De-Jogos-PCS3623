import AppError from '@shared/errors/AppError';

import UserSchema from '@modules/users/infra/database/schemas/Users'
import UserRepository from '@modules/users/infra/database/repositories/Users'
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
    id: string;
}

export default class FindByIdService{

    private userRepository : IUsersRepository = new UserRepository();

    public async execute({id}: IRequest): Promise<UserSchema | null> {
        const user = await this.userRepository.findById(id);

        if (!user) throw new AppError('User with the provided id does not exist');

        return user;
    }
}
