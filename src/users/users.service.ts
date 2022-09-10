import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  getAll(): any {
    return this.userModel.find().exec();
  }

  create(createCatDto: any): Promise<any> {
    const createdCat = new this.userModel(createCatDto);
    return createdCat.save();
  }

  findOne(id: number) {
    return this.userModel.findOne({ id }).exec();
  }

  update(id: number, req) {
    return this.userModel.updateOne({ id }, req).exec();
  }

  delete(id: number) {
    return this.userModel.deleteOne({ id }).exec();
  }
}
