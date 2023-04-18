import BoughtGameSchema from '@modules/bought_games/infra/database/schemas/BoughtGames';
import ICreateBoughtGameDTO from '../dtos/ICreateBoughtGameDTO';
import IFindMyGamesDTO from '../dtos/IFindMyGamesDTO';

interface IUsersRepository {
  findBoughtByMe(data: IFindMyGamesDTO): Promise<BoughtGameSchema[]>;
  create(data: ICreateBoughtGameDTO): Promise<void>;
}

export default IUsersRepository;
