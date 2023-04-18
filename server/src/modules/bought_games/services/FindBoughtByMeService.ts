import BoughtGameSchema from '@modules/bought_games/infra/database/schemas/BoughtGames'
import BoughtGamesRepository from '@modules/bought_games/infra/database/repositories/BoughtGames'
import IBoughtGamesRepository from '../repositories/IBoughtGamesRepository';

interface IRequest{
  conta_id: string;
  jogo_id: string;
}
export default class findDevelopedByMeService {

    private gamesRepository : IBoughtGamesRepository = new BoughtGamesRepository();

    public async execute(data: IRequest): Promise<BoughtGameSchema[]> {
        const game = await this.gamesRepository.findBoughtByMe(data);

        return game;
    }
}
