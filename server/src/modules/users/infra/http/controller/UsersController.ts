import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';
import FindByIdService from '@modules/users/services/FindByIdService';

export default class UserController {
    public async create(req: Request, res: Response): Promise<Response> {
        const {
            username,
            email,
            password,
            profile_pic,
        } = req.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({
            username,
            email,
            password,
            profile_pic,
        });

        user.password = '###';

        return res.status(201).json(user);
    }

    public async find(req: Request, res: Response): Promise<Response> {
        const {
            id
        } = req.params;

        const findUser = new FindByIdService();

        const user = await findUser.execute({
            id,
        });

        console.log(user);
        return res.status(201).json(user);
    }
}
