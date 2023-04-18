import BoughtGameSchema from '@modules/bought_games/infra/database/schemas/BoughtGames';
import ICreateBoughtGameDTO from '../dtos/ICreateBoughtGameDTO';

interface IUsersRepository {
  findBoughtByMe(conta_id: string): Promise<BoughtGameSchema[]>;
  create(data: ICreateBoughtGameDTO): Promise<void>;
}

export default IUsersRepository;
