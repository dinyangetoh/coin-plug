import {Injectable} from "@nestjs/common";
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcrypt'
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {
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

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user._id
    }

    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
