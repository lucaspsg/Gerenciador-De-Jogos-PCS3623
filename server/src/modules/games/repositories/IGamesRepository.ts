import GameSchema from '@modules/games/infra/database/schemas/Games';
import ICreateGameDTO from '../dtos/ICreateGameDTO';

interface IUsersRepository {
  findByName(nome_jogo: string): Promise<GameSchema[]>;
  create(data: ICreateGameDTO): Promise<void>;
}

export default IUsersRepository;
