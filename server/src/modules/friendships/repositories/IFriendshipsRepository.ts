import ICreateFriendshipDTO from '../dtos/ICreateFriendshipDTO';
import IFindFriendshipDTO from "@modules/friendships/dtos/IFindFriendshipDTO"
import FriendshipSchema from '@modules/friendships/infra/database/schemas/Friendships'

interface IFriendshipsRepository {
  create(data: ICreateFriendshipDTO): Promise<FriendshipSchema>;
  findById(data: IFindFriendshipDTO): Promise<FriendshipSchema | null>;
}

export default IFriendshipsRepository;
