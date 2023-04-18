import BoughtGameSchema from '@modules/bought_games/infra/database/schemas/BoughtGames'
import BoughtGamesRepository from '@modules/bought_games/infra/database/repositories/BoughtGames'
import IBoughtGamesRepository from '../repositories/IBoughtGamesRepository';

export default class findDevelopedByMeService {

    private gamesRepository : IBoughtGamesRepository = new BoughtGamesRepository();

    public async execute(conta_id: string): Promise<BoughtGameSchema[]> {
        const game = await this.gamesRepository.findBoughtByMe(conta_id);

        return game;
    }
}
