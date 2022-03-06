import {Injectable} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {
  }

  async validateUser(username: string, password: string): Promise<any> {
    try {
      const user = await this.usersService.findOne({username});
      if (user && await bcrypt.compare(password, user.password)) {
        const {password, ...rest} = user;
        return rest;
      }
      return null;
    } catch (err) {
      throw new Error(err)
    }
  }
}
