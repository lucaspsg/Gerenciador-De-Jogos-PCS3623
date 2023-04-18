import { Router } from 'express';

import GamesController from '../controller/GamesController';

const gamesRoutes = Router();

const gamesController = new GamesController();

gamesRoutes.post('/create', gamesController.create);
gamesRoutes.get('/findByMame/:name', gamesController.findByName);

export default gamesRoutes;
