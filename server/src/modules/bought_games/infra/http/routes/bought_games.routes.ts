import { Router } from 'express';

import BoughtGamesController from '../controller/BoughtGamesController';

const boughtGamesRoutes = Router();

const boughtGamesController = new BoughtGamesController();

boughtGamesRoutes.post('/create', boughtGamesController.create);
boughtGamesRoutes.get('/findMyGames', boughtGamesController.findMyGames);

export default boughtGamesRoutes;
