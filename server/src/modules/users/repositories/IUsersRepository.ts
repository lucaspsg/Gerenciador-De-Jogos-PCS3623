import UserSchema from '@modules/users/infra/database/schemas/Users';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

interface IUsersRepository {
  findByEmail(email: string): Promise<UserSchema[]>;
  findById(id: string): Promise<UserSchema | null>;
  findByUsername(username: string): Promise<UserSchema | null>;
  create(data: ICreateUserDTO): Promise<void>;
}

export default IUsersRepository;
