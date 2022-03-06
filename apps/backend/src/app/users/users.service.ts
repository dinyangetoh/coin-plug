import {Injectable} from '@nestjs/common'
// import {User} from "./interfaces/user.interface";
import {Model} from 'mongoose'
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./schemas/user.schema";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  private readonly users: User[] = [
    {name: 'David Inyang-Etoh', age: 26},
    {name: 'James Brown', age: 16},
    {name: "Ekpe Ikot", age: 21}
  ];

  create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto)
    return createUser.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

}
