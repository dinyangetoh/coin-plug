import {Injectable} from '@nestjs/common'
import {User} from "./interfaces/user.interface";

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {name: 'David Inyang-Etoh', age: 26},
    {name: 'James Brown', age: 16},
    {name: "Ekpe Ikot", age: 21}
  ];

  create(user: User) {
    this.users.push(user)
  }

  findAll(): User[] {
    return this.users;
  }

}
