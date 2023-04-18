import { Router } from 'express';

import FriendshipsController from '../controller/FriendshipsController';

const friendshipsRoutes = Router();

const friendshipsController = new FriendshipsController();

friendshipsRoutes.post('/register', friendshipsController.create);
friendshipsRoutes.get('/findById/:id', friendshipsController.findById);

export default friendshipsRoutes;
