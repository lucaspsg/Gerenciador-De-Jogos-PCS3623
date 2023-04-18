import IGamesRepository from '@modules/games/repositories/IGamesRepository';
import ICreateGameDTO from '@modules/games/dtos/ICreateGameDTO';

import GameSchema from '@modules/games/infra/database/schemas/Games';
import MariaDB from '@config/mariadb';

export default class GamesRepository implements IGamesRepository {
    private mariadb;

    constructor() {
      this.mariadb = MariaDB;
    }

    public async create(data: ICreateGameDTO): Promise<GameSchema> {
      const conn = await this.mariadb.getConnection();
      const game = await this.mariadb.query('INSERT BLABL', data);
      conn.end();
      return game;
    }

    public async findByName(name: string): Promise<GameSchema | null> {
      const conn = await this.mariadb.getConnection();
      const game = await conn.query(`SELECT * FROM Jogo WHERE "Nome do Jogo" LIKE "%${name}%";`);
      conn.end();
      return game;
    }
}
