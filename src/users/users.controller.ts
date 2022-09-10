import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('')
  getUsers(): any {
    return this.userService.getAll();
  }

  @Get(':id')
  getOneUsers(@Param('id', new ParseIntPipe()) id: number): any {
    return this.userService.findOne(id);
  }

  @Post('')
  createUser(@Body() req): Promise<any> {
    return this.userService.create(req);
  }

  @Patch(':id')
  modifyUser(@Param('id', new ParseIntPipe()) id: number, @Body() req: any) {
    return this.userService.update(id, req);
  }

  @Delete(':id')
  deleteUser(@Param('id', new ParseIntPipe()) id: number) {
    return this.userService.delete(id);
  }
}
