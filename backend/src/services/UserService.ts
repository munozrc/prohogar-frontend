import ISafeData from "../typings/ISafeData";
import jwt from "jsonwebtoken";

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
    role: "client",
  },
  {
    id: "1",
    email: "yiner@gmail.com",
    password: "12345",
    role: "professional",
  },
];

class UserService {
  constructor(
    public readonly email: string,
    public readonly password: string,
    public readonly role: string
  ) {}

  public async login(): Promise<AuthReturnData> {
    try {
      const userFromDb = users.find((user) => user.email === this.email);
      if (userFromDb) {
        // const isPasswordEqual = (userFromDb.password === this.password);
        if (userFromDb.password === this.password) {
          const data = this.prepareData(
            userFromDb.id,
            userFromDb.email,
            userFromDb.role
          );
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

  public async register(): Promise<AuthReturnData> {
    try {
      const userFromDb = users.find((user) => user.email === this.email);
      if (!userFromDb) {
        // const hashedPassword = await bcrypt.hash(this.password, 10);
        // const createdUser = await db.User.create({
        //     username: this.username,
        //     password: hashedPassword,
        //     bio: this.bio,
        // });

        const newUser = {
          id: "2",
          email: this.email,
          password: this.password,
          role: this.role,
        };

        users.push(newUser);

        const data = this.prepareData(newUser.id, newUser.email, newUser.role);
        return {
          message: "Successfully registered",
          success: true,
          data: data,
        };
      } else {
        return { message: "User already exists", success: false };
      }
    } catch (e) {
      console.log(e);
      return { message: "An error occured", success: false };
    }
  }

  private prepareData(id: string, email: string, role: string): ISafeData {
    const token = jwt.sign({ id }, "cambiarClave", { expiresIn: "30d" });
    const data: ISafeData = {
      user: {
        id,
        email,
        role,
      },
      jwt: token,
    };
    return data;
  }
}

export default UserService;
