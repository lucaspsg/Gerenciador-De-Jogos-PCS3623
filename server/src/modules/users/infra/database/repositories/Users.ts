import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import UserSchema from '@modules/users/infra/database/schemas/Users';
import MariaDB from '@config/mariadb';

export default class UsersRepository implements IUsersRepository {
    private mariadb;

    constructor() {
      this.mariadb = MariaDB;
    }

    public async findByEmail(email: string): Promise<UserSchema[]> {
      const conn = await this.mariadb.getConnection();
      const user = await conn.query(`SELECT * FROM conta WHERE email = "${email}";`);
      conn.end();
      return user;
    }

    public async findById(id: string): Promise<UserSchema | null> {
      const conn = await this.mariadb.getConnection();
      const user = await conn.query(`SELECT * FROM conta WHERE id = "${id}";`);
      conn.end();
      return user;
    }

    public async findByUsername(username: string): Promise<UserSchema | null> {
      const conn = await this.mariadb.getConnection();
      const user = await conn.query(`SELECT * FROM conta WHERE username LIKE "%${username}%";`);
      conn.end();
      return user;
    }

    public async create(data: ICreateUserDTO): Promise<void> {
      const {
        email, username, password, isDeveloper, profile_pic,
      } = data;
      const id = '1012';
      const conn = await this.mariadb.getConnection();
      await this.mariadb.query(
        `INSERT INTO conta (conta_id, nome_conta, email, senha, carteira, desenvolvedor, imagem_perfil) VALUES ('${id}', '${username}', '${email}', '${password}', 0, ${isDeveloper}, '${profile_pic}');`,
      );
      conn.end();
    }
}
