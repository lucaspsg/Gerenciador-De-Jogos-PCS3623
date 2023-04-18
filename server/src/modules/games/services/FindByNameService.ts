import GameSchema from '@modules/games/infra/database/schemas/Games'
import GamesRepository from '@modules/games/infra/database/repositories/Games'
import IGamesRepository from '../repositories/IGamesRepository';

interface IRequest {
    nome_jogo: string;
}

export default class FindByNameService {

    private gamesRepository : IGamesRepository = new GamesRepository();

    public async execute({nome_jogo}: IRequest): Promise<GameSchema[]> {
        const game = await this.gamesRepository.findByName(nome_jogo);

        return game;
    }
}
