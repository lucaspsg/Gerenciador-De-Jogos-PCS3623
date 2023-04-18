import ICreateGameDTO from '../dtos/ICreateGameDTO';
import GameSchema from '@modules/games/infra/database/schemas/Games'

interface IUsersRepository {
  findByName(name: string): Promise<GameSchema | null>;
  create(data: ICreateGameDTO): Promise<GameSchema>;
}

export default IUsersRepository;
