import ISafeData from "../typings/ISafeData";

interface AuthReturnData {
  message: string;
  success: boolean;
  data?: object;
}

let users = [
  {
    id: "0",
    email: "carlos@gmail.com",
    password: "12345",
  },
  {
    id: "1",
    email: "yiner@gmail.com",
    password: "12345",
  },
];

class UserService {
  constructor(
    public readonly email: string,
    public readonly password: string
  ) {}

  public async login(): Promise<AuthReturnData> {
    try {
      const userFromDb = await users.find((user) => user.email === this.email);
      if (userFromDb) {
        // const isPasswordEqual = (userFromDb.password === this.password);
        if (userFromDb.password === this.password) {
          const data = this.prepareData(userFromDb.id, userFromDb.password);
          return {
            message: "Successfully logged in",
            success: true,
            data: data,
          };
        } else {
          return { message: "invalid email or password", success: false };
        }
      } else {
        return { message: "invalid email or password", success: false };
      }
    } catch (error) {
      console.log(error);
      return { message: "An error occured", success: false };
    }
  }

  private prepareData(id: string, email: string): ISafeData {
    const token = "asjkdhajksd";
    const data: ISafeData = {
      user: {
        id,
        email,
      },
      jwt: token,
    };
    return data;
  }
}

export default UserService;
