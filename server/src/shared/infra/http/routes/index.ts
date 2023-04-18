import { Router } from 'express';

// Users
import usersRoutes from '@modules/users/infra/http/routes/users.routes';
import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';
import gamesRoutes from '@modules/games/infra/http/routes/games.routes';
import boughtGamesRoutes from '@modules/bought_games/infra/http/routes/bought_games.routes';

const routes = Router();

// Users
routes.use('', usersRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/games', gamesRoutes);
routes.use('/bought_games', boughtGamesRoutes);

export default routes;
