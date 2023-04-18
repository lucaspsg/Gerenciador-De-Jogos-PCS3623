import FriendshipSchema from "@modules/friendships/infra/database/schemas/Friendships";
import FriendshipRepository from "@modules/friendships/infra/database/repositories/Friendships";
import IFriendshipsRepository from "@modules/friendships/repositories/IFriendshipsRepository";

interface IRequest {
    user_a_id: string;
    user_b_id: string;
}

export default class CreateFriendshipService {

    private friendshipRepository : IFriendshipsRepository = new FriendshipRepository();

    public async execute({
        user_a_id, user_b_id
    }: IRequest): Promise<FriendshipSchema> {


        const friendship = this.friendshipRepository.create({
            user_a_id, user_b_id,
        });

        return friendship;
    }
}
