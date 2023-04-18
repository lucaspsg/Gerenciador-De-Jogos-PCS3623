import { Request, Response } from 'express';

import CreateGameService from '@modules/games/services/CreateGameService';
import FindByNameService from '@modules/games/services/FindByNameService';

export default class GamesController {
    public async create(req: Request, res: Response): Promise<Response> {
        const {
          nome_jogo,
          preco,
          tamanho,
          dev_id,
          data_lanc,
          categoria,
          descricao,
          capa,
        } = req.body;

        const createGameService = new CreateGameService();

        const user = await createGameService.execute({
          nome_jogo,
          preco,
          tamanho,
          dev_id,
          data_lanc,
          categoria,
          descricao,
          capa,
        });

        return res.status(201).json(user);
    }

    public async findByName(req: Request, res: Response): Promise<Response> {
        const {
            nome_jogo
        } = req.params;

        const findGame = new FindByNameService();

        const game = await findGame.execute({
            nome_jogo,
        });

        return res.status(201).json(game);
    }
}
