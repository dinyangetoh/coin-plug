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

  create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userModel(createUserDto)
    return createUser.save();
  }

  async findOne(filter: Partial<User>): Promise<User> {
    return this.userModel.findOne(filter).lean();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

}
