import { Router } from 'express';

import UsersController from '../controller/UsersController';

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post('/register', usersController.create);
usersRoutes.get('/findById/:id', usersController.findById);
usersRoutes.get('/findByUsername/:username', usersController.findByUsername);

export default usersRoutes;
