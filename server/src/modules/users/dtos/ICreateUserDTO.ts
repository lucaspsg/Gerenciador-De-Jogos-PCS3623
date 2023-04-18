interface ICreateUserDTO {
  username: string;
  email: string;
  password: string;
  isDeveloper: boolean;
  profile_pic: string;
}

export default ICreateUserDTO;
