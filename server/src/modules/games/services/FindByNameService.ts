import GameSchema from '@modules/games/infra/database/schemas/Games'
import GamesRepository from '@modules/games/infra/database/repositories/Games'
import IGamesRepository from '../repositories/IGamesRepository';

interface IRequest {
    name: string;
}

export default class FindByNameService {

    private gamesRepository : IGamesRepository = new GamesRepository();

    public async execute({name}: IRequest): Promise<GameSchema | null> {
        const user = await this.gamesRepository.findByName(name);

        return user;
    }
}
