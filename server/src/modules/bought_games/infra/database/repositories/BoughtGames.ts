import IBoughtGamesRepository from '@modules/bought_games/repositories/IBoughtGamesRepository';
import ICreateBoughtGameDTO from '@modules/bought_games/dtos/ICreateBoughtGameDTO';


import BoughtGameSchema from '@modules/bought_games/infra/database/schemas/BoughtGames';
import MariaDB from '@config/mariadb';

export default class BoughtGamesRepository implements IBoughtGamesRepository {
    private mariadb;

    constructor() {
      this.mariadb = MariaDB;
    }

    public async create(data: ICreateBoughtGameDTO): Promise<void> {
      const {
        conta_id, jogo_id, data_compra, tempo_jogado, curtida,
      } = data;
      const conn = await this.mariadb.getConnection();
      await this.mariadb.query(
        `INSERT INTO jogo_comprado (conta_id, jogo_id, data_compra, tempo_jogado, curtida)
         VALUES ('${conta_id}', '${jogo_id}', ${data_compra}, ${tempo_jogado}, '${curtida}');`,
      );
      conn.end();
    }


    public async findBoughtByMe(conta_id: string): Promise<BoughtGameSchema[]> {
      const conn = await this.mariadb.getConnection();
      const game = await conn.query(`SELECT * FROM jogo_comprado WHERE conta_id = "${conta_id}";`);
      conn.end();
      return game;
    }

}
