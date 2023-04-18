import { Request, Response } from 'express';

import CreateFriendshipService from '@modules/friendships/services/CreateFriendshipService';
import FindFriendshipByIdService from '@modules/friendships/services/FindByIdService';

export default class FriendshipController {
    public async create(req: Request, res: Response): Promise<Response> {
        const {
            user_a_id,
            user_b_id,
        } = req.body;

        const createFriendship = new CreateFriendshipService();

        const friendship = await createFriendship.execute({
            user_a_id,
            user_b_id,
        });

        return res.status(201).json(friendship);
    }

    public async findById(req: Request, res: Response): Promise<Response> {
        const {
            user_a_id,
            user_b_id,
        } = req.body;

        const findFriendship = new FindFriendshipByIdService();

        const friendship = await findFriendship.execute({
            user_b_id,
            user_a_id,
        });

        return res.status(201).json(friendship);
    }

}
