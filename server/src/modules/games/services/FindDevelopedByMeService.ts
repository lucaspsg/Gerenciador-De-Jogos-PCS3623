import GameSchema from '@modules/games/infra/database/schemas/Games'
import GamesRepository from '@modules/games/infra/database/repositories/Games'
import IGamesRepository from '../repositories/IGamesRepository';

export default class findDevelopedByMeService {

    private gamesRepository : IGamesRepository = new GamesRepository();

    public async execute(dev_id: string): Promise<GameSchema[]> {
        const game = await this.gamesRepository.findDevelopedByMe(dev_id);

        return game;
    }
}
