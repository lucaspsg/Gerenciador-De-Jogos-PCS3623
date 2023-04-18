import { Request, Response } from 'express';

import CreateUserService from '@modules/users/services/CreateUserService';
import FindByIdService from '@modules/users/services/FindByIdService';
import FindByUsernameService from '@modules/users/services/FindByUsernameService';

export default class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
      nome_conta,
      email,
      senha,
      desenvolvedor,
      imagem,
    } = req.body;

    const createUser = new CreateUserService();

    await createUser.execute({
      nome_conta,
      email,
      senha,
      desenvolvedor,
      imagem,
    });
    return res.status(201).json();
  }

  public async findByEmail(req: Request, res: Response): Promise<Response> {
    const {
      id,
    } = req.params;

    const findUser = new FindByIdService();

    const user = await findUser.execute({
      id,
    });

    return res.status(201).json(user);
  }

  public async findByUsername(req: Request, res: Response): Promise<Response> {
    const {
      username,
    } = req.params;

    const findUser = new FindByUsernameService();

    const user = await findUser.execute({
      username,
    });

    console.log(user);
    return res.status(201).json(user);
  }
}
