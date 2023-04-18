import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import UserSchema from "@modules/users/infra/database/schemas/Users"
import MariaDB from "@config/mariadb"

export default class UsersRepository implements IUsersRepository {
    private mariadb;

  constructor() {
    this.mariadb = MariaDB;
  }

  public async findByEmail(email: string): Promise<UserSchema | null> {
    const conn = await this.mariadb.getConnection();
    const user = await conn.query(`SELECT * FROM users WHERE email = "${email}";`);
    conn.end();
    return user;
  }

  public async findById(id: string): Promise<UserSchema | null> {
    const conn = await this.mariadb.getConnection();
    const user = await conn.query(`SELECT * FROM users WHERE id = "${id}";`);
    conn.end();
    return user;
  }

  public async create(data: ICreateUserDTO): Promise<UserSchema> {
    const conn = await this.mariadb.getConnection();
    const user = await this.mariadb.query("INSERT BLABL");
    conn.end();
    return user;
  }
}
