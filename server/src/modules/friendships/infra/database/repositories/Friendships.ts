import IFriendshipsRepository from '@modules/friendships/repositories/IFriendshipsRepository';
import ICreateFriendshipDTO from '@modules/friendships/dtos/ICreateFriendshipDTO';
import IFindFriendshipDTO from '@modules/friendships/dtos/IFindFriendshipDTO';

import FriendshipSchema from "@modules/friendships/infra/database/schemas/Friendships"
import MariaDB from "@config/mariadb"

export default class FriendshipsRepository implements IFriendshipsRepository {
    private mariadb;

  constructor() {
    this.mariadb = MariaDB;
  }

  public async findById(data: IFindFriendshipDTO): Promise<FriendshipSchema | null> {
    const {user_a_id, user_b_id} = data;
    const conn = await this.mariadb.getConnection();
    const friendship = await conn.query(
            `SELECT * FROM Amizade WHERE "ID de Usuário A" = "${user_a_id}" AND "ID de Usuário B" = ${user_b_id};`
        );
    conn.end();
    return friendship;
  }

  public async create(data: ICreateFriendshipDTO): Promise<FriendshipSchema> {
    const conn = await this.mariadb.getConnection();
    const friendship = await this.mariadb.query("INSERT BLABL");
    conn.end();
    return friendship;
  }
}
