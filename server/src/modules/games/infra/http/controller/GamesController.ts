import { Request, Response } from 'express';

import CreateGameService from '@modules/games/services/CreateGameService';
import FindByNameService from '@modules/games/services/FindByNameService';

export default class GamesController {
    public async create(req: Request, res: Response): Promise<Response> {
        const {
          name,
          price,
          size,
          launch_date,
          category,
          image,
        } = req.body;

        const createGameService = new CreateGameService();

        const user = await createGameService.execute({
          name,
          price,
          size,
          launch_date,
          category,
          image,
        });

        return res.status(201).json(user);
    }

    public async findByName(req: Request, res: Response): Promise<Response> {
        const {
            name
        } = req.params;

        const findGame = new FindByNameService();

        const game = await findGame.execute({
            name,
        });

        return res.status(201).json(game);
    }
}
