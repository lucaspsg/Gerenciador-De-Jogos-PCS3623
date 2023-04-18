import { Request, Response } from 'express';

import CreateBoughtGameService from '@modules/bought_games/services/CreateBoughtGameService';
import FindBoughtByMeService from '@modules/bought_games/services/FindBoughtByMeService';

export default class GamesController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      conta_id,
      jogo_id,
      data_compra,
      tempo_jogado,
      curtida,
    } = req.body;

    const createGameService = new CreateBoughtGameService();

    const user = await createGameService.execute({
      conta_id,
      jogo_id,
      data_compra,
      tempo_jogado,
      curtida,
    });

    return res.status(201).json(user);
  }

  public async findMyGames(req: Request, res: Response): Promise<Response> {
    const {
      conta_id,
      jogo_id
    } = req.body;

    const findGame = new FindBoughtByMeService();

    const game = await findGame.execute({conta_id, jogo_id});

    return res.status(201).json(game);
  }
}
