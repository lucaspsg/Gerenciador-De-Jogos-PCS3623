import { v4 as uuidv4 } from 'uuid';

import IGamesRepository from '@modules/games/repositories/IGamesRepository';
import ICreateGameDTO from '@modules/games/dtos/ICreateGameDTO';

import GameSchema from '@modules/games/infra/database/schemas/Games';
import MariaDB from '@config/mariadb';

export default class GamesRepository implements IGamesRepository {
    private mariadb;

    constructor() {
      this.mariadb = MariaDB;
    }

    public async create(data: ICreateGameDTO): Promise<void> {
      const {
        nome_jogo, preco, tamanho, dev_id, data_lanc, categoria, descricao, capa,
      } = data;
      const id = uuidv4();
      const conn = await this.mariadb.getConnection();
      await this.mariadb.query(
        `INSERT INTO jogo (game_id, nome_jogo, preco, tamanho, dev_id, data_lanc, categoria, quant_downloads, descricao, capa)
         VALUES ('${id}', '${nome_jogo}', ${preco}, ${tamanho}, '${dev_id}', '${data_lanc}', '${categoria}', 0, '${descricao}', '${capa}');`,
      );
      conn.end();
    }

    public async findByName(name: string): Promise<GameSchema[]> {
      const conn = await this.mariadb.getConnection();
      const game = await conn.query(`SELECT * FROM jogo WHERE nome_jogo LIKE "%${name}%";`);
      conn.end();
      console.log(name);
      return game;
    }

    public async findDevelopedByMe(dev_id: string): Promise<GameSchema[]> {
      const conn = await this.mariadb.getConnection();
      const game = await conn.query(`SELECT * FROM jogo WHERE dev_id = "${dev_id}";`);
      conn.end();
      return game;
    }

}
