import { DatabaseModule } from '@database/database.module';
import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UserController, UsersController],
  providers: [UserService, UsersService],
  imports: [DatabaseModule],
  exports: [UserService],
})
export class UsersModule {}
