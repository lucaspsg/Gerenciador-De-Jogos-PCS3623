import AppError from '@shared/errors/AppError';

import FriendshipSchema from '@modules/friendships/infra/database/schemas/Friendships'
import FriendshipRepository from '@modules/friendships/infra/database/repositories/Friendships'
import IFriendshipsRepository from '../repositories/IFriendshipsRepository';

interface IRequest {
    user_a_id: string;
    user_b_id: string;
}

export default class FindByIdService{

    private friendshipRepository : IFriendshipsRepository = new FriendshipRepository();

    public async execute({user_a_id, user_b_id}: IRequest): Promise<FriendshipSchema | null> {
        const friendship = await this.friendshipRepository.findById({user_a_id, user_b_id});

        if (!friendship) throw new AppError('Friendship with the provided ids does not exist');

        return friendship;
    }
}
