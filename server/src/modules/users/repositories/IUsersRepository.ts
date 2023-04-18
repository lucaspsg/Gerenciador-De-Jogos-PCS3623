import ICreateUserDTO from '../dtos/ICreateUserDTO';
import UserSchema from '@modules/users/infra/database/schemas/Users'

interface IUsersRepository {
  findByEmail(email: string): Promise<UserSchema | null>;
  findById(id: string): Promise<UserSchema | null>;
  create(data: ICreateUserDTO): Promise<UserSchema>;
}

export default IUsersRepository;
